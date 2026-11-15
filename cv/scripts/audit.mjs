import { execFile } from 'node:child_process'
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { promisify } from 'node:util'
import { LABELS } from '../theme/labels.mjs'
import { HTML_DIR, PDF_DIR, TARGETS, resumePath } from './build.mjs'

const run = promisify(execFile)

/**
 * Lo que de verdad ve un ATS.
 *
 * No se audita el HTML ni el `resume.json`: ninguno de los dos llega al otro
 * lado. Llega el PDF, y de él un extractor de texto saca lo que puede. Así que
 * esto imprime el PDF a texto con `pdftotext` —sin `-layout`, que es el modo
 * tonto y por tanto el que marca el suelo— y comprueba que ahí dentro sigue
 * estando todo lo que se escribió.
 *
 * Una línea que no aparezca aquí no existe para quien criba candidatos, por
 * bonita que se vea en pantalla.
 */

/**
 * Se compara contenido, no forma.
 *
 * Los saltos de línea se colapsan a espacios, y los espacios alrededor de una
 * raya se quitan: el renglón puede partirse justo ahí, y al volver a unirlo
 * aparece un espacio que en el original no estaba. Eso da igual —ningún ATS
 * busca por el espacio que rodea a una raya— y no debe contarse como fallo.
 *
 * Lo que sí cuenta, y por eso no se normaliza, es un carácter perdido: cuando
 * la línea se parte en un guión, `pdftotext` lo borra y "end-to-end" se
 * convierte en "end-toend". Ahí la palabra deja de ser la que se escribió, y la
 * comprobación tiene que caer.
 */
function normalize(text) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/\s*([\u2014\u2013])\s*/g, '$1')
    .trim()
}

async function extractText(pdfPath) {
  const { stdout } = await run('pdftotext', [pdfPath, '-'])

  return stdout
}

async function countPages(pdfPath) {
  const { stdout } = await run('pdfinfo', [pdfPath])
  const match = stdout.match(/^Pages:\s+(\d+)$/m)

  return match ? Number(match[1]) : null
}

/**
 * Todo lo que tiene que poder leerse en el PDF, sacado del `resume.json` y de
 * los rótulos del tema. Se construye de los datos a propósito: añadir un bullet
 * al CV añade su comprobación sin tocar este fichero.
 */
function buildExpectations({ resume, language }) {
  const labels = LABELS[language]
  const { basics } = resume
  const expected = []

  expected.push({ group: 'Contacto', text: basics.name })

  if (basics.email) {
    expected.push({ group: 'Contacto', text: basics.email })
  }

  if (basics.phone) {
    expected.push({ group: 'Contacto', text: basics.phone })
  }

  if (basics.summary) {
    expected.push({ group: 'Perfil', text: basics.summary })
  }

  const titles = [labels.work, labels.projects, labels.education, labels.skills]

  titles.forEach((title) => {
    expected.push({ group: 'Encabezados', text: title })
  })

  ;(resume.work ?? []).forEach((job) => {
    expected.push({ group: 'Experiencia', text: job.name })
    expected.push({ group: 'Experiencia', text: job.position })
    ;(job.highlights ?? []).forEach((highlight) => {
      expected.push({ group: 'Experiencia', text: highlight })
    })
  })
  ;(resume.projects ?? []).forEach((project) => {
    expected.push({ group: 'Proyectos', text: project.name })
    ;(project.highlights ?? []).forEach((highlight) => {
      expected.push({ group: 'Proyectos', text: highlight })
    })
  })
  ;(resume.education ?? []).forEach((study) => {
    expected.push({ group: 'Educación', text: study.institution })
    expected.push({ group: 'Educación', text: study.area })
  })
  ;(resume.skills ?? []).forEach((skill) => {
    expected.push({ group: 'Skills', text: skill.name })
    ;(skill.keywords ?? []).forEach((keyword) => {
      expected.push({ group: 'Skills', text: keyword })
    })
  })

  return { expected, titles }
}

/**
 * Los encabezados tienen que salir en el mismo orden en que se escribieron. Si
 * el extractor los devuelve barajados es que la maquetación no se lee en una
 * sola columna, que es el fallo que de verdad rompe un CV.
 */
function checkOrder({ text, titles }) {
  const positions = titles.map((title) => ({
    title,
    at: text.indexOf(title),
  }))

  const found = positions.filter((position) => position.at >= 0)
  const sorted = [...found].sort((a, b) => a.at - b.at)
  const inOrder = found.every((position, index) => position.title === sorted[index].title)

  return { inOrder, order: sorted.map((position) => position.title) }
}

async function auditTarget({ language, file }) {
  const pdfPath = join(PDF_DIR, file)
  const resume = JSON.parse(await readFile(resumePath(language), 'utf8'))
  const raw = await extractText(pdfPath)
  const text = normalize(raw)
  const pages = await countPages(pdfPath)

  const txtPath = join(HTML_DIR, `${language}.txt`)
  await writeFile(txtPath, raw, 'utf8')

  const { expected, titles } = buildExpectations({ resume, language })
  const missing = expected.filter((item) => !text.includes(normalize(item.text)))
  const { inOrder, order } = checkOrder({ text, titles })

  console.log(`\n── ${file} (${language}) ──`)
  console.log(`   páginas:        ${pages}`)
  console.log(`   texto extraído: ${txtPath}`)
  console.log(`   comprobaciones: ${expected.length - missing.length}/${expected.length}`)
  console.log(`   orden de secciones: ${inOrder ? 'correcto' : 'ALTERADO'} → ${order.join(' · ')}`)

  missing.forEach((item) => {
    const preview = normalize(item.text).slice(0, 90)
    console.log(`   ✗ [${item.group}] no se lee en el PDF: "${preview}…"`)
  })

  if (missing.length === 0 && inOrder) {
    console.log('   ✓ todo el contenido es legible y las secciones salen en orden')
  }

  return missing.length === 0 && inOrder
}

async function main() {
  try {
    await run('pdftotext', ['-v'])
  } catch {
    console.error('Falta `pdftotext`. En Debian/Ubuntu: sudo apt install poppler-utils')
    process.exitCode = 1

    return
  }

  const results = []

  for (const target of TARGETS) {
    results.push(await auditTarget(target))
  }

  if (!results.every(Boolean)) {
    console.error('\nLa auditoría encontró contenido que el PDF no deja leer.')
    process.exitCode = 1
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

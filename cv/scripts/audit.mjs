import { execFile } from 'node:child_process'
import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { promisify } from 'node:util'
import { resolveTheme } from '../themes.mjs'
import { PDF_DIR, TARGETS, htmlDir, resumePath } from './build.mjs'

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
    .replace(/\s*([—–])\s*/g, '$1')
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
 *
 * Los encabezados se comparan sin distinguir mayúsculas (`fold`). El rótulo que
 * el tema escribe en el HTML no siempre es el que acaba en el PDF: el tema
 * puede ponerlo en mayúsculas desde el CSS, como hace `harvard-classic` con
 * "Experiencia" → "EXPERIENCIA". A un ATS le da igual la caja, y así el auditor
 * no se rompe cuando un tema cambia de opinión al respecto.
 */
function buildExpectations({ resume, titles }) {
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

  titles.forEach((title) => {
    expected.push({ group: 'Encabezados', text: title, fold: true })
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
  ;(resume.languages ?? []).forEach((spoken) => {
    expected.push({ group: 'Idiomas', text: spoken.language })
  })

  // Un campo vacío del `resume.json` —`area` cuando la titulación ya lo dice
  // todo— no es una comprobación: `includes('')` siempre es cierto, y contarla
  // sólo infla el marcador con una línea que no se ha mirado.
  return expected.filter((item) => normalize(item.text ?? '').length > 0)
}

/**
 * Que las dos mitades de un dato sigan juntas.
 *
 * Hay secciones que son pares: una competencia y sus keywords, un idioma y su
 * nivel. Que las dos mitades se lean por separado no basta —"Español",
 * "Inglés", "Nativo", "Fluido" están todas ahí y aun así el PDF ya no dice
 * quién es nativo de qué—. Eso pasa en cuanto el tema las maqueta en dos
 * columnas: el extractor vacía una columna entera y luego la otra.
 *
 * Así que se comprueba la adyacencia, y se comprueba en todas las apariciones
 * del nombre, no en la primera: "IA aplicada" también sale en el perfil, y esa
 * mención no dice nada de cómo quedó maquetada la sección.
 *
 * El hueco de holgura admite lo que cada tema mete entre las dos mitades: dos
 * puntos y un espacio en el tema de la casa, un salto de línea en
 * `harvard-classic`, un paréntesis en los idiomas.
 */
const PAIR_GAP = 4

function readsAsPair({ text, name, value }) {
  const needle = normalize(name)
  const tail = normalize(value)

  for (let at = text.indexOf(needle); at >= 0; at = text.indexOf(needle, at + 1)) {
    const after = text.slice(at + needle.length, at + needle.length + tail.length + PAIR_GAP)

    if (after.includes(tail)) {
      return true
    }
  }

  return false
}

function buildPairs({ resume }) {
  const pairs = []

  ;(resume.skills ?? []).forEach((skill) => {
    const [keyword] = skill.keywords ?? []

    if (keyword) {
      pairs.push({ group: 'Skills', name: skill.name, value: keyword })
    }
  })
  ;(resume.languages ?? []).forEach((spoken) => {
    if (spoken.fluency) {
      pairs.push({ group: 'Idiomas', name: spoken.language, value: spoken.fluency })
    }
  })

  return pairs
}

/**
 * Los encabezados tienen que salir en el mismo orden en que los escribe el
 * tema. Si el extractor los devuelve barajados es que la maquetación no se lee
 * en una sola columna, que es el fallo que de verdad rompe un CV.
 */
function checkOrder({ text, titles }) {
  const folded = text.toUpperCase()
  const positions = titles.map((title) => ({
    title,
    at: folded.indexOf(normalize(title).toUpperCase()),
  }))

  const found = positions.filter((position) => position.at >= 0)
  const sorted = [...found].sort((a, b) => a.at - b.at)
  const inOrder = found.every((position, index) => position.title === sorted[index].title)

  return { inOrder, order: sorted.map((position) => position.title) }
}

async function auditTarget({ theme, language, file }) {
  const pdfPath = join(PDF_DIR, file)
  const resume = JSON.parse(await readFile(resumePath(language), 'utf8'))
  const raw = await extractText(pdfPath)
  const text = normalize(raw)
  const pages = await countPages(pdfPath)

  const txtPath = join(htmlDir(theme), `${language}.txt`)
  await mkdir(htmlDir(theme), { recursive: true })
  await writeFile(txtPath, raw, 'utf8')

  const titles = theme.sectionTitles({ resume, language })
  const expected = buildExpectations({ resume, titles })
  const missing = expected.filter((item) => {
    const needle = normalize(item.text)

    return item.fold ? !text.toUpperCase().includes(needle.toUpperCase()) : !text.includes(needle)
  })
  const { inOrder, order } = checkOrder({ text, titles })
  const pairs = buildPairs({ resume })
  const broken = pairs.filter((pair) => !readsAsPair({ text, ...pair }))

  console.log(`\n── ${file} (${language}) ──`)
  console.log(`   páginas:        ${pages}`)
  console.log(`   texto extraído: ${txtPath}`)
  console.log(`   comprobaciones: ${expected.length - missing.length}/${expected.length}`)
  console.log(`   emparejamientos: ${pairs.length - broken.length}/${pairs.length}`)
  console.log(`   orden de secciones: ${inOrder ? 'correcto' : 'ALTERADO'} → ${order.join(' · ')}`)

  missing.forEach((item) => {
    const preview = normalize(item.text).slice(0, 90)
    console.log(`   ✗ [${item.group}] no se lee en el PDF: "${preview}…"`)
  })

  broken.forEach((pair) => {
    console.log(`   ✗ [${pair.group}] "${pair.name}" y su valor se leen separados en el PDF`)
  })

  const ok = missing.length === 0 && broken.length === 0 && inOrder

  if (ok) {
    console.log('   ✓ todo el contenido es legible, emparejado y en orden')
  }

  return ok
}

async function main() {
  try {
    await run('pdftotext', ['-v'])
  } catch {
    console.error('Falta `pdftotext`. En Debian/Ubuntu: sudo apt install poppler-utils')
    process.exitCode = 1

    return
  }

  const theme = resolveTheme()

  console.log(`tema  ${theme.label}`)

  const results = []

  for (const target of TARGETS) {
    results.push(await auditTarget({ theme, ...target }))
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

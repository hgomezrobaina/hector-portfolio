import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderResume } from '../theme/index.mjs'

const CV_DIR = dirname(dirname(fileURLToPath(import.meta.url)))
const PROJECT_DIR = dirname(CV_DIR)

/**
 * Dónde cae cada PDF. Los nombres no son una elección de este script: son los
 * que el botón de descarga del portfolio ya pide en
 * `src/components/Presentation/hooks/usePresentation.tsx`. Cambiar uno aquí
 * obliga a cambiarlo allí.
 */
export const TARGETS = [
  { language: 'es', file: 'ES.pdf' },
  { language: 'en', file: 'EN.pdf' },
]

export const HTML_DIR = join(CV_DIR, '.out')
export const PDF_DIR = join(PROJECT_DIR, 'public', 'cvs')

export function resumePath(language) {
  return join(CV_DIR, `resume.${language}.json`)
}

async function buildHtml({ language }) {
  const resume = JSON.parse(await readFile(resumePath(language), 'utf8'))
  const html = renderResume({ resume, language })
  const path = join(HTML_DIR, `${language}.html`)

  await writeFile(path, html, 'utf8')

  return path
}

/**
 * De HTML a PDF con el Chromium de Puppeteer.
 *
 * `preferCSSPageSize` deja que mande el `@page` del tema: el tamaño y los
 * márgenes se deciden en el CSS, en un sitio, y no repartidos entre la hoja de
 * estilos y las opciones de impresión.
 */
async function printPdfs({ pages }) {
  const { default: puppeteer } = await import('puppeteer')
  const browser = await puppeteer.launch()

  try {
    for (const { htmlPath, pdfPath } of pages) {
      const page = await browser.newPage()

      await page.goto(`file://${htmlPath}`, { waitUntil: 'load' })
      await page.pdf({
        path: pdfPath,
        printBackground: true,
        preferCSSPageSize: true,
      })

      await page.close()
    }
  } finally {
    await browser.close()
  }
}

async function main() {
  const onlyHtml = process.argv.includes('--html')

  await mkdir(HTML_DIR, { recursive: true })
  await mkdir(PDF_DIR, { recursive: true })

  const pages = []

  for (const { language, file } of TARGETS) {
    const htmlPath = await buildHtml({ language })

    console.log(`HTML  ${htmlPath}`)
    pages.push({ htmlPath, pdfPath: join(PDF_DIR, file) })
  }

  if (onlyHtml) {
    console.log('\n--html: no se imprime el PDF. Abre los HTML en el navegador.')

    return
  }

  await printPdfs({ pages })

  pages.forEach(({ pdfPath }) => {
    console.log(`PDF   ${pdfPath}`)
  })
}

// `audit.mjs` importa de aquí las rutas y los destinos. Sin esta guarda, ese
// import volvería a generar los PDF antes de auditarlos, que es justo lo que no
// se quiere: se audita lo que hay en disco, no lo que el auditor acaba de hacer.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
}

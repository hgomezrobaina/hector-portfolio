import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { resolveTheme } from '../themes.mjs'

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

export const OUT_DIR = join(CV_DIR, '.out')
export const PDF_DIR = join(PROJECT_DIR, 'public', 'cvs')

/**
 * Lo intermedio se separa por tema. Así se puede generar con uno y con otro sin
 * que el HTML de cada cual se pise, y comparar los dos textos extraídos.
 */
export function htmlDir(theme) {
  return join(OUT_DIR, theme.id)
}

export function resumePath(language) {
  return join(CV_DIR, `resume.${language}.json`)
}

async function buildHtml({ theme, language }) {
  const resume = JSON.parse(await readFile(resumePath(language), 'utf8'))
  const html = theme.render({ resume, language })
  const path = join(htmlDir(theme), `${language}.html`)

  await writeFile(path, html, 'utf8')

  return path
}

/**
 * De HTML a PDF con el Chromium de Puppeteer.
 *
 * `preferCSSPageSize` deja que mande el `@page` del tema: el tamaño y los
 * márgenes se deciden en el CSS, en un sitio, y no repartidos entre la hoja de
 * estilos y las opciones de impresión.
 *
 * Se espera a `networkidle0` y a `document.fonts.ready` antes de imprimir
 * porque un tema puede traer su tipografía de fuera —`harvard-classic` pide
 * Libre Baskerville a Google Fonts con `display=swap`—. Sin esa espera el PDF
 * se imprime con la tipografía de reserva y la paginación sale distinta en cada
 * máquina. Si no hubo red, no se calla: se avisa, porque el PDF entonces no es
 * el que se está mirando en el navegador.
 */
async function printPdfs({ pages }) {
  const { default: puppeteer } = await import('puppeteer')
  const browser = await puppeteer.launch()

  try {
    for (const { htmlPath, pdfPath } of pages) {
      const page = await browser.newPage()

      await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' })

      const fonts = await page.evaluate(async () => {
        await document.fonts.ready

        return {
          faces: document.fonts.size,
          webfonts: [...document.querySelectorAll('link[rel="stylesheet"]')].some((link) =>
            link.href.startsWith('http'),
          ),
        }
      })

      if (fonts.webfonts && fonts.faces === 0) {
        console.warn(`AVISO  ${htmlPath}: el tema pide tipografías de fuera y no cargó ninguna (¿sin red?).`)
        console.warn('       El PDF sale con la tipografía de reserva y la paginación no es la definitiva.')
      }

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
  const theme = resolveTheme()

  await mkdir(htmlDir(theme), { recursive: true })
  await mkdir(PDF_DIR, { recursive: true })

  console.log(`tema  ${theme.label}`)

  const pages = []

  for (const { language, file } of TARGETS) {
    const htmlPath = await buildHtml({ theme, language })

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

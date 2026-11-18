import { render as renderHarvard } from 'jsonresume-theme-harvard-classic'
import { renderResume } from './theme/index.mjs'
import { LABELS } from './theme/labels.mjs'

/**
 * Los temas con los que se puede imprimir el CV.
 *
 * Un tema es un `render` que recibe los datos y un idioma y devuelve el HTML
 * imprimible, más un `sectionTitles` que dice con qué rótulos van a salir sus
 * secciones. Lo segundo es para `audit.mjs`: el auditor comprueba que los
 * encabezados se lean en el PDF y salgan en orden, y esos encabezados los pone
 * el tema, no los datos.
 *
 * `build.mjs` y `audit.mjs` eligen tema con `--theme=<id>` o con `CV_THEME`.
 * La variable de entorno existe porque `npm run cv` encadena tres scripts y un
 * argumento sólo llegaría al último: `CV_THEME=local npm run cv` sí llega a los
 * tres.
 */

/**
 * Primero de los dos ajustes que este repo le hace a `harvard-classic`.
 *
 * El tema maqueta las skills y los idiomas en una rejilla de dos columnas: el
 * nombre en una columna estrecha y su valor al lado. Se lee bien en pantalla y
 * se lee mal cuando un extractor saca el texto en el orden en que encuentra las
 * cajas: el nombre se separa de su valor —el PDF dice "Español Inglés Nativo
 * Fluido", y ahí ya no consta quién es nativo de qué—, y un nombre largo
 * —"Architecture and practices"— se parte en dos trozos con la lista de
 * keywords en medio, así que deja de responder a una búsqueda por esa
 * competencia.
 *
 * Apiladas las dos celdas, nombre y valor salen en líneas seguidas y el
 * emparejamiento sobrevive a la extracción. Va marcado con `data-cv-ats` en el
 * HTML para que se vea que esto no viene del tema.
 *
 * El `!important` no es pereza: el tema declara la rejilla con dos clases
 * (`.tngsn00 ._1t9tjcqm`), que gana por especificidad a cualquier selector
 * escrito sin sus nombres de clase —que son hashes y cambian en cada versión—.
 * Sin el `!important` esta regla se aplica y no hace nada, que es justo el fallo
 * silencioso que el auditor pilló.
 */
const ATS_FIX = [
  '<style data-cv-ats>',
  '[data-section="skills"] dl > div,',
  '[data-section="languages"] dl > div { display: block !important; }',
  '</style>',
].join('')

/**
 * Segundo ajuste: que el CV quepa en dos páginas.
 *
 * El tema es espacioso por diseño, y al imprimir mezcla dos tamaños sin querer:
 * los bullets de experiencia salen a 12px y las skills y los idiomas a 14px, de
 * modo que lo accesorio se lee más grande que los logros. Igualándolo todo a
 * 12px —el tamaño que el propio tema da al cuerpo— y recortando dos milímetros
 * de margen, el CV pasa de tres páginas a dos sin tocar el interlineado, que es
 * lo que de verdad se nota.
 *
 * Dos páginas no es un capricho: es la extensión que esperan las guías para un
 * perfil de esta antigüedad, y tres páginas con la tercera a un cuarto de llenar
 * se leen como descuido.
 *
 * Esto depende del contenido: si el CV crece volverá a desbordar. El auditor
 * imprime el número de páginas en cada tirada justamente para que se vea.
 */
const FIT_FIX = [
  '<style data-cv-fit>',
  '@page { margin: 13mm 15mm !important; }',
  'p, li, dt, dd { font-size: 12px !important; }',
  '</style>',
].join('')

/** Las entidades que puede traer el texto de un encabezado del HTML del tema. */
const ENTITIES = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
}

function decodeEntities(text) {
  return text.replace(/&(?:amp|lt|gt|quot|#39);/g, (entity) => ENTITIES[entity])
}

/**
 * Los rótulos de `harvard-classic` se leen del HTML que acaba de generar en vez
 * de copiarlos aquí: el tema no los exporta, y así un cambio de versión o un
 * idioma nuevo no dejan al auditor comprobando rótulos que ya no se imprimen.
 */
function scrapeSectionTitles(html) {
  const headings = html.matchAll(/<h2[^>]*\bid="section-[^"]*"[^>]*>([^<]+)<\/h2>/g)

  return [...headings].map((heading) => decodeEntities(heading[1]).trim())
}

/**
 * El idioma se le pasa al tema por `meta.language`, de donde saca los rótulos de
 * sección y el `lang` del documento. Se inyecta aquí y no en los
 * `resume.*.json` porque es cosa del tema: en los datos sólo va lo que es
 * verdad de la persona.
 */
function renderHarvardClassic({ resume, language }) {
  const html = renderHarvard({ ...resume, meta: { ...resume.meta, language } })

  if (!html.includes('</head>')) {
    throw new Error('jsonresume-theme-harvard-classic ya no devuelve un documento con <head>: revisa ATS_FIX y FIT_FIX')
  }

  return html.replace('</head>', `${ATS_FIX}${FIT_FIX}</head>`)
}

export const THEMES = {
  'harvard-classic': {
    id: 'harvard-classic',
    label: 'harvard-classic · jsonresume-theme-harvard-classic',
    render: renderHarvardClassic,
    sectionTitles: ({ resume, language }) => scrapeSectionTitles(renderHarvardClassic({ resume, language })),
  },
  local: {
    id: 'local',
    label: 'local · el tema de la casa, en cv/theme',
    render: ({ resume, language }) => renderResume({ resume, language }),
    sectionTitles: ({ language }) => {
      const labels = LABELS[language]

      return [labels.work, labels.projects, labels.education, labels.skills]
    },
  },
}

export const DEFAULT_THEME = 'harvard-classic'

/**
 * El tema de esta ejecución. Un `--theme` que no existe no es un aviso: para y
 * dice cuáles hay, porque lo contrario es imprimir el CV con un tema que no se
 * pidió.
 */
export function resolveTheme(argv = process.argv.slice(2)) {
  const flag = argv.find((argument) => argument.startsWith('--theme'))
  const id = flag?.split('=')[1] || process.env.CV_THEME || DEFAULT_THEME
  const theme = THEMES[id]

  if (!theme) {
    throw new Error(`Tema desconocido: "${id}". Hay: ${Object.keys(THEMES).join(', ')}`)
  }

  return theme
}

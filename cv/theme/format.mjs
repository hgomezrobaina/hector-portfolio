import { LABELS } from './labels.mjs'

const HTML_ENTITIES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
}

/**
 * El texto de `resume.json` no es de confianza para el HTML: un `&` o un `<`
 * en una descripción rompería el documento en silencio. Todo lo que entra en
 * una plantilla pasa por aquí.
 */
export function escapeHtml(text) {
  return String(text ?? '').replace(/[&<>"]/g, (char) => HTML_ENTITIES[char])
}

/**
 * Un término con guión no puede partirse al final de una línea.
 *
 * No es cosmética: `pdftotext` —y con él cualquier extractor que haga lo mismo—
 * trata el guión de final de línea como partición silábica y lo borra al unir
 * las dos mitades. "end-to-end" partido llega al otro lado como "end-toend", y
 * con eso el CV deja de responder a una búsqueda por esa palabra.
 *
 * Se aplica después de escapar, así que no hay marcas que romper: lo que llega
 * aquí es texto, y las entidades que pudiera haber (`&amp;`) no llevan guión.
 */
function protectHyphenated(html) {
  return html.replace(/\S*\w-\w\S*/g, (word) => `<span class="nowrap">${word}</span>`)
}

/** El texto tal y como entra en el cuerpo del documento: escapado y sin partir. */
export function escapeText(text) {
  return protectHyphenated(escapeHtml(text))
}

/**
 * "2025-10" -> "Octubre 2025".
 *
 * Una fecha ausente es un puesto todavía abierto, que es lo que el schema de
 * JSON Resume quiere decir cuando falta `endDate`: no se pone una fecha futura,
 * se omite.
 */
export function formatDate({ date, language }) {
  const labels = LABELS[language]

  if (!date) {
    return labels.present
  }

  const [year, month] = String(date).split('-')

  if (!month) {
    return year
  }

  return `${labels.months[Number(month) - 1]} ${year}`
}

export function formatPeriod({ startDate, endDate, language }) {
  const start = formatDate({ date: startDate, language })
  const end = formatDate({ date: endDate, language })

  return `${start} - ${end}`
}

/**
 * La URL como se lee, no como se escribe: en la cabecera de un CV
 * "github.com/hgomezrobaina" ocupa lo que debe y "https://" no dice nada.
 */
export function formatUrl(url) {
  return String(url).replace(/^https?:\/\//, '').replace(/\/$/, '')
}

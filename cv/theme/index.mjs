import { LABELS, SUPPORTED_LANGUAGES } from './labels.mjs'
import { escapeHtml, escapeText, formatPeriod, formatUrl } from './format.mjs'
import { STYLES } from './styles.mjs'

function renderLink({ text, href }) {
  if (!href) {
    return escapeText(text)
  }

  return `<a href="${escapeHtml(href)}">${escapeText(text)}</a>`
}

/**
 * Los datos de contacto en el orden en que se leen en la cabecera: dónde está,
 * dónde se le ve, cómo se le llama y dónde se le lee. El teléfono va sin
 * enlazar a propósito —un `tel:` subrayado en azul en mitad de la línea no
 * aporta nada en papel— y el resto sí, que en pantalla se pinchan.
 */
function buildContactItems({ basics }) {
  const profiles = basics.profiles ?? []
  const [mainProfile, ...otherProfiles] = profiles
  const items = []

  if (basics.location) {
    const { city, region } = basics.location
    items.push({ text: [city, region].filter(Boolean).join(', ') })
  }

  if (mainProfile) {
    items.push({ text: formatUrl(mainProfile.url), href: mainProfile.url })
  }

  if (basics.phone) {
    items.push({ text: basics.phone })
  }

  if (basics.email) {
    items.push({ text: basics.email, href: `mailto:${basics.email}` })
  }

  otherProfiles.forEach((profile) => {
    items.push({ text: formatUrl(profile.url), href: profile.url })
  })

  if (basics.url) {
    items.push({ text: formatUrl(basics.url), href: basics.url })
  }

  return items
}

function renderHeader({ basics }) {
  // Cada dato va entero o no va: un teléfono partido en dos renglones se lee mal
  // en papel y llega troceado a quien extraiga el texto.
  const contact = buildContactItems({ basics })
    .map((item) => `<span class="nowrap">${renderLink(item)}</span>`)
    .join('<span class="contact-separator">•</span>')

  return `
    <h1 class="name">${escapeHtml(basics.name)}</h1>
    <p class="contact">${contact}</p>
    <hr class="divider" />
  `
}

function renderBullets(highlights) {
  if (!highlights || highlights.length === 0) {
    return ''
  }

  const items = highlights
    .map((highlight) => `<li>${escapeText(highlight)}</li>`)
    .join('')

  return `<ul class="bullets">${items}</ul>`
}

/**
 * Las dos líneas que encabezan cualquier entrada: qué y dónde arriba, quién y
 * cuándo debajo. Las comparten experiencia, proyectos y educación porque en el
 * papel son la misma figura, y tenerla una sola vez es lo que mantiene las tres
 * secciones alineadas al milímetro.
 */
function renderEntryHead({ name, place, detail, period }) {
  const secondLine = detail || period
    ? `
      <div class="entry-line">
        <span>${escapeText(detail ?? '')}</span>
        <span class="entry-period">${escapeHtml(period ?? '')}</span>
      </div>
    `
    : ''

  return `
    <div class="entry-head">
      <div class="entry-line">
        <span class="entry-name">${name}</span>
        <span class="entry-place">${escapeText(place ?? '')}</span>
      </div>
      ${secondLine}
    </div>
  `
}

function renderSection({ title, body }) {
  if (!body) {
    return ''
  }

  return `
    <section class="section">
      <h2 class="section-title">${escapeHtml(title)}</h2>
      ${body}
    </section>
  `
}

function renderWork({ work, language }) {
  return (work ?? [])
    .map((job) => {
      const head = renderEntryHead({
        name: escapeText(job.name),
        place: job.location,
        detail: job.position,
        period: formatPeriod({
          startDate: job.startDate,
          endDate: job.endDate,
          language,
        }),
      })

      return `<div class="entry">${head}${renderBullets(job.highlights)}</div>`
    })
    .join('')
}

function renderProjects({ projects }) {
  return (projects ?? [])
    .map((project) => {
      const described = project.description
        ? `${escapeText(project.name)} — ${escapeText(project.description)}`
        : escapeText(project.name)

      const head = renderEntryHead({
        name: described,
        place: '',
        detail: '',
        period: '',
      })

      const link = project.url
        ? `<div class="entry-line"><span>${renderLink({
            text: formatUrl(project.url),
            href: project.url,
          })}</span></div>`
        : ''

      return `<div class="entry">${head}${link}${renderBullets(project.highlights)}</div>`
    })
    .join('')
}

function renderEducation({ education, language }) {
  return (education ?? [])
    .map((study) => {
      const detail = [study.studyType, study.area].filter(Boolean).join(', ')

      const head = renderEntryHead({
        name: escapeText(study.institution),
        place: study.location,
        detail,
        period: formatPeriod({
          startDate: study.startDate,
          endDate: study.endDate,
          language,
        }),
      })

      return `<div class="entry">${head}${renderBullets(study.highlights)}</div>`
    })
    .join('')
}

/**
 * Las skills y los idiomas van juntos en una sola lista.
 *
 * En el schema son dos secciones distintas, y está bien que lo sean: el idioma
 * no es una tecnología. Pero en el papel una sección entera para dos líneas es
 * un desperdicio, así que los idiomas caen como una línea más al final.
 */
function renderSkills({ skills, languages, language }) {
  const labels = LABELS[language]

  const skillLines = (skills ?? []).map((skill) => {
    const keywords = (skill.keywords ?? []).join(', ')

    return keywords ? `${skill.name}: ${keywords}` : skill.name
  })

  const spoken = (languages ?? [])
    .map((spokenLanguage) => {
      const { fluency } = spokenLanguage

      return fluency
        ? `${spokenLanguage.language} (${fluency})`
        : spokenLanguage.language
    })
    .join(', ')

  const lines = spoken
    ? [...skillLines, `${labels.languages}: ${spoken}`]
    : skillLines

  return renderBullets(lines)
}

/**
 * El CV entero, en un HTML sin dependencias externas: ni fuentes remotas ni
 * hojas de estilo aparte. Todo lo que hace falta para imprimirlo va dentro, así
 * que el fichero se abre en un navegador y se ve exactamente lo que saldrá
 * impreso.
 */
export function renderResume({ resume, language }) {
  if (!SUPPORTED_LANGUAGES.includes(language)) {
    throw new Error(
      `El tema no tiene rótulos para "${language}". Los que hay: ${SUPPORTED_LANGUAGES.join(', ')}.`,
    )
  }

  const labels = LABELS[language]
  const { basics } = resume

  const sections = [
    renderSection({
      title: labels.work,
      body: renderWork({ work: resume.work, language }),
    }),
    renderSection({
      title: labels.projects,
      body: renderProjects({ projects: resume.projects }),
    }),
    renderSection({
      title: labels.education,
      body: renderEducation({ education: resume.education, language }),
    }),
    renderSection({
      title: labels.skills,
      body: renderSkills({
        skills: resume.skills,
        languages: resume.languages,
        language,
      }),
    }),
  ].join('')

  const summary = basics.summary
    ? `<p class="summary">${escapeText(basics.summary)}</p>`
    : ''

  return `<!doctype html>
<html lang="${escapeHtml(language)}">
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(basics.name)}</title>
    <style>${STYLES}</style>
  </head>
  <body>
    ${renderHeader({ basics })}
    ${summary}
    ${sections}
  </body>
</html>
`
}

/**
 * El contrato que esperan las herramientas de JSON Resume (`resumed`,
 * `resume-cli`): un `render` que recibe el currículum y devuelve HTML. El
 * idioma sale de `meta.language`, que es lo único que el contrato deja para
 * decirlo; `build.mjs` no pasa por aquí porque ya sabe el idioma por el nombre
 * del fichero.
 */
export function render(resume) {
  return renderResume({ resume, language: resume.meta?.language ?? 'es' })
}

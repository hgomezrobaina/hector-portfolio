/**
 * Lo que no sale de `resume.json`: encabezados de sección, meses y la palabra
 * con la que se dice que un puesto sigue abierto.
 *
 * Vive en el tema y no en los datos porque es del tema: el mismo `resume.json`
 * rendido con otro diría "EXPERIENCE" donde éste dice "EXPERIENCIA
 * PROFESIONAL". En los datos sólo va lo que es verdad de la persona.
 */
export const LABELS = {
  es: {
    work: 'EXPERIENCIA PROFESIONAL',
    projects: 'PROYECTOS',
    education: 'EDUCACIÓN',
    skills: 'SKILLS ADICIONALES',
    languages: 'Idiomas',
    present: 'Actualidad',
    months: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
  },
  en: {
    work: 'PROFESSIONAL EXPERIENCE',
    projects: 'PROJECTS',
    education: 'EDUCATION',
    skills: 'ADDITIONAL SKILLS',
    languages: 'Languages',
    present: 'Present',
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
}

/** Los idiomas para los que hay rótulos, que son los que se pueden rendir. */
export const SUPPORTED_LANGUAGES = Object.keys(LABELS)

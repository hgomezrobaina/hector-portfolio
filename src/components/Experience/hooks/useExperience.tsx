import { useTranslation } from '../../../modules/language/hooks'
import { ExperienceCard } from '../interfaces/experience-card'

export default function useExperience() {
  const { UNIVERSITY, JUNIOR, FREELANCER } = useTranslation({
    UNIVERSITY: {
      en: '"José Antonio Echeverría" Technological University',
      es: 'Universidad Tecnológica "José Antonio Echeverría"',
    },
    JUNIOR: { en: 'Junior Developer', es: 'Desarrollador Junior' },
    FREELANCER: { en: 'Freelancer Developer', es: 'Desarrollador Freelancer' },
  })

  const DATES = useTranslation({
    UNIVERISITY_FIRST: { en: 'September 2021', es: 'Septiembre 2021' },
    UNIVERISTY_SECOND: { en: 'May 2025', es: 'Mayo 2025' },

    JUNIOR_FIRST: { en: 'April 2022', es: 'Abril 2022' },
    JUNIOR_SECOND: { en: 'Dicember 2022', es: 'Diciembre 2022' },

    FREELANCER_FIRST: { en: 'Frebruary 2023', es: 'Febrero 2023' },
    FREELANCER_SECOND: { en: 'January 2025', es: 'Enero 2025' },
  })

  const JUNIOR_NOTES = useTranslation({
    FIRST: {
      en: 'I worked laying out designs developed in Figma for several management and presentation web applications',
      es: 'Trabajé maquetando diseños desarrollados en Figma para varias aplicaciones web de gestión y presentación',
    },
    SECOND: {
      en: 'I developed mainly with Javascript frameworks such as Angular and Express js',
      es: 'Desarrollé principalmente con frameworks de Javascript como Angular y Express js',
    },
  })

  const UNIVERSITY_NOTES = useTranslation({
    FIRST: {
      en: 'This has honed my problem-solving skills',
      es: 'Esto ha perfeccionado mis habilidades para resolver problemas',
    },
    SECOND: {
      en: 'I have gained proficiency in various programming languages and software tools',
      es: 'He adquirido competencia en varios lenguajes de programación y herramientas de software',
    },
    THIRD: {
      en: 'This has given me the versatility to work in various sectors such as software development and data analysis',
      es: 'Esto me ha proporcionado la versatilidad para trabajar en varios sectores como desarrollo de software y análisis de datos',
    },
  })

  const FREELANCER_NOTES = useTranslation({
    FIRST: {
      es: 'Desarrollé aplicaciones web de gestión y ventas para clientes internacionales, adaptadas a sus procesos de negocio.',
      en: 'Developed management and sales web applications for international clients, tailored to their business processes.',
    },
    SECOND: {
      es: 'Lideré el desarrollo de Dealernode y Visa4Cuba, optimizando flujos de trabajo y mejorando la experiencia de usuario.',
      en: 'Led the development of Dealernode and Visa4Cuba, optimizing workflows and enhancing user experience.',
    },
    THIRD: {
      es: 'Implementé arquitecturas backend escalables con NestJS y PostgreSQL, asegurando rendimiento y seguridad.',
      en: 'Implemented scalable backend architectures with NestJS and PostgreSQL, ensuring performance and security.',
    },
    FORTH: {
      es: 'Diseñé interfaces modernas e intuitivas con React, priorizando usabilidad y accesibilidad.',
      en: 'Designed modern and intuitive interfaces with React, prioritizing usability and accessibility.',
    },
    FIFTH: {
      es: 'Gestioné el ciclo completo de desarrollo: análisis, diseño, implementación, pruebas y despliegue.',
      en: 'Managed the full development lifecycle: analysis, design, implementation, testing, and deployment.',
    },
    SIXTH: {
      es: 'Integré soluciones de pago y módulos de gestión documental, reduciendo tiempos operativos.',
      en: 'Integrated payment solutions and document management modules, reducing operational times.',
    },
  })

  const CARDS: ExperienceCard[] = [
    {
      position: UNIVERSITY,
      limits: { init: DATES.UNIVERISITY_FIRST, finish: DATES.UNIVERISTY_SECOND },
      notes: [UNIVERSITY_NOTES.FIRST, UNIVERSITY_NOTES.SECOND, UNIVERSITY_NOTES.THIRD],
    },
    {
      position: JUNIOR,
      limits: { init: DATES.JUNIOR_FIRST, finish: DATES.JUNIOR_SECOND },
      notes: [JUNIOR_NOTES.FIRST, JUNIOR_NOTES.SECOND],
    },
    {
      position: FREELANCER,
      limits: { init: DATES.FREELANCER_FIRST, finish: DATES.FREELANCER_SECOND },
      notes: [
        FREELANCER_NOTES.FIRST,
        FREELANCER_NOTES.SECOND,
        FREELANCER_NOTES.THIRD,
        FREELANCER_NOTES.FORTH,
        FREELANCER_NOTES.FIFTH,
        FREELANCER_NOTES.SIXTH,
      ],
    },
  ]

  return { CARDS }
}

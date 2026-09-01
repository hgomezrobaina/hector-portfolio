import { ExperienceCard } from '../interfaces/experience-card'

export const EXPERIENCE_CARDS: ExperienceCard[] = [
  {
    position: {
      en: '"José Antonio Echeverría" Technological University',
      es: 'Universidad Tecnológica "José Antonio Echeverría"',
    },
    limits: {
      init: { en: 'September 2021', es: 'Septiembre 2021' },
      finish: { en: 'May 2025', es: 'Mayo 2025' },
    },
    notes: [
      {
        en: 'This has honed my problem-solving skills',
        es: 'Esto ha perfeccionado mis habilidades para resolver problemas',
      },
      {
        en: 'I have gained proficiency in various programming languages and software tools',
        es: 'He adquirido competencia en varios lenguajes de programación y herramientas de software',
      },
      {
        en: 'This has given me the versatility to work in various sectors such as software development and data analysis',
        es: 'Esto me ha proporcionado la versatilidad para trabajar en varios sectores como desarrollo de software y análisis de datos',
      },
    ],
  },
  {
    position: { en: 'Junior Developer', es: 'Desarrollador Junior' },
    limits: {
      init: { en: 'April 2022', es: 'Abril 2022' },
      finish: { en: 'Dicember 2022', es: 'Diciembre 2022' },
    },
    notes: [
      {
        en: 'I worked laying out designs developed in Figma for several management and presentation web applications',
        es: 'Trabajé maquetando diseños desarrollados en Figma para varias aplicaciones web de gestión y presentación',
      },
      {
        en: 'I developed mainly with Javascript frameworks such as Angular and Express js',
        es: 'Desarrollé principalmente con frameworks de Javascript como Angular y Express js',
      },
    ],
  },
  {
    position: { en: 'Freelancer Developer', es: 'Desarrollador Freelancer' },
    limits: {
      init: { en: 'Frebruary 2023', es: 'Febrero 2023' },
      finish: { en: 'January 2025', es: 'Enero 2025' },
    },
    notes: [
      {
        en: 'Developed management and sales web applications for international clients, tailored to their business processes.',
        es: 'Desarrollé aplicaciones web de gestión y ventas para clientes internacionales, adaptadas a sus procesos de negocio.',
      },
      {
        en: 'Led the development of Dealernode and Visa4Cuba, optimizing workflows and enhancing user experience.',
        es: 'Lideré el desarrollo de Dealernode y Visa4Cuba, optimizando flujos de trabajo y mejorando la experiencia de usuario.',
      },
      {
        en: 'Implemented scalable backend architectures with NestJS and PostgreSQL, ensuring performance and security.',
        es: 'Implementé arquitecturas backend escalables con NestJS y PostgreSQL, asegurando rendimiento y seguridad.',
      },
      {
        en: 'Designed modern and intuitive interfaces with React, prioritizing usability and accessibility.',
        es: 'Diseñé interfaces modernas e intuitivas con React, priorizando usabilidad y accesibilidad.',
      },
      {
        en: 'Managed the full development lifecycle: analysis, design, implementation, testing, and deployment.',
        es: 'Gestioné el ciclo completo de desarrollo: análisis, diseño, implementación, pruebas y despliegue.',
      },
      {
        en: 'Integrated payment solutions and document management modules, reducing operational times.',
        es: 'Integré soluciones de pago y módulos de gestión documental, reduciendo tiempos operativos.',
      },
    ],
  },
]

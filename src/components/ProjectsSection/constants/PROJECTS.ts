import { APP_IMAGES } from '../../../modules/app/constants/APP_IMAGES'
import { Project } from '../interfaces/project'

export const PROJECTS: Project[] = [
  {
    title: 'Chaca',
    image: APP_IMAGES.PROJECTS.CHACA_NPM_IMAGE,
    madeWith: ['Typescript'],
    externalLink: 'https://www.npmjs.com/package/chaca',
    githubLink: 'https://github.com/hgomezrobaina/chaca',
    description: {
      en: 'A Node package developed to create realistic datasets and export them for use in real projects',
      es: 'Un paquete de Node desarrollado para crear datasets realistas y exportarlos para ser utilizados en proyectos reales',
    },
  },
  {
    title: 'Chaca Web',
    image: APP_IMAGES.PROJECTS.CHACA_WEB_IMAGE,
    madeWith: ['Typescript', 'React', 'Tailwind CSS', 'Nest js', 'Mongo DB'],
    externalLink: 'https://chaca.app',
    githubLink: 'https://github.com/hgomezrobaina/chaca-front',
    description: {
      en: 'Web application created to extend the use of Chaca to any type of user and not be limited to developers',
      es: 'Aplicación web creada para ampliar el uso de Chaca a cualquier tipo de usuario y no limitarse a los desarrolladores',
    },
  },
  {
    title: 'Autodirect Dealernode',
    image: APP_IMAGES.PROJECTS.DEALERNODE,
    madeWith: ['React', 'Nestjs', 'Postgresql', 'Typeorm', 'Stripe'],
    externalLink: 'https://dealernode.net',
    githubLink: 'https://github.com/hgomezrobaina/dealer-front',
    description: {
      en: 'A management system for car dealerships, designed to handle inventory, customers, and sales processes in a centralized way',
      es: 'Sistema de gestión para concesionarios de autos, diseñado para administrar inventario, clientes y procesos de venta de manera centralizada',
    },
  },
  {
    title: 'Visa4Cuba',
    image: APP_IMAGES.PROJECTS.VISA4UCBA,
    madeWith: ['Next.js', 'Supabase'],
    externalLink: 'https://visa4cuba.com',
    githubLink: 'https://github.com/hgomezrobaina/visa4cuba',
    description: {
      en: 'A web platform for purchasing visas and travel insurance to Cuba, designed to provide a fast and secure buying process',
      es: 'Plataforma web para la venta de visas y seguros de viaje a Cuba, diseñada para ofrecer un proceso de compra rápido y seguro',
    },
  },
  {
    title: 'CH-Crypto',
    image: APP_IMAGES.PROJECTS.CRYPTO_IMAGE,
    madeWith: ['Next.js', 'Chart.js', 'Tailwind CSS'],
    externalLink: 'https://ch-crypto.vercel.app',
    githubLink: 'https://github.com/hgomezrobaina/ch-crypto-app',
    description: {
      en: 'A web application dedicated to current information on the value status of the main cryptocurrencies around the world',
      es: 'Una aplicación web dedicada a la información actual del estado de valor de las principales cryptomonedas alrededor del mundo',
    },
  },
]

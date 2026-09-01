import { APP_IMAGES } from '../../../modules/app/constants/APP_IMAGES'
import { Article } from '../domain/article'

export const ARTICLES: Article[] = [
  new Article({
    slug: 'form-validation-domain-rules',
    image: APP_IMAGES.ARTICLES.FORM_VALIDATION,
    title: {
      en: 'An invalid field is a domain rule, not a UI state',
      es: 'Un campo inválido es una regla de dominio, no un estado de la UI',
    },
    description: {
      en: 'Why deciding what is valid never belonged to your form library: a four-line contract, rules as classes, and components that only render and trigger.',
      es: 'Por qué decidir qué es válido nunca fue trabajo de tu librería de formularios: un contrato de cuatro líneas, reglas como clases y componentes que solo pintan y disparan.',
    },
    date: new Date('2026-09-01'),
    tags: ['React', 'TypeScript', 'Validation', 'Clean Architecture'],
    readingTimeMinutes: 12,
  }),
  new Article({
    slug: 'nestjs-repository-pattern',
    image: APP_IMAGES.ARTICLES.NESTJS_REPOSITORY,
    title: {
      en: 'The Repository Pattern in NestJS: a collection that happens to live in a database',
      es: 'El patrón Repository en NestJS: una colección que, casualmente, vive en una base de datos',
    },
    description: {
      en: 'What the documented NestJS + TypeORM path couples together, what each ORM alternative actually solves, and a port-and-adapter repository that shares transactions without the domain knowing.',
      es: 'Qué acopla el camino documentado de NestJS con TypeORM, qué resuelve de verdad cada alternativa del ecosistema, y un repositorio de puerto y adaptador que comparte transacciones sin que el dominio se entere.',
    },
    date: new Date('2026-09-01'),
    tags: ['NestJS', 'TypeORM', 'Repository Pattern', 'Architecture'],
    readingTimeMinutes: 16,
  }),
  new Article({
    slug: 'nestjs-criteria-pattern',
    image: APP_IMAGES.ARTICLES.NESTJS_CRITERIA,
    title: {
      en: 'The Criteria pattern in NestJS: what a client may ask for is a file, not a signature',
      es: 'El patrón Criteria en NestJS: lo que un cliente puede pedir es un archivo, no una firma',
    },
    description: {
      en: 'Why what a client may ask for should exist as data — a public field enum and a domain criteria translated at both borders — instead of being the residue of a few ifs in a controller.',
      es: 'Por qué lo que un cliente puede pedir debe existir como dato — un enum de campos públicos y un criteria de dominio traducido en las dos fronteras — en vez de ser el residuo de unos if en un controlador.',
    },
    date: new Date('2026-09-01'),
    tags: ['NestJS', 'MongoDB', 'Criteria Pattern', 'API Design'],
    readingTimeMinutes: 18,
  }),
]

import { AppImage } from '../../../modules/app/interfaces/image'
import { LanguageConfig } from '../../../modules/language/interfaces/translation'

// Forma serializable del artículo: es la que cruza la frontera server -> client,
// donde una instancia de clase no puede viajar
interface Props {
  slug: string
  image: AppImage
  title: LanguageConfig
  description: LanguageConfig
  link?: string
  date: Date
  tags: string[]
  readingTimeMinutes: number
}

export class Article {
  readonly slug: string
  readonly image: AppImage
  readonly title: LanguageConfig
  readonly description: LanguageConfig
  readonly link: string | null
  readonly date: Date
  readonly tags: string[]
  readonly readingTimeMinutes: number

  constructor({ date, description, image, link, readingTimeMinutes, slug, tags, title }: Props) {
    this.title = title
    this.date = date
    this.description = description
    this.image = image
    this.link = link ?? null
    this.readingTimeMinutes = readingTimeMinutes
    this.slug = slug
    this.tags = tags
  }
}

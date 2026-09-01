import { AppImage } from '../../../modules/app/interfaces/image'
import { LanguageConfig } from '../../../modules/language/interfaces/translation'

export interface Project {
  title: string
  description: LanguageConfig
  image: AppImage
  madeWith: string[]
  externalLink: string
  githubLink?: string
}

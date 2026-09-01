import { LanguageConfig } from '../../../modules/language/interfaces/translation'

export interface ExperienceCard {
  position: LanguageConfig
  limits: Limit
  notes: LanguageConfig[]
}

export interface Limit {
  init: LanguageConfig
  finish: LanguageConfig
}

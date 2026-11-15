import { LANGUAGES } from '../constants/language'

export type LanguageConfig<T = string> = { [language in LANGUAGES]: T }

export type InputTranslation<T, R> = {
  [key in keyof T]: LanguageConfig<R>
}

export type TranslationResult<T, R> = {
  [key in keyof T]: R
}

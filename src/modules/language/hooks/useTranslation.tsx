import { useContext } from 'react'
import { LanguageConfig, InputTranslation, TranslationResult } from '../interfaces/translation'
import { LanguageContext } from '../context/LanguageContext'

export default function useTranslation<T>(input: InputTranslation<T, string>) {
  const { language } = useContext(LanguageContext)

  function filterLanguage(): TranslationResult<T, string> {
    let returnObject: TranslationResult<T, string> = {} as TranslationResult<T, string>

    for (const [key, object] of Object.entries<LanguageConfig<string>>(input)) {
      returnObject = { ...returnObject, [key]: object[language] }
    }

    return returnObject
  }

  return filterLanguage()
}

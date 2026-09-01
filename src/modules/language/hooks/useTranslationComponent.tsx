import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { InputTranslation, LanguageConfig, TranslationResult } from '../interfaces/translation'

export default function useTranslationComponent<T>(input: InputTranslation<T, React.ReactNode>) {
  const { language } = useContext(LanguageContext)

  function filterLanguage(): TranslationResult<T, React.ReactNode> {
    let returnObject: TranslationResult<T, React.ReactNode> = {} as TranslationResult<T, React.ReactNode>

    for (const [key, object] of Object.entries<LanguageConfig<React.ReactNode>>(input)) {
      returnObject = { ...returnObject, [key]: object[language] }
    }

    return returnObject
  }

  return filterLanguage()
}

import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

export default function useLanguage() {
  const { language } = useContext(LanguageContext)

  return { language }
}

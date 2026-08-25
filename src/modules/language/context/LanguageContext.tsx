'use client'

import { LANGUAGES } from '../constants'
import React, { useEffect, useState } from 'react'

interface Props {
  language: LANGUAGES
  handleChangeLanguage: (language: LANGUAGES) => void
}

const LanguageContext = React.createContext<Props>({
  language: LANGUAGES.EN,
} as Props)

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LANGUAGES>(LANGUAGES.EN)

  useEffect(() => {
    const navLanguage = navigator.language

    if (navLanguage.includes('es')) {
      setLanguage(LANGUAGES.ES)
    } else if (navLanguage.includes('en')) {
      setLanguage(LANGUAGES.EN)
    } else {
      setLanguage(LANGUAGES.EN)
    }
  }, [])

  function handleChangeLanguage(newLanguage: LANGUAGES) {
    setLanguage(newLanguage)
  }

  const data = { language, handleChangeLanguage }

  return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export { LanguageContext, LanguageProvider }

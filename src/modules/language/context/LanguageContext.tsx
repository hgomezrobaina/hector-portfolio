'use client'

import React, { useMemo } from 'react'
import { LANGUAGES } from '../constants/LANGUAGES'

interface Props {
  language: LANGUAGES
}

const LanguageContext = React.createContext<Props>({ language: LANGUAGES.EN })

function LanguageProvider({ language, children }: Props & { children: React.ReactNode }) {
  const data = useMemo(() => ({ language }), [language])

  return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export { LanguageContext, LanguageProvider }

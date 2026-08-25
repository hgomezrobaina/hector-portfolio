'use client'

import React, { createContext, useEffect, useState } from 'react'
import { THEME } from '../constants'

interface Props {
  theme: THEME
  handleChangeTheme(theme: THEME): void
}

export const ThemeContext = createContext<Props>({
  theme: THEME.DARK,
} as Props)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<THEME>(THEME.DARK)

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme')

    if (saveTheme) {
      setTheme(saveTheme as THEME)
    } else {
      setTheme(THEME.DARK)
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light')
    root.classList.remove('dark')
    root.classList.add(theme)
  }, [theme])

  function handleChangeTheme(newTheme: THEME) {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const data = { theme, handleChangeTheme }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

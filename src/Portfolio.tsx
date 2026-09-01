import App from './App'
import { LANGUAGES } from './modules/language/constants/LANGUAGES'
import { LanguageProvider } from './modules/language/context/LanguageContext'
import { ThemeProvider } from './modules/theme/context/ThemeContext'

interface Props {
  language: LANGUAGES
}

export default function Portfolio({ language }: Props) {
  return (
    <LanguageProvider language={language}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  )
}

import App from '../App'
import { LanguageProvider } from '../modules/language/context/LanguageContext'
import { ThemeProvider } from '../modules/theme/context/ThemeContext'

export default function Home() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>
  )
}

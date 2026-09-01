import { LANGUAGES } from '../../modules/language/constants/LANGUAGES'
import { LanguageProvider } from '../../modules/language/context/LanguageContext'
import { ThemeProvider } from '../../modules/theme/context/ThemeContext'
import { Article } from '../Articles/domain/article'
import ArticleApp from './components/ArticleApp/ArticleApp'

interface Props {
  language: LANGUAGES
  article: Article
  children: React.ReactNode
}

export default function ArticlePage({ language, article, children }: Props) {
  return (
    <LanguageProvider language={language}>
      <ThemeProvider>
        {/* el spread es obligatorio: una instancia de clase no puede cruzar a un
            componente cliente (React lanza en build); el objeto plano sí, y sigue
            cumpliendo el tipo Article porque la clase solo tiene campos */}
        <ArticleApp article={{ ...article }}>{children}</ArticleApp>
      </ThemeProvider>
    </LanguageProvider>
  )
}

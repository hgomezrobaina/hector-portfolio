import { LANGUAGES } from '../../../modules/language/constants/LANGUAGES'
import { ARTICLES } from '../constants/articles'
import { ArticleModule } from '../constants/article-content'
import { Article } from '../domain/article'

export function getArticleBySlug(slug: string): Article {
  const article = ARTICLES.find((a) => a.slug === slug)

  if (!article) {
    throw new Error(`Unknown article slug: ${slug}`)
  }

  return article
}

export function getArticlePath(language: LANGUAGES, slug: string): string {
  return language === LANGUAGES.ES ? `/es/articles/${slug}` : `/articles/${slug}`
}

export function loadArticleContent(slug: string, language: LANGUAGES): Promise<ArticleModule> {
  const found = ARTICLES.find((a) => a.slug === slug)

  if (found) {
    const fun = () => import(`../content/${slug}.${language}.mdx`)

    return fun() as Promise<ArticleModule>
  }

  throw new Error(`No content registered for article slug: ${slug}`)
}

import { Article } from '../../../components/Articles/domain/article'
import { getArticlePath } from '../../../components/Articles/utils/get-article'
import { LANGUAGES } from '../../language/constants/LANGUAGES'
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '../../shared/constants/SOCIAL_MEDIA'
import { AUTHOR_NAME } from '../constants/METADATA'
import { SITE_URL } from '../constants/SITE'

export function buildArticleJsonLd(article: Article, language: LANGUAGES) {
  const url = `${SITE_URL}${getArticlePath(language, article.slug)}`

  const person = {
    '@type': 'Person',
    name: AUTHOR_NAME,
    url: SITE_URL,
    sameAs: [GITHUB_URL, LINKEDIN_URL, TWITTER_URL],
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title[language],
    description: article.description[language],
    inLanguage: language,
    image: `${SITE_URL}${article.image.image}`,
    datePublished: article.date.toISOString(),
    author: person,
    publisher: person,
    url,
    mainEntityOfPage: url,
    ...(article.link ? { sameAs: [article.link] } : {}),
    keywords: article.tags.join(', '),
  }
}

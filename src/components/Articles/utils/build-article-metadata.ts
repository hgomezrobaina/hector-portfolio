import type { Metadata } from 'next'
import {
  AUTHOR_NAME,
  SITE_ICONS,
  SITE_KEYWORDS,
  SITE_NAME,
  TWITTER_HANDLE,
} from '../../../modules/app/constants/METADATA'
import { SITE_URL } from '../../../modules/app/constants/SITE'
import { LANGUAGES } from '../../../modules/language/constants/LANGUAGES'
import { getArticleBySlug, getArticlePath } from './get-article'

const OG_LOCALES: Record<LANGUAGES, string> = {
  [LANGUAGES.EN]: 'en_US',
  [LANGUAGES.ES]: 'es_ES',
}

export function buildArticleMetadata(language: LANGUAGES, slug: string): Metadata {
  const article = getArticleBySlug(slug)

  const title = `${article.title[language]} | ${AUTHOR_NAME}`
  const description = article.description[language]
  const path = getArticlePath(language, slug)
  const enPath = getArticlePath(LANGUAGES.EN, slug)
  const esPath = getArticlePath(LANGUAGES.ES, slug)

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [...SITE_KEYWORDS[language], ...article.tags],
    authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
    creator: AUTHOR_NAME,
    publisher: AUTHOR_NAME,
    category: 'technology',
    alternates: {
      canonical: path,
      languages: {
        en: enPath,
        es: esPath,
        'x-default': enPath,
      },
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      locale: OG_LOCALES[language],
      publishedTime: article.date.toISOString(),
      authors: [SITE_URL],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: TWITTER_HANDLE,
    },
    icons: SITE_ICONS,
  }
}

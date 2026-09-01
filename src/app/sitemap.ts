import type { MetadataRoute } from 'next'
import { ARTICLES } from '../components/Articles/constants/articles'
import { getArticlePath } from '../components/Articles/utils/get-article'
import { SITE_URL } from '../modules/app/constants/SITE'
import { LANGUAGES } from '../modules/language/constants/LANGUAGES'

export const dynamic = 'force-static'

const LANGUAGES_ALTERNATES = {
  en: SITE_URL,
  es: `${SITE_URL}/es`,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const articleEntries: MetadataRoute.Sitemap = ARTICLES.flatMap(({ slug, date }) => {
    const languages = {
      en: `${SITE_URL}${getArticlePath(LANGUAGES.EN, slug)}`,
      es: `${SITE_URL}${getArticlePath(LANGUAGES.ES, slug)}`,
    }

    return [languages.en, languages.es].map((url) => ({
      url,
      lastModified: date,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
      alternates: { languages },
    }))
  })

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages: LANGUAGES_ALTERNATES },
    },
    {
      url: `${SITE_URL}/es`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages: LANGUAGES_ALTERNATES },
    },
    ...articleEntries,
  ]
}

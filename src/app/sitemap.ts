import type { MetadataRoute } from 'next'
import { SITE_URL } from '../modules/app/constants'

export const dynamic = 'force-static'

const LANGUAGES_ALTERNATES = {
  en: SITE_URL,
  es: `${SITE_URL}/es`,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

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
  ]
}

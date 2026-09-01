import { LANGUAGES } from '../../language/constants/LANGUAGES'
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL, EMAIL } from '../../shared/constants/SOCIAL_MEDIA'
import { APP_IMAGES } from '../constants/APP_IMAGES'
import { AUTHOR_NAME } from '../constants/METADATA'
import { SITE_URL } from '../constants/SITE'

const JOB_TITLE: Record<LANGUAGES, string> = {
  [LANGUAGES.EN]: 'Fullstack Developer',
  [LANGUAGES.ES]: 'Desarrollador Fullstack',
}

export function buildPersonJsonLd(language: LANGUAGES) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: AUTHOR_NAME,
    url: language === LANGUAGES.ES ? `${SITE_URL}/es` : SITE_URL,
    image: `${SITE_URL}${APP_IMAGES.ME_IMAGE.image}`,
    jobTitle: JOB_TITLE[language],
    email: EMAIL,
    sameAs: [GITHUB_URL, LINKEDIN_URL, TWITTER_URL],
  }
}

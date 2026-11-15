import { LANGUAGES } from '../../language/constants/language'
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL, EMAIL } from '../../shared/constants/social-media'
import { APP_IMAGES } from '../constants/app-images'
import { AUTHOR_NAME } from '../constants/metadata'
import { SITE_URL } from '../constants/site'

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

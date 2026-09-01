import type { Metadata } from 'next'

export const SITE_ICONS: Metadata['icons'] = {
  icon: [
    { url: '/logo/favicon.ico' },
    { url: '/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
  ],
  apple: [{ url: '/logo/apple-touch-icon.png', sizes: '180x180' }],
}

export const LANGUAGE_ALTERNATES = {
  en: '/',
  es: '/es',
  'x-default': '/',
}

export const SITE_NAME = 'Héctor Gómez | Portfolio'
export const AUTHOR_NAME = 'Héctor Gómez'
export const TWITTER_HANDLE = '@hgomezrobaina'

export const SITE_KEYWORDS = {
  en: [
    'Héctor Gómez',
    'Fullstack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'TypeScript',
    'JavaScript',
    'Software Engineer portfolio',
    'Web developer portfolio',
  ],
  es: [
    'Héctor Gómez',
    'Desarrollador Fullstack',
    'Desarrollador React',
    'Desarrollador Next.js',
    'Desarrollador Node.js',
    'TypeScript',
    'JavaScript',
    'Portafolio de programador',
    'Portafolio desarrollador web',
  ],
}

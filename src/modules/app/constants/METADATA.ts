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

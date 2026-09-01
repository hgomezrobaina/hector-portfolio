import type { Metadata } from 'next'
import {
  AUTHOR_NAME,
  LANGUAGE_ALTERNATES,
  SITE_ICONS,
  SITE_KEYWORDS,
  SITE_NAME,
  TWITTER_HANDLE,
} from '../../modules/app/constants/METADATA'
import { SITE_URL } from '../../modules/app/constants/SITE'
import '../globals.css'

const TITLE = 'Héctor Gómez | Portfolio'
const DESCRIPTION = 'Hector Gomez Fullstack Developer online portfolio'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: SITE_KEYWORDS.en,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  category: 'technology',
  alternates: {
    canonical: '/',
    languages: LANGUAGE_ALTERNATES,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: TWITTER_HANDLE,
  },
  icons: SITE_ICONS,
  manifest: '/logo/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

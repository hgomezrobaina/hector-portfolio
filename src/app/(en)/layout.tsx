import type { Metadata } from 'next'
import { LANGUAGE_ALTERNATES, SITE_ICONS, SITE_URL } from '../../modules/app/constants'
import '../globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Héctor Gómez | Portfolio',
  description: 'Hector Gomez Fullstack Developer online portfolio',
  alternates: {
    canonical: '/',
    languages: LANGUAGE_ALTERNATES,
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

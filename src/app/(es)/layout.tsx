import type { Metadata } from 'next'
import { LANGUAGE_ALTERNATES, SITE_ICONS, SITE_URL } from '../../modules/app/constants'
import '../globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Héctor Gómez | Portafolio',
  description: 'Portafolio online de Héctor Gómez, desarrollador fullstack',
  alternates: {
    canonical: '/es',
    languages: LANGUAGE_ALTERNATES,
  },
  icons: SITE_ICONS,
  manifest: '/logo/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hector Gomez | Portfolio',
  description: 'Hector Gomez Fullstack Developer online portfolio',
  keywords: ['portfolio', 'developer', 'fullstack'],
  icons: {
    icon: [
      { url: '/logo/favicon.ico' },
      { url: '/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/logo/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/logo/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

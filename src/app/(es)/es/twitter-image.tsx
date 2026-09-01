import { ImageResponse } from 'next/og'
import { ogImageElement } from '../../_og/ogImageElement'

export const dynamic = 'force-static'
export const alt = 'Héctor Gómez | Portafolio de Desarrollador Fullstack'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(ogImageElement('Desarrollador Fullstack'), size)
}

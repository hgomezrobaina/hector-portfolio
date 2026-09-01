import { IconProps } from '../interfaces/icon'
import { DEFAULT_ICON_SIZE } from '../constants/DEFAULT_ICON_SIZE'

export default function Mail({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 39H44V24V9H24H4V24V39Z" fill="none" stroke="inherit" strokeWidth="4" strokeLinejoin="round" />
      <path d="M4 9L24 24L44 9" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 9H4V24" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 24V9H24" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

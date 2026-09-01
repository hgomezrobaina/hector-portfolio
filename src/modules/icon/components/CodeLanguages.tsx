import { IconProps } from '../interfaces/icon'
import { DEFAULT_ICON_SIZE } from '../constants/DEFAULT_ICON_SIZE'

export default function CodeLanguages({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 7L23 21L9 35" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 41L39 41" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

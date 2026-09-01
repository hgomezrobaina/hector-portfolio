import { IconProps } from '../interfaces/icon'
import { DEFAULT_ICON_SIZE } from '../constants/DEFAULT_ICON_SIZE'

export default function Download({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 24.0083V42H42V24" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33 23L24 32L15 23" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23.9917 6V32" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

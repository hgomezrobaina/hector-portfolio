import { IconProps } from '../interfaces/icon'
import { DEFAULT_ICON_SIZE } from '../constants/DEFAULT_ICON_SIZE'

export default function Experience({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 33H4V7H44V33H36H12Z" fill="none" stroke="inherit" strokeWidth="4" strokeLinejoin="round" />
      <path d="M16 22V26" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 33V39" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 18V26" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 14V26" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 41H36" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

import { IconProps } from '../interfaces/icon'
import { DEFAULT_ICON_SIZE } from '../constants/DEFAULT_ICON_SIZE'

export default function Frontend({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V21"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M24 34V42" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 6L28 10L32 14" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38 6L42 10L38 14" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 42L34 42" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

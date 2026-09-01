import { IconProps } from '../interfaces/icon'
import { DEFAULT_ICON_SIZE } from '../constants/DEFAULT_ICON_SIZE'

export default function SourceCode({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V25.8824"
        stroke="inherit"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"
        fill="none"
        stroke="inherit"
        strokeWidth="4"
      />
      <path d="M34 33L30 37L34 41" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 33L44 37L40 41" stroke="inherit" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)" fill="inherit" />
      <circle r="2" transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)" fill="inherit" />
    </svg>
  )
}

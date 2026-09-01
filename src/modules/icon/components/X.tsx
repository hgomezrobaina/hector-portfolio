import { DEFAULT_ICON_SIZE } from '../constants/DEFAULT_ICON_SIZE'
import { IconProps } from '../interfaces/icon'

export default function X({ size = DEFAULT_ICON_SIZE }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33 6H44L15 42H4L33 6Z" fill="none" stroke="inherit" strokeWidth="4" strokeLinejoin="round" />
      <path d="M15 6H4L33 42H44L15 6Z" fill="none" stroke="inherit" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  )
}

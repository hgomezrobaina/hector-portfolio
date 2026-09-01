import { clsx } from 'clsx'
import { IconProps } from '../../../../../../modules/icon/interfaces/icon'

interface Props {
  icon: React.FC<IconProps>
  title: string
}

export default function Header({ icon: Icon, title }: Props) {
  const HEADER_CLASS = clsx(
    'flex items-center justify-center',
    'text-center text-white text-2xl py-5 px-6 stroke-white',
    'bg-gradient-to-r from-secondColor to-blue-6 dark:from-blue-7 dark:to-blue-9',
    'gap-x-4',
  )

  return (
    <header className={HEADER_CLASS}>
      <span className="flex items-center justify-center rounded-lg bg-white/15 p-2">
        <Icon size={22} />
      </span>
      <h3 className="font-fontCodeBold tracking-wide">{title}</h3>
    </header>
  )
}

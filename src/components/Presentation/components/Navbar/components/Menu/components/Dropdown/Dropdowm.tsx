import { clsx } from 'clsx'
import { Close, Config, Sections } from './components'

interface Props {
  handleChangeOpenMenu: () => void
  openMenu: boolean
}

export default function Dropdowm({ handleChangeOpenMenu, openMenu }: Props) {
  const CONTAINER_CLASS = clsx(
    'fixed top-0 left-0',
    'w-full h-screen',
    'bg-primaryDarkColor/40 dark:bg-black/50',
    'backdrop-blur-sm',
    'z-30',
    'transition-[opacity,visibility] duration-300',
    openMenu ? 'visible opacity-100' : 'invisible opacity-0',
  )

  const CLASS = clsx(
    'absolute right-0 top-0',
    'min-h-[500px] w-full max-w-[500px] h-full',
    'shadow-2xl shadow-black/20',
    'bg-dark-blue-1/90 dark:bg-primaryDarkColor/90 backdrop-blur-xl',
    'border-l border-blue-4/40 dark:border-dark-blue-9',
    'flex flex-col justify-between',
    'z-30',
    'px-10 py-6 esm:px-6',
    'transition-transform duration-300',
  )

  return (
    <div className={CONTAINER_CLASS} onClick={handleChangeOpenMenu}>
      <div
        className={CLASS}
        style={{ transform: openMenu ? `translateX(0)` : `translateX(100%)` }}
        onClick={(e) => e.stopPropagation()}
      >
        <Close handleChangeOpenMenu={handleChangeOpenMenu} />
        <Sections handleChangeOpenMenu={handleChangeOpenMenu} />
        <Config />
      </div>
    </div>
  )
}

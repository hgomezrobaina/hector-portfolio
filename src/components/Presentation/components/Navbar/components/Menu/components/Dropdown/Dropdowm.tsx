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
    'bg-dark-blue-10/50',
    'z-30',
    openMenu ? 'visible' : 'invisible',
  )

  const CLASS = clsx(
    'absolute right-0 top-0',
    'min-h-[500px] w-full max-w-[500px] h-full',
    'shadow-lg',
    'bg-white dark:bg-dark-blue-10',
    'flex flex-col justify-between',
    'z-30',
    'px-10 py-5 esm:px-6',
    'transition-all duration-300',
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

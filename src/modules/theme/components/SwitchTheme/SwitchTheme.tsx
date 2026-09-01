import { THEME } from '../../constants/THEME'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import Dark from '../../../icon/components/Dark'
import Light from '../../../icon/components/Light'
import useTheme from '../../hooks/useTheme'

export default function SwitchTheme() {
  const { theme, handleChangeTheme } = useTheme()
  const isLight = theme === THEME.LIGHT

  function toggleSwitch() {
    if (isLight) {
      handleChangeTheme(THEME.DARK)
    } else {
      handleChangeTheme(THEME.LIGHT)
    }
  }

  const containerClass = clsx(
    'esm:w-[80px] w-[90px] h-[35px]',
    'items-center flex',
    'px-3',
    'rounded-sm',
    'cursor-pointer',
    'bg-scale-11/40 dark:bg-white/20',
    {
      'justify-start': isLight,
      'justify-end': !isLight,
    },
  )

  const cubicClass = clsx('rounded-sm esm:w-[30px] w-[40px] h-[25px] flex justify-center items-center', {
    'bg-secondColor stroke-white': isLight,
    'bg-primaryDarkColor stroke-white': !isLight,
  })

  return (
    <div className={containerClass} onClick={toggleSwitch}>
      <motion.div
        className={cubicClass}
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      >
        {isLight ? <Light size={16} /> : <Dark size={16} />}
      </motion.div>
    </div>
  )
}

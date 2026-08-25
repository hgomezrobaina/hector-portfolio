import { clsx } from 'clsx'
import { motion } from 'framer-motion'

interface Props {
  odd: boolean
  bigScreen: boolean
}

export default function Point({ odd, bigScreen }: Props) {
  const CLASS = clsx(
    'absolute',
    'min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px]',
    'bg-blue-4',
    'z-30',
    'rounded-full',
    'ring-4 ring-blue-4/20 dark:ring-blue-4/15',
    'group-hover:ring-blue-4/45 dark:group-hover:ring-blue-4/35',
    'transition-shadow duration-300',
    {
      'top-7': !bigScreen,
    },
  )

  const MOVE = bigScreen ? 8.5 : 7

  return (
    <motion.div
      className={CLASS}
      style={{
        right: !odd && bigScreen ? 0 : 'auto',
        left: (odd && bigScreen) || !bigScreen ? 0 : 'auto',
        transform: (odd && bigScreen) || !bigScreen ? `translateX(-${MOVE}px)` : `translateX(${MOVE}px)`,
      }}
    />
  )
}

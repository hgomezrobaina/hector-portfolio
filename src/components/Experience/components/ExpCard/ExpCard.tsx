import { clsx } from 'clsx'
import { Limit } from '../../interfaces/experience-card'
import { Note, Point } from './components'
import { useScreen } from '../../../../modules/shared/hooks'
import { Variants, motion } from 'framer-motion'

interface Props {
  notes: Array<string>
  position: string
  limit: Limit
  odd: boolean
}

export default function ExpCard({ limit, position, odd, notes }: Props) {
  const { bigScreen } = useScreen(768)

  const CARD_CLASS = clsx(
    'relative',
    'flex flex-col justify-center',
    'w-full',
    'py-6 px-8',
    'rounded-xl',
    'border-[1.5px] border-blue-4/60 dark:border-dark-blue-9',
    'bg-white dark:bg-dark-blue-10',
    'shadow-md shadow-blue-4/10 dark:shadow-black/20',
    'transition-[border-color,box-shadow] duration-300',
    'hover:border-blue-5 dark:hover:border-blue-7',
    'hover:shadow-xl hover:shadow-blue-4/25 dark:hover:shadow-blue-7/20',
  )

  const CONTAINER_CLASS = clsx(
    'group flex w-full items-center',
    'relative',
    { 'pl-7': (odd && bigScreen) || !bigScreen, 'pr-7': !odd && bigScreen },
    { 'col-end-2 col-start-2': odd && bigScreen },
  )

  const variants: Variants = {
    offscreen: {
      x: odd ? 100 : -100,
      opacity: 0.2,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.8,
        delay: 0.3,
      },
    },
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <motion.div className={CONTAINER_CLASS}>
        <Point odd={odd} bigScreen={bigScreen} />

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className={CARD_CLASS}
          variants={variants}
        >
          <h3 className="font-fontCodeBold text-xl mb-1">{position}</h3>

          <p className="mb-3 font-fontCode text-sm text-blue-6 dark:text-blue-4">{`${limit.init} - ${limit.finish}`}</p>

          <ul>
            {notes.map((note, index) => (
              <Note key={index} text={note} />
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  )
}

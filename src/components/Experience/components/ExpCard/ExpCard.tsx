import clsx from 'clsx'
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
    'shadow-md',
    'py-5 px-10',
    'dark:bg-dark-blue-10',
    'rounded',
    'border-2 border-blue-4 dark:border-none',
  )

  const CONTAINER_CLASS = clsx(
    'flex w-full items-center',
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
          <h1 className="font-fontCodeBold text-xl mb-2">{position}</h1>

          <p className="mb-2.5 dark:text-scale-11 text-scale-8 text-base">{`${limit.init} - ${limit.finish}`}</p>

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

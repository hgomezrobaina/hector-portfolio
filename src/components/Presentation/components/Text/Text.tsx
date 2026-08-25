// eslint-disable-next-line import/named
import { LegacyAnimationControls, motion } from 'framer-motion'
import { useTranslation } from '../../../../modules/language/hooks'
import Buttons from './components/Buttons/Buttons';

interface Props {
  principalTextAnimate: LegacyAnimationControls
}

export default function Text({ principalTextAnimate }: Props) {
  const { HELLO_MESSAGE, FULLSTACK_TITLE, FIRST_TEXT, SECOND_TEXT } = useTranslation({
    HELLO_MESSAGE: { en: "Hi, I'm", es: 'Hola, soy' },
    FULLSTACK_TITLE: { en: 'fullstack developer', es: 'desarrollador fullstack' },
    FIRST_TEXT: { en: 'I am a software engineer and', es: 'Soy un ingeniero de software y' },
    SECOND_TEXT: {
      en: 'dedicated mainly to the development of useful web applications.',
      es: 'dedicado principalmente al desarrollo de apliaciones web de gran utilidad',
    },
  })

  return (
    <motion.div
      className="flex flex-col max-w-150 gap-y-2"
      transition={{ duration: 0.8 }}
      animate={principalTextAnimate}
      initial={{ translateY: '1000px' }}
    >
      <p className="font-fontCode text-2xl text-secondColor dark:text-primaryColor esm:text-xl">{HELLO_MESSAGE}</p>
      <h1 className="font-fontExtraBold md:text-7xl text-6xl exsm:text-5xl pb-2 bg-gradient-to-r from-primaryDarkColor to-blue-7 dark:from-white dark:to-blue-4 bg-clip-text text-transparent">
        Héctor Gómez
      </h1>
      <div className="text-xl esm:text-lg mb-6 esm:mb-5 leading-relaxed text-scale-8 dark:text-scale-11">
        {FIRST_TEXT}{' '}
        <p className="inline font-fontMedium text-secondColor  dark:text-primaryColor">{FULLSTACK_TITLE}</p>{' '}
        {SECOND_TEXT}
      </div>

      <Buttons />
    </motion.div>
  )
}

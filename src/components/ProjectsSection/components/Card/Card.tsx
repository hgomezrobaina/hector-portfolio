import clsx from 'clsx'
import { Variants, motion } from 'framer-motion'
import MadeWithSection from './components/MadeWithSection/MadeWithSection'
import DescriptionSection from './components/DescriptionSection/DescriptionSection'
import LinksSection from './components/LinksSection/LinksSection'
import ImageSection from './components/ImageSection/ImageSection'

interface Props {
  image: string
  alt: string
  madeWith: string[]
  description: string
  externalLink: string
  githubLink: string
  title: string
  index: number
}

export default function Card({ image, alt, description, externalLink, githubLink, madeWith, title }: Props) {
  const CLASS = clsx('flex flex-col w-full h-max', 'rounded', 'border-2 border-blue-4 dark:border-none')

  const variants: Variants = {
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    offscreen: {
      opacity: 1,
      y: 100,
    },
  }

  return (
    <motion.div
      className={CLASS}
      variants={variants}
      initial="offscreen"
      viewport={{ once: true }}
      whileInView="onscreen"
      whileHover={{ translateY: -10 }}
    >
      <ImageSection image={image} alt={alt} />

      <motion.div className="flex flex-col py-4 px-7 dark:bg-dark-blue-10 rounded-br rounded-bl">
        <LinksSection title={title} externalLink={externalLink} githubLink={githubLink} />
        <DescriptionSection description={description} />
        <MadeWithSection madeWith={madeWith} />
      </motion.div>
    </motion.div>
  )
}

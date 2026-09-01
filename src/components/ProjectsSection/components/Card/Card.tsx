import { clsx } from 'clsx'
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
  githubLink: string | null
  title: string
  index: number
}

export default function Card({ image, alt, description, externalLink, githubLink, madeWith, title }: Props) {
  const CLASS = clsx(
    'group flex flex-col w-full h-full overflow-hidden',
    'rounded-xl',
    'border-[1.5px] border-blue-4/60 dark:border-dark-blue-9',
    'bg-white dark:bg-dark-blue-10',
    'shadow-md shadow-blue-4/10 dark:shadow-black/20',
    'transition-[border-color,box-shadow] duration-300',
    'hover:border-blue-5 dark:hover:border-blue-7',
    'hover:shadow-xl hover:shadow-blue-4/25 dark:hover:shadow-blue-7/20',
  )

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
      whileHover={{ translateY: -8 }}
    >
      <ImageSection image={image} alt={alt} />

      <motion.div className="flex flex-col flex-1 py-5 px-7">
        <LinksSection title={title} externalLink={externalLink} githubLink={githubLink} />
        <DescriptionSection description={description} />
        <MadeWithSection madeWith={madeWith} />
      </motion.div>
    </motion.div>
  )
}

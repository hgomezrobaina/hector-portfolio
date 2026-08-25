import { clsx } from 'clsx'
import { Article as IArticle } from '../../interfaces'
import { Button, Image } from './components'
import { Variants, motion } from 'framer-motion'

interface Props {
  article: IArticle
  left: boolean
}

export default function Article({ article, left }: Props) {
  const CARD_CLASS = clsx(
    'group flex md:flex-row flex-col items-stretch md:gap-9 gap-6',
    { 'md:flex-row-reverse': !left },
    'h-max w-full',
    'rounded-xl',
    'border-[1.5px] border-blue-4/60 dark:border-dark-blue-9',
    'bg-white dark:bg-dark-blue-10',
    'shadow-md shadow-blue-4/10 dark:shadow-black/20',
    'transition-[border-color,box-shadow] duration-300',
    'hover:border-blue-5 dark:hover:border-blue-7',
    'hover:shadow-xl hover:shadow-blue-4/25 dark:hover:shadow-blue-7/20',
    'cursor-pointer',
    'px-8 py-6',
  )

  const variants: Variants = {
    offscreen: {
      x: left ? -100 : 100,
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
    <motion.a
      href={article.link}
      target="_blank"
      rel="noreferrer"
      className={CARD_CLASS}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={variants}
    >
      <Image image={article.image} title={article.title} />

      <div className="flex flex-col flex-1">
        <h1 className="mb-2.5 font-fontCodeBold xl:text-2xl text-xl transition-colors duration-300 group-hover:text-blue-6 dark:group-hover:text-blue-4">
          {article.title}
        </h1>

        <p className="mb-3 leading-7 xl:text-base text-base dark:text-scale-12 text-left text-scale-8">
          {article.description}
        </p>

        <Button />
      </div>
    </motion.a>
  )
}

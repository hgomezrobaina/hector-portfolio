import NextImage from 'next/image'
import { LANGUAGES } from '../../../../modules/language/constants/LANGUAGES'
import useLanguage from '../../../../modules/language/hooks/useLanguage'
import useTranslation from '../../../../modules/language/hooks/useTranslation'
import { AUTHOR_NAME } from '../../../../modules/app/constants/METADATA'
import { Article } from '../../../Articles/domain/article'

interface Props {
  article: Article
}

const DATE_LOCALES: Record<LANGUAGES, string> = {
  [LANGUAGES.EN]: 'en-US',
  [LANGUAGES.ES]: 'es-ES',
}

export default function ArticleHeader({ article }: Props) {
  const { language } = useLanguage()

  const { READING_TIME } = useTranslation({
    READING_TIME: {
      en: `${article.readingTimeMinutes} min read`,
      es: `${article.readingTimeMinutes} min de lectura`,
    },
  })

  const formattedDate = article.date.toLocaleDateString(DATE_LOCALES[language], {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="mb-12">
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
        {article.tags.map((tag) => (
          <span key={tag} className="font-fontCode text-sm text-secondColor dark:text-primaryColor">
            #{tag}
          </span>
        ))}
      </div>

      <h1 className="font-fontExtraBold md:text-5xl text-4xl exsm:text-3xl leading-tight pb-4 bg-gradient-to-r from-primaryDarkColor to-blue-7 dark:from-white dark:to-blue-4 bg-clip-text text-transparent">
        {article.title[language]}
      </h1>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-scale-8 dark:text-slate mb-8">
        <span>{AUTHOR_NAME}</span>
        <span aria-hidden>·</span>
        <time dateTime={article.date.toISOString()}>{formattedDate}</time>
        <span aria-hidden>·</span>
        <span>{READING_TIME}</span>
      </div>

      <div className="overflow-hidden rounded-xl border-[1.5px] border-blue-4/60 dark:border-dark-blue-9 shadow-md shadow-blue-4/10 dark:shadow-black/20">
        <NextImage
          src={article.image.image}
          alt={article.title[language]}
          width={1024}
          height={1024}
          priority
          className="w-full h-auto max-h-[380px] object-cover"
        />
      </div>
    </header>
  )
}

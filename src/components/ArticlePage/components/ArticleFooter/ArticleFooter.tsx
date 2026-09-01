import Link from 'next/link'
import { clsx } from 'clsx'
import ArrowRight from '../../../../modules/icon/components/ArrowRight'
import Share from '../../../../modules/icon/components/Share'
import { LANGUAGE_ROUTES } from '../../../../modules/language/constants/LANGUAGES'
import useLanguage from '../../../../modules/language/hooks/useLanguage'
import useTranslation from '../../../../modules/language/hooks/useTranslation'
import { Article } from '../../../Articles/domain/article'

interface Props {
  article: Article
}

export default function ArticleFooter({ article }: Props) {
  const { language } = useLanguage()

  const linkHost = article.link ? new URL(article.link).hostname.replace('www.', '') : null

  const { EXTERNAL, BACK } = useTranslation({
    EXTERNAL: { en: `Also on ${linkHost ?? ''}`, es: `También en ${linkHost ?? ''}` },
    BACK: { en: 'Back to articles', es: 'Volver a artículos' },
  })

  const EXTERNAL_CLASS = clsx(
    'flex items-center gap-x-2',
    'px-5 py-2.5 rounded-lg',
    'font-fontSemiBold text-sm',
    'border-[1.5px] border-blue-4/60 dark:border-dark-blue-9',
    'bg-white dark:bg-dark-blue-10',
    'hover:border-blue-5 dark:hover:border-blue-7',
    'hover:text-blue-6 dark:hover:text-blue-4',
    'transition-colors duration-300',
  )

  return (
    <footer className="mt-14 pt-8 border-t border-blue-4/60 dark:border-dark-blue-9 flex flex-wrap items-center justify-between gap-4">
      <Link
        href={`${LANGUAGE_ROUTES[language]}#articles`}
        className="group flex items-center gap-x-1.5 font-fontCode text-sm hover:text-blue-6 dark:hover:text-blue-4 transition-colors duration-300"
      >
        <span className="rotate-180 stroke-current transition-transform duration-200 group-hover:-translate-x-1">
          <ArrowRight size={16} />
        </span>
        {BACK}
      </Link>

      {article.link && (
        <a href={article.link} target="_blank" rel="noreferrer" className={EXTERNAL_CLASS}>
          <span className="stroke-current">
            <Share size={16} />
          </span>
          {EXTERNAL}
        </a>
      )}
    </footer>
  )
}

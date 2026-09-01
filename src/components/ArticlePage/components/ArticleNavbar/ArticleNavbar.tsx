import Link from 'next/link'
import { clsx } from 'clsx'
import Logo from '../../../Presentation/components/Navbar/components/Logo/Logo'
import ArrowRight from '../../../../modules/icon/components/ArrowRight'
import { LANGUAGES, LANGUAGE_ROUTES } from '../../../../modules/language/constants/LANGUAGES'
import useLanguage from '../../../../modules/language/hooks/useLanguage'
import useTranslation from '../../../../modules/language/hooks/useTranslation'
import { savePreferredLanguage } from '../../../../modules/language/utils/preferredLanguage'
import SwitchTheme from '../../../../modules/theme/components/SwitchTheme/SwitchTheme'
import { Article } from '../../../Articles/domain/article'
import { getArticlePath } from '../../../Articles/utils/get-article'

interface Props {
  article: Article
}

export default function ArticleNavbar({ article }: Props) {
  const { language } = useLanguage()

  const { BACK } = useTranslation({
    BACK: { en: 'Articles', es: 'Artículos' },
  })

  const otherLanguage = language === LANGUAGES.EN ? LANGUAGES.ES : LANGUAGES.EN

  const LANG_CLASS = clsx(
    'font-fontCode text-sm uppercase',
    'px-3 py-1.5 rounded-full',
    'border-[1px] border-scale-11 dark:border-dark-blue-9',
    'hover:border-blue-5 dark:hover:border-blue-7',
    'hover:text-blue-6 dark:hover:text-blue-4',
    'transition-colors duration-300',
  )

  return (
    <nav className="fixed top-0 left-0 z-40 w-full bg-dark-blue-1/80 dark:bg-primaryDarkColor/80 backdrop-blur-md border-b border-blue-4/40 dark:border-dark-blue-9/60">
      <div className="flex w-full justify-center px-8">
        <div className="max-w-[1000px] flex w-full items-center justify-between py-3">
          <div className="flex items-center gap-x-5">
            <Link href={LANGUAGE_ROUTES[language]} aria-label="Home">
              <Logo />
            </Link>

            <Link
              href={`${LANGUAGE_ROUTES[language]}#articles`}
              className="group flex items-center gap-x-1.5 font-fontCode text-sm hover:text-blue-6 dark:hover:text-blue-4 transition-colors duration-300"
            >
              <span className="rotate-180 stroke-current transition-transform duration-200 group-hover:-translate-x-1">
                <ArrowRight size={16} />
              </span>
              {BACK}
            </Link>
          </div>

          <div className="flex items-center gap-x-4">
            <Link
              href={getArticlePath(otherLanguage, article.slug)}
              hrefLang={otherLanguage}
              className={LANG_CLASS}
              onClick={() => savePreferredLanguage(otherLanguage)}
            >
              {otherLanguage}
            </Link>

            <SwitchTheme />
          </div>
        </div>
      </div>
    </nav>
  )
}

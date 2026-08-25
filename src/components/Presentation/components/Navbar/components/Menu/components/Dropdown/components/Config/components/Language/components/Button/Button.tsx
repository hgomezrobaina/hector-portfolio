import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { AppImage } from '../../../../../../../../../../../../../../modules/app/interfaces/image'
import { LANGUAGES, LANGUAGE_ROUTES } from '../../../../../../../../../../../../../../modules/language/constants'
import { useLanguage } from '../../../../../../../../../../../../../../modules/language/hooks'
import { savePreferredLanguage } from '../../../../../../../../../../../../../../modules/language/utils'

interface Props {
  language: LANGUAGES
  image: AppImage
}

export default function Button({ language, image }: Props) {
  const { language: actualLanguage } = useLanguage()

  const IMG_SIZE = 24
  const isSelected = actualLanguage === language

  const CLASS = clsx(
    'flex items-center',
    'gap-3',
    'px-4 py-2',
    'rounded-full',
    'cursor-pointer',
    'transition-all duration-300',
    {
      'bg-secondColor dark:bg-blue-8': isSelected,
      'text-white': isSelected,
      'border-[1px] border-scale-11 dark:border-dark-blue-9 hover:border-blue-5 dark:hover:border-blue-7': !isSelected,
    },
  )

  return (
    <Link
      href={LANGUAGE_ROUTES[language]}
      hrefLang={language}
      className={CLASS}
      onClick={() => savePreferredLanguage(language)}
    >
      <Image src={image.image} alt={image.alt} width={IMG_SIZE} height={IMG_SIZE} />

      <p className="text-base uppercase font-fontCode">{language}</p>
    </Link>
  )
}

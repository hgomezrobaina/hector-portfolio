import ArrowRight from '../../../../../../../../modules/icon/components/ArrowRight'
import useTranslation from '../../../../../../../../modules/language/hooks/useTranslation'
import ExternalLink from '../../../../../../../../modules/app/components/ExtrernalLink/ExternalLink'
import { EMAIL_URL } from '../../../../../../../../modules/shared/constants/SOCIAL_MEDIA'
import { clsx } from 'clsx'

export default function ContactButton() {
  const { CONTACT_ME } = useTranslation({ CONTACT_ME: { en: 'Contact me', es: 'Contáctame' } })

  const CLASS = clsx(
    'group flex items-center',
    'py-2 esm:py-1.5 px-5 esm:px-5',
    'w-max',
    'text-xl esm:text-lg text-secondColor dark:text-primaryColor dark:hover:text-white hover:text-white',
    'border-1 border-secondColor dark:border-primaryColor',
    'hover:bg-secondColor dark:hover:bg-blue-8',
    'transition-all duration-300',
    'hover:-translate-y-0.5',
    'hover:shadow-lg hover:shadow-blue-4/25 dark:hover:shadow-blue-7/20',
    'font-fontCode',
    'stroke-secondColor dark:stroke-primaryColor hover:stroke-white dark:hover:stroke-white',
    'gap-x-4',
    'rounded-lg',
    'cursor-pointer',
  )

  return (
    <ExternalLink link={EMAIL_URL}>
      <button className={CLASS}>
        <p className="font-fontCode!">{CONTACT_ME}</p>

        <div className="transition-transform duration-200 group-hover:translate-x-2">
          <ArrowRight size={20} />
        </div>
      </button>
    </ExternalLink>
  )
}

import { clsx } from 'clsx'
import { ContactButton } from './components'
import { ExternalLink } from '../../../../../../modules/app/components'
import { SOCIAL_MEDIA } from '../../../../../../modules/shared/constants'

export default function Buttons() {
  const SOCIAL_CLASS = clsx(
    'inline-flex items-center justify-center',
    'p-2.5',
    'rounded-full',
    'border-2 border-scale-11 dark:border-dark-blue-9',
    'stroke-scale-8 dark:stroke-scale-11',
    'transition-all duration-300',
    'hover:-translate-y-0.5',
    'hover:border-secondColor dark:hover:border-primaryColor',
    'hover:stroke-secondColor dark:hover:stroke-primaryColor',
  )

  return (
    <div className="flex gap-x-5 gap-y-4 items-center w-full flex-wrap">
      <ContactButton />

      <div className="flex items-center gap-x-3">
        {SOCIAL_MEDIA.filter((m) => m.name !== 'Email').map((media, index) => {
          const Icon = media.icon

          return (
            <ExternalLink key={index} link={media.link} className={SOCIAL_CLASS}>
              <Icon size={22} />
            </ExternalLink>
          )
        })}
      </div>
    </div>
  )
}

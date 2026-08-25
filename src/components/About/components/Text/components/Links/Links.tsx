import { clsx } from 'clsx'
import { ExternalLink } from '../../../../../../modules/app/components'
import { SOCIAL_MEDIA } from '../../../../../../modules/shared/constants'

export default function Links() {
  const BUTTON_CLASS = clsx(
    'flex items-center',
    'px-5 py-2',
    'rounded-lg',
    'gap-x-3',
    'stroke-white',
    'dark:bg-dark-blue-9 bg-blue-6',
    'transition-all duration-300',
    'hover:bg-blue-7 dark:hover:bg-dark-blue-8',
    'hover:-translate-y-0.5',
    'hover:shadow-lg hover:shadow-blue-4/25 dark:hover:shadow-blue-7/20',
    'cursor-pointer',
    'text-white',
  )

  return (
    <div className="flex justify-end esm:justify-center flex-wrap gap-x-4 mt-6 gap-y-3">
      {SOCIAL_MEDIA.filter((m) => m.name !== 'Email').map((media, index) => {
        const Icon = media.icon

        return (
          <ExternalLink key={index} link={media.link}>
            <button className={BUTTON_CLASS}>
              <Icon size={24} />
              <p className="font-fontCodeBold">{media.name}</p>
            </button>
          </ExternalLink>
        )
      })}
    </div>
  )
}

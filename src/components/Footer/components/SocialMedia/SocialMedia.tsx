import ExternalLink from '../../../../modules/app/components/ExtrernalLink/ExternalLink'
import { SOCIAL_MEDIA } from '../../../../modules/shared/constants/SOCIAL_MEDIA'

export default function SocialMedia() {
  return (
    <div className="flex items-center gap-x-8">
      {SOCIAL_MEDIA.map((s, i) => {
        const Icon = s.icon

        return (
          <ExternalLink
            key={i}
            link={s.link}
            className="inline-flex stroke-scale-8 dark:stroke-scale-11 fill-transparent transition-all duration-300 hover:stroke-secondColor dark:hover:stroke-primaryColor hover:-translate-y-0.5"
          >
            <Icon size={26} />
          </ExternalLink>
        )
      })}
    </div>
  )
}

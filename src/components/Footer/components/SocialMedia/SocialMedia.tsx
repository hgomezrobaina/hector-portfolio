import { ExternalLink } from '../../../../modules/app/components'
import { SOCIAL_MEDIA } from '../../../../modules/shared/constants'

export default function SocialMedia() {
  return (
    <div className="flex items-center gap-x-10">
      {SOCIAL_MEDIA.map((s, i) => {
        const Icon = s.icon

        return (
          <ExternalLink
            key={i}
            link={s.link}
            className="hover:stroke-secondColor dark:hover:stroke-primaryColor stroke-white fill-transparent transition-all duratin-300"
          >
            <Icon size={30} />
          </ExternalLink>
        )
      })}
    </div>
  )
}

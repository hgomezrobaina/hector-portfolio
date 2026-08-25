import { ExternalLink } from '../../../../../../modules/app/components'
import { GitHub, Share } from '../../../../../../modules/icon/components'

interface Props {
  githubLink: string
  externalLink: string
  title: string
}

export default function LinksSection({ externalLink, githubLink, title }: Props) {
  return (
    <header className="flex w-full justify-between mb-2 items-center">
      <h3 className="font-fontSemiBold text-2xl">{title}</h3>

      <div className="flex gap-x-6 items-center">
        <ExternalLink
          link={githubLink}
          className="inline-flex dark:stroke-white stroke-black transition-all duration-300 hover:stroke-secondColor dark:hover:stroke-primaryColor hover:-translate-y-0.5"
        >
          <GitHub size={24} />
        </ExternalLink>
        <ExternalLink
          link={externalLink}
          className="inline-flex dark:stroke-white stroke-black transition-all duration-300 hover:stroke-secondColor dark:hover:stroke-primaryColor hover:-translate-y-0.5"
        >
          <Share size={24} />
        </ExternalLink>
      </div>
    </header>
  )
}

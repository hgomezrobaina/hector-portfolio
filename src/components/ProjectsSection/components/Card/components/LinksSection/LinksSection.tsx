import ExternalLink from '../../../../../../modules/app/components/ExtrernalLink/ExternalLink'
import GitHub from '../../../../../../modules/icon/components/GitHub'
import Share from '../../../../../../modules/icon/components/Share'

interface Props {
  githubLink: string | null
  externalLink: string
  title: string
}

export default function LinksSection({ externalLink, githubLink, title }: Props) {
  return (
    <header className="flex w-full justify-between mb-2 items-center">
      <h3 className="font-fontSemiBold text-2xl">{title}</h3>

      <div className="flex gap-x-6 items-center">
        {githubLink && (
          <ExternalLink
            link={githubLink}
            className="inline-flex dark:stroke-white stroke-black transition-all duration-300 hover:stroke-secondColor dark:hover:stroke-primaryColor hover:-translate-y-0.5"
          >
            <GitHub size={22} />
          </ExternalLink>
        )}

        <ExternalLink
          link={externalLink}
          className="inline-flex dark:stroke-white stroke-black transition-all duration-300 hover:stroke-secondColor dark:hover:stroke-primaryColor hover:-translate-y-0.5"
        >
          <Share size={22} />
        </ExternalLink>
      </div>
    </header>
  )
}

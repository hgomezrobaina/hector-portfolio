import { useSections } from '../../../../../../../../../../modules/app/hooks'

interface Props {
  handleChangeOpenMenu: () => void
}

export default function Sections({ handleChangeOpenMenu }: Props) {
  const { SECTIONS } = useSections()

  return (
    <div className="flex flex-col gap-4 items-center">
      {SECTIONS.map((section, index) => (
        <a href={`#${section.id}`} key={index} onClick={handleChangeOpenMenu}>
          <p className="cursor-pointer transition-all duration-200 px-3 rounded-sm py-1 dark:hover:bg-scale-10/50 hover:bg-scale-10/20">
            {section.navLabel}
          </p>
        </a>
      ))}
    </div>
  )
}

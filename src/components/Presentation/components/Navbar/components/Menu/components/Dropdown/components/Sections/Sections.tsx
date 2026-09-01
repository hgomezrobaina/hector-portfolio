import { SECTIONS } from '../../../../../../../../../../modules/app/constants/SECTIONS'
import useLanguage from '../../../../../../../../../../modules/language/hooks/useLanguage'

interface Props {
  handleChangeOpenMenu: () => void
}

export default function Sections({ handleChangeOpenMenu }: Props) {
  const { language } = useLanguage()

  return (
    <div className="flex flex-col gap-5 items-center">
      {SECTIONS.map((section, index) => (
        <a href={`#${section.id}`} key={index} onClick={handleChangeOpenMenu}>
          <p className="cursor-pointer flex items-baseline gap-x-3 px-4 py-1.5 rounded-lg text-lg transition-all duration-200 hover:bg-blue-4/10 dark:hover:bg-white/5 hover:text-blue-6 dark:hover:text-blue-4">
            <span className="font-fontCode text-sm text-secondColor dark:text-primaryColor">
              {String(index + 1).padStart(2, '0')}.
            </span>
            {section.navLabel[language]}
          </p>
        </a>
      ))}
    </div>
  )
}

import { clsx } from 'clsx'
import { Skill } from '../../interfaces/skill'
import useLanguage from '../../../../modules/language/hooks/useLanguage'
import Header from './components/Header/Header'
import Tech from './components/Tech/Tech'

export default function SkillCard({ title, skills, icon }: Skill) {
  const { language } = useLanguage()

  const CARD_CLASS = clsx(
    'flex h-full w-full flex-col overflow-hidden',
    'rounded-xl',
    'border-[1.5px] border-blue-4/60 dark:border-dark-blue-9',
    'bg-white dark:bg-secondDarkColor',
    'shadow-md shadow-blue-4/10 dark:shadow-black/20',
    'transition-all duration-300',
    'hover:-translate-y-2 hover:border-blue-5 dark:hover:border-blue-7',
    'hover:shadow-xl hover:shadow-blue-4/25 dark:hover:shadow-blue-7/20',
  )

  const CONTENT_CLASS = clsx(
    'grid xl:grid-cols-1 esm:grid-cols-1 grid-cols-2',
    'w-full h-full',
    'p-7',
    'gap-y-5 gap-x-4',
    'dark:stroke-white stroke-black',
    'dark:text-white text-xl',
  )

  return (
    <div className={CARD_CLASS}>
      <Header icon={icon} title={title[language]} />

      <div className={CONTENT_CLASS}>
        {skills.map((tech, index) => (
          <Tech key={index} alt={tech.image.alt} src={tech.image.image} tech={tech.tech} />
        ))}
      </div>
    </div>
  )
}

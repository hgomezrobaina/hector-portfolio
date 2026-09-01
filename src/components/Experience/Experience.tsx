import SectionContainer from '../../modules/app/components/SectionContainer/SectionContainer'
import SectionHeader from '../../modules/app/components/SectionHeader/SectionHeader'
import { EXPERIENCE } from '../../modules/app/constants/SECTIONS'
import useLanguage from '../../modules/language/hooks/useLanguage'
import ExpCard from './components/ExpCard/ExpCard'
import TimeLine from './components/TimeLine/TimeLine'
import { EXPERIENCE_CARDS } from './constants/EXPERIENCE_CARDS'

export default function Experience() {
  const { language } = useLanguage()

  return (
    <SectionContainer id={EXPERIENCE.id}>
      <SectionHeader title={EXPERIENCE.title[language]} index={4} />

      <div className="flex flex-col w-full gap-y-4 relative items-start md:items-center h-max">
        {EXPERIENCE_CARDS.map((card, index) => (
          <ExpCard
            key={index}
            limit={{ init: card.limits.init[language], finish: card.limits.finish[language] }}
            notes={card.notes.map((note) => note[language])}
            position={card.position[language]}
            odd={index % 2 !== 0}
          />
        ))}

        <TimeLine />
      </div>
    </SectionContainer>
  )
}

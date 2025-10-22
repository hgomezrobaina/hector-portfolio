import { SectionContainer, SectionHeader } from '../../modules/app/components'
import { useSections } from '../../modules/app/hooks'
import { Experience as ExperienceIcon } from '../../modules/icon/components'
import { ExpCard, TimeLine } from './components'
import useExperience from './hooks/useExperience'

export default function Experience() {
  const { CARDS } = useExperience()
  const { EXPERIENCE } = useSections()

  return (
    <SectionContainer id={EXPERIENCE.id}>
      <SectionHeader title={EXPERIENCE.title} icon={ExperienceIcon} />

      <div className="flex flex-col w-full gap-y-4 relative items-start md:items-center h-max">
        {CARDS.map((card, index) => (
          <ExpCard key={index} limit={card.limits} notes={card.notes} position={card.position} odd={index % 2 !== 0} />
        ))}

        <TimeLine />
      </div>
    </SectionContainer>
  )
}

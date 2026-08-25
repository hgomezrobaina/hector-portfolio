import { SectionContainer, SectionHeader } from '../../modules/app/components'
import { SkillCard } from './components'
import { useSkills } from './hooks'
import { useSections } from '../../modules/app/hooks'

export default function SkillsSection() {
  const { SKILLS } = useSkills()
  const { SKILLS: SKILLS_SECTION } = useSections()

  return (
    <SectionContainer id={SKILLS_SECTION.id}>
      <SectionHeader title={SKILLS_SECTION.title} index={2} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-3 justify-between mt-8 h-max gap-y-6">
        {SKILLS.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </SectionContainer>
  )
}

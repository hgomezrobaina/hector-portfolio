import SectionContainer from '../../modules/app/components/SectionContainer/SectionContainer'
import SectionHeader from '../../modules/app/components/SectionHeader/SectionHeader'
import SkillCard from './components/SkillCard/SkillCard'
import { SKILLS } from './constants/SKILLS'
import { SKILLS as SKILLS_SECTION } from '../../modules/app/constants/SECTIONS'
import useLanguage from '../../modules/language/hooks/useLanguage'

export default function SkillsSection() {
  const { language } = useLanguage()

  return (
    <SectionContainer id={SKILLS_SECTION.id}>
      <SectionHeader title={SKILLS_SECTION.title[language]} index={2} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-3 justify-between mt-8 h-max gap-y-6">
        {SKILLS.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </SectionContainer>
  )
}

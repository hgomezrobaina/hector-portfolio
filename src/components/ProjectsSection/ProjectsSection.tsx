import SectionContainer from '../../modules/app/components/SectionContainer/SectionContainer'
import SectionHeader from '../../modules/app/components/SectionHeader/SectionHeader'
import { PROYECTS } from '../../modules/app/constants/SECTIONS'
import { motion } from 'framer-motion'
import Card from './components/Card/Card'
import { PROJECTS } from './constants/PROJECTS'
import useLanguage from '../../modules/language/hooks/useLanguage'

export default function ProjectsSection() {
  const { language } = useLanguage()

  return (
    <SectionContainer id={PROYECTS.id}>
      <SectionHeader title={PROYECTS.title[language]} index={3} />

      <motion.div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-5 justify-between gap-y-4">
        {PROJECTS.map((project, index) => (
          <Card
            index={index}
            key={index}
            alt={project.image.alt}
            image={project.image.image}
            description={project.description[language]}
            externalLink={project.externalLink}
            githubLink={project.githubLink ?? null}
            madeWith={project.madeWith}
            title={project.title}
          />
        ))}
      </motion.div>
    </SectionContainer>
  )
}

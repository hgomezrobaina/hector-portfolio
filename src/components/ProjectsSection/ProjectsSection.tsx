import { SectionContainer, SectionHeader } from '../../modules/app/components'
import { useSections } from '../../modules/app/hooks'
import { motion } from 'framer-motion'
import Card from './components/Card/Card'
import useProjectSection from './hooks/useProjectSection'

export default function ProjectsSection() {
  const { PROJECTS } = useProjectSection()
  const { PROYECTS } = useSections()

  return (
    <SectionContainer id={PROYECTS.id}>
      <SectionHeader title={PROYECTS.title} index={3} />

      <motion.div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-5 justify-between gap-y-4">
        {PROJECTS.map((project, index) => (
          <Card
            index={index}
            key={index}
            alt={project.image.alt}
            image={project.image.image}
            description={project.description}
            externalLink={project.externalLink}
            githubLink={project.githubLink}
            madeWith={project.madeWith}
            title={project.title}
          />
        ))}
      </motion.div>
    </SectionContainer>
  )
}

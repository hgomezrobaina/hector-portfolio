import { APP_IMAGES } from '../../../modules/app/constants/APP_IMAGES'
import Backend from '../../../modules/icon/components/Backend'
import CodeLanguages from '../../../modules/icon/components/CodeLanguages'
import Frontend from '../../../modules/icon/components/Frontend'
import { Skill } from '../interfaces/skill'

export const SKILLS: Skill[] = [
  {
    title: { en: 'Frontend', es: 'Frontend' },
    skills: [
      { tech: 'React js', image: APP_IMAGES.SKILLS.REACT },
      { tech: 'Angular', image: APP_IMAGES.SKILLS.ANGULAR },
      { tech: 'Vue js', image: APP_IMAGES.SKILLS.VUE },
      { tech: 'HTML', image: APP_IMAGES.SKILLS.HTML },
      { tech: 'CSS', image: APP_IMAGES.SKILLS.CSS },
      { tech: 'Next js', image: APP_IMAGES.SKILLS.NEXT },
      { tech: 'Tailwind CSS', image: APP_IMAGES.SKILLS.TAILWIND },
    ],
    icon: Frontend,
  },
  {
    title: { en: 'Backend', es: 'Backend' },
    skills: [
      { tech: 'Nest js', image: APP_IMAGES.SKILLS.NESTJS },
      { tech: 'MongoDB', image: APP_IMAGES.SKILLS.MONGODB },
      { tech: 'GraphQL', image: APP_IMAGES.SKILLS.GRAPHQL },
      { tech: 'Docker', image: APP_IMAGES.SKILLS.DOCKER },
      { tech: 'Postgresql', image: APP_IMAGES.SKILLS.POSTGRESQL },
    ],
    icon: Backend,
  },
  {
    title: { en: 'Languages', es: 'Lenguajes' },
    skills: [
      { tech: 'Typescript', image: APP_IMAGES.SKILLS.TS },
      { tech: 'Javascript', image: APP_IMAGES.SKILLS.JS },
      { tech: 'Python', image: APP_IMAGES.SKILLS.PYTHON },
      { tech: 'Git', image: APP_IMAGES.SKILLS.GIT },
      { tech: 'Go', image: APP_IMAGES.SKILLS.GO },
    ],
    icon: CodeLanguages,
  },
]

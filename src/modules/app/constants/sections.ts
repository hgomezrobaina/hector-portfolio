import { Section } from '../interfaces/section'

export const PROYECTS: Section = {
  id: 'proyects',
  title: { en: 'Projects', es: 'Proyectos' },
  navLabel: { en: 'Projects', es: 'Proyectos' },
}

export const ABOUT: Section = {
  id: 'about-me',
  title: { en: 'About me', es: 'Sobre mi' },
  navLabel: { en: 'About', es: 'Acerca' },
}

export const SKILLS: Section = {
  id: 'skills',
  title: { en: 'Skills', es: 'Habilidades' },
  navLabel: { en: 'Skills', es: 'Habilidades' },
}

export const ARTICLES: Section = {
  id: 'articles',
  title: { en: 'Articles', es: 'Artículos' },
  navLabel: { en: 'Articles', es: 'Artículos' },
}

export const EXPERIENCE: Section = {
  id: 'trajectory',
  title: { en: 'Trajectory', es: 'Trayectoria' },
  navLabel: { en: 'Trajectory', es: 'Trayectoria' },
}

export const SECTIONS: Section[] = [PROYECTS, ABOUT, SKILLS, ARTICLES, EXPERIENCE]

export interface ExperienceCard {
  position: string
  limits: Limit
  notes: string[]
}

export interface Limit {
  init: string
  finish: string
}

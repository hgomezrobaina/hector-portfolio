import React from 'react'
import { IconProps } from '../../../modules/icon/interfaces/icon'
import { LanguageConfig } from '../../../modules/language/interfaces/translation'

export interface Skill {
  title: LanguageConfig
  skills: Array<Tech>
  icon: React.FC<IconProps>
}

export interface Tech {
  tech: string
  image: { image: string; alt: string }
}

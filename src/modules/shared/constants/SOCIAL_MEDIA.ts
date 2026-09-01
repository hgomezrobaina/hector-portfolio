import React from 'react'
import GitHub from '../../icon/components/GitHub'
import Linkedin from '../../icon/components/Linkedin'
import Mail from '../../icon/components/Mail'
import Twitter from '../../icon/components/Twitter'
import { IconProps } from '../../icon/interfaces/icon'

interface SocialMedia {
  name: string
  icon: React.FC<IconProps>
  link: string
}

export const EMAIL = 'hectorangel2001@gmail.com'
export const EMAIL_URL = 'mailto:hectorangel2001@gmail.com'
export const TWITTER_URL = 'https://x.com/hgomezrobaina'
export const GITHUB_URL = 'https://github.com/hgomezrobaina'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/hector-gomez-robaina/'

export const SOCIAL_MEDIA: Array<SocialMedia> = [
  {
    name: 'Github',
    icon: GitHub,
    link: GITHUB_URL,
  },
  {
    name: 'Twitter',
    icon: Twitter,
    link: TWITTER_URL,
  },
  {
    name: 'Linkedin',
    icon: Linkedin,
    link: LINKEDIN_URL,
  },
  { name: 'Email', icon: Mail, link: EMAIL_URL },
]

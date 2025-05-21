import { SocialLink } from '@/types'

// Centralized contact information and socials
export const contactInfo = {
  email: 'dinghino+dev@gmail.com',
  location: 'Florence, Italy',
}

export const socials = [
  { name: 'GitHub', url: 'https://github.com/dinghino', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/daniele-calcinai/', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/dinghino', icon: 'twitter' },
] as const satisfies SocialLink[]

export type Social = (typeof socials)[number]
export type SocialIcon = Social['icon']

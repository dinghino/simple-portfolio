import { Project } from '@/types'
import { IconType, SiBitbucket, SiGithub, SiGitlab } from '@icons-pack/react-simple-icons'
import React from 'react'

type RepositoryIconProps = {
  source: NonNullable<Project['repository']>['source']
}

export const RepositoryIcon: React.FC<RepositoryIconProps> = ({ source }) => {
  let Icon: IconType | null = null
  switch (source) {
    case 'github':
      Icon = SiGithub
      break
    case 'bitbucket':
      Icon = SiBitbucket
      break
    case 'gitlab':
      Icon = SiGitlab
      break
    default:
      Icon = null
  }
  if (!Icon) return null
  return <Icon className="h-4 w-4" />
}

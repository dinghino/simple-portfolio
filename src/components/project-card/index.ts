import * as React from 'react'
import { ProjectCardOld } from './project-card'
import { ProjectCardNew } from './project-card-new'
import type { Project } from '@/types'

export { ProjectCardOld } from './project-card'
export { ProjectCardNew } from './project-card-new'

interface ProjectCardSwitcherProps {
  project: Project
  variant?: 'old' | 'new'
  className?: string
}

export const ProjectCard: React.FC<ProjectCardSwitcherProps> = ({
  project,
  variant = 'old',
  className,
}) => {
  if (variant === 'new') {
    return React.createElement(ProjectCardNew, { project, className })
  }
  return React.createElement(ProjectCardOld, { project, className })
}

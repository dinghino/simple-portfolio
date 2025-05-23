'use client'

import React, { useRef } from 'react'
import { ProjectCard } from '@/components/projects/project-card'
import type { Project } from '@/types/project'
import { useStaggerAnimation } from '@/hooks/use-stagger-animation'

interface ProjectsGridProps {
  projects: Project[]
  group?: string
  active?: string
}

export function ProjectsGrid({ projects, active, group }: ProjectsGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useStaggerAnimation(
    {
      containerRef,
      selector: '.project-card-animate',
      from: { opacity: 0, y: 10 },
      to: { opacity: 1, y: 0 },
      delay: 0.15,
    },
    [active, projects, group],
  )

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} className="project-card-animate" />
      ))}
    </div>
  )
}

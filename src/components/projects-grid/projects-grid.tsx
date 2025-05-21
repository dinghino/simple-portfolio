'use client'

import React, { useRef } from 'react'
import { useGSAP, gsap } from '@/lib/gsap'
import { ProjectCard } from '@/components/project-card'
import type { Project } from '@/types/project'
import { useStaggerAnimation } from '@/hooks/use-stagger-animation'

interface ProjectsGridProps {
  projects: Project[]
  group?: string
  active?: string
}

export default function ProjectsGrid({ projects, active, group }: ProjectsGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useStaggerAnimation({
    containerRef,
    selector: '.project-card-animate',
    from: { opacity: 0, y: 10 },
    to: { opacity: 1, y: 0 },
    delay: 0.15,
  }, [active, projects])

  // Force a remount of the grid on tab change by using a unique key
  // This ensures GSAP animates all cards as new elements
  if (!group) {
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

  return (
    <div
      key={group}
      ref={group === active ? containerRef : undefined}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id + '-' + group} project={project} className="project-card-animate" />
      ))}
    </div>
  )
}

'use client'

import React, { useRef } from 'react'
import { useGSAP, gsap } from '@/lib/gsap'
import { ProjectCard } from '@/components/project-card'
import type { Project } from '@/types/project'

interface ProjectsGridProps {
  projects: Project[]
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    const cards = containerRef.current.querySelectorAll('.project-card-animate')
    if (cards.length) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.25,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        },
      )
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2"
    >
      {projects.map((project, idx) => (
        <ProjectCard
          key={project.id ?? idx}
          project={project}
          className="project-card-animate"
          // variant={idx % 2 === 0 ? 'old' : 'new'}
        />
      ))}
    </div>
  )
}

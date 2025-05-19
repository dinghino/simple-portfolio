'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { gsap, useGSAP } from '@/lib/gsap'

import type { Project } from '@/types'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null)

  // Animate in on mount/scroll
  useGSAP(() => {
    if (!cardRef.current) return
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
        },
      },
    )
  }, [])

  return (
    <Card
      ref={cardRef}
      className="border-0 bg-muted/50 transition-all duration-300 hover:bg-muted flex flex-col rounded-xs"
    >
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="font-mono text-xl flex-1">{project.title}</CardTitle>
        {project.primaryLanguage && (
          <div className="flex items-center gap-1">
            <span
              className="inline-block w-3 h-3 rounded-full border"
              style={{ backgroundColor: project.primaryLanguage.color || '#888' }}
              title={project.primaryLanguage.name}
            />
            <span className="text-xs font-mono text-muted-foreground">
              {project.primaryLanguage.name}
            </span>
          </div>
        )}
      </CardHeader>
      <CardContent className="pt-2 flex-1 flex flex-col">
        <p className="text-muted-foreground flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {(project.technologies || []).map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs font-mono bg-background rounded-xs">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pb-4">
        {project.githubRepo && (
          <Button variant="ghost" size="sm" className="gap-1" asChild>
            <Link
              href={`https://github.com/${project.githubRepo}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only sm:ml-1">GitHub</span>
            </Link>
          </Button>
        )}
        {project.demoUrl && (
          <Button variant="outline" size="sm" className="gap-1" asChild>
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <span>{project.visitLabel ?? 'View Demo'}</span>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

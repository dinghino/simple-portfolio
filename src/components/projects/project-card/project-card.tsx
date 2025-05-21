'use client'

import Link from 'next/link'
import { ExternalLink, Lock, GitFork } from 'lucide-react'
import { DynamicIcon, IconName } from 'lucide-react/dynamic'
import { IconType, SiBitbucket, SiGithub, SiGitlab } from '@icons-pack/react-simple-icons'
import { cn } from '@/lib/utils'

import type { Project } from '@/types'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import React, { useEffect } from 'react'

interface ProjectCardProps {
  project: Project
  className?: string
}

// Maximum number of technology badges to show before collapsing
const MAX_TECH_BADGES = 3

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  useEffect(() => {
    console.log('ProjectCard mounted:', project.title)
    return () => {
      console.log('ProjectCard unmounted:', project.title)
    }
  }, [project.title])
  return (
    <Card
      as="article"
      className={cn(
        'bg-muted/50 hover:bg-muted/70 flex flex-col rounded-sm shadow-none border-muted/50',
        'transition-all duration-300',
        className,
      )}
    >
      <CardHeader className="flex flex-col items-start gap-1 pb-2" data-role="header">
        <div className="w-full flex flex-row justify-between items-center">
          <CardTitle className="font-mono text-xl flex-1 flex items-center justify-between gap-2">
            {project.title}
          </CardTitle>
        </div>
        {project.primaryLanguage && (
          <Badge variant="outline">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full mr-1"
              style={{ backgroundColor: project.primaryLanguage.color || '#888' }}
            />
            <span className="text-xs font-mono text-muted-foreground">
              {project.primaryLanguage.name}
            </span>
          </Badge>
        )}
      </CardHeader>
      <CardContent className="pt-2 flex-1 flex flex-col gap-6" data-role="content">
        <p className="text-muted-foreground flex-1 text-sm">{project.description}</p>
        <TechnologyBadges technologies={project.technologies || []} visible={MAX_TECH_BADGES} />
      </CardContent>
      <CardFooter className="flex justify-between pb-4 gap-2" data-role="footer">
        <div className="flex flex-row justify-start gap-2">
          {project.private && <InfoIcon name="lock" label="Private repository" />}
          {project.forked && <InfoIcon name="git-fork" label="Forked repository" />}
        </div>
        <div className="flex flex-row justify-end gap-2">
          {project.repository && (
            <Button variant="outline" size="icon" className="gap-1" asChild>
              <Link
                // todo: not an issue for now but we should handle non github repositories
                href={`https://github.com/${project.repository.url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RepositoryIcon source={project.repository.source} />
              </Link>
            </Button>
          )}
          {project.homepage && (
            <Button variant="outline" size="icon" className="gap-1" asChild>
              <Link href={project.homepage} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

type RepositoryIconProps = {
  source: NonNullable<Project['repository']>['source']
}

const RepositoryIcon: React.FC<RepositoryIconProps> = ({ source }) => {
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

type TechnologyBadgesProps = {
  technologies: string[]
  visible?: number
}

const TechnologyBadges: React.FC<TechnologyBadgesProps> = ({ technologies, visible = 3 }) => {
  const displayedTechs = technologies.slice(0, visible)
  return (
    <div className="flex flex-wrap gap-2">
      {displayedTechs.map((tech) => (
        <Badge key={tech} className="text-xs font-mono" variant="background">
          {tech}
        </Badge>
      ))}
      {technologies.length > visible && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge className="text-xs font-mono cursor-pointer select-none" variant="background">
              +{technologies.length - visible} more
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex flex-wrap gap-1 max-w-xs">
              {technologies.slice(visible).map((tech) => (
                <Badge key={tech} className="text-xs font-mono">
                  {tech}
                </Badge>
              ))}
            </div>
          </TooltipContent>
        </Tooltip>
      )}
    </div>
  )
}

type InfoIconProps = {
  className?: string
  name: IconName
  label: string
}

const InfoIcon: React.FC<InfoIconProps> = ({ className, name, label }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <DynamicIcon
        name={name}
        aria-label={label}
        className={cn('h-4 w-4 text-muted-foreground opacity-60', className)}
      />
    </TooltipTrigger>
    <TooltipContent>
      <span className="text-xs font-mono">{label}</span>
    </TooltipContent>
  </Tooltip>
)

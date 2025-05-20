import Link from 'next/link'
import { ExternalLink, Lock } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { cn } from '@/lib/utils'

import type { Project } from '@/types'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  project: Project
  className?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <Card
      className={cn(
        'border-0 bg-muted/50 transition-all duration-300 hover:bg-muted flex flex-col rounded-xs',
        className,
      )}
    >
      <CardHeader className="flex flex-col items-start gap-1 pb-2">
        <div className="w-full flex flex-row justify-between items-center">
          <CardTitle className="font-mono text-xl flex-1 flex items-center justify-between gap-2">
            {project.title}
            {project.private && (
              <span className="inline-flex items-center" aria-label="Private repository">
                <Lock className="h-4 w-4 text-muted-foreground opacity-60" />
              </span>
            )}
          </CardTitle>
        </div>
        {project.primaryLanguage && (
          <div className="flex items-center gap-2 mt-1">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full border border-muted mr-1"
              style={{ backgroundColor: project.primaryLanguage.color || '#888' }}
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

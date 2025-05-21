import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { TechnologyBadges } from './technology-badges'
import { ProjectTitle } from './project-title'
import { ProjectLanguageBadge } from './project-language-badge'
import { ProjectDescription } from './project-description'
import { ProjectRepoButton } from './project-repo-button'
import { ProjectDemoButton } from './project-demo-button'
import { ProjectStars } from './project-stars'
import { ProjectLastCommit } from './project-last-commit'

interface ProjectCardNewProps {
  project: Project
  className?: string
}

export const ProjectCardNew: React.FC<ProjectCardNewProps> = ({ project, className }) => (
  <Card
    className={cn(
      'bg-muted/50 transition-all duration-300 hover:bg-muted/70 flex flex-col rounded-xs shadow-none border-muted/50',
      className,
    )}
  >
    <CardHeader className="flex flex-col items-start gap-1 pb-2">
      <div className="w-full flex flex-row justify-between items-center">
        <ProjectTitle title={project.title} isPrivate={project.private} size="lg" />
      </div>
      {project.primaryLanguage && (
        <ProjectLanguageBadge
          name={project.primaryLanguage.name}
          color={project.primaryLanguage.color}
        />
      )}
    </CardHeader>
    <CardContent className="pt-2 flex-1 flex flex-col gap-4">
      <ProjectDescription size="sm" clamp={3}>
        {project.description}
      </ProjectDescription>
      <TechnologyBadges technologies={project.technologies || []} visible={3} />
    </CardContent>
    <CardFooter className="flex flex-col gap-2 pb-4 pt-2">
      <div className="flex flex-row justify-between items-center w-full">
        {project.repository && (
          <ProjectRepoButton
            url={`https://github.com/${project.repository.url}`}
            source={project.repository.source}
          />
        )}
        {project.demoUrl && (
          <ProjectDemoButton url={project.demoUrl} label={project.visitLabel ?? 'View Demo'} />
        )}
        {typeof project.stars === 'number' && <ProjectStars stars={project.stars} />}
      </div>
      {project.repository?.lastCommit && (
        <ProjectLastCommit
          date={project.repository.lastCommit.date}
          message={project.repository.lastCommit.message}
        />
      )}
    </CardFooter>
  </Card>
)

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { RepositoryIcon } from './repository-icon'
import { cn } from '@/lib/utils'

export interface ProjectRepoButtonProps {
  url: string
  source: string
  size?: 'icon' | 'sm'
  className?: string
}

export const ProjectRepoButton: React.FC<ProjectRepoButtonProps> = ({
  url,
  source,
  size = 'icon',
  className,
}) => (
  <Button variant="secondary" size={size} className={cn('gap-1', className)} asChild>
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <RepositoryIcon source={source as any} />
    </Link>
  </Button>
)

import { Badge } from '@/components/ui/badge'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const languageBadgeVariants = cva('text-xs font-mono text-muted-foreground', {
  variants: {
    size: {
      sm: 'px-1 py-0.5',
      md: 'px-2 py-0.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface ProjectLanguageBadgeProps extends VariantProps<typeof languageBadgeVariants> {
  name: string
  color?: string
  className?: string
}

export const ProjectLanguageBadge: React.FC<ProjectLanguageBadgeProps> = ({
  name,
  color = '#888',
  className,
  size,
}) => (
  <Badge variant="outline" className={cn(languageBadgeVariants({ size }), className)}>
    <span
      className={cn({
        'inline-block mr-1': true,
        'w-2 h-2 rounded-full': size === 'sm',
        'w-2.5 h-2.5 rounded-full': size === 'md',
      })}
      style={{ backgroundColor: color }}
    />
    <span>{name}</span>
  </Badge>
)

import { Badge } from '@/components/ui/badge'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const lastCommitVariants = cva(
  'mt-1 text-[11px] text-muted-foreground/80 font-mono flex justify-between w-full gap-1',
  {
    variants: {
      size: {
        sm: '',
        md: '',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface ProjectLastCommitProps extends VariantProps<typeof lastCommitVariants> {
  date: string
  message: string
  className?: string
}

export const ProjectLastCommit: React.FC<ProjectLastCommitProps> = ({
  date,
  message,
  className,
  size,
}) => (
  <div className={cn(lastCommitVariants({ size }), className)}>
    <Badge
      variant="outline"
      className={size === 'sm' ? 'px-1 py-0.5 text-[10px]' : 'px-2 py-0.5 text-[10px]'}
    >
      {new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      })}
    </Badge>
    <Badge variant="background" className="font-semibold text-[10px]">
      {message}
    </Badge>
  </div>
)

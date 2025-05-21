import { Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const titleVariants = cva('font-mono flex items-center justify-between gap-2 w-full truncate', {
  variants: {
    size: {
      lg: 'text-xl',
      md: 'text-base',
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface ProjectTitleProps extends VariantProps<typeof titleVariants> {
  title: string
  isPrivate?: boolean
  className?: string
}

export const ProjectTitle: React.FC<ProjectTitleProps> = ({
  title,
  isPrivate,
  className,
  size,
}) => (
  <span className={cn(titleVariants({ size }), className)}>
    {title}
    {isPrivate && (
      <span className="inline-flex items-center" aria-label="Private repository">
        <Tooltip>
          <TooltipTrigger asChild>
            <Lock
              className={cn('text-muted-foreground opacity-60', {
                'h-4 w-4': size === 'lg',
                'h-3 w-3': size === 'md',
                'h-2 w-2': size === 'sm',
              })}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Private repository</p>
          </TooltipContent>
        </Tooltip>
      </span>
    )}
  </span>
)

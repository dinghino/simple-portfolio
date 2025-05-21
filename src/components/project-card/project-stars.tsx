import { Star } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const starsVariants = cva('ml-auto font-mono text-yellow-600 flex items-center gap-1', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface ProjectStarsProps extends VariantProps<typeof starsVariants> {
  stars: number
  className?: string
}

export const ProjectStars: React.FC<ProjectStarsProps> = ({ stars, className, size }) => (
  <span className={cn(starsVariants({ size }), className)}>
    <Star className={size === 'sm' ? 'h-3 w-3' : 'h-4 w-4'} /> {stars}
  </span>
)

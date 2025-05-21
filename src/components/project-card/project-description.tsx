import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const descriptionVariants = cva('text-muted-foreground flex-1', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-base',
    },
    clamp: {
      0: '',
      1: 'line-clamp-1',
      2: 'line-clamp-2',
      3: 'line-clamp-3',
      4: 'line-clamp-4',
      5: 'line-clamp-5',
    },
  },
  defaultVariants: {
    size: 'md',
    clamp: 3,
  },
})

export interface ProjectDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof descriptionVariants> {
  children: React.ReactNode
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  children,
  className,
  size,
  clamp,
  ...props
}) => (
  <p className={cn(descriptionVariants({ size, clamp }), className)} {...props}>
    {children}
  </p>
)

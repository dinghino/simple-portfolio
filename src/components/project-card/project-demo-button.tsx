import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const demoButtonVariants = cva('gap-1', {
  variants: {
    size: {
      sm: '',
      default: '', // maps to 'default' in Button
      lg: '',
      icon: '',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export interface ProjectDemoButtonProps {
  url: string
  label?: string
  size?: 'sm' | 'default' | 'lg' | 'icon'
  className?: string
}

export const ProjectDemoButton: React.FC<ProjectDemoButtonProps> = ({
  url,
  label = 'View Demo',
  size = 'sm',
  className,
}) => (
  <Button
    variant="outline"
    size={size}
    className={cn(demoButtonVariants({ size }), className)}
    asChild
  >
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <span>{label}</span>
      <ExternalLink className="h-4 w-4" />
    </Link>
  </Button>
)

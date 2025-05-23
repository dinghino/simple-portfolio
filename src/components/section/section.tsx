import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import SectionTitle from '@/components/section-title'

const sectionVariants = cva('py-16 md:py-24', {
  variants: {
    background: {
      default: '',
      muted: 'bg-muted/50 dark:bg-muted/10',
    },
  },
  defaultVariants: {
    background: 'default',
  },
})

type Variants = VariantProps<typeof sectionVariants>

interface SectionProps extends Variants {
  id?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  className?: string
  contentClassName?: string
  children: React.ReactNode
  ref?: React.RefObject<HTMLDivElement | null>
}

export const Section: React.FC<SectionProps> = (props) => {
  const { id, title, subtitle, background, className, contentClassName, ref, children } = props
  return (
    <section id={id} className={cn(sectionVariants({ background }), className)} ref={ref}>
      <div className={cn('container px-4 md:px-6', contentClassName)}>
        <div className="flex flex-col items-start gap-4 mb-12">
          {title && <SectionTitle>{title}</SectionTitle>}
          {subtitle && (
            <p className="text-muted-foreground max-w-5xl font-mono text-sm">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}

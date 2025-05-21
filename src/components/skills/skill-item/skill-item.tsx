import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { Skill } from '@/types'
import { DynamicIcon } from 'lucide-react/dynamic'
import Link from 'next/link'

interface SkillItemProps {
  skill: Skill
  link?: string
  className?: string
}

const skillItemVariants = cva(
  'flex items-center px-4 py-2 border-0 text-sm bg-muted/40 hover:bg-muted/60 transition-colors duration-200 gap-2',
  {
    variants: {
      proficiency: {
        beginner: 'text-muted-foreground/25',
        intermediate: 'text-foreground/50',
        advanced: 'text-primary/75 font-medium',
        expert: 'text-primary font-bold',
      },
    },
    defaultVariants: {
      proficiency: 'intermediate',
    },
  },
)

export const SkillItem: React.FC<SkillItemProps> = ({
  skill: { name, icon, proficiency },
  link,
  className,
}) => (
  <div className={cn(skillItemVariants({ proficiency }), className)}>
    {icon && (
      <span className="text-xl">
        <DynamicIcon name={icon} className="h-5 w-5 mr-2 shrink-0" />
      </span>
    )}
    {link ? (
      <Link href={link} target="_blank" rel="noopener noreferrer" className="underline">
        {name}
      </Link>
    ) : (
      <span>{name}</span>
    )}
  </div>
)

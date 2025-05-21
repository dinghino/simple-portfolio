import { SiGithub, SiX } from '@icons-pack/react-simple-icons'
import { Linkedin } from 'lucide-react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import type { SocialIcon } from '@/data/contact.data'

const iconMap: Record<SocialIcon, React.ElementType> = {
  github: SiGithub,
  twitter: SiX,
  linkedin: Linkedin,
}

type SocialButtonProps = {
  icon: SocialIcon | 'linkedin'
  url: string
  name: string
  variant?: 'icon' | 'text'
  className?: string
}

export function SocialButton({ icon, url, name, variant = 'icon', className }: SocialButtonProps) {
  const Icon = iconMap[icon] || null
  const iconSize = variant === 'icon' ? 'h-5 w-5' : 'h-4 w-4'
  const clsname =
    variant === 'icon'
      ? cn(buttonVariants({ variant: 'ghost', size: 'icon' }), className)
      : cn(buttonVariants({ variant: 'outline', size: 'default' }), className)
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(clsname, 'flex items-center gap-4')}
      aria-label={name}
    >
      {Icon && <Icon className={iconSize} />}
      {variant === 'text' && <span>{name}</span>}
      <span className="sr-only">{name}</span>
    </Link>
  )
}

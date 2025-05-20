import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import * as React from 'react'

export interface NavItemProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const navItemVariants = cva(
  'text-muted-foreground hover:text-foreground transition-colors duration-200',
  {
    variants: {
      active: {
        true: 'text-foreground',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)

export const NavItem: React.FC<NavItemProps> = ({ href, children, className, onClick }) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link
      href={href}
      className={cn(
        navItemVariants({ active: isActive }),
        'font-mono uppercase tracking-wide text-sm',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

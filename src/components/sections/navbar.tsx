'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme'
import { cva } from 'class-variance-authority'
import { Code2 } from 'lucide-react'

/**
 * Navigation item component
 */
interface NavItemProps {
  href: string
  children: React.ReactNode
  className?: string
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

function NavItem({ href, children, className }: NavItemProps) {
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
    >
      {children}
    </Link>
  )
}

/**
 * Main navigation component for the website
 */
export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-colors duration-200',
        scrolled ? 'bg-background/90 backdrop-blur-sm border-b' : 'bg-transparent',
      )}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <div className="flex items-center gap-6 sm:gap-10">
          <Link
            href="/"
            className="font-mono font-bold text-lg tracking-tighter flex flex-row items-center gap-2"
          >
            <Code2 />
            dinghino
          </Link>
          <nav className="hidden sm:flex items-center gap-6">
            <NavItem href="/">Home</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="sm:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}

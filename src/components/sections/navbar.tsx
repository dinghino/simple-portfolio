'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme'
import { Code2 } from 'lucide-react'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
  DrawerHeader,
} from '@/components/ui/drawer'
import { Logo, NavItem, MobileDrawer } from '@/components/navbar'

/**
 * Navigation item component
 */
interface NavItemProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

type ClickHandler = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void

// Navigation items array for reuse
const NAV_ITEMS = [
  { href: '#hero', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

/**
 * Main navigation component for the website
 */
export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

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

  // Smooth scroll handler
  const handleNavClick: ClickHandler = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setOpen(false)
      }
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-colors duration-200',
        scrolled ? 'bg-background/90 backdrop-blur-sm border-b' : 'bg-transparent',
      )}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <div className="flex items-center gap-6 sm:gap-10">
          <Logo />
          <nav className="hidden sm:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                className="font-mono uppercase tracking-wide text-sm"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </NavItem>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileDrawer
            onClick={handleNavClick}
            open={open}
            setOpen={setOpen}
            navItems={NAV_ITEMS}
          />
        </div>
      </div>
    </header>
  )
}

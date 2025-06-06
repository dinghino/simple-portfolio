'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme'

import { Logo, NavItem, MobileDrawer, LanguageSwitcher } from '@/components/navbar'

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

/**
 * Main navigation component for the website
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const t = useTranslations('system.menu')

  // Navigation items array for reuse
  const NAV_ITEMS = [
    { href: '#about', label: t('about') },
    { href: '#skills', label: t('skills') },
    { href: '#projects', label: t('projects') },
    { href: '#contact', label: t('contact') },
  ]

  useEffect(() => {
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
          <LanguageSwitcher />
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

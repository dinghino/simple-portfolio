import Link from 'next/link'
import { Linkedin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { SiGithub, SiX } from '@icons-pack/react-simple-icons'

/**
 * Social links for the footer
 */
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: SiGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: SiX,
  },
  {
    name: 'Email',
    href: 'mailto:contact@example.com',
    icon: Mail,
  },
]

/**
 * Footer component displaying social links and copyright information
 */
export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} dinghino. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'text-muted-foreground hover:text-foreground transition-colors',
                )}
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

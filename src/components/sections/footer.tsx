import { contactInfo, socials } from '@/data/contact.data'
import { SocialButton } from '@/components/social-button/social-button'

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
            {socials.map((social) => (
              <SocialButton
                key={social.name}
                icon={social.icon}
                url={social.url}
                name={social.name}
                variant="icon"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

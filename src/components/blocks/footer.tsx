import { socials } from '@/data/contact.data'
import { SocialButton } from '@/components/social-button'
import { getTranslations } from 'next-intl/server'

/**
 * Footer component displaying social links and copyright information
 */
export async function Footer() {
  const t = await getTranslations('content.footer')

  return (
    <footer className="py-6 md:py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} dinghino. {t('copyright')}
          </p>
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <SocialButton key={social.name} {...social} variant="icon" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

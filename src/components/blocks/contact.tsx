import { ContactForm } from '@/components/contact-form'
import { Card } from '@/components/ui/card'
import { Section } from '@/components/section'
import { getTranslations } from 'next-intl/server'

import { contactInfo } from '@/data/contact.data'

export async function Contact() {
  const t = await getTranslations('content.contact')
  return (
    <Section id="contact" title={t('title')} subtitle={t('subtitle')} background="default">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Card className="p-4 bg-muted/30 shadow-none border-xs">
          <ContactForm />
        </Card>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-mono font-bold mb-4">{t('infoTitle')}</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span className="font-mono text-muted-foreground">{t('emailLabel')}</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-mono text-muted-foreground">{t('locationLabel')}</span>
                <span>{contactInfo.location}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

'use client'

import { ContactForm } from '@/components/contact-form'
import { SocialButton } from '@/components/social-button'
import { Card, CardContent } from '@/components/ui/card'
import SectionTitle from '@/components/section-title'

import { contactInfo, socials } from '@/data/contact.data'

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 mb-12">
          <SectionTitle>Get in Touch</SectionTitle>
          <p className="text-muted-foreground max-w-2xl">
            Have a question or want to work together? Send me a message and I'll get back to you as
            soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="p-4 bg-muted/30 shadow-none border-xs">
            {/* <CardContent> */}
            <ContactForm />
            {/* </CardContent> */}
          </Card>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-mono font-bold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className="font-mono text-muted-foreground">Email:</span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-mono text-muted-foreground">Location:</span>
                  <span>{contactInfo.location}</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-mono font-bold mb-4">Connect</h3>
              <p className="text-muted-foreground mb-4">
                Follow me on social media or check out my work on GitHub.
              </p>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => (
                  <SocialButton
                    key={social.name}
                    icon={social.icon}
                    url={social.url}
                    name={social.name}
                    variant="text"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

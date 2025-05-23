'use client'

import { useRef } from 'react'
import { useTranslations, useFormatter } from 'next-intl'
import Image from 'next/image'

import { gsap, useGSAP } from '@/lib/gsap'
import { Section } from '@/components/section'

/**
 * About section
 * TODO: use @next/mdx to make it fancier.
 * @see https://nextjs.org/docs/app/guides/mdx
 * @see https://next-intl.dev/docs/environments/mdx
 */
export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('content.about')
  const format = useFormatter()

  useGSAP(
    () => {
      if (!sectionRef.current) return

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          },
        },
      )
    },
    { scope: sectionRef },
  )

  return (
    <Section
      id="about"
      title={t('title')}
      // subtitle={t('subtitle')}
      background="muted"
      contentClassName="flex flex-col"
      ref={sectionRef}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center md:items-start gap-16">
        <div className="flex-shrink-0">
          <Image
            src="/reddy.jpg"
            alt="My dog, not me!"
            width={384}
            height={384}
            className="rounded-lg object-cover z-10"
            priority
          />
        </div>
        <div className="flex-1 flex flex-col items-start gap-6 font-mono text-muted-foreground max-w-2xl">
          {t.raw('paragraphs').map((txt: string, idx: number) => (
            <p key={idx}>{txt}</p>
          ))}
        </div>
      </div>
    </Section>
  )
}

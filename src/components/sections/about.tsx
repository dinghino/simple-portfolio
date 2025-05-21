'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import SectionTitle from '@/components/section-title'
import Image from 'next/image'
import Link from 'next/link'

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Section appearance animation
  useGSAP(
    () => {
      if (sectionRef.current && contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
            },
          },
        )
      }
    },
    { scope: sectionRef },
  )

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div ref={contentRef} className="container px-4 md:px-6 flex flex-col">
        <div className="flex flex-col items-start gap-4 mb-12">
          <SectionTitle>About Me</SectionTitle>
          <p className="text-muted-foreground max-w-2xl">And my partner in crime</p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center md:items-start gap-16">
          <div
            className="flex-shrink-0 cursor-pointer transition-transform duration-300 will-change-transform"
            style={{ perspective: 800 }}
          >
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
            <p>
              I've been working as a full time developer for more than 10 years and for over 20
              years between other realities and industries. My background in surveying and security
              has given me a unique perspective on problem-solving and project management.
            </p>
            <p>
              I like finding and solving problems, optimizing processes and creating new things,
              using the toolset that I grow whenever possible, exploring the ever growing pool of
              new technologies that comes out every week.
            </p>
            <p>
              When I am not working I like to spend time learning new things, playing games and most
              importantly spending time with my pet companion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

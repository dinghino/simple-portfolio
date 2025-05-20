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
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-16">
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
          <div className="flex-1 flex flex-col items-start gap-6 text-muted-foreground max-w-2xl text-lg">
            <p>
              Hi, I'm <span className="font-bold text-primary">Daniele</span> — a self-taught
              developer who found their way into tech from a completely different world. My
              background is in other industries, but curiosity and a love for building things led me
              here.
            </p>
            <p>
              I've worked with people and companies on all sorts of projects, learning by doing and
              picking up new skills along the way. I value practical experience, creative
              problem-solving, and the freedom to experiment.
            </p>
            <p>
              When I'm not coding, I'm probably hanging out with my dog, exploring, playing games or
              getting lost in a new hobby. I'm not big on social media or putting my face everywhere
              — but my dog doesn't mind the spotlight!
            </p>
            <p>
              <span className="font-mono text-primary">
                <Link href="#contact" className="font-bold">
                  Let's connect
                </Link>{' '}
                and create something cool together!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

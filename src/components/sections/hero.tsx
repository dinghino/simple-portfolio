'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import ScrambleRole from '@/components/scramble-role'
import HeroBackground, { type WaveOptions } from '@/components/hero-background'

const headingVariants = cva(
  'font-mono font-bold tracking-tight leading-none transition-opacity duration-500',
  {
    variants: {
      size: {
        default: 'text-4xl md:text-5xl lg:text-6xl',
        small: 'text-lg md:text-2xl lg:text-3xl',
      },
      visible: {
        true: 'opacity-100',
        false: 'opacity-0',
      },
    },
    defaultVariants: {
      size: 'default',
      visible: false,
    },
  },
)

const paragraphVariants = cva(
  'my-4 text-muted-foreground max-w-2xl transition-opacity duration-500 delay-200',
  {
    variants: {
      visible: {
        true: 'opacity-100',
        false: 'opacity-0',
      },
    },
    defaultVariants: {
      visible: false,
    },
  },
)

// Waves configuration
const LINES_COUNT = 5
const waveOptions: WaveOptions[] = Array.from({ length: LINES_COUNT }, (_, i) => ({
  amplitude: 32 * (i + 1),
  frequency: 1 + i * 0.15,
  speed: 2000 + i * 2000,
  phase: (i * Math.PI) / LINES_COUNT,
  xOffset: -256 - i * 24,
}))

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
      <HeroBackground waveOptions={waveOptions} />
      <div className="container px-4 md:px-6 min-h-[40dvh] relative z-10">
        <article className="flex flex-col items-start gap-4">
          <p
            className={cn(
              paragraphVariants({ visible: isVisible }),
              'text-sm md:text-base font-mono text-primary mb-2 order-first',
            )}
          >
            Hello, I'm <span className="font-bold">Daniele</span>
          </p>
          <h1 className={cn(headingVariants({ visible: isVisible }))}>
            <ScrambleRole />
          </h1>
          <h2
            className={cn(
              headingVariants({ size: 'small', visible: isVisible }),
              'text-muted-foreground mt-2',
            )}
          >
            Solving problems with code and design
          </h2>
          <p className={cn(paragraphVariants({ visible: isVisible }))}>
            I specialize in building modern, responsive solutions with a focus on clean design,
            performance, and accessibility.
          </p>
          <div
            className={cn(
              'flex gap-4 mt-4 transition-opacity duration-500 delay-400',
              isVisible ? 'opacity-100' : 'opacity-0',
            )}
          >
            <Button asChild className="group">
              <Link href="#projects">
                View projects
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Contact me</Link>
            </Button>
          </div>
        </article>
      </div>
    </section>
  )
}

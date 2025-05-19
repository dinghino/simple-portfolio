'use client'

import * as React from 'react'
import { useRef } from 'react'
import { gsap, useGSAP, ScrambleTextPlugin } from '@/lib/gsap'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export default function SectionTitle({ children, className, as: Tag = 'h2' }: SectionTitleProps) {
  const textRef = useRef<HTMLSpanElement>(null)

  // Scramble on hover
  const handleHover = () => {
    if (!textRef.current) return
    gsap.to(textRef.current, {
      scrambleText: {
        text: textRef.current.textContent ?? '',
        chars: scrambleChars,
        speed: 3,
        revealDelay: 0,
      },
      duration: 0.5,
      ease: 'none',
    })
  }

  return (
    <Tag
      className={cn(
        'relative flex items-center font-mono font-bold tracking-tight text-5xl md:text-7xl group',
        className,
      )}
    >
      <span className="text-primary/40 mr-3 select-none">//</span>
      <span ref={textRef} className="transition-colors duration-150" onMouseEnter={handleHover}>
        {children}
      </span>
    </Tag>
  )
}

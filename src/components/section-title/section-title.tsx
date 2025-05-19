'use client'

import * as React from 'react'
import { useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export default function SectionTitle({ children, className, as: Tag = 'h2' }: SectionTitleProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const [isAnimating, setIsAnimating] = React.useState(false)

  // Scramble on hover
  const handleHover = () => {
    if (!textRef.current || isAnimating) return
    setIsAnimating(true)
    gsap.to(textRef.current, {
      scrambleText: {
        text: textRef.current.textContent ?? '',
        chars: scrambleChars,
        speed: 3,
        revealDelay: 0.15,
      },
      duration: 1.25,
      ease: 'none',
      onComplete: () => setIsAnimating(false),
    })
  }

  return (
    <Tag
      className={cn(
        'relative flex items-center font-mono font-bold tracking-tight text-2xl lg:text-5xl group',
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

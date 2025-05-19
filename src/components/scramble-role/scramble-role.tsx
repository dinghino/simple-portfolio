'use client'

import React, { useRef, useState } from 'react'
import { useGSAP, gsap } from '@/lib/gsap'
import { cn } from '@/lib/utils'

import { HERO_ROLES as ROLES } from '@/data/texts'

export default function ScrambleRole() {
  const roleRef = useRef<HTMLSpanElement>(null)
  const [index, setIndex] = useState(0)

  useGSAP(
    () => {
      gsap.to(roleRef.current, {
        duration: 1.2,
        scrambleText: {
          text: ROLES[index],
          chars: '█▓▒░<>/|_-=+*#@!~',
          revealDelay: 0.2,
          speed: 0.5,
        },
        ease: 'power2.inOut',
        onComplete: () => {
          setTimeout(() => {
            setIndex((prev) => (prev + 1) % ROLES.length)
          }, 1200)
        },
      })
    },
    { dependencies: [index], scope: roleRef },
  )

  return (
    <span
      ref={roleRef}
      className={cn('inline-block min-w-[180px] font-semibold text-sky-700 dark:text-sky-300')}
      aria-label={ROLES[index]}
    >
      {ROLES[index]}
    </span>
  )
}

'use client'

import React, { useRef } from 'react'
import { useGSAP, gsap } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import type { Skill } from '@/types/skill'

interface SkillsGridProps {
  skills: Skill[]
  className?: string
  renderSkill: (skill: Skill) => React.ReactNode
}

export default function SkillsGrid({ skills, className, renderSkill }: SkillsGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    const items = containerRef.current.querySelectorAll('.skill-animate')
    if (items.length) {
      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.125,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        },
      )
    }
  }, [skills])

  return (
    <div
      ref={containerRef}
      className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4', className)}
    >
      {skills.map((skill) => (
        <div key={skill.name} className="skill-animate">
          {renderSkill(skill)}
        </div>
      ))}
    </div>
  )
}

'use client'

import React, { useMemo, useRef, useState } from 'react'
import { useGSAP, gsap } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import type { Skill, SkillCategory, SkillsData } from '@/types/skill'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SkillItem } from '@/components/skill-item'

interface SkillsGridProps {
  skills: SkillsData
  className?: string
}

export default function SkillsGrid({ skills, className }: SkillsGridProps) {
  const initial = useMemo(() => Object.keys(skills)[0] as SkillCategory, [skills])
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>(initial)
  return (
    <Tabs
      defaultValue={initial}
      value={selectedCategory}
      onValueChange={(value) => setSelectedCategory(value as SkillCategory)}
      className={cn('w-full', className)}
    >
      <TabsList className="mb-8 font-mono bg-transparent border-b w-full justify-start rounded-none h-auto p-0">
        {Object.keys(skills).map((category) => (
          <TabsTrigger
            key={category}
            value={category}
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none cursor-pointer"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(skills).map(([category, skills]) => (
        <TabContent
          key={category}
          selected={selectedCategory}
          category={category}
          skills={skills}
        />
      ))}
    </Tabs>
  )
}

type TabContentProps = {
  category: SkillCategory | (string & {})
  skills: Skill[]
  selected: SkillCategory | (string & {})
}

const TabContent: React.FC<TabContentProps> = ({ selected, category, skills }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    const items = containerRef.current.querySelectorAll('.skill-animate')
    if (items.length) {
      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.25,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        },
      )
    }
  }, [selected, category, skills])

  // forces full re-render and animation
  if (category !== selected) {
    return null
  }

  return (
    <TabsContent key={category} value={category} className="mt-0">
      <div
        key={category}
        ref={category === category ? containerRef : undefined}
        className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2')}
      >
        {skills.map((skill) => (
          <SkillItem skill={skill} className="skill-animate" key={skill.name} />
        ))}
      </div>
    </TabsContent>
  )
}

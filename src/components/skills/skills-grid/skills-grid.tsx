'use client'

import React, { useMemo, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import type { Skill, SkillCategory, SkillsData } from '@/types/skill'
import { useTranslations } from 'next-intl'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SkillItem } from '@/components/skills/skill-item'
import { useStaggerAnimation } from '@/hooks/use-stagger-animation'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

interface SkillsGridProps {
  skills: SkillsData
  className?: string
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ skills, className }) => {
  const t = useTranslations('content.skills')
  const initial = useMemo(() => Object.keys(skills)[0] as SkillCategory, [skills])
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>(initial)
  return (
    <Tabs
      defaultValue={initial}
      value={selectedCategory}
      onValueChange={(value) => setSelectedCategory(value as SkillCategory)}
      className={cn('w-full', className)}
    >
      <ScrollArea className="w-full whitespace-nowrap mb-8 pb-3">
        <ScrollBar orientation="horizontal" className="mt-8" />
        <TabsList className="font-mono bg-transparent border-b w-full justify-start rounded-none h-auto p-0">
          {Object.keys(skills).map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none cursor-pointer"
            >
              {t(`categories.${category}`, { default: capitalize(category) })}
            </TabsTrigger>
          ))}
        </TabsList>
      </ScrollArea>
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

  useStaggerAnimation(
    {
      containerRef,
      selector: '.skill-animate',
      from: { opacity: 0, scale: 0.5 },
      to: { opacity: 1, scale: 1 },
      delay: 0.04,
      duration: 0.05,
    },
    [selected, category, skills],
  )

  // forces full re-render and animation
  if (category !== selected) {
    return null
  }

  return (
    <TabsContent key={category} value={category} className="mt-0">
      <div
        key={category}
        ref={containerRef}
        className={cn('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2')}
      >
        {skills.map((skill) => (
          <SkillItem skill={skill} className="skill-animate" key={skill.name} />
        ))}
      </div>
    </TabsContent>
  )
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

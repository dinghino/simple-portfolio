'use client'
import { useMemo, useRef, useState } from 'react'

import { Project, ProjectGroup } from '@/types/project'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
// import ProjectsGrid from '@/components/projects-grid'
import { ProjectCard } from '../project-card'
import { useStaggerAnimation } from '@/hooks/use-stagger-animation'

const GROUP_LABELS: Record<ProjectGroup, string> = {
  work: 'Work',
  personal: 'Personal',
  experiments: 'Experiments',
  oss: 'OSS',
}

function getGroups(projects: Project[]) {
  return Array.from(
    new Set(projects.map((p) => p.group).filter((g): g is ProjectGroup => Boolean(g))),
  )
}

interface ProjectsTabsProps {
  projects: Project[]
}

export function ProjectsTabs({ projects }: ProjectsTabsProps) {
  // Get all groups present in the data, in order
  const groups = useMemo(() => getGroups(projects), [projects])
  const initial = useMemo(() => groups[0] ?? 'work', [groups])
  const [active, setActive] = useState<ProjectGroup>(initial)

  const items = useMemo(() => {
    return projects.filter((p) => p.group === active)
  }, [projects, active])

  // // Fallback: if no group, show all in one tab
  // if (groups.length === 0) {
  //   return <ProjectsGrid projects={projects} />
  // }

  return (
    <Tabs defaultValue={initial} value={active} onValueChange={(g) => setActive(g as ProjectGroup)}>
      {/* <div className="bg-background sticky top-16 py-4 z-10"> */}
      <TabsList>
        {groups.map((group) => (
          <TabsTrigger key={group} value={group}>
            {GROUP_LABELS[group] ?? group}
          </TabsTrigger>
        ))}
      </TabsList>
      {/* </div> */}
      {groups.map((group) => (
        <TabContent
          key={group}
          group={group}
          active={active}
          projects={projects.filter((p) => p.group === group)}
        />
      ))}
    </Tabs>
  )
}

type TabContentProps = {
  group: ProjectGroup
  active: ProjectGroup
  projects: Project[]
}

const TabContent: React.FC<TabContentProps> = ({ group, projects, active }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useStaggerAnimation(
    {
      containerRef,
      selector: '.project-card-animate',
      from: { opacity: 0, y: 10 },
      to: { opacity: 1, y: 0 },
      delay: 0.15,
    },
    [active, projects, group],
  )

  if (group !== active) {
    return null
  }

  return (
    <TabsContent value={active} className="w-full">
      <div
        key={group}
        ref={group === active ? containerRef : undefined}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} className="project-card-animate" />
        ))}
      </div>
    </TabsContent>
  )
}

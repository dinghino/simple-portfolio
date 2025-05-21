import { skillsData } from '@/data/skills'
import SectionTitle from '@/components/section-title'
import SkillsGrid from '@/components/skills-grid'

export async function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 mb-12">
          <SectionTitle>Skills & Expertise</SectionTitle>
          <p className="text-muted-foreground max-w-2xl">
            Some of the technologies and tools I have experience with. I am always eager to learn
            and explore new technologies, so this list is constantly evolving.
          </p>
        </div>
        <SkillsGrid skills={skillsData} />
      </div>
    </section>
  )
}

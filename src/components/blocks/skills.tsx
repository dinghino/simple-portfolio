import { skillsData } from '@/data/skills.data'
import { Section } from '@/components/section'
import { SkillsGrid } from '@/components/skills'

export async function Skills() {
  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Some of the technologies and tools I have experience with. I am always eager to learn and explore new technologies, so this list is constantly evolving."
      background="muted"
    >
      <SkillsGrid skills={skillsData} />
    </Section>
  )
}

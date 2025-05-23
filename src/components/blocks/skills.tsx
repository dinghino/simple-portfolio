import { skillsData } from '@/data/skills.data'
import { Section } from '@/components/section'
import { SkillsGrid } from '@/components/skills'
import { getTranslations } from 'next-intl/server'

export async function Skills() {
  const t = await getTranslations('content.skills')
  return (
    <Section id="skills" title={t('title')} subtitle={t('subtitle')} background="muted">
      <SkillsGrid skills={skillsData} />
    </Section>
  )
}

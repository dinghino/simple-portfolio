import { IconName } from "lucide-react/dynamic"

/**
 * Different categories of skills
 */
export type SkillCategory = 'frontend' | 'backend' | 'design' | 'tools'

/**
 * Proficiency levels for skills
 */
export type SkillProficiency = 'beginner' | 'intermediate' | 'advanced' | 'expert'

/**
 * Interface for individual skill
 */
export interface Skill {
  name: string
  proficiency: SkillProficiency
  icon?: IconName
}

/**
 * Skills data structure
 */
export type SkillsData = Partial<Record<SkillCategory, Skill[]>>

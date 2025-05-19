import { LucideIcon } from 'lucide-react'

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
  icon?: LucideIcon
}

/**
 * Interface for skills data by category
 */
export interface SkillsData {
  [category: string]: Skill[]
}

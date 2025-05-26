import { Skill, SkillsData } from '@/types/skill'

const frontend: Skill[] = [
  { name: 'TypeScript', proficiency: 'expert', icon: 'type' },
  { name: 'Tailwind', proficiency: 'advanced', icon: 'pen-tool' },
  { name: 'shadcn', proficiency: 'advanced', icon: 'pen-tool' },
  { name: 'streamlit', proficiency: 'intermediate', icon: 'layers' },
  { name: 'Next.js', proficiency: 'advanced', icon: 'layers' },
  { name: 'sveltekit', proficiency: 'intermediate', icon: 'layers' },
  { name: 'PayloadCMS', proficiency: 'advanced', icon: 'layers' },
  // { name: 'GraphQL (Client)', proficiency: 'intermediate', icon: 'database' },
]
const backend: Skill[] = [
  { name: 'Python', proficiency: 'expert', icon: 'code' },
  { name: 'Node.js', proficiency: 'expert', icon: 'server' },
  { name: 'click & clack', proficiency: 'intermediate', icon: 'server' },
  { name: 'FastAPI', proficiency: 'intermediate', icon: 'server' },
  { name: 'Fastify', proficiency: 'advanced', icon: 'server' },
  { name: 'tRPC', proficiency: 'intermediate', icon: 'database' },
  { name: 'drizzle ORM', proficiency: 'intermediate', icon: 'database' },
  { name: 'PostgreSQL', proficiency: 'intermediate', icon: 'database' },
  { name: 'MongoDB', proficiency: 'advanced', icon: 'database' },
]
const design: Skill[] = [
  { name: 'Figma', proficiency: 'intermediate', icon: 'pen-tool' },
  { name: 'UX Design', proficiency: 'intermediate', icon: 'layout' },
  { name: 'Storybook', proficiency: 'intermediate', icon: 'layers' },
  { name: 'Wireframing', proficiency: 'advanced', icon: 'pen-tool' },
  { name: 'Prototyping', proficiency: 'advanced', icon: 'layers' },
  { name: 'Design Systems', proficiency: 'advanced', icon: 'settings' },
  { name: 'Color Theory', proficiency: 'intermediate', icon: 'pen-tool' },
  { name: 'Responsive Design', proficiency: 'expert', icon: 'smartphone' },
  { name: 'Web Accessibility', proficiency: 'advanced', icon: 'globe' },
]
const tools: Skill[] = [
  { name: 'VS Code', proficiency: 'expert', icon: 'code' },
  { name: 'Git', proficiency: 'advanced', icon: 'terminal' },
  { name: 'GitHub', proficiency: 'expert', icon: 'code' },
  { name: 'zod', proficiency: 'advanced', icon: 'layers' },
  { name: 'Docker', proficiency: 'intermediate', icon: 'settings' },
  { name: 'CI/CD', proficiency: 'intermediate', icon: 'settings' },
  { name: 'Vite', proficiency: 'intermediate', icon: 'settings' },
  { name: 'bun', proficiency: 'intermediate', icon: 'settings' },
]
export const skillsData: SkillsData = {
  frontend: frontend.sort(byProficiencies),
  backend: backend.sort(byProficiencies),
  design: design.sort(byProficiencies),
  tools: tools.sort(byProficiencies),
}

/**
 * Sort function to order skills by proficiency level.
 * Used to get a more visually appealing order of skills in the UI.
 */
function byProficiencies(a: Skill, b: Skill) {
  const proficiencyMap = {
    beginner: 0,
    intermediate: 1,
    advanced: 2,
    expert: 3,
  }
  return (proficiencyMap[a.proficiency] - proficiencyMap[b.proficiency]) * -1
}

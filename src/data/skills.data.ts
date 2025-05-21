import { Skill, SkillsData } from '@/types/skill'

const frontend: Skill[] = [
  { name: 'TypeScript', proficiency: 'expert', icon: 'type' },
  { name: 'Tailwind CSS', proficiency: 'advanced', icon: 'pen-tool' },
  { name: 'Next.js', proficiency: 'advanced', icon: 'layers' },
  { name: 'Vue.js', proficiency: 'intermediate', icon: 'layers' },
  { name: 'PayloadCMS', proficiency: 'intermediate', icon: 'layers' },
  { name: 'Redux', proficiency: 'advanced', icon: 'layers' },
  { name: 'GraphQL (Client)', proficiency: 'intermediate', icon: 'database' },
  { name: 'Responsive Design', proficiency: 'expert', icon: 'smartphone' },
  { name: 'Web Accessibility', proficiency: 'advanced', icon: 'globe' },
]
const backend: Skill[] = [
  { name: 'Python', proficiency: 'expert', icon: 'code' },
  { name: 'Node.js', proficiency: 'advanced', icon: 'server' },
  { name: 'Express', proficiency: 'intermediate', icon: 'server' },
  { name: 'Fastify', proficiency: 'advanced', icon: 'server' },
  { name: 'tRPC', proficiency: 'intermediate', icon: 'database' },
  { name: 'drizzle ORM', proficiency: 'intermediate', icon: 'database' },
  { name: 'Django', proficiency: 'beginner', icon: 'layers' },
  { name: 'PostgreSQL', proficiency: 'intermediate', icon: 'database' },
  { name: 'MongoDB', proficiency: 'advanced', icon: 'database' },
  { name: 'GraphQL (Server)', proficiency: 'beginner', icon: 'database' },
  { name: 'RESTful APIs', proficiency: 'expert', icon: 'globe' },
  { name: 'Firebase', proficiency: 'intermediate', icon: 'database' },
  { name: 'AWS', proficiency: 'beginner', icon: 'server' },
]
const design: Skill[] = [
  { name: 'Figma', proficiency: 'advanced', icon: 'pen-tool' },
  { name: 'UX Design', proficiency: 'intermediate', icon: 'layout' },
  { name: 'Wireframing', proficiency: 'advanced', icon: 'pen-tool' },
  { name: 'Prototyping', proficiency: 'advanced', icon: 'layers' },
  { name: 'Design Systems', proficiency: 'advanced', icon: 'settings' },
  { name: 'Color Theory', proficiency: 'intermediate', icon: 'pen-tool' },
]
const tools: Skill[] = [
  { name: 'Git', proficiency: 'expert', icon: 'terminal' },
  { name: 'GitHub', proficiency: 'expert', icon: 'code' },
  { name: 'VS Code', proficiency: 'expert', icon: 'code' },
  { name: 'Docker', proficiency: 'intermediate', icon: 'settings' },
  { name: 'Jest', proficiency: 'advanced', icon: 'terminal' },
  { name: 'CI/CD', proficiency: 'intermediate', icon: 'settings' },
  { name: 'Webpack', proficiency: 'intermediate', icon: 'settings' },
  { name: 'Vite', proficiency: 'advanced', icon: 'settings' },
  { name: 'npm/yarn/pnpm', proficiency: 'expert', icon: 'settings' },
  { name: 'Postman', proficiency: 'advanced', icon: 'settings' },
]
export const skillsData: SkillsData = {
  frontend: frontend.sort(byProficiencies),
  backend: backend.sort(byProficiencies),
  design: design.sort(byProficiencies),
  tools: tools.sort(byProficiencies),
}

function byProficiencies(a: Skill, b: Skill) {
  const proficiencyMap = {
    beginner: 0,
    intermediate: 1,
    advanced: 2,
    expert: 3,
  }
  return (proficiencyMap[a.proficiency] - proficiencyMap[b.proficiency]) * -1
}

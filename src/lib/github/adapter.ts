import { GithubRepository, Project } from '@/types/project'

export function githubRepoToProject(
  repo: GithubRepository,
  opts?: { languages?: string[]; primaryLanguage?: { name: string; color?: string } }
): Project {
  return {
    id: repo.id.toString(),
    title: repo.name,
    description: repo.description || '',
    image: undefined,
    technologies: opts?.languages || [],
    githubRepo: `${repo.owner.login}/${repo.name}`,
    demoUrl: repo.homepage || undefined,
    featured: false,
    stars: repo.stargazers_count,
    lastUpdated: repo.updated_at,
    primaryLanguage: opts?.primaryLanguage,
    languages: opts?.languages,
  } satisfies Project
}

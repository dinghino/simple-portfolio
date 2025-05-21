import type { GithubRepository, Language, Project } from '@/types/project'

export type GithubRepoToProjectOptions = {
  languages?: string[]
  primaryLanguage?: { name: string; color?: string }
  lastCommit?: { message: string; author: string; date: string } | null
}

export function githubRepoToProject(
  repo: GithubRepository,
  opts?: GithubRepoToProjectOptions,
  overrides?: Partial<Project>,
): Project {
  const repoData: Project['repository'] = {
    url: repo.html_url,
    source: 'github',
    lastCommit: opts?.lastCommit ?? undefined,
  }

  return {
    id: repo.id.toString(),
    title: merge(repo.name, overrides?.title),
    description: merge(repo.description || '', overrides?.description),
    image: undefined,
    technologies: merge(opts?.languages || [], overrides?.technologies),
    repository: repoData,
    demoUrl: merge(repo.homepage || '', overrides?.demoUrl),
    featured: false,
    stars: repo.stargazers_count,
    lastUpdated: repo.updated_at,
    primaryLanguage: merge(opts?.primaryLanguage, overrides?.primaryLanguage),
    private: repo.private,
    visitLabel: merge(overrides?.visitLabel, 'Visit'),
  } satisfies Project
}

type DataType = string | number | boolean | string[] | Language | null | undefined

/**
 * Merge repository data with overrides from data/projects.ts
 * where the repositories to fetch is defined
 */
function merge<T extends DataType | undefined>(source: T, override?: T): T {
  if (!override) return source

  if (Array.isArray(source) && Array.isArray(override)) {
    return [...new Set([...source, ...override])] as T
  }
  if (typeof source === 'object' && typeof override === 'object') {
    return { ...source, ...override }
  }
  return override !== undefined ? override : source
}

import { Project } from '@/types'
import { type RestEndpointMethodTypes } from '@octokit/rest'

type Repository =
  RestEndpointMethodTypes['repos']['listForAuthenticatedUser']['response']['data'][number]

// type PartialProject = Omit<Project, 'featured'>

export const githubProjectAdapter = (data: Repository): Project => {
  return {
    id: data.id.toString(),
    title: data.name,
    description: data.description || '',
    githubRepo: data.full_name,
    demoUrl: data.homepage || '',
    technologies: data.topics || [],
    stars: data.stargazers_count,
    lastUpdated: data.updated_at,
    featured: true,
  }
}

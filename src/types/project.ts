import { RestEndpointMethodTypes } from '@octokit/rest'
/**
 * Interface for project data
 */
export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  repository?: Repository
  demoUrl?: string
  featured: boolean
  stars?: number
  lastUpdated?: string | null
  primaryLanguage?: Language
  visitLabel?: string
  private?: boolean
}

export type GithubRepository =
  RestEndpointMethodTypes['repos']['listForAuthenticatedUser']['response']['data'][number]

export type Language = {
  name: string
  color?: string
}

export type Repository = {
  url: string
  source: 'github' | 'bitbucket' | 'gitlab'
}

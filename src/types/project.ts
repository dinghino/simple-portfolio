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
  homepage?: string
  featured: boolean
  stars?: number
  lastUpdated?: string | null
  primaryLanguage?: Language
  visitLabel?: string
  private?: boolean
  group?: 'work' | 'personal' | 'experiments' | 'oss'
  /**
   * True if this project is a fork of another repository (OSS contributions, etc.)
   */
  forked?: boolean
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

export type ProjectGroup = NonNullable<Project['group']>

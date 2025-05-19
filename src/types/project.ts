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
  githubRepo?: string // made optional
  demoUrl?: string
  featured: boolean
  stars?: number
  lastUpdated?: string | null
  primaryLanguage?: {
    name: string;
    color?: string;
  };
  languages?: string[];
}

export type GithubRepository =
  RestEndpointMethodTypes['repos']['listForAuthenticatedUser']['response']['data'][number]

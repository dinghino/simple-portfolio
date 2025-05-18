/**
 * Interface for project data
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubRepo: string;
  demoUrl?: string;
  featured: boolean;
  stars?: number;
  lastUpdated?: string;
}
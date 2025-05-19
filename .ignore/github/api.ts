/**
 * Functions to interact with GitHub API using Octokit
 */
import { Octokit } from '@octokit/rest'
import { Project } from '@/types/project'
import { projectData } from '@/data/projects'

export const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
export default octokit

// }

/**
 * Fetch repositories from GitHub and merge with static project data
 */
export async function fetchGitHubRepos(): Promise<Project[]> {
  try {
    // const octokit = getOctokitClient()
    // Get all repos for the user/org from static data
    const staticProjects = projectData
    // Fetch all repos from GitHub for the user (extract unique owners from static data)
    const owners = Array.from(new Set(staticProjects.map((p) => p.githubRepo.split('/')[0])))
    // For each owner, fetch all repos
    let githubRepos: any[] = []
    for (const owner of owners) {
      const { data } = await octokit.repos.listForUser({ username: owner, per_page: 100 })
      githubRepos = githubRepos.concat(data)
    }
    // Map GitHub repos to Project type, merging with static data if available
    const projects: Project[] = githubRepos.map((repo) => {
      const staticProject = staticProjects.find(
        (p) => p.githubRepo === `${repo.owner.login}/${repo.name}`,
      )
      return {
        id: staticProject?.id || repo.id.toString(),
        title: staticProject?.title || repo.name,
        description: repo.description || staticProject?.description || '',
        image: staticProject?.image,
        technologies: staticProject?.technologies || [],
        githubRepo: `${repo.owner.login}/${repo.name}`,
        demoUrl: staticProject?.demoUrl,
        featured: staticProject?.featured ?? false,
        stars: repo.stargazers_count,
        lastUpdated: repo.updated_at,
      }
    })
    return projects
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    // fallback to static data if GitHub fails
    return projectData
  }
}

import { githubRepositories } from '@/data/projects.data'
import { api } from '@/lib/github'
import { githubRepoToProject } from '@/lib/github/adapter'
import { ProjectsTabs } from '@/components/projects'
import { Section } from '@/components/section'
import type { Project } from '@/types/project'

export async function Projects() {
  // Fetch GitHub projects
  const projects = await fetchGithubProjects()

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A short collection of work, personal projects and open source contributions that I can share."
      background="default"
    >
      <ProjectsTabs projects={projects} />
    </Section>
  )
}

async function fetchGithubProjects() {
  // githubRepositories is now a Record<string, Partial<Project>>
  const repoEntries = Object.entries(githubRepositories)
  const repoGroups: Record<string, { repo: string; override: Partial<Project> }[]> = {}
  for (const [full, override] of repoEntries) {
    const [owner, repo] = full.split('/')
    if (!repoGroups[owner]) repoGroups[owner] = []
    repoGroups[owner].push({ repo, override })
  }

  // Fetch all repos and their languages in parallel
  const githubProjects: Project[] = []
  const data = await Promise.all(
    Object.entries(repoGroups).map(async ([user, repos]) => {
      const fetchedRepos = await api.fetchRepositories({ user, repos: repos.map((r) => r.repo) })
      return Promise.all(
        fetchedRepos.map(async (repo) => {
          const fullName = `${repo.owner.login}/${repo.name}`
          const override = githubRepositories[fullName] || {}
          const { languages, primaryLanguage } = await api.fetchRepoLanguages({
            user: repo.owner.login,
            repo: repo.name,
          })
          // Merge override with fetched data
          return githubRepoToProject(repo, { languages, primaryLanguage }, override)
        }),
      )
    }),
  )
  // Flatten
  githubProjects.push(...data.flat())
  return githubProjects
}

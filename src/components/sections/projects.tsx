import { projectData, githubRepositories } from '@/data/projects'
import { ProjectCard } from '@/components/project-card'
import { api } from '@/lib/github'
import { githubRepoToProject } from '@/lib/github/adapter'
import { Project } from '@/types/project'

export async function Projects() {
  // Fetch GitHub projects
  const githubProjects = await fetchGithubProjects()

  // Merge static and dynamic projects
  const projects = [...projectData, ...githubProjects]

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 mb-12">
          <h2 className="text-3xl font-mono font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of my recent work, personal projects, and experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id ?? idx} project={project} />
          ))}
        </div>
      </div>
    </section>
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
      const fetchedRepos = await api.fetchRepositories({ user, repos: repos.map(r => r.repo) })
      return Promise.all(
        fetchedRepos.map(async (repo) => {
          const fullName = `${repo.owner.login}/${repo.name}`
          const override = githubRepositories[fullName] || {}
          const { languages, primaryLanguage } = await api.fetchRepoLanguages({ user: repo.owner.login, repo: repo.name })
          // Merge override with fetched data
          return {
            ...githubRepoToProject(repo, { languages, primaryLanguage }),
            ...override,
          }
        })
      )
    })
  )
  // Flatten
  githubProjects.push(...data.flat())
  return githubProjects
}

// Simple API wrapper around Octokit to fetch repositories
import { GithubRepository } from '@/types'
import octokit from './client'

type FetchRepositoriesParams = {
  user: string
  repos: string[]
}

export async function fetchRepositories({
  user,
  repos,
}: FetchRepositoriesParams): Promise<GithubRepository[]> {
  const results = await Promise.all(
    repos.map(async (repo) => {
      try {
        const { data } = await octokit.rest.repos.get({
          owner: user,
          repo,
        })
        return data
      } catch (error) {
        return null
      }
    }),
  )

  return results.filter(Boolean) as GithubRepository[]
}

export async function fetchRepoLanguages({
  user,
  repo,
}: {
  user: string
  repo: string
}) {
  try {
    const { data: langs } = await octokit.rest.repos.listLanguages({ owner: user, repo })
    const languages = Object.keys(langs)
    // No color info from this endpoint, so just return name
    const primaryLanguage = languages.length > 0 ? { name: languages[0] } : undefined
    return { languages, primaryLanguage }
  } catch (error) {
    console.error(`Failed to fetch languages for ${user}/${repo}:`, error)
    return { languages: [], primaryLanguage: undefined }
  }
}

export default {
  fetchRepositories,
  fetchRepoLanguages,
}

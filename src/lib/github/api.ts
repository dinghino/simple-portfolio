// Simple API wrapper around Octokit to fetch repositories
import { GithubRepository, Repository } from '@/types'
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

export async function fetchRepoLanguages({ user, repo }: { user: string; repo: string }) {
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

type FetchLastCommitParams = {
  user: string
  repo: string
  branch?: string
}
type LastCommit = Repository['lastCommit']

/**
 * Fetch the last commit on the primary branch (main/master) for a GitHub repository
 */
export async function fetchLastCommit(params: FetchLastCommitParams): Promise<LastCommit | null> {
  const { user, repo, branch } = params
  try {
    // If branch is not provided, fetch repo info to get default_branch
    let branchName = branch
    if (!branchName) {
      const { data: repoData } = await octokit.rest.repos.get({ owner: user, repo })
      branchName = repoData.default_branch
    }
    const { data: commits } = await octokit.rest.repos.listCommits({
      owner: user,
      repo,
      sha: branchName,
      per_page: 1,
    })
    if (commits.length === 0) return null
    const commit = commits[0]
    return {
      message: commit.commit.message.split('\n')[0] || '',
      author: commit.commit.author?.name || '',
      date: commit.commit.author?.date || '',
      branch: branchName,
    }
  } catch (error) {
    return null
  }
}

export default {
  fetchRepositories,
  fetchRepoLanguages,
  fetchLastCommit,
}

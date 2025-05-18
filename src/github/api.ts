/**
 * Functions to interact with GitHub API using Octokit
 */
import { Octokit } from "@octokit/rest";
import { Project } from "@/types/project";

/**
 * Initialize Octokit client with GitHub token
 */
function getOctokitClient() {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  
  if (!token) {
    throw new Error("GitHub token not found");
  }
  
  return new Octokit({ auth: token });
}

/**
 * Fetch repositories from GitHub
 */
export async function fetchGitHubRepos(): Promise<Partial<Project>[]> {
  try {
    const octokit = getOctokitClient();
    
    // Assuming format is username/repo for githubRepo in projectData
    const projectRepoNames = (await import("@/data/projects"))
      .projectData
      .map(project => {
        const [owner, repo] = project.githubRepo.split('/');
        return { owner, repo };
      });
    
    // Fetch data for each repository
    const repoPromises = projectRepoNames.map(async ({ owner, repo }) => {
      try {
        const { data } = await octokit.repos.get({
          owner,
          repo,
        });
        
        return {
          name: `${owner}/${repo}`,
          description: data.description,
          stars: data.stargazers_count,
          updatedAt: data.updated_at,
        };
      } catch (error) {
        console.error(`Error fetching repo ${owner}/${repo}:`, error);
        return {
          name: `${owner}/${repo}`,
          description: "",
          stars: 0,
        };
      }
    });
    
    return await Promise.all(repoPromises);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
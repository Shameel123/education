import { Octokit } from "@octokit/rest";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = "hasabTech";
const REPO_NAME = "learning-pathways";
const DEFAULT_BRANCH = "main";

// Initialize Octokit with token if available
const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

export interface RepoContent {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string | null;
  type: "file" | "dir";
  content?: string;
  encoding?: string;
}

/**
 * Fetches repository content from a specific path
 */
export async function getRepoContent(
  path: string = ""
): Promise<RepoContent[]> {
  try {
    const { data } = await octokit.request(
      "GET /repos/{owner}/{repo}/contents/{path}",
      {
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path,
        ref: DEFAULT_BRANCH,
      }
    );

    return Array.isArray(data)
      ? (data as RepoContent[])
      : [data as RepoContent];
  } catch (error) {
    console.error(`Error fetching repo content at path ${path}:`, error);
    return [];
  }
}

/**
 * Fetches a single file's content from the repository
 */
export async function getFileContent(path: string): Promise<string | null> {
  try {
    const { data } = (await octokit.request(
      "GET /repos/{owner}/{repo}/contents/{path}",
      {
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path,
        ref: DEFAULT_BRANCH,
      }
    )) as { data: RepoContent | RepoContent[] };

    if (Array.isArray(data) || !data) {
      return null;
    }

    // GitHub API returns base64 encoded content
    return data.content
      ? Buffer.from(data.content, "base64").toString("utf-8")
      : null;
  } catch (error) {
    console.error(`Error fetching file content at path ${path}:`, error);
    return null;
  }
}

/**
 * Fetches the root README.md content
 */
export async function getRootReadme(): Promise<string | null> {
  return getFileContent("README.md");
}

/**
 * Fetches all available pathways
 */
export async function getPathways(): Promise<RepoContent[]> {
  const contents = await getRepoContent();
  return contents.filter(
    (item) =>
      item.type === "dir" &&
      !item.name.startsWith(".") &&
      item.name !== "modules"
  );
}

/**
 * Fetches all modules (reusable content)
 */
export async function getModules(): Promise<RepoContent[]> {
  try {
    return await getRepoContent("modules");
  } catch (error) {
    console.error("Error fetching modules:", error);
    return [];
  }
}

import { getFileContent, getRepoContent } from "@/lib/github";
// import { extractTitle } from "@/lib/markdown";
import { notFound } from "next/navigation";
import MarkdownContent from "@/app/components/content-renderer/MarkddownContent";
import DirectoryListing from "@/app/components/content-renderer/DirectoryListing";

export const revalidate = 3600; // Revalidate content every hour

interface PageProps {
  params: {
    path: string[];
  };
}

export default async function LearningPathPage({ params }: PageProps) {
  const path = params.path.join("/");

  try {
    // First, try to load README.md in this directory
    const readmePath = path ? `${path}/README.md` : "README.md";
    const readmeContent = await getFileContent(readmePath);

    // Also fetch directory contents
    const dirContents = await getRepoContent(path);

    // If no README and no directory contents, page doesn't exist
    if (!readmeContent && dirContents.length === 0) {
      return notFound();
    }

    // // Get title from markdown or use fallback
    // const title = readmeContent 
    //   ? extractTitle(readmeContent) || (path.split('/').pop() || 'Learning Path')
    //   : (path.split('/').pop() || 'Learning Path');

    const filteredDirContents = dirContents.filter(
      (item) => item.name !== "README.md"
    );

    const isTopLevelPath = path.split("/").length === 1;

    return (
      <div className="container mx-auto py-8 px-4">
        {readmeContent && (
          <div className="mb-8">
            {/* <h1 className="text-3xl font-bold mb-6">{title}</h1> */}
            <MarkdownContent content={readmeContent} />
          </div>
        )}

        {filteredDirContents.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              {isTopLevelPath ? "Explore Learning Paths" : "Explore Modules"}
            </h2>
            <DirectoryListing
              contents={filteredDirContents}
              currentPath={path}
            />
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error(`Error loading content for path ${path}:`, error);
    return notFound();
  }
}
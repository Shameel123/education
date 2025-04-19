/* eslint-disable @typescript-eslint/no-explicit-any */
import { getFileContent, getRepoContent } from "@/lib/github";
import { notFound } from "next/navigation";
import MarkdownContent from "@/app/components/content-renderer/MarkddownContent";
import DirectoryListing from "@/app/components/content-renderer/DirectoryListing";

export const revalidate = 3600;

export default async function LearningPathPage(
  _: any,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  const { path: rawPath } = await params;
  const path = rawPath?.join("/") ?? "";

  try {
    const readmePath = path ? `${path}/README.md` : "README.md";
    const readmeContent = await getFileContent(readmePath);
    const dirContents = await getRepoContent(path);

    if (!readmeContent && dirContents.length === 0) {
      return notFound();
    }

    const filteredDirContents = dirContents.filter(
      (item) => item.name !== "README.md"
    );

    const isTopLevelPath = path.split("/").length === 1;

    return (
      <div className="container mx-auto py-8 px-4">
        {readmeContent && (
          <div className="mb-8">
            <MarkdownContent content={readmeContent} />
          </div>
        )}

        {filteredDirContents.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              {isTopLevelPath ? "Explore Learning Paths" : "Explore Modules"}
            </h2>
            <DirectoryListing contents={filteredDirContents} currentPath={path} />
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error(`Error loading content for path ${path}:`, error);
    return notFound();
  }
}

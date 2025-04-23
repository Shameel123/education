import DirectoryListing from "@/app/components/content-renderer/DirectoryListing";
import MarkdownContent from "@/app/components/content-renderer/MarkddownContent";
import { getFileContent, getRepoContent } from "@/lib/github";
import { notFound } from "next/navigation";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function page(data: any) {
  const resolvedData = await data;
  const resolvedParams = await resolvedData?.params; // Await the params promise
  const path = resolvedParams?.path;
  console.log(path);
  try {
    const readmePath = path ? `frontend/${path}.md` : "README.md";
    console.log(readmePath);
    const readmeContent = await getFileContent(readmePath);
    console.log(readmeContent);
    const dirContents = await getRepoContent(path);

    if (!readmeContent && dirContents.length === 0) {
      return <div>this is dynamic route</div>;
      // return notFound();
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

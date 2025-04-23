import { NextRequest, NextResponse } from "next/server";
import { getFileContent, getRepoContent } from "@/lib/github";
import { processMarkdown } from "@/lib/markdown";

export async function GET(request: NextRequest) {
  try {
    // Extract path from the URL
    const url = request.nextUrl;
    const pathSegments = url.pathname
      .replace("/api/github/", "")
      .split("/")
      .filter(Boolean); // removes any empty segments

    const path = pathSegments.join("/");

    if (path.endsWith(".md")) {
      const content = await getFileContent(path);

      if (!content) {
        return NextResponse.json(
          { message: "Content not found" },
          { status: 404 }
        );
      }

      const processedContent = await processMarkdown(content);
      return NextResponse.json(processedContent);
    } else {
      const contents = await getRepoContent(path);
      return NextResponse.json({ contents });
    }
  } catch (error) {
    console.error("Error handling GitHub API request:", error);
    return NextResponse.json(
      { message: "Failed to fetch from GitHub" },
      { status: 500 }
    );
  }
}

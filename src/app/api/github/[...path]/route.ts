import { NextRequest, NextResponse } from 'next/server';
import { getFileContent, getRepoContent } from '@/lib/github';
import { processMarkdown } from '@/lib/markdown';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    // Join path segments and handle both directory and file requests
    const path = params.path.join('/');
    
    // Check if we're requesting a specific file (ending in .md)
    if (path.endsWith('.md')) {
      const content = await getFileContent(path);
      
      if (!content) {
        return NextResponse.json(
          { message: 'Content not found' },
          { status: 404 }
        );
      }
      
      const processedContent = await processMarkdown(content);
      return NextResponse.json(processedContent);
    } else {
      // It's a directory, return its contents
      const contents = await getRepoContent(path);
      return NextResponse.json({ contents });
    }
  } catch (error) {
    console.error('Error handling GitHub API request:', error);
    return NextResponse.json(
      { message: 'Failed to fetch from GitHub' },
      { status: 500 }
    );
  }
}
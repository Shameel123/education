// lib/markdown.ts
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';

/**
 * Converts markdown content to HTML
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm) // GitHub Flavored Markdown
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw) // Pass raw HTML through
    .use(rehypePrism) // Syntax highlighting
    .use(rehypeStringify)
    .process(markdown);
  
  return result.toString();
}

/**
 * Extracts title from markdown content (first h1)
 */
export function extractTitle(markdown: string): string {
  const titleMatch = markdown.match(/^# (.*$)/m);
  return titleMatch ? titleMatch[1] : 'Untitled';
}

/**
 * Extracts metadata from markdown frontmatter if present
 */
export function extractMetadata(markdown: string): Record<string, unknown> {
  const metadata: Record<string, unknown> = {};
  
  // Match frontmatter if present
  const frontmatterMatch = markdown.match(/^---\n([\s\S]*?)\n---/);
  
  if (frontmatterMatch && frontmatterMatch[1]) {
    const frontmatter = frontmatterMatch[1];
    const lines = frontmatter.split('\n');
    
    lines.forEach(line => {
      const match = line.match(/^([^:]+):\s*(.*)$/);
      if (match) {
        const [, key, value] = match;
        metadata[key.trim()] = value.trim();
      }
    });
  }
  
  return metadata;
}

/**
 * Processes markdown content
 * Returns HTML content and metadata
 */
export async function processMarkdown(markdown: string): Promise<{ 
  html: string;
  title: string;
  metadata: Record<string, unknown>;
}> {
  const title = extractTitle(markdown);
  const metadata = extractMetadata(markdown);
  const html = await markdownToHtml(markdown);
  
  return {
    html,
    title,
    metadata
  };
}
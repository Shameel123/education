/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";

interface MarkdownContentProps {
  content: string; // Raw markdown content
  html?: string; // Optional HTML for backward compatibility
}

export default function MarkdownContent({
  content,
  html,
}: MarkdownContentProps) {
  const pathname = usePathname();

  // If html prop is provided, use legacy rendering
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!html || !contentRef.current) return;

    const links = contentRef.current.querySelectorAll("a");

    links.forEach((link) => {
      const href = link.getAttribute("href");

      if (
        href &&
        (href.endsWith(".md") ||
          href.startsWith("./") ||
          href.startsWith("../"))
      ) {
        link.addEventListener("click", (e) => {
          e.preventDefault();

          let newPath = href.replace(/^\.\//, "").replace(/\.md$/, "");

          if (newPath.startsWith("../")) {
            const pathParts = pathname.split("/").filter(Boolean);
            pathParts.pop();
            newPath = newPath.replace(/^\.\.\//, "");
            const finalPath = `/learning/${pathParts.join(
              "/"
            )}/${newPath}`.replace(/\/+/g, "/");
            window.location.href = finalPath;
            return;
          }

          const basePath = pathname.replace(/\/[^\/]*$/, "");
          const finalPath = `${basePath}/${newPath}`.replace(/\/+/g, "/");
          window.location.href = finalPath;
        });
      }
    });
  }, [html, pathname]);

  if (html) {
    return (
      <div
        ref={contentRef}
        className="prose prose-lg max-w-none bg-white p-6 rounded-lg shadow-md"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  // Custom renderer for links to handle internal markdown links
  const handleLinkClick = (href: string) => (e: React.MouseEvent) => {
    // Process only relative markdown links
    if (
      href &&
      (href.endsWith(".md") || href.startsWith("./") || href.startsWith("../"))
    ) {
      e.preventDefault();

      // Convert the GitHub-style relative link to a Next.js path
      let newPath = href.replace(/^\.\//, "").replace(/\.md$/, "");

      // Handle up-directory links (../)
      if (newPath.startsWith("../")) {
        const pathParts = pathname.split("/").filter(Boolean);
        // Remove the last path part and add the new relative path
        pathParts.pop();
        newPath = newPath.replace(/^\.\.\//, "");
        const finalPath = `/learning/${pathParts.join("/")}/${newPath}`.replace(
          /\/+/g,
          "/"
        );
        window.location.href = finalPath;
        return;
      }

      // Handle normal links within the same directory
      // const basePath = pathname.replace(/\/[^\/]*$/, "");
      // const finalPath = `${pathname}/${newPath}`.replace(/\/+/g, "/");
      const basePath = pathname;
      const normalizedBase = basePath.startsWith("/learning")
        ? basePath
        : `/learning${basePath}`;
      const finalPath = `${normalizedBase}/${newPath}`.replace(/\/+/g, "/");

      window.location.href = finalPath;
    }
  };

  return (
    <div className="bg-white w-full p-4 rounded-lg ">
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // Support GFM (tables, strikethrough, etc)
          rehypePlugins={[rehypeRaw]} // Allow HTML in markdown
          components={{
            h1: ({ node, ...props }) => (
              <h1
                className="text-3xl font-bold mb-4 pb-2 text-orange-400 border-b border-gray-200"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="text-2xl font-bold mt-8 mb-4 text-blue-950"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="text-xl font-bold mt-6 mb-3 text-blue-950"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p className="my-4 leading-relaxed text-black" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc pl-6 my-4 text-black" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal pl-6 my-4 text-black" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="mb-2 text-black" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-4 border-gray-300 text-black pl-4 italic my-4 text-gray-700"
                {...props}
              />
            ),
            hr: ({ node, ...props }) => (
              <hr className="my-8 border-t border-gray-300" {...props} />
            ),
            a: ({ node, href, ...props }) => (
              <a
                href={href}
                className="text-blue-600 hover:text-blue-800 underline"
                // onClick={href ? handleLinkClick(href) : undefined}
                {...props}
                target="_blank"
                rel="noopener noreferrer"
              />
            ),
            code: ({
              inline,
              className,
              children,
              ...props
            }: {
              inline?: boolean;
              className?: string;
              children?: React.ReactNode;
            }) =>
              inline ? (
                <code
                  className={`bg-gray-100 px-1 py-0.5 rounded text-red-600 font-mono text-sm ${
                    className || ""
                  }`}
                  {...props}
                >
                  {children}
                </code>
              ) : (
                <pre
                  className={`block bg-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto my-4 ${
                    className || ""
                  }`}
                  {...props}
                >
                  <code>{children}</code>
                </pre>
              ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

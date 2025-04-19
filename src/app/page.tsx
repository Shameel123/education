// app/page.tsx
import { getRootReadme, getPathways } from "@/lib/github";
import { extractTitle } from "@/lib/markdown"; // Assuming you have this or can add it
import MarkdownContent from "@/app/components/content-renderer/MarkddownContent";
import PathwayCard from "@/app/components/content-renderer/ui/PathwayCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "hasabTech Education - Learning Pathways",
  description:
    "Structured learning pathways to help you grow as a modern developer",
};

export const revalidate = 3600; // Revalidate content every hour

export default async function Home() {
  const readmeContent = await getRootReadme();

  if (!readmeContent) {
    return (
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          hasabTech Education
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Failed to load content. Please check back later.
        </p>
      </div>
    );
  }

  const title = extractTitle(readmeContent) || "hasabTech Education";
  const pathways = await getPathways();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with enhanced gradient and animation */}
      <div className="bg-gradient-to-br from-blue-950 via-blue-950/95 to-orange-600/70 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in text-orange-400">
            {title}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Structured learning paths to help you grow as a modern developer
          </p>
          <div className="mt-8">
            <a
              href="#pathways"
              className="hover:bg-orange-400 text-white border px-8 py-4 rounded-full font-bold 
                        transition-all duration-300 shadow-lg 
                       hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Pathways
            </a>
          </div>
        </div>
      </div>

      {/* Pathways Section with improved cards */}
      <div className="container mx-auto py-16 px-4">
        <section id="pathways" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-12 text-center text-blue-950">
            Learning Pathways
          </h2>
          <div className="flex items-center justify-center">
            {pathways.map((pathway) => (
              <PathwayCard
                key={pathway.path}
                title={pathway.name}
                path={`/learning/${pathway.path}`}
                className="bg-white shadow-lg  hover:shadow-2xl 
                         transition-all duration-300 transform hover:-translate-y-2"
              />
            ))}
          </div>
        </section>

        {/* Markdown Content Section */}
        <section className="bg-white w-full p-8 rounded-xl shadow-lg  mx-auto">
          <MarkdownContent content={readmeContent} />
        </section>
      </div>
    </main>
  );
}

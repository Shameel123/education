// app/page.tsx
import { getRootReadme, getPathways } from '@/lib/github';
import { extractTitle } from '@/lib/markdown'; // Assuming you have this or can add it
import MarkdownContent from '@/app/components/content-renderer/MarkddownContent'
import PathwayCard from '@/app/components/content-renderer/ui/PathwayCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'hasabTech Education - Learning Pathways',
  description: 'Structured learning pathways to help you grow as a modern developer',
};

export const revalidate = 3600; // Revalidate content every hour

export default async function Home() {
  // Get the root README from GitHub
  const readmeContent = await getRootReadme();
  
  if (!readmeContent) {
    return (
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold">hasabTech Education</h1>
        <p className="mt-4">Failed to load content. Please check back later.</p>
      </div>
    );
  }
  
  // Extract title from markdown (this could be your existing function or a new one)
  const title = extractTitle(readmeContent) || 'hasabTech Education';
  
  // Get available pathways
  const pathways = await getPathways();
  
  return (
    <main>
      <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="mt-4 text-xl">
            Structured learning paths to help you grow as a modern developer
          </p>
          <div className="mt-6">
            <a
              href="#pathways"
              className="bg-white text-blue-800 px-6 py-2 rounded-md font-medium hover:bg-blue-50 transition"
            >
              Explore Pathways
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-12 px-4">
        <section id="pathways" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Learning Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathways.map((pathway) => (
              <PathwayCard
                key={pathway.path}
                title={pathway.name}
                path={`/learning/${pathway.path}`}
              />
            ))}
          </div>
        </section>
        
        <section>
          <MarkdownContent content={readmeContent} />
        </section>
      </div>
    </main>
  );
}
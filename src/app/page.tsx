// app/page.tsx
import { getRootReadme, getPathways } from "@/lib/github";
import { extractTitle } from "@/lib/markdown"; // Assuming you have this or can add it
import MarkdownContent from "@/app/components/content-renderer/MarkddownContent";
import { Metadata } from "next";
import HeroSection from "./components/ui/homepage-ui/hero-section";
import PathWays from "./components/ui/homepage-ui/pathways-section";
import MernTheory from "./components/ui/homepage-ui/mern-theory";

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
      <div className="container mx-auto py-16 px-4 mt-10">
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
    <main className="min-h-screen bg-white w-fit mx-auto ">
      {/* Hero Section */}
      <section className=" md:px-10 lg:px-20">
        <HeroSection title={title} />
      </section>

      {/* Pathways Section */}
      <section id="learning-path">
        <PathWays pathways={pathways} />
      </section>
      {/* Mern Theory Section */}
      <section className="px-2 md:px-10 lg:px-20">
        <MernTheory />
      </section>
      {/* Markdown Content Section */}
      <section className="bg-white w-full p-6 sm:p-8 rounded-xl shadow-lg mx-auto">
        <MarkdownContent content={readmeContent} />
      </section>
    </main>
  );
}

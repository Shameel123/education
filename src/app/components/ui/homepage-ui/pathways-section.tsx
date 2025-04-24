import React from "react";
import PathwayCard from "../../content-renderer/ui/PathwayCard";

//Define the type for a single pathway
interface Pathway {
  name: string;
  path: string;
}

//Define the props for the component
interface PathWaysProps {
  pathways: Pathway[];
}

//Use the props type in the function
export default function PathWays({ pathways }: PathWaysProps) {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6">
      <section id="pathways" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 text-center text-blue-950">
          Learning <span className="text-[#FB933B]"> Pathways </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {pathways.map((pathway) => (
            <PathwayCard
              key={pathway.path}
              formattedTitle={pathway.name}
              path={`/learning/${pathway.path}`}
              className="bg-white shadow-lg hover:shadow-2xl 
                         transition-all duration-300 transform hover:-translate-y-2 w-full sm:w-72"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "../../../../../utils/socialmedia-data";
// Step 1: Define the props type
interface HeroSectionProps {
  title: string;
}

// Step 2: Use it in the component declaration
export default function HeroSection({ title }: HeroSectionProps) {
  return (
    <div className="border border-gray-600 md:mt-10 md:rounded-2xl  text-white py-16 p-4 relative flex flex-col justify-center items-center h-fit overflow-hidden">
      {/* Background layers */}
      <div className="absolute md:rounded-2xl w-full h-full  z-10 bg-cover bg-no-repeat bg-[url(/images/tech-bg.jpg)] opacity-20" />
      <div className="absolute md:rounded-2xl w-full h-full backdrop-blur-xs md:backdrop-blur-4xl bg-white/20 md:bg-white/60  z-20 md:opacity-30 bg-cover" />

      {/* Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-7xl">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-2 text-start z-30 mt-10 lg:mt-0">
          <h1 className="text-3xl md:text-6xl font-bold animate-fade-in text-[#FC935E]">
            {title}
          </h1>
          <p className="mt-6 text-lg  text-[#0F134F]  max-w-2xl">
            Structured learning paths to help you grow as a modern developer
          </p>
          <ul className="flex items-center justify-between w-fit text-black space-x-4 mt-2 ">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.id}>
                <Link
                  href={`${item.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl text-[#0F134F] hover:text-[#FC935E]"
                >
                  {<item.icon />}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="#pathways"
              className="hover:bg-orange-400 text-[#0F134F] hover:text-white border px-6 sm:px-8 py-3 sm:py-4 rounded-md font-bold transition-all duration-300 shadow-lg block w-fit hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Pathways
            </Link>
          </div>
        </div>

        {/* Image Grid */}
        <div className="hidden md:block w-full z-40 lg:w-1/2 mt-10 md:mt-4 mb-10 lg:mb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-lg h-60 sm:h-64 transform hover:scale-105 transition duration-500">
                <Image
                  src="/images/grid-image-4.avif"
                  alt="Student learning online"
                  className="object-cover h-full w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg h-32 sm:h-40 transform hover:scale-105 transition duration-500">
                <Image
                  src="/images/tech.jpg"
                  alt="Group study session"
                  className="object-cover h-full w-full"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="space-y-4 sm:mt-8">
              <div className="overflow-hidden rounded-2xl shadow-lg h-32 sm:h-40 transform hover:scale-105 transition duration-500">
                <Image
                  src="/images/gridimage1.jpg"
                  alt="Virtual classroom"
                  className="object-cover h-full w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg h-60 sm:h-64 transform hover:scale-105 transition duration-500">
                <Image
                  src="/images/gridimage2.jpg"
                  alt="Student achievement"
                  className="object-cover h-full w-full"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

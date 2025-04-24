import React from "react";
import { FaGithub } from "react-icons/fa";

export default function GitLearningPathHeroSection() {
  return (
    <section className="px-2 md:px-10 lg:px-20">
      <div className="p-4 md:p-10 sm:p-10 m-5 rounded-3xl mt-20 border bg-white text-black flex items-center justify-center overflow-hidden shadow-2xl">
        <div className="w-full max-w-6xl px-2 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center text-center md:text-left z-10">
              <h1 className="text-center md:text-start text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold uppercase leading-tight w-full tracking-tight text-[#0C1250]">
                <FaGithub className="mx-auto" />
              </h1>
              <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight text-[#0C1250]">
                Learn Github Skills{" "}
                <span className="text-orange-500">Impact</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-400 dark:text-gray-400 text-gray-700 text-balance">
                Brutal aesthetics for a bold web presence. Build without
                compromise.
              </p>
              {/* <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
          <a
            href="#get-started"
            className="rounded-sm p-3 grow text-center bg-yellow-500 text-black font-bold uppercase text-sm tracking-widest hover:bg-yellow-600 transition"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="rounded-sm p-3 grow border text-center border-yellow-500 text-yellow-500 font-bold uppercase text-sm tracking-widest hover:bg-yellow-500 hover:text-black transition"
          >
            Learn More
          </a>
        </div> */}
            </div>

            <div className="relative flex items-center sm:m-10">
              <div className="absolute -top-10 md:-top-20 -left-10 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-orange-500 rotate-12 rounded-lg border-yellow-700 border-b-4 border-r-8 max-sm:hidden"></div>
              <div className="relative z-10 bg-gray-800 dark:bg-gray-800 p-4 sm:p-6 -right-1/2 -translate-x-1/2 grow text-center shadow-2xl -rotate-2 rounded-xl text-nowrap border-slate-950 border-b-4 border-r-8">
                <h2 className="text-2xl sm:text-3xl font-bold uppercase text-gray-50 dark:text-gray-50">
                  Think and Develop
                </h2>
                <p className="mt-1 text-sm sm:text-base font-light text-gray-400 dark:text-gray-400">
                  Dive into the world of Git
                </p>
              </div>
              <div className="absolute -bottom-10 md:-bottom-20 -right-16 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-[#0C1250] -rotate-12 rounded-lg border-blue-900 border-r-4 border-b-8 max-sm:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

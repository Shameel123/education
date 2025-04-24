import React from "react";
import Image from "next/image";
export default function MernTheory() {
  return (
    <div className="border rounded-xl overflow-hidden p-4 text-[#0C124E]">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center my-2">
        Learn One of The Fastest Growing Technology in the World of Web
        Development: <span className="text-[#FB925C]">MERN</span>
      </h1>
      <Image
        src={`${"/images/MERN-theory.webp"}`}
        alt="This is image"
        height={1080}
        width={1960}
        className="h-full w-full rounded-xl shadow-md border border-gray-500"
      />
    </div>
  );
}

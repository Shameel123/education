import Image from "next/image";
import Link from "next/link";
import { BookIcon } from "./Icons";
interface PathwayCardProps {
  path: string;
  className?: string;
  formattedTitle: string;
  description?: string;
}

export default function PathwayCard({
  path,
  className = "",
  formattedTitle,
  description,
}: PathwayCardProps) {
  return (
    <Link
      href={`${path}`}
      className={`flex flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] w-full max-w-sm ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative h-48 sm:h-56 md:h-64 w-full">
        <Image
          src="/images/frontend.jpg"
          alt={formattedTitle}
          className="object-cover rounded-t-2xl"
          fill
        />
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow space-y-3">
        <div className="flex items-center gap-3 text-orange-500">
          <BookIcon className="h-7 w-7" />
          <h3 className="text-lg sm:text-xl font-semibold">{formattedTitle}</h3>
        </div>

        <p className="text-sm sm:text-base text-gray-600">
          {description || `Explore the ${formattedTitle} learning pathway`}
        </p>

        <div className="text-orange-500 font-semibold mt-auto">
          Start Learning &rarr;
        </div>
      </div>
    </Link>
  );
}

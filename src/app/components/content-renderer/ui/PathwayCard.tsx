import Link from "next/link";
import { BookIcon } from "./Icons";

interface PathwayCardProps {
  title: string;
  path: string;
  description?: string;
  className: string;
}

export default function PathwayCard({
  title,
  path,
  description,
  className,
}: PathwayCardProps) {
  // Format title to be more readable
  const formattedTitle = title
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <Link
      href={path}
      className={`${className} shadow-md hover:shadow-[5px_5px_rgba(23,_37,_84,_0.4),_10px_10px_rgba(23,_37,_84,_0.3),_15px_15px_rgba(23,_37,_84,_0.2),_20px_20px_rgba(23,_37,_84,_0.1),_25px_25px_rgba(23,_37,_84,_0.05)]`}
    >
      <div className="border rounded-lg p-6 h-full hover:shadow-md transition cursor-pointer">
        <div className="flex items-center gap-3 mb-3 text-orange-400">
          <BookIcon className="h-8 w-8 " />
          <h3 className="text-xl font-semibold ">{formattedTitle}</h3>
        </div>
        <p className="text-gray-600">
          {description || `Explore the ${formattedTitle} learning pathway`}
        </p>
        <div className="mt-4 text-orange-400 font-medium">
          Start Learning &rarr;
        </div>
      </div>
    </Link>
  );
}

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
    <Link href={path} className={className}>
      <div className="border rounded-lg p-6 h-full hover:shadow-md transition cursor-pointer">
        <div className="flex items-center gap-3 mb-3">
          <BookIcon className="h-8 w-8 text-blue-600" />
          <h3 className="text-xl font-semibold text-black">{formattedTitle}</h3>
        </div>
        <p className="text-gray-600">
          {description || `Explore the ${formattedTitle} learning pathway`}
        </p>
        <div className="mt-4 text-blue-600 font-medium">
          Start Learning &rarr;
        </div>
      </div>
    </Link>
  );
}

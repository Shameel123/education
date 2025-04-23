import Link from "next/link";
import { RepoContent } from "@/lib/github";
import {
  FolderIcon,
  FileIcon,
} from "@/app/components/content-renderer/ui/Icons";

interface DirectoryListingProps {
  contents: RepoContent[];
  currentPath: string;
}

export default function DirectoryListing({
  contents,
  currentPath,
}: DirectoryListingProps) {
  // Sort by type (directories first) and then by name
  const sortedContents = [...contents].sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === "dir" ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });

  // Filter out README.md as it's already displayed
  const filteredContents = sortedContents.filter(
    (item) => item.name !== "README.md" && !item.name.startsWith(".")
  );

  if (filteredContents.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredContents.map((item) => {
        // Create the learning path URL
        const itemPath = `${currentPath ? `${currentPath}/` : ""}${item.name}`;
        const href = `/learning/${itemPath}`;

        return (
          <Link
            key={item.path}
            href={href}
            className="p-4 border rounded-lg hover:bg-gray-50 transition flex items-center gap-3"
          >
            {item.type === "dir" ? (
              <FolderIcon className="h-6 w-6 text-blue-500" />
            ) : (
              <FileIcon className="h-6 w-6 text-gray-500" />
            )}
            <div>
              <h3 className="font-medium">{item.name}</h3>
              {item.type === "dir" && (
                <p className="text-sm text-gray-600">Directory</p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

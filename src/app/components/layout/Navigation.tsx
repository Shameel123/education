"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/90">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="flex items-center gap-2 transition hover:opacity-80"
          >
            <span className="font-bold text-xl bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              hasabTech
            </span>
            <span className="text-gray-600">Education</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-8">
            <Link
              href="/"
              className={`font-medium transition-colors duration-200 ${
                pathname === "/"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/learning"
              className={`font-medium transition-colors duration-200 ${
                pathname.startsWith("/learning")
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Learning Paths
            </Link>
            <a
              href="https://hasab.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-600 hover:text-blue-600"
            >
              Main Website
            </a>
          </nav>
        </div>

        {/* Mobile menu with animation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col gap-4 py-4 border-t">
            <Link
              href="/"
              className={`font-medium ${
                pathname === "/" ? "text-blue-600" : "text-gray-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/learning"
              className={`font-medium ${
                pathname.startsWith("/learning")
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Learning Paths
            </Link>
            <a
              href="https://hasab.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-600"
            >
              Main Website
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

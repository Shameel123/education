'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-blue-800">hasabTech</span>
            <span className="text-gray-600">Education</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <nav className="hidden md:flex gap-6">
            <Link 
              href="/" 
              className={`font-medium ${pathname === '/' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link 
              href="/learning" 
              className={`font-medium ${pathname.startsWith('/learning') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
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
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/" 
                className={`font-medium ${pathname === '/' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/learning" 
                className={`font-medium ${pathname.startsWith('/learning') ? 'text-blue-600' : 'text-gray-600'}`}
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
        )}
      </div>
    </header>
  );
}
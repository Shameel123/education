"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center">
      <nav className="fixed z-50 w-full max-w-7xl md:my-2 mx-4 bg-white shadow-sm border border-gray-200 md:rounded-full px-6 py-3 md:px-8 md:mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* <svg
                classNLinkme="h-8 w-8 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800">
                DevPath
              </span> */}
              <Image
                src={"/images/logo.png"}
                alt="image"
                height={200}
                width={200}
              />
            </Link>
          </div>

          {/* Desktop Navigation - visible only on large screens (lg) */}
          <div className="hidden lg:flex items-center space-x-8 text-[#0F134F]">
            <Link
              href="#learning-path"
              className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium"
            >
              Learning Path
            </Link>
            <Link
              href="https://blog.hasab.tech/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium"
            >
              Our Blogs
            </Link>
            <Link
              href="https://hasabtech-frontend.vercel.app/"
              className="text-gray-600 hover:text-indigo-600 transition duration-300 font-medium"
              rel="noopener noreferrer"
              target="_blank"
            >
              Main Website
            </Link>
            <Link
              href="https://chat.whatsapp.com/DvWWIkt6OWBGBrzTfMR12k"
              rel="noopener noreferrer"
              target="_blank"
              className="bg-[#0F134F] text-white px-5 py-2 rounded-full hover:text-[#FB933B] transition duration-300 font-medium"
            >
              Join Our Community
            </Link>
          </div>

          {/* Mobile/Medium Screen Menu Button - visible on small and medium screens */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md p-2"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
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
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Medium Screen Dropdown Menu with animation */}
        <div
          className={`lg:hidden mt-6 pb-2 bg-white rounded-lg shadow-md absolute left-4 right-4 z-10 border border-gray-100 transform transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link
              href="#learning-path"
              className="text-gray-600 hover:text-indigo-600 transition duration-300 px-3 py-2 rounded-md font-medium"
            >
              Learning Path
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition duration-300 px-3 py-2 rounded-md font-medium"
            >
              Our Blogs
            </Link>
            <Link
              href="https://blog.hasab.tech/"
              className="text-gray-600 hover:text-indigo-600 transition duration-300 px-3 py-2 rounded-md font-medium"
            >
              Main Website
            </Link>
            <Link
              href="https://chat.whatsapp.com/DvWWIkt6OWBGBrzTfMR12k"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0F134F] text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300 text-center font-medium"
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

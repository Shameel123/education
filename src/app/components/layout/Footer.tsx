import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaGlobe,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0B134E] via-[#0B134E] to-orange-800/80 text-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <Image
              src={"/images/footer-logo.gif"}
              alt="logo"
              height={300}
              width={300}
            />
            <p className="text-sm text-blue-200 max-w-xs">
              Curated learning pathways to help you grow as a modern developer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-orange-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://hasab.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-300 transition"
                >
                  🌐 Website
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/hasabTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-300 transition"
                >
                  💻 GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/hasabTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-300 transition"
                >
                  🔗 LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/channel/UCoV4j9Teot3uWDGlIPJ0GPA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-300 transition"
                >
                  📺 YouTube
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="text-xl font-semibold text-orange-400 mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <Link
                href="https://web.facebook.com/hasabTech/"
                className="hover:text-orange-300 transition"
                target="_blank"
              >
                <FaFacebookF size={22} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/hasabTech
"
                className="hover:text-orange-300 transition"
                target="_blank"
              >
                <FaLinkedinIn size={22} />
              </Link>
              <Link
                href="https://www.instagram.com/hasab.tech/"
                className="hover:text-orange-300 transition"
                target="_blank"
              >
                <FaInstagram size={22} />
              </Link>
              <Link
                href="https://github.com/hasabTech"
                className="hover:text-orange-300 transition"
                target="_blank"
              >
                <FaGithub size={22} />
              </Link>
              <Link
                href="https://hasab.tech"
                className="hover:text-orange-300 transition"
                target="_blank"
              >
                <FaGlobe size={22} />
              </Link>
              <Link
                href="https://www.youtube.com/@hasabTech"
                className="hover:text-orange-300 transition"
                target="_blank"
              >
                <FaYoutube size={22} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-800 pt-6 text-center text-sm text-blue-300">
          &copy; {currentYear} hasabTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

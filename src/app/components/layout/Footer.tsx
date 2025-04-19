export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gradient-to-br from-blue-950 via-blue-950/95 to-orange-600/70">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-400">
              hasabTech Education
            </h3>
            <p className="text-blue-100">
              Curated learning pathways to help you grow as a modern developer.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-400">
              Connect With Us
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://hasab.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-orange-400 hover:underline"
                >
                  Website
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hasabTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-orange-400 hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/80248667/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-orange-400 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-400">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/hasabTech/learning-pathways"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-orange-400 hover:underline"
                >
                  Source GitHub Repo
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCoV4j9Teot3uWDGlIPJ0GPA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-orange-400 hover:underline"
                >
                  YouTube Tutorials
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
          &copy; {currentYear} hasabTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

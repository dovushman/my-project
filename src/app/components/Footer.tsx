"use client";

import { useRouter } from "next/navigation";

export default function Footer() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const router = useRouter?.();

  // Scroll logic similar to Header
const handleContactClick = (e: React.MouseEvent) => {
  e.preventDefault();
  if (pathname === "/") {
    const section = document.getElementById("contact");
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Offset for fixed header (56px)
      const offset = rect.top + scrollTop - 56;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  } else if (router) {
    router.push("/?section=contact");
  } else {
    window.location.href = "/?section=contact";
  }
};

  return (
    <footer className="bg-black text-white text-center text-sm py-6 px-4 opacity-90">
      {/* Icon Links */}
      <div className="flex justify-center space-x-4 mb-3">
        <a
          href="https://github.com/dovushman"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2 rounded-full transition hover:text-gray-400"
        >
          <i className="devicon-github-original text-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/dov-ushman/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2 rounded-full transition hover:text-gray-400"
        >
          <i className="devicon-linkedin-plain text-2xl"></i>
        </a>
      </div>

      {/* Text Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center text-white text-sm gap-y-1 sm:gap-y-0 sm:gap-x-0">
        {/* Line 1 */}
        <div className="flex items-center">
          © 2025 Dov Ushman
          <span className="hidden sm:inline px-2">·</span>
        </div>

        {/* Line 2 */}
        <div className="flex items-center">
          Built with Next.js, TypeScript, TailwindCSS
          <span className="hidden sm:inline px-2">·</span>
        </div>

        {/* Line 3 */}
        <div className="flex items-center">
          <a
            href="#contact"
            onClick={handleContactClick}
            className="hover:underline hover:text-white transition cursor-pointer"
          >
            Contact
          </a>
          <span className="px-2">·</span>
          <a
            href="https://github.com/dovushman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white transition"
          >
            GitHub
          </a>
          <span className="px-2">·</span>
          <a
            href="https://linkedin.com/in/dov-ushman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
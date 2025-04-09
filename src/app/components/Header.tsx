"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "../ThemeContext";

type Theme = "light" | "dark" | "ide"; // Define the Theme type

export default function Header() {
  const { theme, setTheme } = useTheme(); // Include setTheme for theme toggling
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false); // State for theme dropdown
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (id: string) => {
    if (pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/?section=${id}`);
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsThemeMenuOpen(false); // Close the dropdown after selection
  };

  return (
    <header
      className="flex justify-between items-center p-2 md:p-4 fixed w-full z-50 shadow-md"
      style={{
        backgroundColor: "var(--navbar-background)",
        color: "var(--text-color)",
        height: "56px",
      }}
    >
      {/* Mobile Menu Icon */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        aria-label="Open Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={theme === "dark" ? "white" : "black"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Logo */}
      <h1 className="text-xl font-semibold">Dov Ushman</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => handleNavigation("home")}
              className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
              style={{
                color: "var(--text-color)",
                backgroundColor: "transparent",
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("about")}
              className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
              style={{
                color: "var(--text-color)",
                backgroundColor: "transparent",
              }}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("skills")}
              className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
              style={{
                color: "var(--text-color)",
                backgroundColor: "transparent",
              }}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("projects")}
              className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
              style={{
                color: "var(--text-color)",
                backgroundColor: "transparent",
              }}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("contact")}
              className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
              style={{
                color: "var(--text-color)",
                backgroundColor: "transparent",
              }}
            >
              Contact
            </button>
          </li>
          <li>
            <a
              href="/static/images/Dov Ushman Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-2">
        {/* GitHub Icon */}
        <a
          href="https://github.com/dovushman"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2 rounded-full bg-transparent transition hover:text-gray-400"
        >
          <i className="devicon-github-original text-2xl"></i>
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/dov-ushman/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2 rounded-full bg-transparent transition hover:text-gray-400"
        >
          <i className="devicon-linkedin-plain text-2xl"></i>
        </a>

       {/* Theme Dropdown */}
       <div className="relative">
  <button
    onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
    className="p-2 rounded-full bg-transparent transition-all duration-300 flex items-center gap-2"
    aria-label="Toggle Theme"
  >
    <i
      className={`fas fa-paint-roller text-lg ${
        theme === "dark" || theme === "ide" ? "text-white" : "text-gray-800"
      }`}
    ></i>
  </button>

  {isThemeMenuOpen && (
    <div
      className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden z-50 border border-gray-200 dark:border-gray-700 transform origin-top-right transition-all duration-300"
    >
      <div className="py-2">
        <button
          onClick={() => handleThemeChange("light")}
          className="flex items-center w-full px-4 py-2 transition-colors"
          style={{ backgroundColor: "transparent" }}
        >
          <i className="fas fa-sun text-yellow-500 mr-3"></i>
          <span className="text-gray-800 dark:text-gray-200">Light Mode</span>
          {theme === "light" && (
            <i className="fas fa-check ml-auto text-green-500"></i>
          )}
        </button>

        <button
          onClick={() => handleThemeChange("dark")}
          className="flex items-center w-full px-4 py-2 transition-colors"
          style={{ backgroundColor: "transparent" }}
        >
          <i className="fas fa-moon text-indigo-400 mr-3"></i>
          <span className="text-gray-800 dark:text-gray-200">Dark Mode</span>
          {theme === "dark" && (
            <i className="fas fa-check ml-auto text-green-500"></i>
          )}
        </button>

        <button
          onClick={() => handleThemeChange("ide")}
          className="flex items-center w-full px-4 py-2 transition-colors"
          style={{ backgroundColor: "transparent" }}
        >
          <i className="fas fa-code text-blue-500 mr-3"></i>
          <span className="text-gray-800 dark:text-gray-200">IDE Mode</span>
          {theme === "ide" && (
            <i className="fas fa-check ml-auto text-green-500"></i>
          )}
        </button>
      </div>
    </div>
  )}
</div>
      </div>
    </header>
  );
}
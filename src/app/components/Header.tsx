"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // Import useRouter
import { useTheme } from "../ThemeContext";

export default function Header() {
  // const { theme, setTheme } = useTheme();
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route
  const router = useRouter(); // Use router for navigation

  // const handleThemeChange = (newTheme: "dark" | "light" | "ide") => {
  //   setTheme(newTheme);
  // };

  const handleNavigation = (id: string) => {
    if (pathname === "/") {
      // If on the homepage, scroll smoothly to the section
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to the homepage with the section query
      router.push(`/?section=${id}`);
    }
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
    </header>
  );
}
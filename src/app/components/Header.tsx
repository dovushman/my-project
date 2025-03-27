"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle the theme and update the `data-theme` attribute on the `html` element
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);

  // Scroll to the section with the given ID
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="flex justify-between items-center p-4 fixed w-full z-10"
      style={{
        backgroundColor: "var(--navbar-background)",
        color: "var(--text-color)",
      }}
    >
      <h1 className="text-xl font-bold">Dov Ushman</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
              style={{
                color: "var(--text-color)",
                backgroundColor: "transparent", // No background for text links
              }}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
              style={{
                color: "var(--text-color)",
                backgroundColor: "transparent", // No background for text links
              }}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
              style={{
                color: "var(--text-color)",
                backgroundColor: "transparent", // No background for text links
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleTheme}
        className="ml-4 px-4 py-2 rounded"
        style={{
          color: "var(--button-text-color)",
          backgroundColor: "var(--button-background)", // Retain button background
          border: "none",
        }}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
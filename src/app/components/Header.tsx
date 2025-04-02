"use client";

import { useState } from "react";
import { useTheme } from "../ThemeContext"; // Import the useTheme hook

export default function Header() {
  const { theme, setTheme } = useTheme(); // Access theme and setTheme from context
  const [isCardOpen, setIsCardOpen] = useState(false); // State to control card visibility

  // Scroll to the section with the given ID
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleThemeChange = (newTheme: "dark" | "light" | "ide") => {
    setTheme(newTheme);
    setIsCardOpen(false); // Close the card after selecting a theme
  };

  return (
    <header
      className="flex justify-between items-center p-4 fixed w-full z-50 shadow-md"
      style={{
        backgroundColor: "var(--navbar-background)",
        color: "var(--text-color)",
      }}
    >
      <h1 className="text-xl font-semibold">Dov Ushman</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => scrollToSection("home")} // Scroll to the Hero section
              className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
              style={{
                color: "var(--text-color)",
                backgroundColor: "transparent", // No background for text links
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")} // Scroll to the About section
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
              onClick={() => scrollToSection("skills")} // Scroll to the Skills section
              className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
              style={{
                color: "var(--text-color)",
                backgroundColor: "transparent", // No background for text links
              }}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")} // Scroll to the Projects section
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
              onClick={() => scrollToSection("contact")} // Scroll to the Contact section
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
      <div className="relative">
        <button
          onClick={() => setIsCardOpen(!isCardOpen)} // Toggle the card
          className="ml-4 p-2 rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          style={{
            color: "var(--button-text-color)",
          }}
          aria-label="Change Theme"
        >
          {/* Theme Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke={theme === "dark" ? "white" : "black"} // Adjust stroke color based on theme
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.66 4.95l-.7-.7M6.05 6.05l-.7-.7m12.02 12.02l-.7-.7M6.05 17.95l-.7-.7M12 5a7 7 0 100 14 7 7 0 000-14z"
            />
          </svg>
        </button>

        {/* Theme Card */}
        {isCardOpen && (
          <div
            className={`absolute top-12 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-64 z-50 transform transition-transform duration-300 ${
              isCardOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Choose Theme
              </h2>
              <button
                onClick={() => setIsCardOpen(false)} // Close the card
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleThemeChange("dark")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  theme === "dark"
                    ? "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    : "bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200"
                }`}
              >
                Dark Mode
              </button>
              <button
                onClick={() => handleThemeChange("light")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  theme === "light"
                    ? "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    : "bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200"
                }`}
              >
                Light Mode
              </button>
              <button
                onClick={() => handleThemeChange("ide")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  theme === "ide"
                    ? "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    : "bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200"
                }`}
              >
                IDE Mode
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "../ThemeContext";
import { Suspense } from "react";

type Theme = "light" | "dark" | "ide";

function ClientSideHeader() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Ref for the theme dropdown
  const themeMenuRef = useRef<HTMLDivElement>(null);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close theme dropdown when clicking outside
  useEffect(() => {
    if (!isThemeMenuOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        themeMenuRef.current &&
        !themeMenuRef.current.contains(event.target as Node)
      ) {
        setIsThemeMenuOpen(false);
      }
    }

    function handleScroll() {
      setIsThemeMenuOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isThemeMenuOpen]);

const handleNavigation = (id: string) => {
  if (pathname === "/") {
    const section = document.getElementById(id);
    if (section) {
      const width = window.innerWidth;
      const isDesktop = width >= 1024;
      const isMedium = width >= 768 && width < 1024;

      if (id === "about" && (isDesktop || isMedium)) {
        // For about: align bottom on desktop and medium screens, but scroll further on medium
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let offset = rect.bottom - window.innerHeight;
        if (isMedium) {
          offset += 80; // Increase value to scroll further
        }
        window.scrollTo({
          top: scrollTop + offset,
          behavior: "smooth",
        });
      } else if (id === "skills" && isDesktop) {
        // For skills: align bottom only on desktop
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offset = rect.bottom - window.innerHeight;
        window.scrollTo({
          top: scrollTop + offset,
          behavior: "smooth",
        });
      } else {
        // Default scroll for everything else and for skills on medium/mobile
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  } else {
    router.push(`/?section=${id}`);
  }
};

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsThemeMenuOpen(false);
  };


  return (
    // <header
    //   className="flex justify-between items-center p-2 md:p-4 fixed w-full z-50 shadow-md"
    //   style={{
    //     backgroundColor: "var(--navbar-background)",
    //     color: "var(--text-color)",
    //     height: "56px",
    //   }}
    // >
    //   {/* Mobile Menu Button */}
    //   <button 
    //     className="md:hidden p-2 focus:outline-none"
    //     onClick={() => setIsMenuOpen(!isMenuOpen)}
    //     aria-label="Toggle menu"
    //   >
    //     <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
    //   </button>

    //   {/* Side Menu (visible when mobile and menu is open) */}
    //   <div 
    //     className={`fixed top-14 left-0 h-full w-40 bg-white dark:bg-gray-800 shadow-md transform transition-transform duration-300 z-40 ${
    //       isMobile && isMenuOpen ? 'translate-x-0' : '-translate-x-full'
    //     }`}
    //     style={{
    //       backgroundColor: "var(--navbar-background)",
    //       color: "var(--text-color)",
    //     }}
    //   >
    //     <nav className="pt-4">
    //       <ul className="flex flex-col space-y-4 p-4">
    //         <li>
    //           <button
    //             onClick={() => {
    //               handleNavigation("home");
    //               setIsMenuOpen(false);
    //             }}
    //             className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none text-left w-full"
    //             style={{
    //               color: "var(--text-color)",
    //               backgroundColor: "transparent",
    //             }}
    //           >
    //             Home
    //           </button>
    //         </li>
    //         <li>
    //           <button
    //             onClick={() => {
    //               handleNavigation("about");
    //               setIsMenuOpen(false);
    //             }}
    //             className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none text-left w-full"
    //             style={{
    //               color: "var(--text-color)",
    //               backgroundColor: "transparent",
    //             }}
    //           >
    //             About
    //           </button>
    //         </li>
    //         <li>
    //           <button
    //             onClick={() => {
    //               handleNavigation("skills");
    //               setIsMenuOpen(false);
    //             }}
    //             className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none text-left w-full"
    //             style={{
    //               color: "var(--text-color)",
    //               backgroundColor: "transparent",
    //             }}
    //           >
    //             Skills
    //           </button>
    //         </li>
    //         <li>
    //           <button
    //             onClick={() => {
    //               handleNavigation("projects");
    //               setIsMenuOpen(false);
    //             }}
    //             className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none text-left w-full"
    //             style={{
    //               color: "var(--text-color)",
    //               backgroundColor: "transparent",
    //             }}
    //           >
    //             Projects
    //           </button>
    //         </li>
    //         <li>
    //           <button
    //             onClick={() => {
    //               handleNavigation("contact");
    //               setIsMenuOpen(false);
    //             }}
    //             className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none text-left w-full"
    //             style={{
    //               color: "var(--text-color)",
    //               backgroundColor: "transparent",
    //             }}
    //           >
    //             Contact
    //           </button>
    //         </li>
    //         <li>
    //           <a
    //             href="/static/images/Dov Ushman Resume.pdf"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="hover:underline block"
    //             style={{ color: "var(--text-color)" }}
    //           >
    //             Resume
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>

    //   {/* Logo */}
    //   <h1 className="text-xl font-semibold">Dov Ushman</h1>

    //   {/* Desktop Navigation */}
    //   <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
    //     <ul className="flex space-x-4">
    //       <li>
    //         <button
    //           onClick={() => handleNavigation("home")}
    //           className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
    //           style={{
    //             color: "var(--text-color)",
    //             backgroundColor: "transparent",
    //           }}
    //         >
    //           Home
    //         </button>
    //       </li>
    //       <li>
    //         <button
    //           onClick={() => handleNavigation("about")}
    //           className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
    //           style={{
    //             color: "var(--text-color)",
    //             backgroundColor: "transparent",
    //           }}
    //         >
    //           About
    //         </button>
    //       </li>
    //       <li>
    //         <button
    //           onClick={() => handleNavigation("skills")}
    //           className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
    //           style={{
    //             color: "var(--text-color)",
    //             backgroundColor: "transparent",
    //           }}
    //         >
    //           Skills
    //         </button>
    //       </li>
    //       <li>
    //         <button
    //           onClick={() => handleNavigation("projects")}
    //           className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
    //           style={{
    //             color: "var(--text-color)",
    //             backgroundColor: "transparent",
    //           }}
    //         >
    //           Projects
    //         </button>
    //       </li>
    //       <li>
    //         <button
    //           onClick={() => handleNavigation("contact")}
    //           className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
    //           style={{
    //             color: "var(--text-color)",
    //             backgroundColor: "transparent",
    //           }}
    //         >
    //           Contact
    //         </button>
    //       </li>
    //       <li>
    //         <a
    //           href="/static/images/Dov Ushman Resume.pdf"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="hover:underline"
    //         >
    //           Resume
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>

    //   {/* Icons */}
    //   <div className="flex items-center space-x-2">
    //     {/* GitHub Icon */}
    //     <a
    //       href="https://github.com/dovushman"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       aria-label="GitHub"
    //       className="p-2 rounded-full bg-transparent transition hover:text-gray-400"
    //     >
    //       <i className="devicon-github-original text-2xl"></i>
    //     </a>

    //     {/* LinkedIn Icon */}
    //     <a
    //       href="https://www.linkedin.com/in/dov-ushman/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       aria-label="LinkedIn"
    //       className="p-2 rounded-full bg-transparent transition hover:text-gray-400"
    //     >
    //       <i className="devicon-linkedin-plain text-2xl"></i>
    //     </a>

    //     {/* Theme Dropdown */}
    //     <div className="relative">
    //       <button
    //         onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
    //         className="p-2 rounded-full bg-transparent transition-all duration-300 flex items-center gap-2"
    //         aria-label="Toggle Theme"
    //       >
    //         <i
    //           className={`fas fa-paint-roller text-lg ${theme === "dark" || theme === "ide" ? "text-white" : "text-gray-800"}`}
    //         ></i>
    //       </button>

    //       {isThemeMenuOpen && (
    //         <div
    //           className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden z-50 border border-gray-200 dark:border-gray-700 transform origin-top-right transition-all duration-300"
    //         >
    //           <div className="py-2">
    //             <button
    //               onClick={() => handleThemeChange("light")}
    //               className="flex items-center w-full px-4 py-2 transition-colors"
    //               style={{ backgroundColor: "transparent" }}
    //             >
    //               <i className="fas fa-sun text-yellow-500 mr-3"></i>
    //               <span className="text-gray-800 dark:text-gray-200">Light Mode</span>
    //               {theme === "light" && (
    //                 <i className="fas fa-check ml-auto text-green-500"></i>
    //               )}
    //             </button>

    //             <button
    //               onClick={() => handleThemeChange("dark")}
    //               className="flex items-center w-full px-4 py-2 transition-colors"
    //               style={{ backgroundColor: "transparent" }}
    //             >
    //               <i className="fas fa-moon text-indigo-400 mr-3"></i>
    //               <span className="text-gray-800 dark:text-gray-200">Dark Mode</span>
    //               {theme === "dark" && (
    //                 <i className="fas fa-check ml-auto text-green-500"></i>
    //               )}
    //             </button>

    //             <button
    //               onClick={() => handleThemeChange("ide")}
    //               className="flex items-center w-full px-4 py-2 transition-colors"
    //               style={{ backgroundColor: "transparent" }}
    //             >
    //               <i className="fas fa-code text-blue-500 mr-3"></i>
    //               <span className="text-gray-800 dark:text-gray-200">IDE Mode</span>
    //               {theme === "ide" && (
    //                 <i className="fas fa-check ml-auto text-green-500"></i>
    //               )}
    //             </button>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </header>
    <header
      className="flex justify-between items-center p-2 md:p-4 fixed w-full z-50 shadow-md"
      style={{
        backgroundColor: "var(--navbar-background)",
        color: "var(--text-color)",
        height: "56px",
      }}
    >
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Logo (Centered on Mobile) */}
      <h1 className="text-xl font-semibold absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
        Dov Ushman
      </h1>

      {/* Side Menu (visible when mobile and menu is open) */}
      <div
        className={`fixed top-14 left-0 h-full w-40 bg-white dark:bg-gray-800 shadow-md transform transition-transform duration-300 z-40 ${isMobile && isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        style={{
          backgroundColor: "var(--navbar-background)",
          color: "var(--text-color)",
        }}
      >
        <nav className="pt-4">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <button
                onClick={() => {
                  handleNavigation("home");
                  setIsMenuOpen(false);
                }}
                className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none text-left w-full"
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
                onClick={() => {
                  handleNavigation("about");
                  setIsMenuOpen(false);
                }}
                className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none text-left w-full"
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
                onClick={() => {
                  handleNavigation("skills");
                  setIsMenuOpen(false);
                }}
                className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none text-left w-full"
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
                onClick={() => {
                  handleNavigation("projects");
                  setIsMenuOpen(false);
                }}
                className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none text-left w-full"
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
                onClick={() => {
                  handleNavigation("contact");
                  setIsMenuOpen(false);
                }}
                className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none text-left w-full"
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
                className="hover:underline block"
                style={{ color: "var(--text-color)" }}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

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
      <div className="flex items-center -space-x-2 md:space-x-2">
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
        <div className="relative" ref={themeMenuRef}>
          <button
            onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
            className="p-2 rounded-full bg-transparent transition-all duration-300 flex items-center gap-1"
            aria-label="Toggle Theme"
          >
            <i
              className={`fas fa-paint-roller text-lg ${theme === "dark" || theme === "ide" ? "text-white" : "text-gray-800"}`}
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

                {/* <button
                  onClick={() => handleThemeChange("ide")}
                  className="flex items-center w-full px-4 py-2 transition-colors"
                  style={{ backgroundColor: "transparent" }}
                >
                  <i className="fas fa-code text-blue-500 mr-3"></i>
                  <span className="text-gray-800 dark:text-gray-200">IDE Mode</span>
                  {theme === "ide" && (
                    <i className="fas fa-check ml-auto text-green-500"></i>
                  )}
                </button> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}


// Export a wrapped component with Suspense boundary
export default function Header() {
  return (
    <Suspense fallback={<div className="h-14 bg-gray-100 dark:bg-gray-800 shadow-md"></div>}>
      <ClientSideHeader />
    </Suspense>
  );
}
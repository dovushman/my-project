"use client";

import Image from "next/image";
import { useTheme } from "../ThemeContext";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Import useSearchParams
import { projectList as projects } from "../projectList"; // Import the project list

export default function Projects() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(0); // Default to first project
  const [isLargeScreen, setIsLargeScreen] = useState(false); // Track if the screen is large
  const searchParams = useSearchParams(); // Access query parameters

  // Check screen size on the client side
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsLargeScreen(window.innerWidth >= 1024);
      }
    };

    // Run on mount and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Read the selected project from the query parameter
  useEffect(() => {
    const selected = searchParams?.get("selected");
    if (selected) {
      setSelectedProject(parseInt(selected, 10)); // Set the selected project based on the query parameter
    }
  }, [searchParams]);

  const customIcons = {
    expo: "/icons/expo-svgrepo-com.svg",
    reactNative: "/icons/react-native-1.svg",
    adobexd: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
    axios: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
  };

  const customSizes = {
    0: { width: 190, height: 180 }, // Pokédex
    2: { width: 200, height: 200 }, // Sharpify
    4: { width: 200, height: 100 }, // MOSE Mobile App Prototype
    // 6: { width: 700, height: 500 }, // LegUp
  };

  return (
    <section className="py-12 max-w-7xl mx-auto">
      <h2
        className="text-4xl font-extrabold text-center mb-12"
        style={{ color: "var(--accent-color)" }}
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 parent-container">
        {/* Left side: Project list */}
        <div className="space-y-4 pr-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                if (isLargeScreen) {
                  setSelectedProject(project.id);
                }
              }}
              className={`p-4 cursor-pointer transition-all ${isLargeScreen && selectedProject === project.id
                  ? "selected md:border-l-4 md:border-blue-500 md:pl-4"
                  : ""
                }`}
            >
              {/* Show full details on larger screens */}
              <div className="hidden lg:block">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-1">{project.description}</p>
                <div className="flex gap-2 mt-2">
                  {project.techStack.map((tech, i) => {
                    const iconPath =
                      tech in customIcons
                        ? customIcons[tech as keyof typeof customIcons]
                        : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;

                    return (
                      <Image
                        key={i}
                        src={iconPath}
                        alt={tech}
                        width={24}
                        height={24}
                        className={`transition-transform duration-300 ${(tech === "express" || tech === "expo") && theme === "dark"
                            ? "invert"
                            : ""
                          }`}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Show simplified details on smaller and medium screens */}
              <div className="block lg:hidden">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm mt-1">{project.description}</p>
                <div className="flex gap-2 mt-2">
                  {project.techStack.map((tech, i) => {
                    const iconPath =
                      tech in customIcons
                        ? customIcons[tech as keyof typeof customIcons]
                        : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;

                    return (
                      <Image
                        key={i}
                        src={iconPath}
                        alt={tech}
                        width={20}
                        height={20}
                        className={`transition-transform duration-300 ${(tech === "express" || tech === "expo") && theme === "dark"
                            ? "invert"
                            : ""
                          }`}
                      />
                    );
                  })}
                </div>
                <a
                  href={project.link}
                  className="text-blue-500 hover:text-blue-700 text-sm mt-2 block"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right side: Project details (hidden on medium and smaller screens) */}
        <div
          className="sticky-scroll p-6 hidden lg:block rounded-lg shadow-lg"
          style={{
            height: "500px",
            overflowY: "auto",
            backgroundColor: "var(--card-background)",
            border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
            color: "var(--text-color)",
          }}
        >
          <h2 className="text-2xl font-bold mb-4">{projects[selectedProject].title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-md">
              <Image
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                width={customSizes[selectedProject as keyof typeof customSizes]?.width || 384} // Default to 384 if not specified
                height={customSizes[selectedProject as keyof typeof customSizes]?.height || 384} // Default to 384 if not specified
                className="rounded-md"
              />
            </div>
            <div>
              <p className="mb-6">{projects[selectedProject].fullDescription}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                {projects[selectedProject].techStack.map((tech, i) => {
                  const iconPath =
                    tech in customIcons
                      ? customIcons[tech as keyof typeof customIcons]
                      : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;

                  return (
                    <Image
                      key={i}
                      src={iconPath}
                      alt={tech}
                      width={24}
                      height={24}
                      className={`transition-transform duration-300 ${(tech === "express" || tech === "expo") && theme === "dark"
                          ? "invert"
                          : ""
                        }`}
                    />
                  );
                })}
              </div>
              <a
                href={projects[selectedProject].link}
                className="inline-flex items-center text-blue-500 hover:text-blue-700"
              >
                View Project <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

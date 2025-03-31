"use client";

import Image from "next/image";
import { useTheme } from "../ThemeContext";
import { useState } from "react";

export default function Projects() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(0); // Default to first project
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const projects = [
    {
      id: 0,
      title: "Pokédex App",
      description: "A React Native app for searching Pokémon.",
      fullDescription:
        "A full-featured Pokédex with searching, filters and information regarding pokemon. Includes a comprehensive 'Whos that Pokemon?' with AI image recognition and textual description. Also includes a team builder feature where users can manually enter a team or use a custom AI model to help create a competitively viable team.",
      link: "#",
      image: "/images/tempPokedexPhoto.png",
      techStack: ["reactNative", "expo", "sqlite"],
    },
    {
      id: 1,
      title: "7Factor AWS Analysis",
      description: "Web Application to analyze and help lower AWS costs.",
      fullDescription:
        "Web applications with a Python backend and React frontend, providing a solution to reduce AWS costs.",
      link: "#",
      image: "/images/7FactorSmallLogo.png",
      techStack: ["react", "python", "express"],
    },
    {
      id: 2,
      title: "Sharpify: Image-Enhancing Website",
      description: "A web app for enhancing images quality.",
      fullDescription:
        "Web app to enhance image quality and be a safe storing place for images.",
      link: "#",
      image: "/images/SharpifyCoverImage.png",
      techStack: ["react", "nodejs", "mongodb", "firebase"],
    },
    {
      id: 3,
      title: "Brigham and Women's Hospital Desktop Application",
      description: "A desktop application for hospital management.",
      fullDescription:
        "A desktop application for hospital management, including staff communication, management requests, and adjustable signage.",
      link: "#",
      image: "/images/portfolio.jpg",
      techStack: ["java", "javafx", "postgresql", "figma"],
    },
    {
      id: 4,
      title: "MOSE Mobile App Prototype",
      description: "A prototype and design for MOSE floodgates in Venice, Italy.",
      fullDescription:
        "An interactive mock-up for the Commissario Straordinario MOSE to help alert the public of floodgate closures.",
      link: "#",
      image: "/images/team-builder.jpg",
      techStack: ["xd"],
    },
    {
      id: 5,
      title: "HomeHub: Smart Home Management",
      description: "A web application to streamline roommate management ",
      fullDescription:
        "A web application to streamline roommate management, including a calendar, task manager, and shopping list.",
      link: "#",
      image: "/images/team-builder.jpg",
      techStack: ["react", "nodejs", "mongodb", "bootstrap"],
    },
  ];

  // Get the currently selected project
  const currentProject = projects[selectedProject];

  // Tech stack icon mapping
  const customIcons = {
    expo: "/icons/expo-svgrepo-com.svg",
    reactNative: "/icons/react-native-1.svg",
    adobexd: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
  };

  const tooltipLabels = {
    postgresql: "PostgreSQL",
    reactNative: "React Native",
    adobexd: "Adobe XD",
    sqlite: "SQLite",
    mongodb: "MongoDB",
    nodejs: "Node.js",
    firebase: "Firebase",
    java: "Java",
    javafx: "JavaFX",
    python: "Python",
    express: "Express",
    react: "React",
    expo: "Expo",
  };

  return (
    <section className="py-12 max-w-7xl mx-auto">
      
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: Project list */}
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className={`p-4 cursor-pointer transition-all hover:transform hover:translate-x-2 ${
                selectedProject === project.id ? "border-l-4 border-blue-500 pl-4" : ""
              }`}
            >
              <div className="flex items-start">
                {/* Project title and description */}
                <div className="flex-1"> {/* Ensures this section takes up remaining space */}
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm mt-1">{project.description}</p>
                </div>

                {/* Tech stack icons */}
                <div className="flex gap-2 ml-auto"> {/* Ensures icons are pushed to the far right */}
                  {project.techStack.map((tech, i) => {
                    const iconPath = tech in customIcons
                      ? customIcons[tech as keyof typeof customIcons]
                      : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;

                    return (
                      <Image
                        key={i}
                        src={iconPath}
                        alt={tech}
                        width={32}
                        height={32}
                        className={`transition-transform duration-300 ${
                          (tech === "express" || tech === "expo") && theme === "dark"
                            ? "invert"
                            : ""
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side: Project details with split layout */}
        <div
          className="bg-transparent rounded-lg border border-gray-200 shadow-lg p-6"
          style={{ width: "600px", height: "500px" }} // Hard-coded size
        >
          <h2 className="text-2xl font-bold mb-4">{currentProject.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left side: Project image */}
            <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-md">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Right side: Project information */}
            <div>
              <p className="mb-6">{currentProject.fullDescription}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-4 mb-6">
                {currentProject.techStack.map((tech, i) => {
                  const iconPath = tech in customIcons
                    ? customIcons[tech as keyof typeof customIcons]
                    : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;

                  return (
                    <div key={i} className="relative">
                      <div
                        onMouseEnter={() => setHoveredTech(`${tech}-${currentProject.id}`)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className="group flex flex-col items-center"
                      >
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-2">
                          <Image
                            src={iconPath}
                            alt={tech}
                            width={24}
                            height={24}
                            className={`transition-transform duration-300 ${
                              (tech === "express" || tech === "expo") && theme === "dark"
                                ? "invert"
                                : ""
                            }`}
                          />
                        </div>

                        {/* Tech label */}
                        <span className="text-xs mt-1">
                          {tooltipLabels[tech as keyof typeof tooltipLabels] ||
                            tech.charAt(0).toUpperCase() + tech.slice(1)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* View project link */}
              <a
                href={currentProject.link}
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

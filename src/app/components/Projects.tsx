"use client";

import Image from "next/image";
import { useTheme } from "../ThemeContext";
import { useState } from "react";

export default function Projects() {
  const { theme } = useTheme();
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const projects = [
    {
      title: "Pokédex App",
      description: "A React Native app for searching Pokémon.",
      fullDescription:
        "A full-featured Pokédex with searching, filters and information regarding pokemon. Includes a comprehensive 'Whos that Pokemon?' with AI image recognition and textual description. Also includes a team builder feature where users can manually enter a team or use a custom AI model to help create a competitively viable team.",
      link: "#",
      image: "/images/pokedex.jpg",
      techStack: ["reactNative", "expo", "sqlite"],
    },
    {
      title: "7Factor AWS Analysis",
      description: "Web Application to analyze and help lower AWS costs.",
      fullDescription:
        "Web applications with a Python backend and React frontend, providing a solution to reduce AWS costs.",
      link: "#",
      image: "/images/7FactorSmallLogo.png",
      techStack: ["react", "python", "express"],
    },
    {
      title: "Sharpify: Image-Enhancing Website",
      description: "A web app for enhancing images quality.",
      fullDescription:
        "Web app to enhance image quality and be a safe storing place for images.",
      link: "#",
      image: "/images/SharpifyCoverImage.png",
      techStack: ["react", "nodejs", "mongodb", "firebase"],
    },
    {
      title: "Brigham and Women’s Hospital Desktop Application",
      description: "A desktop application for hospital management.",
      fullDescription:
        "A desktop application for hospital management, including staff communication, management requests, and adjustable signage.",
      link: "#",
      image: "/images/portfolio.jpg",
      techStack: ["java", "javafx", "postgresql"],
    },
    {
      title: "MOSE Mobile App Prototype",
      description: "A prototype and design for MOSE floodgates in Venice, Italy.",
      fullDescription:
        "An interactive mock-up for the Commissario Straordinario MOSE to help alert the public of floodgate closures.",
      link: "#",
      image: "/images/team-builder.jpg",
      techStack: ["adobeXD"],
    },
  ];

  return (
    <section className="py-12 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group card text-text-color p-5 rounded-xl shadow-md cursor-pointer transition-transform hover:scale-105 flex flex-col justify-between h-90 border border-gray-200 shadow-lg"
          >
            {/* Project Image */}
            <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-md">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md transition-transform duration-300 group-hover:scale-105 group-hover:opacity-40"
              />
            </div>

            {/* Content Container */}
            <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm mt-1">{project.description}</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-5 opacity-0 bg-navbar-background bg-opacity-95 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 z-20 rounded-xl">
              <div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm">{project.fullDescription}</p>
              </div>

              {/* View Project Link */}
              <a
                href={project.link}
                className="text-button-background text-sm hover:underline absolute bottom-25 left-5"
              >
                View Project →
              </a>
            </div>

            {/* Tech Stack Icons */}
            <div className="mt-auto flex justify-center gap-6 flex-wrap z-30">


              {project.techStack.map((tech, i) => {
                const customIcons: Record<string, string> = {
                  expo: "/icons/expo-svgrepo-com.svg",
                  reactNative: "/icons/react-native-1.svg",
                  adobexd:
                    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
                };

                const tooltipLabels: Record<string, string> = {
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

                const iconPath = customIcons[tech]
                  ? customIcons[tech]
                  : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;

                return (
                  <div key={i} className="flex flex-col items-center relative">
                    <div
                      onMouseEnter={() => setHoveredTech(`${tech}-${index}`)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className="group flex flex-col items-center"
                    >
                      <Image
                        src={iconPath}
                        alt={tech}
                        width={tech === "reactNative" ? 64 : 48}
                        height={tech === "reactNative" ? 64 : 48}
                        className={`transition-transform duration-300 group-hover:scale-110 ${(tech === "express" || tech === "expo") && theme === "dark"
                            ? "invert"
                            : ""
                          }`}
                        style={tech === "reactNative" ? { objectFit: "contain" } : {}}
                      />
                      {/* Tooltip */}
                      <div
                        className={`absolute top-[-33px] left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-300 ${hoveredTech === `${tech}-${index}`
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                          }`}
                      >
                        <span className="bg-gray-800 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap">
                          {tooltipLabels[tech] || tech.charAt(0).toUpperCase() + tech.slice(1)}
                        </span>
                        <div className="w-2 h-2 bg-gray-800 rotate-45 transform translate-y-[-4px]"></div>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
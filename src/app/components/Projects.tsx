"use client";

import Image from "next/image";
import { useTheme } from "../ThemeContext";
import { useState, useEffect } from "react";

export default function Projects() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(0); // Default to first project
  const [isLargeScreen, setIsLargeScreen] = useState(false); // Track if the screen is large

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
    {
      id: 6,
      title: "LegUp: Note Sharing Website",
      description: "Note sharing website for textbook material and collaborative learning platform",
      fullDescription:
        "Developed, with a team, a web and mobile application: note sharing for textbook material and collaborative learning platform. Implemented the Google Books API and constructed algorithms that identified requested book and contained submitted notes. Presented the above application at Google Cambridge to Google employees and interns.",
      link: "#",
      image: "/images/team-builder.jpg",
      techStack: ["javascript", "html5", "css3", "bootstrap", "heroku"],
    },
    {
      id: 7,
      title: "myCoverage",
      description: "Mobile fitness application",
      fullDescription:
        "Android mobile fitness app to record daily steps taken, time duration of runs, and display running history.",
      link: "#",
      image: "/images/team-builder.jpg",
      techStack: ["kotlin", "android"],
    },
  ];

  const customIcons = {
    expo: "/icons/expo-svgrepo-com.svg",
    reactNative: "/icons/react-native-1.svg",
    adobexd: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
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
              className={`p-4 cursor-pointer transition-all ${
                isLargeScreen && selectedProject === project.id
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
                        className={`transition-transform duration-300 ${
                          (tech === "express" || tech === "expo") && theme === "dark"
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
            backgroundColor: theme === "dark" ? "#121212" : "var(--background-color)",
            border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
            color: theme === "dark" ? "#ffffff" : "var(--text-color)",
          }}
        >
          <h2 className="text-2xl font-bold mb-4">{projects[selectedProject].title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-md">
              <Image
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                layout="fill"
                objectFit="cover"
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
                      className={`transition-transform duration-300 ${
                        (tech === "express" || tech === "expo") && theme === "dark"
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
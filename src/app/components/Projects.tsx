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
        <div className="space-y-4 pr-4">
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
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm mt-1">{project.description}</p>
                </div>

                {/* Tech stack icons */}
                <div className="flex gap-2 ml-auto">
                  {project.techStack.map((tech, i) => {
                    const iconPath = tech in customIcons
                      ? customIcons[tech as keyof typeof customIcons]
                      : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;

                    return (
                      <div key={i} className="relative">
                        <div
                          onMouseEnter={() => setHoveredTech(`${tech}-${project.id}`)}
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

                          {/* Tooltip */}
                          {hoveredTech === `${tech}-${project.id}` && (
                            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1">
                              {tooltipLabels[tech as keyof typeof tooltipLabels] ||
                                tech.charAt(0).toUpperCase() + tech.slice(1)}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side: Project details */}
        <div className="sticky-scroll p-6" style={{ height: "650px" }}>
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

                        {/* Tooltip */}
                        {hoveredTech === `${tech}-${currentProject.id}` && (
                          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1">
                            {tooltipLabels[tech as keyof typeof tooltipLabels] ||
                              tech.charAt(0).toUpperCase() + tech.slice(1)}
                          </div>
                        )}
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

// "use client";

// import Image from "next/image";
// import { useTheme } from "../ThemeContext";
// import { useState } from "react";

// export default function Projects() {
//   const { theme } = useTheme();
//   const [selectedProject, setSelectedProject] = useState(0); // Default to first project
//   const [hoveredTech, setHoveredTech] = useState<string | null>(null);

//   const projects = [
//     {
//       id: 0,
//       title: "Pokédex App",
//       description: "A React Native app for searching Pokémon.",
//       fullDescription:
//         "A full-featured Pokédex with searching, filters and information regarding pokemon. Includes a comprehensive 'Whos that Pokemon?' with AI image recognition and textual description. Also includes a team builder feature where users can manually enter a team or use a custom AI model to help create a competitively viable team.",
//       link: "#",
//       image: "/images/pokedex.jpg",
//       techStack: ["reactNative", "expo", "sqlite"],
//     },
//     {
//       id: 1,
//       title: "7Factor AWS Analysis",
//       description: "Web Application to analyze and help lower AWS costs.",
//       fullDescription:
//         "Web applications with a Python backend and React frontend, providing a solution to reduce AWS costs.",
//       link: "#",
//       image: "/images/7FactorSmallLogo.png",
//       techStack: ["react", "python", "express"],
//     },
//     {
//       id: 2,
//       title: "Sharpify: Image-Enhancing Website",
//       description: "A web app for enhancing images quality.",
//       fullDescription:
//         "Web app to enhance image quality and be a safe storing place for images.",
//       link: "#",
//       image: "/images/SharpifyCoverImage.png",
//       techStack: ["react", "nodejs", "mongodb", "firebase"],
//     },
//     {
//       id: 3,
//       title: "Brigham and Women’s Hospital Desktop Application",
//       description: "A desktop application for hospital management.",
//       fullDescription:
//         "A desktop application for hospital management, including staff communication, management requests, and adjustable signage.",
//       link: "#",
//       image: "/images/portfolio.jpg",
//       techStack: ["java", "javafx", "postgresql"],
//     },
//     {
//       id: 4,
//       title: "MOSE Mobile App Prototype",
//       description: "A prototype and design for MOSE floodgates in Venice, Italy.",
//       fullDescription:
//         "An interactive mock-up for the Commissario Straordinario MOSE to help alert the public of floodgate closures.",
//       link: "#",
//       image: "/images/team-builder.jpg",
//       techStack: ["adobeXD"],
//     },
//     {
//       id: 5,
//       title: "HomeHub: Smart Home Management",
//       description: "A web application to streamline roommate management ",
//       fullDescription:
//         "A web application to streamline roommate management, including a calendar, task manager, and shopping list.",
//       link: "#",
//       image: "/images/team-builder.jpg",
//       techStack: ["react", "nodejs", "mongodb", "bootstrap"],
//     },
//   ];

//   // Get the currently selected project
//   const currentProject = projects[selectedProject];

//   // Tech stack icon mapping and labels
//   const customIcons: Record<string, string> = {
//     expo: "/icons/expo-svgrepo-com.svg",
//     reactNative: "/icons/react-native-1.svg",
//     adobexd:
//       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
//   };

//   const tooltipLabels: Record<string, string> = {
//     postgresql: "PostgreSQL",
//     reactNative: "React Native",
//     adobexd: "Adobe XD",
//     sqlite: "SQLite",
//     mongodb: "MongoDB",
//     nodejs: "Node.js",
//     firebase: "Firebase",
//     java: "Java",
//     javafx: "JavaFX",
//     python: "Python",
//     express: "Express",
//     react: "React",
//     expo: "Expo",
//   };

//   return (
//     <section className="py-12 max-w-7xl mx-auto">
      
//       <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left side: Project Cards in a Grid (2 columns) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto" style={{ maxHeight: 'calc(3 * (/* Adjust card height + gap */ 180px + 16px))' }}>
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               onClick={() => setSelectedProject(project.id)}
//               className={`relative group card text-text-color p-3 rounded-md shadow-md cursor-pointer transition-transform hover:scale-105 flex flex-col justify-between border border-gray-200 ${
//                 selectedProject === project.id ? "ring-2 ring-blue-500" : ""
//               }`}
//               style={{ minHeight: '160px' }} // Adjust as needed
//             >
//               {/* Project Image (Smaller and potentially cropped) */}
//               <div className="relative w-full aspect-[16/9] mb-1 overflow-hidden rounded-md">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-md transition-opacity duration-300 group-hover:opacity-70"
//                 />
//               </div>

//               {/* Title (Smaller font) */}
//               <h3 className="text-sm font-semibold truncate">{project.title}</h3>
//               {/* Very brief description (optional) */}
//               {/* <p className="text-xs mt-0.5 truncate">{project.description}</p> */}

//               {/* Tech Stack Icons (Even Smaller) */}
//               <div className="mt-1 flex justify-start gap-1 flex-wrap z-30">
//                 {project.techStack.slice(0, 3).map((tech, i) => {
//                   const iconPath = customIcons[tech]
//                     ? customIcons[tech]
//                     : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;

//                   return (
//                     <div key={i} className="flex items-center relative">
//                       <div
//                         onMouseEnter={() => setHoveredTech(`${tech}-${project.id}`)}
//                         onMouseLeave={() => setHoveredTech(null)}
//                         className="group flex items-center"
//                       >
//                         <Image
//                           src={iconPath}
//                           alt={tech}
//                           width={24}
//                           height={24}
//                           className={`transition-transform duration-300 group-hover:scale-110 ${(tech === "express" || tech === "expo") && theme === "dark"
//                             ? "invert"
//                             : ""
//                             }`}
//                           style={tech === "reactNative" ? { objectFit: "contain" } : {}}
//                         />
//                         {/* Tooltip */}
//                         <div
//                           className={`absolute top-[-30px] left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-300 ${hoveredTech === `${tech}-${project.id}`
//                             ? "opacity-100 pointer-events-auto"
//                             : "opacity-0 pointer-events-none"
//                             }`}
//                         >
//                           <span className="bg-gray-800 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap">
//                             {tooltipLabels[tech] || tech.charAt(0).toUpperCase() + tech.slice(1)}
//                           </span>
//                           <div className="w-2 h-2 bg-gray-800 rotate-45 transform translate-y-[-4px]"></div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//                 {project.techStack.length > 3 && (
//                   <span className="text-xs">+{project.techStack.length - 3}</span>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right side: Project details */}
//         <div
//           className="bg-transparent rounded-lg border border-gray-200 shadow-lg p-6"
//           style={{ width: "525px", height: "550px" }} // Adjust width as needed
//         >
//           <h2 className="text-2xl font-bold mb-4">{currentProject.title}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Left side: Project image */}
//             <div className="relative aspect-square md:aspect-auto overflow-hidden rounded-md">
//               <Image
//                 src={currentProject.image}
//                 alt={currentProject.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-md"
//               />
//             </div>

//             {/* Right side: Project information */}
//             <div>
//               <p className="mb-6">{currentProject.fullDescription}</p>

//               {/* Tech stack */}
//               <div className="flex flex-wrap gap-4 mb-6">
//                 {currentProject.techStack.map((tech, i) => {
//                   const iconPath = customIcons[tech]
//                     ? customIcons[tech]
//                     : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;

//                   return (
//                     <div key={i} className="relative">
//                       <div
//                         onMouseEnter={() => setHoveredTech(`${tech}-${currentProject.id}`)}
//                         onMouseLeave={() => setHoveredTech(null)}
//                         className="group flex flex-col items-center"
//                       >
//                         <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-2">
//                           <Image
//                             src={iconPath}
//                             alt={tech}
//                             width={24}
//                             height={24}
//                             className={`transition-transform duration-300 ${
//                               (tech === "express" || tech === "expo") && theme === "dark"
//                                 ? "invert"
//                                 : ""
//                             }`}
//                           />
//                         </div>

//                         {/* Tech label */}
//                         <span className="text-xs mt-1">
//                           {tooltipLabels[tech] || tech.charAt(0).toUpperCase() + tech.slice(1)}
//                         </span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* View project link */}
//               <a
//                 href={currentProject.link}
//                 className="inline-flex items-center text-blue-500 hover:text-blue-700"
//               >
//                 View Project <span className="ml-1">→</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
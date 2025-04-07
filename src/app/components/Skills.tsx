"use client";

import Image from "next/image";
import { useTheme } from "../ThemeContext"; // Import the useTheme hook

export default function Skills() {
  const { theme } = useTheme(); // Access the current theme

  const deviconIcons = {
    javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "c++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    r: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    sqldeveloper: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg", // Custom SQL Developer icon
    tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", // Tailwind CSS icon
  };

  const skills = {
    Languages: ["javascript", "typescript", "python", "java", "html5", "css3", "c", "c++", "r", "kotlin"],
    FrameworksAndLibraries: ["react", "React Native", "nextjs", "nodejs", "express", "bootstrap", "tailwindcss", "docker"],
    DatabasesAndStorage: ["mongodb", "firebase", "postgresql", "sqldeveloper"],
    ToolsAndPlatforms: ["git", "github", "jira", "figma"],
  };

  return (
    <section
      id="skills"
      className="py-16 px-8 bg-[var(--background-color)] text-[var(--text-color)]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-[var(--accent-color)]">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages Section */}
          <div
            className="w-full rounded-lg shadow-lg p-6 bg-[var(--card-background)]"
            style={{
              border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
            }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[var(--accent-color)]">
              Languages
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {skills.Languages.map((lang) => (
                <div key={lang} className="flex flex-col items-center">
                  <Image src={deviconIcons[lang as keyof typeof deviconIcons]} alt={lang} width={48} height={48} />
                  <span className="text-sm mt-2 capitalize">{lang}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="w-full rounded-lg shadow-lg p-6 bg-[var(--card-background)]"
            style={{
              border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
            }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[var(--accent-color)]">
              Frameworks & Libraries
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {skills.FrameworksAndLibraries.map((framework) => (
                <div key={framework} className="flex flex-col items-center">
                  <Image src={deviconIcons[framework as keyof typeof deviconIcons]} alt={framework} width={48} height={48} />
                  <span className="text-sm mt-2 capitalize whitespace-nowrap">{framework}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between h-full">
            {/* Databases & Storage */}
            <div
            className="w-full rounded-lg shadow-lg p-6 bg-[var(--card-background)]"
            style={{
              border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
            }}
          >
              <h3 className="text-2xl font-semibold mb-4 text-[var(--accent-color)]">
                Databases & Storage
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {skills.DatabasesAndStorage.map((database) => (
                  <div key={database} className="flex flex-col items-center">
                    <Image
                      src={deviconIcons[database as keyof typeof deviconIcons]}
                      alt={database}
                      width={48}
                      height={48}
                    />
                    <span className="text-sm mt-2 capitalize">{database}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div
            className="w-full rounded-lg shadow-lg p-6 bg-[var(--card-background)]"
            style={{
              border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
            }}
          >
              <h3 className="text-2xl font-semibold mb-4 text-[var(--accent-color)]">
                Tools & Platforms
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {skills.ToolsAndPlatforms.map((tool) => (
                  <div key={tool} className="flex flex-col items-center">
                    <Image
                      src={deviconIcons[tool as keyof typeof deviconIcons]}
                      alt={tool}
                      width={48}
                      height={48}
                    />
                    <span className="text-sm mt-2 capitalize">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
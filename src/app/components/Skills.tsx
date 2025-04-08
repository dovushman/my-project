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
    numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  };

  const skills = {
    Languages: ["javascript", "typescript", "python", "java", "html5", "css3", "c", "c++", "r", "kotlin"],
    FrameworksAndLibraries: ["react", "React Native", "nextjs", "nodejs", "express", "bootstrap", "tailwindcss", "docker", "numpy", "pandas"],
    DatabasesAndStorage: ["mongodb", "firebase", "postgresql", "sqldeveloper"],
    ToolsAndPlatforms: ["git", "github", "jira", "figma"],
  };

  // Shared card styling
  const cardStyle = {
    border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
    height: "100%", // Make all cards same height
  };

  // Component for each skill category
  interface SkillCardProps {
    title: string;
    skillList: string[];
  }

  const SkillCard = ({ title, skillList }: SkillCardProps) => (
    <div
      className="w-full rounded-lg shadow-lg p-6 bg-[var(--card-background)] h-full"
      style={cardStyle}
    >
      <h3 className="text-2xl font-semibold mb-4 text-[var(--accent-color)]">
        {title}
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {skillList.map((skill) => (
          <div key={skill} className="flex flex-col items-center">
            <Image 
              src={deviconIcons[skill as keyof typeof deviconIcons]} 
              alt={skill} 
              width={48} 
              height={48} 
            />
            <span className="text-sm mt-2 capitalize text-center whitespace-nowrap">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );

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
          {/* Languages card - shows on all screens */}
          <div className="col-span-1">
            <SkillCard title="Languages" skillList={skills.Languages} />
          </div>
          
          {/* Frameworks card - shows on all screens */}
          <div className="col-span-1">
            <SkillCard title="Frameworks & Libraries" skillList={skills.FrameworksAndLibraries} />
          </div>
          
          {/* Databases card - shows on small and medium screens, hidden on large */}
          <div className="col-span-1 lg:hidden">
            <SkillCard title="Databases & Storage" skillList={skills.DatabasesAndStorage} />
          </div>
          
          {/* Tools card - shows on small and medium screens, hidden on large */}
          <div className="col-span-1 lg:hidden">
            <SkillCard title="Tools & Platforms" skillList={skills.ToolsAndPlatforms} />
          </div>
          
          {/* Third column containing both Databases and Tools - only on large screens */}
          <div className="hidden lg:flex lg:col-span-1 lg:flex-col lg:gap-8">
            <div>
              <SkillCard title="Databases & Storage" skillList={skills.DatabasesAndStorage} />
            </div>
            <div>
              <SkillCard title="Tools & Platforms" skillList={skills.ToolsAndPlatforms} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
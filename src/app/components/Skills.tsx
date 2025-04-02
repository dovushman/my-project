"use client";

import Image from "next/image";
import { useTheme } from "../ThemeContext"; // Import the useTheme hook

export default function Skills() {
    const { theme } = useTheme(); // Access the current theme

    // Mapping for Devicon icons
    const deviconIcons = {
        javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        html5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        r: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
        kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        javaFX: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        expo: "/icons/expo-svgrepo-com.svg", // Custom Expo icon
        aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        adobexd: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
        bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", // Tailwind CSS icon
        docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", // Docker icon
        axios: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
        sqldeveloper: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg", // Custom SQL Developer icon
        numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", // NumPy icon
        pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", // Pandas icon
        pytorch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", // PyTorch icon
    };

    const skills = {
        Languages: ["javascript", "typescript", "python", "java", "html5", "css3", "c", "cpp", "r", "kotlin"],
        FrameworksAndLibraries: ["react", "nextjs", "nodejs", "express", "pytorch", "expo", "bootstrap", "tailwindcss", "javaFX", "axios", "numpy", "pandas", "docker"],
        DatabasesAndStorage: ["mongodb", "firebase", "postgresql", "sqldeveloper"],
        ToolsAndPlatforms: ["git", "github", "jira", "adobexd", "figma"],
    };

    return (
        <section
    id="skills"
    className={`py-16 px-8 ${theme === "dark"
        ? "bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100"
        : "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900"
    }`}
>
    <div className="max-w-6xl mx-auto">
        <h2
            className={`text-4xl font-extrabold mb-12 text-center ${theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
        >
            Skills & Technologies
        </h2>

        {/* Grid for Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Languages Section */}
            <div
                className={`rounded-lg shadow-lg p-6 ${theme === "dark" ? "bg-gray-700" : "bg-white"
                    }`}
            >
                <h3
                    className={`text-2xl font-semibold mb-4 ${theme === "dark" ? "text-blue-400" : "text-blue-600"
                        }`}
                >
                    Languages
                </h3>
                <div className="grid grid-cols-3 gap-4">
                    {skills.Languages.map((lang) => (
                        <div key={lang} className="flex flex-col items-center animate-fadeIn">
                            <Image src={deviconIcons[lang as keyof typeof deviconIcons]} alt={lang} width={48} height={48} />
                            <span className="text-sm mt-2 capitalize">{lang}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Frameworks Section */}
            <div
                className={`rounded-lg shadow-lg p-6 ${theme === "dark" ? "bg-gray-700" : "bg-white"
                    }`}
            >
                <h3
                    className={`text-2xl font-semibold mb-4 ${theme === "dark" ? "text-blue-400" : "text-blue-600"
                        }`}
                >
                    Frameworks & Libraries
                </h3>
                <div className="grid grid-cols-3 gap-4">
                    {skills.FrameworksAndLibraries.map((framework) => (
                        <div key={framework} className="flex flex-col items-center animate-fadeIn">
                            <Image
                                src={deviconIcons[framework as keyof typeof deviconIcons]}
                                alt={framework}
                                width={48}
                                height={48}
                            />
                            <span className="text-sm mt-2 capitalize">{framework}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Databases Section */}
            <div
                className={`rounded-lg shadow-lg p-6 ${theme === "dark" ? "bg-gray-700" : "bg-white"
                    }`}
            >
                <h3
                    className={`text-2xl font-semibold mb-4 ${theme === "dark" ? "text-blue-400" : "text-blue-600"
                        }`}
                >
                    Databases & Storage
                </h3>
                <div className="grid grid-cols-3 gap-4">
                    {skills.DatabasesAndStorage.map((database) => (
                        <div key={database} className="flex flex-col items-center animate-fadeIn">
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

            {/* Tools Section */}
            <div
                className={`rounded-lg shadow-lg p-6 ${theme === "dark" ? "bg-gray-700" : "bg-white"
                    }`}
            >
                <h3
                    className={`text-2xl font-semibold mb-4 ${theme === "dark" ? "text-blue-400" : "text-blue-600"
                        }`}
                >
                    Tools & Platforms
                </h3>
                <div className="grid grid-cols-3 gap-4">
                    {skills.ToolsAndPlatforms.map((tool) => (
                        <div key={tool} className="flex flex-col items-center animate-fadeIn">
                            <Image src={deviconIcons[tool as keyof typeof deviconIcons]} alt={tool} width={48} height={48} />
                            <span className="text-sm mt-2 capitalize">{tool}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Call-to-Action
        <div className="text-center mt-8">
            <a
                href="#projects"
                className={`px-6 py-3 font-semibold rounded-lg transition ${theme === "dark"
                    ? "bg-blue-400 text-gray-900 hover:bg-blue-500"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
            >
                See Projects Using These Skills
            </a>
        </div> */}
    </div>
</section>
    );
}
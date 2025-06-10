"use client";

import Image from "next/image";
import { useTheme } from "../../ThemeContext";
import SidePanel from "../../components/SidePanel";
import { useEffect, useState } from "react";

export default function SharpifyProjectPage() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size to determine if it's mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "features", title: "Key Features" },
    { id: "overview", title: "Overview" },
    { id: "why", title: "Why I Built This" },
    { id: "tech-stack", title: "Tech Stack" },
    { id: "screenshots", title: "Screenshots" },
  ];

  return (
    <div
      className={`flex min-h-screen`}
      style={{
        backgroundColor: theme === "dark" ? "var(--dark-background)" : "var(--light-background)",
        color: theme === "dark" ? "var(--dark-text-color)" : "var(--light-text-color)",
      }}
    >
      {/* Conditionally render SidePanel only on larger screens */}
      {!isMobile && <SidePanel sections={sections} theme={theme as "dark" | "light"} />}

      {/* Main Content */}
      <div
        className={`flex-1 max-w-5xl mx-auto px-4 py-12`}
        style={{
          backgroundColor: "var(--background-color)",
          color: "var(--text-color)",
        }}
      >
        {/* Hero Section */}
        <section id="intro" className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-2">Sharpify: Image-Enhancing Website</h1>
          <p
            className="text-lg mb-6"
            style={{ color: "var(--secondary-text-color)" }}
          >
            A full-stack web app for improving image quality and securely storing images in the cloud.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/dovushman/cs4241-final-project"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              <span className="font-semibold">View Source Code</span>
            </a>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-6" style={{ color: "var(--text-color)" }}>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Image Enhancement:</strong> Upgrade image resolution and clarity using AI-powered processing 
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Secure Cloud Storage:</strong> Upload and store images safely with Firebase integration
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Modern UI:</strong> Clean, intuitive interface for seamless user experience
              </div>
            </li>
          </ul>
        </section>

        {/* Overview */}
        <section id="overview" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            Sharpify combines AI image enhancement with secure and user-friendly cloud storage. Users can upload images, improve their quality with the Deep Image AI, and organize them in a personal image library. The app uses a Node.js backend and a React frontend, with MongoDB managing user accounts and Firebase to store the images themselves.
          </p>
        </section>

        {/* Why I Built This */}
        <section id="why" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Why I Built This</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            The idea for Sharpify stemmed from my trying to find a website to improve an images quality. I had taken a photo on my phone and the image didn&apos;t look as crisp as I wanted it. The idea for Sharpify was born. At the time, I was also taking the Webware course at WPI. For my final project, I needed to create a full-stack web application, and an image enhancer seemed perfect. Sharpify was an idea that I knew would be useful to me and something that could be useful to others as well. 
          </p>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center" style={{ color: "var(--text-color)" }}>
            {[
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" },
              { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" },
              { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
              { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
              { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
            ].map((tech, index) => (
              <li key={index} className="flex flex-col items-center gap-2">
                <Image src={tech.icon} alt={tech.name} width={50} height={50} className="inline-block" />
                <span className="text-sm font-medium">{tech.name}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Screenshots */}
        <section id="screenshots" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 gap-8"> {/* Changed to single column */}
            <div className="shadow-md rounded-lg overflow-hidden">
              <Image
                src="/static/images/Sharpify/SharpifyLogin.jpg"
                alt="Sharpify Login"
                width={850}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="shadow-md rounded-lg overflow-hidden">
              <Image
                src="/static/images/Sharpify/SharpifyComparison.jpg"
                alt="Sharpify Comparison"
                width={1000}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Add more screenshots here */}
          </div>
        </section>

        {/* Back Link */}
        <div className="text-center py-8">
          <button
            onClick={() => {
              const section = document.getElementById("projects");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/?section=projects&selected=2"; // 2 stands for sharpify on project list
              }
            }}
            className="inline-block px-8 py-3 rounded-md shadow-md hover:bg-opacity-90 transition duration-300 font-semibold"
            style={{
              backgroundColor: "var(--button-background)",
              color: "var(--button-text-color)",
            }}
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    </div>
  );
}
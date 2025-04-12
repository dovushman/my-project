"use client";

import Image from "next/image";
import Link from "next/link";
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
    { id: "hero", title: "Hero Section" },
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
        <section id="hero" className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-2">Sharpify: Image-Enhancing Website</h1>
          <p
            className="text-lg mb-6"
            style={{ color: "var(--secondary-text-color)" }}
          >
            A web app for enhancing image quality and securely storing your images.
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
                <strong className="font-semibold">Image Enhancement:</strong> Improve the quality of your images with advanced algorithms.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Secure Storage:</strong> Safely store and organize your images in the cloud.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Batch Processing:</strong> Enhance multiple images at once for efficiency.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">User-Friendly Interface:</strong> Intuitive design for seamless user experience.
              </div>
            </li>
          </ul>
        </section>

        {/* Overview */}
        <section id="overview" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            Sharpify is a web application designed to enhance image quality and provide a secure platform for storing and managing images. It leverages advanced algorithms to improve image resolution and clarity, making it an essential tool for photographers, designers, and anyone who values high-quality visuals.
          </p>
        </section>

        {/* Why I Built This */}
        <section id="why" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Why I Built This</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            The idea for Sharpify stemmed from the need for a reliable tool to enhance image quality without compromising on security. As someone passionate about photography and technology, I wanted to create a platform that combines cutting-edge image processing techniques with a user-friendly interface.
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
              { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
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
          <Link
            href="/projects"
            className="inline-block px-8 py-3 rounded-md shadow-md hover:bg-opacity-90 transition duration-300 font-semibold"
            style={{
              backgroundColor: "var(--button-background)",
              color: "var(--button-text-color)",
            }}
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
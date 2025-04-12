"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../../ThemeContext";
import SidePanel from "../../components/SidePanel";
import { useEffect, useState } from "react";

export default function HospitalProjectPage() {
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
          <h1 className="text-4xl font-bold mb-2">Brigham and Women&apos;s Hospital Desktop Application</h1>
          <p
            className="text-lg mb-6"
            style={{ color: "var(--secondary-text-color)" }}
          >
            A desktop application for hospital management, including staff communication, management requests, and adjustable signage.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
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
                <strong className="font-semibold">Staff Communication:</strong> Streamlined communication between hospital staff.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Management Requests:</strong> Efficient handling of management requests and tasks.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Adjustable Signage:</strong> Dynamic signage for hospital navigation and announcements.
              </div>
            </li>
          </ul>
        </section>

        {/* Overview */}
        <section id="overview" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            This desktop application was developed to improve hospital management processes at Brigham and Women&apos;s Hospital. It provides tools for staff communication, management request handling, and dynamic signage adjustments, ensuring efficient operations and better patient care.
          </p>
        </section>

        {/* Why I Built This */}
        <section id="why" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Why I Built This</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            The project was inspired by the need for a centralized system to manage hospital operations effectively. By combining my interest in healthcare and software development, I aimed to create a solution that addresses common challenges faced by hospital staff and management.
          </p>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center" style={{ color: "var(--text-color)" }}>
            {[
              { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
              { name: "JavaFX", icon: "/icons/javafx-icon.svg" },
              { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
              { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
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
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-semibold text-left flex-1">Screenshots</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 justify-items-center">
            <div className="shadow-md rounded-lg overflow-hidden">
              <Image
          src="/static/images/B&W/HomePage.jpg"
          alt="Hospital application homepage screenshot"
          width={800}
          height={400}
          className="h-auto object-cover"
              />
            </div>
            <div className="shadow-md rounded-lg overflow-hidden">
              <Image
          src="/static/images/B&W/Pathfinder.jpg"
          alt="Hospital application pathfinder screenshot"
          width={800}
          height={400}
          className="h-auto object-cover"
              />
            </div>
            <div className="shadow-md rounded-lg overflow-hidden">
              <Image
          src="/static/images/B&W/PersonalPage.jpg"
          alt="Hospital application personal page screenshot"
          width={800}
          height={400}
          className="h-auto object-cover"
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
"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../../ThemeContext";
import SidePanel from "../../components/SidePanel";

export default function LegUpProjectPage() {
  const { theme } = useTheme();

  const sections = [
    { id: "hero", title: "Hero Section" },
    { id: "features", title: "Key Features" },
    { id: "overview", title: "Overview" },
    { id: "why", title: "Why I Built This" },
    { id: "tech-stack", title: "Tech Stack" },
    { id: "screenshots", title: "Screenshots" },
    { id: "future-plans", title: "Future Plans" },
  ];

  return (
    <div
      className={`flex min-h-screen`}
      style={{
        backgroundColor: theme === "dark" ? "var(--dark-background)" : "var(--light-background)",
        color: theme === "dark" ? "var(--dark-text-color)" : "var(--light-text-color)",
      }}
    >
      {/* Use the SidePanel Component */}
      <SidePanel sections={sections} theme={theme as "dark" | "light"} />

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
          <h1 className="text-4xl font-bold mb-2">LegUp: Note Sharing Website</h1>
          <p
            className="text-lg mb-6"
            style={{ color: "var(--secondary-text-color)" }}
          >
            Note sharing website for textbook material and collaborative learning platform.
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
                <strong className="font-semibold">Note Sharing:</strong> Share and access notes for textbook material.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Collaborative Learning:</strong> Engage with peers to enhance learning experiences.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Google Books API Integration:</strong> Identify requested books and link them with submitted notes.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Cross-Platform Support:</strong> Available as both a web and mobile application.
              </div>
            </li>
          </ul>
        </section>

        {/* Overview */}
        <section id="overview" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            LegUp is a web and mobile application designed to facilitate note sharing for textbook material and foster collaborative learning. The platform integrates the Google Books API to identify requested books and associate them with user-submitted notes. This project was presented at Google Cambridge to employees and interns, showcasing its innovative approach to collaborative education.
          </p>
        </section>

        {/* Why I Built This */}
        <section id="why" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Why I Built This</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            The idea for LegUp stemmed from the need for a centralized platform to share and access notes for textbook material. As a student, I often found it challenging to collaborate with peers effectively. This project aimed to address that gap by creating a platform that combines note sharing with collaborative learning tools, making education more accessible and engaging.
          </p>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center" style={{ color: "var(--text-color)" }}>
            {[
              { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
              { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
              { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
              { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
              { name: "Heroku", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="shadow-md rounded-lg overflow-hidden">
              <Image
                src="/images/team-builder.jpg"
                alt="LegUp screenshot"
                width={200}
                height={100}
                className="h-auto object-cover"
              />
            </div>
            {/* Add more screenshots here */}
          </div>
        </section>

        {/* Future Plans */}
        <section id="future-plans" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Future Plans</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            I am actively working on the following features and improvements:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: "var(--text-color)" }}>
            <li>Enhancing the search functionality for notes and textbooks.</li>
            <li>Adding user profiles to track contributions and favorites.</li>
            <li>Integrating real-time collaboration tools for group projects.</li>
            <li>Expanding the platform to support more file formats for notes.</li>
          </ul>
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
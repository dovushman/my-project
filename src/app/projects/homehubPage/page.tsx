"use client";

import Image from "next/image";
import { useTheme } from "../../ThemeContext";
import SidePanel from "../../components/SidePanel";
import { useEffect, useState } from "react";

export default function HomeHubProjectPage() {
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
    { id: "future-plans", title: "Future Plans" },
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
          <h1 className="text-4xl font-bold mb-2">HomeHub: Smart Home Management</h1>
          <p
            className="text-lg mb-6"
            style={{ color: "var(--secondary-text-color)" }}
          >
            A full-stack web app designed to help roommates coordinate tasks, schedules and shared shopping lists in one place. 
          </p>
          <div className="flex justify-center gap-4">
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-6" style={{ color: "var(--text-color)" }}>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Shared Calendar:</strong> Coordinate events, schedules and shared commitments
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Task Manager:</strong> Assign, track, and complete chores with visibility across all users 
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Collaborative shopping List:</strong> Add, edit, and manage grocery items together in real time
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Clean UI:</strong> Built with React and Bootstrap for an intuitive and responsive interface
              </div>
            </li>
          </ul>
        </section>

        {/* Overview */}
        <section id="overview" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            HomeHub is a roommate management tool aimed to help manage shared living spaces. Whether it is coordinating cleaning duties, remembering who is buying groceries or just knowing what is happening when, HomeHub centralizes all of this information. The app supports a more organized, transparent, and low stress living environment by helping roommates stay on the same page. 
          </p>
        </section>

        {/* Why I Built This */}
        <section id="why" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Why I Built This</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            The idea for HomeHub came from personal experience – living with roommates can be great, but it often leads to miscommunication over chores, groceries, and scheduling. I wanted to build a tool that made these everyday tasks easier to manage, encouraging fairness and collaboration without relying on constant texts or awkward reminders. HomeHub combines organization with simplicity, offering a single space to support smoother, more respectful co-living.
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
              { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
            ].map((tech, index) => (
              <li key={index} className="flex flex-col items-center gap-2">
                <Image src={tech.icon} alt={tech.name} width={50} height={50} className="inline-block" />
                <span className="text-sm font-medium">{tech.name}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Future Plans */}
        <section id="future-plans" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Future Plans</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            I am actively working on the following features and improvements:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: "var(--text-color)" }}>
            <li>Adding real-time notifications for task updates and calendar reminders</li>
            <li>Integrating expense tracking and bill splitting functionality</li>
            <li>Enhancing the shopping list with barcode scanning and price comparison</li>
            <li>Developing a mobile app for better accessibility and on-the-go use</li>
          </ul>
        </section>

        {/* Screenshots */}
        <section id="screenshots" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="shadow-md rounded-lg overflow-hidden">
              <Image
                src="/images/team-builder.jpg"
                alt="HomeHub screenshot"
                width={200}
                height={100}
                className="h-auto object-cover"
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
                window.location.href = "/?section=projects&selected=5"; // 5 stands for homehub on project list
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
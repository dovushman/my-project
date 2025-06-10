"use client";

import Image from "next/image";
import { useTheme } from "../../ThemeContext";
import SidePanel from "../../components/SidePanel";
import { useEffect, useState } from "react";

export default function MoseProjectPage() {
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
          <h1 className="text-4xl font-bold mb-2">MOSE Mobile App Prototype</h1>
          <p
            className="text-lg mb-6"
            style={{ color: "var(--secondary-text-color)" }}
          >
            A mobile app prototype designed to improve floodgate communication and public safety in Venice, Italy. 
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://digital.wpi.edu/concern/student_works/8g84mq70r?locale=en"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              <span className="font-semibold">Learn More</span>
            </a>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-6" style={{ color: "var(--text-color)" }}>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Floodgate Alerts:</strong> Notify the public of floodgate closures in real-time.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Customizable Notifications:</strong> Allow users to set preferences for flood alerts.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Intuitive UI:</strong> Designed with accessibility and ease-of-use in mind for residents and tourists alike.
              </div>
            </li>
          </ul>
        </section>

        {/* Overview */}
        <section id="overview" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            The MOSE Mobile App Prototype is an interactive mock-up designed for the Commissario Straordinario MOSE in Venice, Italy. It aims to alert the public about floodgate closures and provide real-time updates to ensure safety and preparedness during high tides. The app would allow users to set the nearest Vaporetto (Venetian Waterbus transport system, similar to buses) stop as a home location to see how tides will affect their houses, given the vastly different elevations throughout the city. It also includes alerts of Vaporetto closings and routing options to adjust based on closings. This design is being used by the Commissario Straordinario MOSE to help create their finalized app.
          </p>
        </section>

        {/* Why I Built This */}
        <section id="why" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Why I Built This</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            During my team&apos;s time in Venice, it became clear that while the MOSE floodgate system helps manage rising tides, communication with the public needed improvement. My group set out to design a mobile app that could help deliver alerts in a timely manner, targeting a user&apos;s individual location and preferences. This project challenged us to apply UX principles in a real-world, high-stakes environment and gave me the chance to contribute to a solution that could genuinely improve daily life in a city as unique and vulnerable as Venice.
          </p>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center" style={{ color: "var(--text-color)" }}>
            {[

              { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" },
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
          <div className="flex flex-wrap justify-center gap-8">
            <div className="shadow-md rounded-lg overflow-hidden">
              <Image
                src="/static/images/Mose/MoseMain.jpg"
                alt="MOSE Main Page"
                width={200}
                height={100}
                className="h-auto object-cover"
              />
            </div>
            <div className="shadow-md rounded-lg overflow-hidden">
              <Image
                src="/static/images/Mose/MoseTide.jpg"
                alt="MOSE Tide Page"
                width={200}
                height={100}
                className="h-auto object-cover"
              />
            </div>
            <div className="shadow-md rounded-lg overflow-hidden">
              <Image
                src="/static/images/Mose/MoseUpdates.jpg"
                alt="MOSE Update Page"
                width={200}
                height={100}
                className="h-auto object-cover"
              />
            </div>
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
                window.location.href = "/?section=projects&selected=4"; // 4 stands for mose on project list
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
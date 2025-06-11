"use client";

import Image from "next/image";
import { useTheme } from "../../ThemeContext";
import SidePanel from "../../components/SidePanel";
import { useEffect, useState } from "react";

export default function PokedexProjectPage() {
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
    { id: "ai-deep-dive", title: "AI Deep Dive" },
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
          <h1 className="text-4xl font-bold mb-2">Pokédex App</h1>
          <p
            className="text-lg mb-6"
            style={{ color: "var(--secondary-text-color)" }}
          >
            A Pokédex built with React Native, featuring AI-powered Pokémon recognition and team building.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/dovushman/pokedex"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md shadow-md hover:bg-opacity-90 transition duration-300 font-semibold"
              style={{
                backgroundColor: "var(--button-background)",
                color: "var(--button-text-color)",
              }}
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
                <strong className="font-semibold">Comprehensive Pokédex:</strong> Search and filter all Pokémon, items, abilities, and more by type, stats, generation, and availability
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">AI-Powered Identification:</strong> Upload an image or type a description to identify Pokémon with AI
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Smart Team Builder:</strong> Build teams manually or generate competitive teams using a custom AI model
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Offline Access:</strong> Uses SQLite for storing and accessing data without the need for internet connectivity
              </div>
            </li>
          </ul>
        </section>

        {/* Overview */}
        <section id="overview" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            A complete Pokédex with searching and filtering capabilities, and detailed information about each Pokémon. The app incorporates a unique &quot;Who&apos;s that Pokémon?&quot; feature powered by AI for both image and text-based identification. Additionally, it includes a smart team builder, allowing users to create teams manually or leverage a custom AI model for competitively viable suggestions. Users have the option to export their teams so that the teams can be easily to uploaded to Pokémon Showdown (online Pokémon battle simulator).
          </p>
        </section>

        {/* Why I Built This */}
        <section id="why" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Why I Built This</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            As a lifelong Pokémon enthusiast, my interest in the franchise deepened during my time at WPI. The sheer volume of Pokémon and the constant release of new content became overwhelming. This inspired the idea of creating a mobile Pokédex to centralize all the information. While a basic Pokédex is not a new idea, I saw the app as an excellent opportunity to learn React Native and build something that I enjoy. I saw this app as a way to learn how to implement currently existing AI models, to explore how to refine these models and even create my own AI models to be used in a unique way.
          </p>
        </section>

        {/* AI Deep Dive */}
        <section id="ai-deep-dive" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">AI-Powered Features</h2>
          <div className="space-y-6" style={{ color: "var(--text-color)" }}>
            <div>
              <h3 className="text-xl font-semibold mb-2">AI Pokémon Recognition</h3>
              <p className="text-lg leading-relaxed">
                The &quot;Who&apos;s That Pokémon?&quot; feature utilizes advanced AI models to identify Pokémon from user-uploaded images and textual descriptions.
                <br></br><br></br>
                <h3 className="text-xl font-semibold mb-2">AI Team Builder</h3>
                The AI team builder allows users to create a competitively viable team in a matter of seconds. Using a custom AI model, users can select the format they wish to compete in and enter a textual description of what they are looking for. For example, users could enter &quot;Rain team&quot; or &quot;Team centered around Charizard&quot; and the model then returns a competitively viable team based on the prompt. The outputted team includes all six Pokémon, their items, abilities, moves and stats.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech-stack" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center" style={{ color: "var(--text-color)" }}>
            {[
              { name: "React Native", icon: "/icons/react-native-1.svg" },
              { name: "Expo", icon: "/icons/expo-svgrepo-com.svg" },
              { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
              { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            ].map((tech, index) => (
              <li key={index} className="flex flex-col items-center gap-2">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={50}
                  height={50}
                  className={`inline-block${tech.name === "Expo" && theme === "dark" ? " invert" : ""}`}
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Future Plans */}
        <section id="future-plans" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Future Plans</h2>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--text-color)" }}>
            I am actively working on the following features and improvements:
          </p>
          <ul className="list-disc pl-6 space-y-2" style={{ color: "var(--text-color)" }}>
            <li>Improve AI model accuracy, especially for non-official artwork like plushies and fan art</li>
            <li>Integrate the custom AI team builder into the mobile app</li>
            <li>Add optional user accounts for cross-device syncing and data persistence</li>
            <li>Create a brand name and create new art/sprites to decorate the app</li>
            <li>Publish to the IOS app store</li>
          </ul>
        </section>

        {/* Screenshots */}
        <section id="screenshots" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-8">
            <div className="shadow-md rounded-lg overflow-hidden mx-auto">
              <Image
                src="/static/images/Pokedex/PokedexHome.jpg"
                alt="Pokedex Home"
                width={200}
                height={100}
                className="h-auto object-cover"
              />
            </div>
            <div className="shadow-md rounded-lg overflow-hidden mx-auto">
              <Image
                src="/static/images/Pokedex/PokedexPokemon.jpg"
                alt="Pokemon Details"
                width={200}
                height={100}
                className="h-auto object-cover"
              />
            </div>
            <div className="shadow-md rounded-lg overflow-hidden mx-auto">
              <Image
                src="/static/images/Pokedex/PokedexSearch.jpg"
                alt="Search screen"
                width={200}
                height={100}
                className="h-auto object-cover"
              />
            </div>
            <div className="shadow-md rounded-lg overflow-hidden mx-auto">
              <Image
                src="/static/images/Pokedex/PokedexTeam.jpg"
                alt="Team Builder"
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
                window.location.href = "/?section=projects&selected=0"; // 0 stands for pokedex on project list
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
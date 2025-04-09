"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../../ThemeContext";
import SidePanel from "../../components/SidePanel";

export default function PokedexProjectPage() {
  const { theme } = useTheme();

  const sections = [
    { id: "hero", title: "Hero Section" },
    { id: "features", title: "Key Features" },
    { id: "overview", title: "Overview" },
    { id: "why", title: "Why I Built This" },
    { id: "ai-deep-dive", title: "AI Deep Dive" },
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
          <h1 className="text-4xl font-bold mb-2">Pokédex App</h1>
          <p
            className="text-lg mb-6"
            style={{ color: "var(--secondary-text-color)" }}
          >
            A React Native app for searching Pokémon and building teams.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/dovushman/pokedex"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              <span className="font-semibold">View Source Code</span>
            </a>
            <a
              href="/demo"
              className="px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300"
            >
              <span className="font-semibold">Try the Demo</span>
            </a>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
          <ul className="space-y-6" style={{ color: "var(--text-color)" }}>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">View & Filters:</strong> View information on all Pokémon and filter by type, stats, and more.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">AI Pokémon Recognition:</strong> Upload an image or describe a Pokémon to identify it.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Smart Team Builder:</strong> Build teams manually or with AI-generated suggestions.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div>
                <strong className="font-semibold">Offline Support:</strong> Uses SQLite for persistent offline access.
              </div>
            </li>
          </ul>
        </section>

        {/* Overview */}
        <section id="overview" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Overview</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            A full-featured Pokédex with searching, filters, and detailed information about each Pokémon.
            The app incorporates a unique &quot;Who&apos;s that Pokémon?&quot; feature powered by AI for both image and
            text-based identification. Additionally, it includes a smart team builder, allowing users to
            create teams manually or leverage a custom AI model for competitively viable suggestions.
          </p>
        </section>

        {/* Why I Built This */}
        <section id="why" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">Why I Built This</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            As a lifelong Pokémon enthusiast, my interest in the franchise deepened during my time at WPI.
            The sheer volume of Pokémon and the constant release of new content became overwhelming. This
            inspired the idea of creating a mobile Pokédex to centralize all the information. While a
            basic Pokédex wasn&apos;t novel, I saw it as an excellent opportunity to learn React Native and build
            something I was passionate about.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
            To make the app stand out, I wanted to integrate innovative features. Inspired by discussions
            around AI, I conceived the idea of AI-powered functionalities. This led to the development of
            the &quot;Who&apos;s That Pokémon?&quot; feature, utilizing both image recognition and text analysis, as well
            as a competitive team-building tool driven by AI.
          </p>
          <p className="text-lg leading-relaxed mt-4" style={{ color: "var(--text-color)" }}>
            Developing this app allowed me to explore exciting technologies such as Expo Go, SQLite for
            offline data persistence, and the powerful HuggingFace library for AI model integration. A
            significant highlight was the creation of a custom AI model specifically for competitive Pokémon
            team building, which became a key differentiator for the app. I also had the valuable experience
            of refining an existing HuggingFace model to better suit our needs.
          </p>
          <p className="text-lg leading-relaxed mt-4" style={{ color: "var(--text-color)" }}>
            This project has been incredibly rewarding, allowing me to merge my passion for Pokémon with
            practical software development skills.
          </p>
          <p className="text-lg leading-relaxed mt-4 italic" style={{ color: "var(--secondary-text-color)" }}>
            Please note that the app is currently under active development and not yet fully finished. It
            is my top priority, and I am making progress daily. Stay tuned for a beta version coming soon!
          </p>
        </section>

        {/* AI Deep Dive */}
        <section id="ai-deep-dive" className="py-12">
          <h2 className="text-3xl font-semibold mb-6">AI-Powered Features</h2>
          <div className="space-y-6" style={{ color: "var(--text-color)" }}>
            <div>
              <h3 className="text-xl font-semibold mb-2">AI Pokémon Recognition</h3>
              <p className="text-lg leading-relaxed">
                The &quot;Who&apos;s That Pokémon?&quot; feature utilizes advanced AI models to identify Pokémon from
                user-uploaded images and textual descriptions. For image recognition, we employ a
                convolutional neural network (CNN) trained on a comprehensive dataset of Pokémon images.
                For text-based identification, natural language processing (NLP) techniques are used to
                analyze user input and match it with Pokémon characteristics.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Smart Team Builder</h3>
              <p className="text-lg leading-relaxed">
                The smart team builder leverages a custom-trained AI model to suggest competitively viable
                Pokémon teams. This model considers various factors such as Pokémon types, abilities, stats,
                and common competitive strategies. My role involved [** Briefly mention your specific role in creating the model, e.g., data collection, model architecture design, training process **].
                We also refined a pre-existing model from HuggingFace to enhance its accuracy and relevance
                for the specific nuances of competitive Pokémon battling.
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
              // Add other relevant technologies
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
                src="/static/images/tempPokedexPhoto.png"
                alt="Search screen"
                width={200}
                height={100}
                className="h-auto object-cover"
              />
            </div>
            <div className="shadow-md rounded-lg overflow-hidden">
              <Image
                src="/images/screen2.png"
                alt="Pokémon detail"
                width={0}
                height={0}
                className="w-full h-auto object-cover"
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
            <li>Implementing a more advanced filtering system for Pokémon.</li>
            <li>Expanding the Pokémon detail view with more comprehensive information (abilities, movesets, etc.).</li>
            <li>Refining the AI team builder based on user feedback and the evolving competitive meta.</li>
            <li>Developing a user account system to save favorite Pokémon and teams.</li>
            <li>Conducting thorough testing and bug fixes for the upcoming beta release.</li>
            {/* Add more future plans */}
          </ul>
          <p className="text-lg leading-relaxed mt-4" style={{ color: "var(--secondary-text-color)" }}>
            Stay tuned for updates! I anticipate a beta version will be available for testing soon.
          </p>
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
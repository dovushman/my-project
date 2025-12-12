"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function HomePageContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams?.get("section");
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [searchParams]);

  return (
    <main className="bg-[var(--background-color)] text-[var(--text-color)]">
      {/* Hero Section */}
      <section id="home" className="bg-[var(--background-color)]">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="bg-[var(--card-background)]">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-[var(--background-color)]">
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-[var(--card-background)]">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-[var(--background-color)]">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[var(--card-background)]">
        <Contact />
      </section>
    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
}

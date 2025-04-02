"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills"; // Import the Skills component
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills"> {/* Add the Skills section */}
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

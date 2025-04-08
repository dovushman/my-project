"use client";

import Head from "next/head";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Dov Ushman - Portfolio</title>
        <meta name="description" content="Welcome to my portfolio! Learn more about me, my skills, and my projects." />
        <meta name="keywords" content="Dov Ushman, Portfolio, Software Engineer, Full Stack Engineer, Web Developer, Projects, Skills, WPI" />
        <meta name="author" content="Dov Ushman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Dov Ushman - Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio! Learn more about me, my skills, and my projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-vercel-domain.vercel.app/" />
        <meta property="og:image" content="https://your-vercel-domain.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dov Ushman - Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio! Learn more about me, my skills, and my projects." />
        <meta name="twitter:image" content="https://your-vercel-domain.vercel.app/og-image.png" />
      </Head>
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

        {/* Projects Section */}
        <section id="projects" className="bg-[var(--card-background)]">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-[var(--background-color)]">
          <Contact />
        </section>
      </main>
    </>
  );
}
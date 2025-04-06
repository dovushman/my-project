// "use client";

// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// // import { useEffect } from "react";

// export default function HomePage() {
//   // useEffect(() => {
//   //   const setVh = () => {
//   //     document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
//   //   };
//   //   setVh();
//   //   window.addEventListener("resize", setVh);
//   //   return () => window.removeEventListener("resize", setVh);
//   // }, []);

//   return (
//     <main>
//       <section id="home">
//         <Hero />
//       </section>
//       <section id="about">
//         <About />
//       </section>
//       <section id="skills">
//         <Skills />
//       </section>
//       <section id="projects">
//         <Projects />
//       </section>
//       <section id="contact">
//         <Contact />
//       </section>
//     </main>
//   );
// }


"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function HomePage() {
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

      {/* Projects Section */}
      <section id="projects" className="bg-[var(--card-background)]">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[var(--background-color)]">
        <Contact />
      </section>
    </main>
  );
}
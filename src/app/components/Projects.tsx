export default function Projects() {
    const projects = [
      {
        title: "Pokédex App",
        description: "A React Native app for searching Pokémon.",
        fullDescription: "A full-featured Pokédex with AI search, team builder, and image recognition.",
        link: "#",
        image: "/images/pokedex.jpg",
        techStack: ["React Native", "Expo", "SQLite"],
      },
      {
        title: "E-Ink Display Controller",
        description: "A UI for displaying real-time data on an e-ink device.",
        fullDescription: "Designed for minimal energy consumption with real-time updates and API integration.",
        link: "#",
        image: "/images/eink.jpg",
        techStack: ["Next.js", "Tailwind", "Node.js"],
      },
      {
        title: "Smart Jar App",
        description: "An e-commerce platform for a smart food jar startup.",
        fullDescription: "Built with React and Firebase, featuring Stripe payment integration and order tracking.",
        link: "#",
        image: "/images/smart-jar.jpg",
        techStack: ["React", "Firebase", "Stripe API"],
      },
      {
        title: "Portfolio Website",
        description: "My personal website built with Next.js and Tailwind.",
        fullDescription: "Designed for responsiveness and optimized for performance with lazy-loaded images.",
        link: "#",
        image: "/images/portfolio.jpg",
        techStack: ["Next.js", "Tailwind", "Vercel"],
      },
      {
        title: "AI Pokémon Team Builder",
        description: "An AI-powered tool for competitive Pokémon teams.",
        fullDescription: "Leverages OpenAI API for team recommendations based on battle strategy.",
        link: "#",
        image: "/images/team-builder.jpg",
        techStack: ["Python", "OpenAI API", "React"],
      },
    ];
  
    return (
      <section className="py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group card text-text-color p-5 rounded-xl shadow-md cursor-pointer transition-transform hover:scale-105 h-64"
            >
              {/* Project Image */}
              <div className="relative w-full h-36">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-40"
                />
              </div>
  
              {/* Content Container (Prevents Layout Shift) */}
              <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-lg font-semibold mt-3">{project.title}</h3>
                <p className="text-sm mt-1">{project.description}</p>
              </div>
  
              {/* Hover Overlay (Appears When Hovering) */}
              <div className="absolute inset-0 flex flex-col items-start justify-center p-5 opacity-0 bg-navbar-background bg-opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm">{project.fullDescription}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-button-background text-button-text-color text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-button-background mt-3 inline-block text-sm hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
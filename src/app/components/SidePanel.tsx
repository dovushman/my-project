import React from "react";
import { usePathname, useRouter } from "next/navigation";

interface SidePanelProps {
  sections: { id: string; title: string }[];
  theme: "dark" | "light";
}

const SidePanel: React.FC<SidePanelProps> = ({ sections, theme }) => {
  const pathname = usePathname(); // Get the current route
  const router = useRouter(); // Use router for navigation

  const handleNavigation = (id: string) => {
    if (pathname === "/projects/pokedexPage") {
      // If on the current page, scroll smoothly to the section
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to the page with the section query
      router.push(`/projects/pokedexPage#${id}`);
    }
  };

  return (
    <nav
      className="fixed left-4 top-1/2 transform -translate-y-1/2 h-auto w-48 p-4 rounded-lg z-50"
      style={{
        backgroundColor: theme === "dark" ? "var(--dark-background)" : "var(--light-background)",
        color: theme === "dark" ? "var(--dark-text-color)" : "var(--light-text-color)",
      }}
    >
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => handleNavigation(section.id)}
              className="hover:underline bg-transparent border-none cursor-pointer p-0 appearance-none"
              style={{
                color: theme === "dark" ? "var(--dark-text-color)" : "var(--light-text-color)",
                backgroundColor: "transparent",
              }}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidePanel;
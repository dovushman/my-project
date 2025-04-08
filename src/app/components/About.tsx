// "use client";

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="py-16 px-8" // Removed Tailwind's bg-gray-800
//       style={{ backgroundColor: "#1E1E1F" }} // Set background to #1E1E1F
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-extrabold mb-12 text-center text-[var(--accent-color)]">
//           About Me
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* About Me Card */}
// <div
//   className="rounded-lg shadow-lg p-6"
//   style={{ backgroundColor: "#121212", border: "1px solid #2A2A2A" }}
// >
//   <h3 className="text-2xl font-semibold mb-4 text-[var(--accent-color)]">
//     Who I Am
//   </h3>
//   <p className="text-lg leading-relaxed">
//     Hello! My name is Dov Ushman, and I am a passionate Full Stack Engineer
//     with a strong focus on building scalable, user-centric applications. I thrive on solving complex problems and delivering impactful solutions.
//   </p>
// </div>

"use client";

import { useTheme } from "../ThemeContext";

export default function About() {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className="py-16 px-8"
      style={{
        backgroundColor: theme === "dark" ? "#1E1E1F" : "var(--card-background)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-[var(--accent-color)]">
          About Me
        </h2>
        <div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>
  {/* About Me Card */}
  <div
    className="rounded-lg shadow-lg p-6"
    style={{
      backgroundColor: theme === "dark" ? "#121212" : "var(--background-color)",
      border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
    }}
  >
    <h3 className="text-2xl font-semibold mb-4 flex items-center text-[var(--accent-color)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2 text-[var(--accent-color)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5z"
        />
      </svg>
      Who I Am
    </h3>
    <p className="text-lg leading-relaxed">
      Hello! My name is Dov Ushman, and I am a passionate Full Stack Engineer
      with a strong focus on building scalable, user-centric applications. I thrive on solving complex problems and delivering impactful solutions.
    </p>
  </div>

  {/* Education Card */}
  <div
    className="rounded-lg shadow-lg p-6"
    style={{
      backgroundColor: theme === "dark" ? "#121212" : "var(--background-color)",
      border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
    }}
  >
    <h3 className="text-2xl font-semibold mb-4 flex items-center text-[var(--accent-color)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2 text-[var(--accent-color)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5z"
        />
      </svg>
      Education
    </h3>
    <ul className="list-disc pl-5 space-y-2">
      <li className="text-left">
        <strong>Bachelor of Science in Computer Science</strong> - Worcester Polytechnic Institute (Graduated: 2024)
      </li>
      <li className="text-left">
        <strong>Minor:</strong> Financial Technology
      </li>
      <li className="text-left">
        <strong>GPA:</strong> 3.71
      </li>
      <li className="text-left">
        <strong>Academic Honors:</strong> High Distinction
      </li>
    </ul>
  </div>

  {/* Hobbies & Interests Card */}
  <div
    className="rounded-lg shadow-lg p-6 md:col-span-2 lg:col-span-1"
    style={{
      backgroundColor: theme === "dark" ? "#121212" : "var(--background-color)",
      border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
    }}
  >
    <h3 className="text-2xl font-semibold mb-4 flex items-center text-[var(--accent-color)]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2 text-[var(--accent-color)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5z"
        />
      </svg>
      Hobbies & Interests
    </h3>
    <p className="text-lg">
      Outside of work, I enjoy spending time with my family and friends. I’m a lifelong Red Sox fan, an avid skier, and a tennis player. I also love experimenting with new technologies and coding helpful tools. This website is actually my first time using TypeScript, Next.js, and TailwindCSS!
    </p>
  </div>
</div>
      </div>
    </section>
  );
}
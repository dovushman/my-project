"use client";

import { useTheme } from "../ThemeContext";
import IDEAboutCard from "../components/subComponents/IDEAboutCard";
import { ReactNode } from "react";

export default function About() {
  const { theme } = useTheme();
  const isIDE = theme === "ide";

  const Card = ({
    title,
    icon,
    content,
    className = "",
  }: {
    title: string;
    icon: ReactNode;
    content: ReactNode;
    className?: string;
  }) =>
    isIDE ? (
      <IDEAboutCard title={title} icon={icon}>
        {content}
      </IDEAboutCard>
    ) : (
      <div
        className={`rounded-lg shadow-lg p-6 ${className}`}
        style={{
          backgroundColor: theme === "dark" ? "#121212" : "var(--background-color)",
          border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
        }}
      >
        <h3 className="text-2xl font-semibold mb-4 flex items-center text-[var(--accent-color)]">
          {icon}
          {title}
        </h3>
        <div className="text-lg leading-relaxed text-[var(--text-color)]">{content}</div>
      </div>
    );

  // IDE-specific icon or regular icon
  const icon = isIDE ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 mr-2 text-[#9cdcfe]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2 text-[var(--accent-color)]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5z" />
    </svg>
  );

  return (
    <section
      id="about"
      className={`${isIDE ? 'h-[85vh] overflow-auto font-mono' : 'min-h-[85vh]'} py-12 md:py-16 px-6 md:px-8 lg:px-12`}
      style={{
        backgroundColor: isIDE ? "var(--background-color)" : theme === "dark" ? "#1E1E1F" : "var(--card-background)",
        backgroundImage: isIDE ? "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232A2A2A' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H0z'/%3E%3Cpath d='M6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")" : "none",
        backgroundAttachment: isIDE ? "fixed" : "initial"
      }}
    >
      <div className="max-w-6xl mx-auto">
        {isIDE ? (
          <div className="mb-12">
            {/* <div className="flex items-center mb-3"> */}
              {/* <div className="bg-[#252526] text-white px-4 py-1 rounded-t border border-[#2A2A3A] border-b-0 text-sm flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="ml-2 text-[#9cdcfe]">AboutMe.jsx</span>
              </div> */}
            {/* </div> */}
            {/* <div className="border border-[#2A2A3A] rounded-tr-lg rounded-b-lg p-3 bg-[#1e1e1e]"> */}
              <div className="text-[#569cd6] text-lg font-mono mb-4">
                <span className="text-[#569cd6]">export const</span> <span className="text-[#9cdcfe]">AboutMe</span> = () <span className="text-[#c586c0]">=&gt; {"{"};</span>
              </div>
            {/* </div> */}
          </div>
        ) : (
          <h2 className="text-4xl font-extrabold mb-12 text-center text-[var(--accent-color)]">
            About Me
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="WhoIAm"
            icon={icon}
            content={
              <p>
                Hello! My name is Dov Ushman, and I am a passionate Full Stack Engineer
                with a strong focus on building scalable, user-centric applications. I
                thrive on solving complex problems and delivering impactful solutions.
              </p>
            }
          />
          <Card
            title="Education"
            icon={icon}
            content={
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-left">
                  <strong>Bachelor of Science in Computer Science</strong> – Worcester
                  Polytechnic Institute (Graduated: 2024)
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
            }
          />
          <Card
            title="HobbiesAndInterests"
            icon={icon}
            className="md:col-span-2 lg:col-span-1"
            content={
              <p>
                Outside of work, I enjoy spending time with my family and friends. I'm
                a lifelong Red Sox fan, an avid skier, and a tennis player. I also love
                experimenting with new technologies and coding helpful tools. This
                website is actually my first time using TypeScript, Next.js, and
                TailwindCSS!
              </p>
            }
          />
        </div>
        
        {isIDE && (
          <div className="mt-8 text-right pr-12">
            <span className="text-[#c586c0]">&#125;</span>
          </div>
        )}
        
        {isIDE && (
          <div className="mt-8 border-t border-[#2A2A3A] py-1 px-4 bg-[#007acc] text-white text-xs flex justify-between">
            <div className="flex items-center space-x-4">
              <span>JSX</span>
              <span>UTF-8</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Spaces: 2</span>
              <span>Lines: 42</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


// "use client";

// import { useTheme } from "../ThemeContext";

// export default function About() {
//   const { theme } = useTheme();

//   return (
// <section
//   id="about"
//   className="min-h-[85vh] py-12 md:py-16 px-6 md:px-8 lg:px-12"
//   style={{
//     backgroundColor: theme === "dark" ? "#1E1E1F" : "var(--card-background)",
//   }}
// >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-extrabold mb-12 text-center text-[var(--accent-color)]">
//           About Me
//         </h2>
//         <div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {/* About Me Card */}
//           <div
//             className="rounded-lg shadow-lg p-6"
//             style={{
//               backgroundColor: theme === "dark" ? "#121212" : "var(--background-color)",
//               border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
//             }}
//           >
//             <h3 className="text-2xl font-semibold mb-4 flex items-center text-[var(--accent-color)]">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 mr-2 text-[var(--accent-color)]"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 14l9-5-9-5-9 5z"
//                 />
//               </svg>
//               Who I Am
//             </h3>
//             <p className="text-lg leading-relaxed">
//               Hello! My name is Dov Ushman, and I am a passionate Full Stack Engineer
//               with a strong focus on building scalable, user-centric applications. I thrive on solving complex problems and delivering impactful solutions.
//             </p>
//           </div>

//           {/* Education Card */}
//           <div
//             className="rounded-lg shadow-lg p-6"
//             style={{
//               backgroundColor: theme === "dark" ? "#121212" : "var(--background-color)",
//               border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
//             }}
//           >
//             <h3 className="text-2xl font-semibold mb-4 flex items-center text-[var(--accent-color)]">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 mr-2 text-[var(--accent-color)]"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 14l9-5-9-5-9 5z"
//                 />
//               </svg>
//               Education
//             </h3>
//             <ul className="list-disc pl-5 space-y-2">
//               <li className="text-left">
//                 <strong>Bachelor of Science in Computer Science</strong> - Worcester Polytechnic Institute (Graduated: 2024)
//               </li>
//               <li className="text-left">
//                 <strong>Minor:</strong> Financial Technology
//               </li>
//               <li className="text-left">
//                 <strong>GPA:</strong> 3.71
//               </li>
//               <li className="text-left">
//                 <strong>Academic Honors:</strong> High Distinction
//               </li>
//             </ul>
//           </div>

//           {/* Hobbies & Interests Card */}
//           <div
//             className="rounded-lg shadow-lg p-6 md:col-span-2 lg:col-span-1"
//             style={{
//               backgroundColor: theme === "dark" ? "#121212" : "var(--background-color)",
//               border: theme === "dark" ? "1px solid #2A2A2A" : "1px solid #E5E5E5",
//             }}
//           >
//             <h3 className="text-2xl font-semibold mb-4 flex items-center text-[var(--accent-color)]">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 mr-2 text-[var(--accent-color)]"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 14l9-5-9-5-9 5z"
//                 />
//               </svg>
//               Hobbies & Interests
//             </h3>
//             <p className="text-lg">
//               Outside of work, I enjoy spending time with my family and friends. I’m a lifelong Red Sox fan, an avid skier, and a tennis player. I also love experimenting with new technologies and coding helpful tools. This website is actually my first time using TypeScript, Next.js, and TailwindCSS!
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


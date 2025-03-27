//Idea 1

// export default function Hero() {
//     return (
//       <section className="flex flex-col items-center justify-center h-screen">
//         {/* eslint-disable-next-line react/no-unescaped-entities */}
//         <h1 className="text-4xl font-bold">Hi, I'm Dov!</h1>
//         <p className="text-lg mt-4">
//           A Full Stack Engineer passionate about building amazing experiences.
//         </p>
//         <button className="mt-6 px-4 py-2">View My Work</button>
//       </section>
//     );
//   }



//Iea 2
// export default function Hero() {
//   return (
//     <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center p-8">
//       {/* Main Greeting */}
//       <h1 className="text-5xl font-bold leading-tight">Hi, I'm Dov!</h1>
      
//       {/* About Section */}
//       <p className="text-xl mt-4 max-w-2xl mx-auto">
//         A Full Stack Engineer passionate about building amazing experiences. I specialize
//         in both front-end and back-end development, focusing on creating seamless, scalable
//         applications with a strong attention to user experience and performance.
//       </p>
      
//       {/* Call to Action */}
//       <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg transition-transform transform hover:scale-105">
//         View My Work
//       </button>
//     </section>
//   );
// }

//Idea 3

// export default function Hero() {
//   return (
//     <section className="flex items-center justify-between h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10">
//       {/* Image or Graphic */}
//       <div className="flex-1">
//         <img src="/images/your-image.jpg" alt="Dov" className="rounded-full shadow-lg w-80 h-80 object-cover mx-auto" />
//       </div>

//       {/* Text Section */}
//       <div className="flex-1">
//         <h1 className="text-4xl font-bold">Hi, I'm Dov!</h1>
//         <p className="text-lg mt-4 max-w-lg">
//           I'm a Full Stack Engineer passionate about creating impactful software that changes the world. I specialize in building scalable, user-focused applications.
//         </p>
//         <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg transition-transform hover:scale-105">
//           View My Work
//         </button>
//       </div>
//     </section>
//   );
// }

//idea 3.25
// filepath: /Users/dovushman/my-project/src/app/components/Hero.tsx
// export default function Hero() {
//   return (
//     <section
//       className="flex items-center justify-between h-screen px-10"
//       style={{
//         background: "linear-gradient(to right, var(--hero-gradient-start), var(--hero-gradient-end))",
//         color: "var(--text-color)",
//       }}
//     >
//       {/* Image or Graphic */}
//       <div className="flex-1">
//         <img
//           src="/images/your-image.jpg"
//           alt="Dov"
//           className="rounded-full shadow-lg w-80 h-80 object-cover mx-auto"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="flex-1">
//         <h1 className="text-4xl font-bold">Hi, I'm Dov!</h1>
//         <p className="text-lg mt-4 max-w-lg">
//           I'm a Full Stack Engineer passionate about creating impactful software that changes the world. I specialize in building scalable, user-focused applications.
//         </p>
//         <button
//           className="mt-6 px-6 py-3 font-semibold rounded-lg transition-transform hover:scale-105"
//           style={{
//             backgroundColor: "var(--button-background)",
//             color: "var(--button-text-color)",
//           }}
//         >
//           View My Work
//         </button>
//       </div>
//     </section>
//   );
// }

//some version, its good
// export default function Hero() {
//   return (
//     <section
//       className="flex items-center justify-between h-screen px-10"
//       style={{
//         background: "linear-gradient(to right, var(--hero-gradient-start), var(--hero-gradient-end))",
//         color: "var(--text-color)",
//       }}
//     >
//       {/* Image or Graphic */}
//       <div className="flex-1">
//         <img
//           src="/images/your-image.jpg"
//           alt="Dov"
//           className="rounded-full shadow-lg w-80 h-80 object-cover mx-auto"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="flex-1">
//         <h1 className="text-4xl font-bold">Hi, I'm Dov!</h1>
//         <p className="text-lg mt-4 max-w-lg">
//           I'm a Full Stack Engineer passionate about creating impactful software that changes the world. I specialize in building scalable, user-focused applications.
//         </p>
//         <button
//           className="mt-6 px-6 py-3 font-semibold rounded-lg transition-transform hover:scale-105"
//           style={{
//             backgroundColor: "var(--button-background)",
//             color: "var(--button-text-color)",
//           }}
//         >
//           View My Work
//         </button>
//       </div>
//     </section>
//   );
// }
"use client";

import { useTheme } from "../ThemeContext"; // Import the useTheme hook

export default function Hero() {
  const { theme } = useTheme(); // Access the current theme from context
  const isIdeMode = theme === "ide"; // Determine if the current theme is IDE mode

  return (
    <section
      className="flex items-center justify-between h-screen px-10"
      style={{
        background: "linear-gradient(to right, var(--hero-gradient-start), var(--hero-gradient-end))",
        color: "var(--text-color)",
        fontFamily: isIdeMode ? "'Fira Code', monospace" : "inherit", // Monospaced font for IDE mode
      }}
    >
      {/* Image or Graphic */}
      <div className="flex-1">
        <img
          src="/images/your-image.jpg"
          alt="Dov"
          className="rounded-full shadow-lg w-80 h-80 object-cover mx-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1">
        {isIdeMode ? (
          // IDE-like mode
          <div className="w-full max-w-4xl mx-auto">
            <p style={{ color: "var(--text-comment)" }}>
              {"// Welcome to my portfolio"}
            </p>
            <p>
              <span style={{ color: "var(--text-keyword)" }}>const</span>{" "}
              <span style={{ color: "var(--text-variable)" }}>name</span>{" "}
              <span style={{ color: "var(--text-operator)" }}>=</span>{" "}
              <span style={{ color: "var(--text-string)" }}>"Dov Ushman"</span>;
            </p>
            <p>
              <span style={{ color: "var(--text-keyword)" }}>function</span>{" "}
              <span style={{ color: "var(--text-function)" }}>introduce</span>(){" "}
              {"{"}
            </p>
            <p style={{ paddingLeft: "2rem" }}>
              <span style={{ color: "var(--text-keyword)" }}>return</span>{" "}
              <span style={{ color: "var(--text-string)" }}>
                `"Hi, I'm Dov, a Full Stack Engineer passionate about creating impactful software."`
              </span>;
            </p>
            <p>{"}"}</p>
          </div>
        ) : (
          // Regular mode
          <>
            <h1 className="text-4xl font-bold">Hi, I'm Dov!</h1>
            <p className="text-lg mt-4 max-w-lg">
              I'm a Full Stack Engineer passionate about creating impactful software that changes the world. I specialize in building scalable, user-focused applications.
            </p>
          </>
        )}

        {/* Call to Action */}
        <button
          className="mt-6 px-6 py-3 font-semibold rounded-lg transition-transform hover:scale-105"
          style={{
            backgroundColor: "var(--button-background)",
            color: "var(--button-text-color)",
            fontFamily: isIdeMode ? "'Fira Code', monospace" : "inherit",
          }}
        >
          View My Work
        </button>
      </div>
    </section>
  );
}
//idea 3.5
// export default function Hero() {
//   return (
//     <section
//       className="flex items-center justify-between h-screen px-10"
//       style={{
//         background: "linear-gradient(to right, var(--background-color), var(--card-background))",
//         color: "var(--text-color)",
//       }}
//     >
//       {/* Image or Graphic */}
//       <div className="flex-1">
//         <img
//           src="/images/your-image.jpg"
//           alt="Dov"
//           className="rounded-full shadow-lg w-80 h-80 object-cover mx-auto"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="flex-1">
//         <h1 className="text-4xl font-bold">Hi, I'm Dov!</h1>
//         <p className="text-lg mt-4 max-w-lg">
//           I'm a Full Stack Engineer passionate about creating impactful software that changes the world. I specialize in building scalable, user-focused applications.
//         </p>
//         <button
//           className="mt-6 px-6 py-3 font-semibold rounded-lg transition-transform hover:scale-105"
//           style={{
//             backgroundColor: "var(--button-background)",
//             color: "var(--button-text-color)",
//           }}
//         >
//           View My Work
//         </button>
//       </div>
//     </section>
//   );
// }


//Idea 4
// export default function Hero() {
//   return (
//     <section className="relative w-full h-screen">
//       <img src="/images/background.jpg" alt="Background" className="w-full h-full object-cover absolute top-0 left-0 opacity-60" />
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
//         <h1 className="text-5xl font-bold">Hi, I'm Dov!</h1>
//         <p className="text-lg mt-4 max-w-2xl mx-auto">
//           A Full Stack Engineer passionate about building amazing experiences.
//         </p>
//         <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg transition-transform hover:scale-105">
//           View My Work
//         </button>
//       </div>
//     </section>
//   );
// }


// export default function Hero() {
//   return (
//     <section className="w-full py-12 bg-gray-800 text-white">
//       <div className="max-w-7xl mx-auto flex items-center justify-between space-x-8">
//         <div className="flex-1">
//           <h1 className="text-4xl font-bold">Hi, I'm Dov!</h1>
//           <p className="text-lg mt-4 max-w-md">
//             A Full Stack Engineer with a passion for building impactful experiences and intuitive applications.
//           </p>
//         </div>
//         <div className="flex-1 text-center">
//           <img src="/images/profile-icon.png" alt="Dov" className="w-40 h-40 rounded-full mx-auto" />
//         </div>
//       </div>
//     </section>
//   );
// }

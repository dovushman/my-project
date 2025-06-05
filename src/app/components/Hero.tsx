"use client";

import { useTheme } from "../ThemeContext";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const { theme } = useTheme();
  const isIdeMode = theme === "ide";
  const typedRef = useRef(null);
  const ideTypedRef = useRef(null);
  const typedInstance = useRef<Typed | null>(null);
  const ideTypedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!isIdeMode && typedRef.current) {
        typedInstance.current = new Typed(typedRef.current, {
          strings: [
            "Full&nbsp;Stack&nbsp;Engineer",
            "Software&nbsp;Developer",
            "Web&nbsp;Developer",
            "Mobile&nbsp;Developer",
            "Problem&nbsp;Solver",
            "Creative&nbsp;Thinker",
            "Tech&nbsp;Enthusiast",
          ],
          typeSpeed: 70,
          backSpeed: 50,
          loop: true,
        });
      } else if (isIdeMode && ideTypedRef.current) {
        ideTypedInstance.current = new Typed(ideTypedRef.current, {
          strings: [
            `<span style="color: var(--text-comment);">// Welcome to my portfolio</span><br/>
  <span style="color: var(--text-keyword);">const</span> <span style="color: var(--text-variable);">name</span> <span style="color: var(--text-operator);">=</span> <span style="color: var(--text-string);">"Dov Ushman"</span>;<br/>
  <span style="color: var(--text-keyword);">function</span> <span style="color: var(--text-function);">introduce</span>() {<br/>
  &nbsp;&nbsp;<span style="color: var(--text-keyword);">return</span> <span style="color: var(--text-string);">"Hi, I'm Dov, a Full Stack Engineer passionate about creating impactful software."</span>;<br/>
  }`,
          ],
          typeSpeed: 30,
          backSpeed: 15,
          showCursor: true,
          cursorChar: "|",
          loop: false,
        });
      }
    }

    return () => {
      typedInstance.current?.destroy();
      ideTypedInstance.current?.destroy();
    };
  }, [isIdeMode]);

  return (
    <section
      className="flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20 min-h-screen"
      style={{
        marginLeft: "-32px",
        marginRight: "-32px",
        marginBottom: "-32px",
        width: "calc(100% + 64px)", // Ensures the section extends to cover the entire width including the margins
        background: "linear-gradient(to right, var(--hero-gradient-start), var(--hero-gradient-end))",
        backgroundSize: "cover",
        fontFamily: isIdeMode ? "'Fira Code', monospace" : "inherit",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image - Adjusted sizing for better mobile display */}
        <div className="md:flex-1 order-1 md:order-1 mb-6 md:mb-0">
          <div className="relative mx-auto w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <Image
              src="/static/images/profilePic2.jpeg"
              alt="Dov"
              fill
              className="rounded-full shadow-lg object-cover"
              style={{
                objectPosition: "0% 10%",
              }}
              sizes="(max-width: 640px) 208px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
              priority
            />
          </div>
        </div>

        {/* Text Section - Better spacing and responsive sizing */}
        <div className="md:flex-1 order-2 md:order-2 text-center md:text-left">
          {isIdeMode ? (
            <div className="w-full max-w-4xl mx-auto">
              <pre
                style={{
                  color: "var(--text-comment)",
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                  minHeight: "300px",
                  overflow: "hidden",
                  marginBottom: "1rem",
                  fontFamily: "'Fira Code', monospace",
                  backgroundColor: "var(--background-color)",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  width: "100%",
                  minWidth: "350px",
                  maxWidth: "450px",
                  margin: "0 auto",
                  textAlign: "left",
                }}
              >
                <span ref={ideTypedRef} />
              </pre>
            </div>
          ) : (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
                Hi, I&apos;m Dov,{" "}
                <span className="inline sm:block md:inline">
                  a{" "}
                  <span
                    className="text-accent-color whitespace-nowrap w-full sm:w-auto min-h-[1.5em] typewriter-container"
                  >
                    <span ref={typedRef} />
                  </span>
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg mt-3 md:mt-4 max-w-lg mx-auto md:mx-0">
                I&apos;m passionate about creating impactful software that changes the
                world. I specialize in building scalable, user-focused applications.
              </p>
            </>
          )}

          {/* Call to Action - Improved button sizing and spacing */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center md:justify-start">
<button
  onClick={() => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="px-3 py-2 md:px-5 md:py-2.5 text-sm font-medium rounded-md transition-transform hover:scale-105 w-44 sm:w-auto mx-auto sm:mx-0"
  style={{
    backgroundColor: isIdeMode ? "#1e1e1e" : "var(--button-background)",
    color: isIdeMode ? "#00ff88" : "var(--button-text-color)",
    fontFamily: isIdeMode ? "'Fira Code', monospace" : "inherit",
    border: isIdeMode ? "1px solid #333" : "none",
    boxShadow: isIdeMode ? "0 0 8px rgba(0, 255, 136, 0.4)" : "none",
  }}
>
  {isIdeMode ? "> View My Work" : "View My Work"}
</button>

<button
  onClick={() => {
    window.open(
      "/static/images/Dov Ushman Resume.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  }}
  className="px-3 py-2 md:px-5 md:py-2.5 text-sm font-medium rounded-md transition-transform hover:scale-105 w-44 sm:w-auto mx-auto sm:mx-0"
  style={{
    backgroundColor: isIdeMode ? "#1e1e1e" : "transparent",
    color: isIdeMode ? "#00bfff" : "var(--button-background)",
    fontFamily: isIdeMode ? "'Fira Code', monospace" : "inherit",
    border: isIdeMode ? "1px solid #333" : "2px solid var(--button-background)",
    boxShadow: isIdeMode ? "0 0 8px rgba(0, 191, 255, 0.4)" : "none",
  }}
>
  {isIdeMode ? "> View Resume" : "View Resume"}
</button>

          </div>
        </div>
      </div>
    </section>
  );
}





// "use client";

// import { useTheme } from "../ThemeContext";
// import Image from "next/image";
// import { useEffect, useRef } from "react";
// import Typed from "typed.js";

// export default function Hero() {
//   const { theme } = useTheme();
//   const isIdeMode = theme === "ide";
//   const typedRef = useRef(null);
//   const ideTypedRef = useRef(null);
//   const typedInstance = useRef(null);
//   const ideTypedInstance = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if (!isIdeMode && typedRef.current) {
//         typedInstance.current = new Typed(typedRef.current, {
//           strings: [
//             "Full&nbsp;Stack&nbsp;Engineer",
//             "Software&nbsp;Developer",
//             "Web&nbsp;Developer",
//             "Mobile&nbsp;Developer",
//             "Problem&nbsp;Solver",
//             "Creative&nbsp;Thinker",
//             "Tech&nbsp;Enthusiast",
//           ],
//           typeSpeed: 70,
//           backSpeed: 50,
//           loop: true,
//         });
//       } else if (isIdeMode && ideTypedRef.current) {
//         ideTypedInstance.current = new Typed(ideTypedRef.current, {
//           strings: [
//             `<div class="ide-line"><span class="line-number">1</span><span style="color: var(--text-comment);">// Welcome to my portfolio</span></div>
// <div class="ide-line"><span class="line-number">2</span><span style="color: var(--text-keyword);">const</span> <span style="color: var(--text-variable);">name</span> <span style="color: var(--text-operator)">=</span> <span style="color: var(--text-string)">"Dov Ushman"</span>;</div>
// <div class="ide-line"><span class="line-number">3</span><span style="color: var(--text-keyword);">function</span> <span style="color: var(--text-function);">introduce</span>() {</div>
// <div class="ide-line"><span class="line-number">4</span>  <span style="color: var(--text-keyword);">return</span> <span style="color: var(--text-string)">"Hi, I'm Dov, a Full Stack Engineer passionate about creating impactful software."</span>;</div>
// <div class="ide-line"><span class="line-number">5</span>}</div>
// <div class="ide-line"><span class="line-number">6</span></div>
// <div class="ide-line"><span class="line-number">7</span><span style="color: var(--text-keyword);">const</span> <span style="color: var(--text-variable);">skills</span> <span style="color: var(--text-operator)">=</span> [</div>
// <div class="ide-line"><span class="line-number">8</span>  <span style="color: var(--text-string)">"React"</span>,</div>
// <div class="ide-line"><span class="line-number">9</span>  <span style="color: var(--text-string)">"Node.js"</span>,</div>
// <div class="ide-line"><span class="line-number">10</span>  <span style="color: var(--text-string)">"TypeScript"</span>,</div>
// <div class="ide-line"><span class="line-number">11</span>  <span style="color: var(--text-string)">"NextJS"</span></div>
// <div class="ide-line"><span class="line-number">12</span>];</div>
// <div class="ide-line"><span class="line-number">13</span></div>
// <div class="ide-line"><span class="line-number">14</span><span style="color: var(--text-comment);">// Let's connect!</span></div>
// <div class="ide-line"><span class="line-number">15</span><span style="color: var(--text-keyword);">function</span> <span style="color: var(--text-function);">findMe</span>() {</div>
// <div class="ide-line"><span class="line-number">16</span>  <span style="color: var(--text-keyword);">return</span> {</div>
// <div class="ide-line"><span class="line-number">17</span>    <span style="color: var(--text-variable);">github</span>: <span style="color: var(--text-string)">"github.com/dovushman"</span>,</div>
// <div class="ide-line"><span class="line-number">18</span>    <span style="color: var(--text-variable);">website</span>: <span style="color: var(--text-string)">"dovushman.com"</span></div>
// <div class="ide-line"><span class="line-number">19</span>  };</div>
// <div class="ide-line"><span class="line-number">20</span>}</div>`,
//           ],
//           typeSpeed: 15,
//           backSpeed: 0,
//           showCursor: true,
//           cursorChar: "▋",
//           loop: false,
//         });
//       }
//     }

//     return () => {
//       typedInstance.current?.destroy();
//       ideTypedInstance.current?.destroy();
//     };
//   }, [isIdeMode]);

//   return (
//     <section
//       className="flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20 min-h-screen"
//       style={{
//         marginLeft: "-32px",
//         marginRight: "-32px",
//         marginBottom: "-32px",
//         width: "calc(100% + 64px)",
//         background: isIdeMode 
//           ? "var(--background-color)" 
//           : "linear-gradient(to right, var(--hero-gradient-start), var(--hero-gradient-end))",
//         backgroundSize: "cover",
//         fontFamily: isIdeMode ? "'Fira Code', monospace" : "inherit",
//         overflow: "hidden",
//         boxSizing: "border-box",
//       }}
//     >
//       <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
//         {/* Image - Adjusted sizing for better mobile display */}
//         <div className={`md:flex-1 order-1 md:order-1 mb-6 md:mb-0 ${isIdeMode ? 'hidden md:block' : ''}`}>
//           <div className="relative mx-auto w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
//             <Image
//               src="/static/images/profilePic2.jpeg"
//               alt="Dov"
//               fill
//               className="rounded-full shadow-lg object-cover"
//               style={{
//                 objectPosition: "0% 10%",
//               }}
//               sizes="(max-width: 640px) 208px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
//               priority
//             />
//           </div>
//         </div>

//         {/* Text Section - Better spacing and responsive sizing */}
//         <div className={`md:flex-1 order-2 md:order-2 text-center md:text-left ${isIdeMode ? 'w-full' : ''}`}>
//           {isIdeMode ? (
//             <div className="w-full max-w-4xl mx-auto ide-container">
//               {/* IDE window header */}
//               <div className="ide-header">
//                 <div className="ide-tab-active">
//                   <span className="ide-file-icon"><i className="fas fa-file-code"></i></span>
//                   <span className="ide-file-name">DovUshman.js</span>
//                 </div>
//                 <div className="ide-tab">
//                   <span className="ide-file-icon"><i className="fas fa-file-code"></i></span>
//                   <span className="ide-file-name">Portfolio.jsx</span>
//                 </div>
//                 <div className="ide-window-controls">
//                   <span className="ide-window-control ide-minimize"></span>
//                   <span className="ide-window-control ide-maximize"></span>
//                   <span className="ide-window-control ide-close"></span>
//                 </div>
//               </div>
              
//               {/* Explorer sidebar */}
//               <div className="ide-content">
//                 <div className="ide-sidebar">
//                   <div className="ide-sidebar-section">
//                     <div className="ide-sidebar-header">
//                       <span className="ide-sidebar-icon"><i className="fas fa-chevron-down"></i></span>
//                       <span>EXPLORER</span>
//                     </div>
//                     <div className="ide-sidebar-item active">
//                       <span className="ide-sidebar-icon"><i className="fas fa-folder-open"></i></span>
//                       <span>portfolio-project</span>
//                     </div>
//                     <div className="ide-sidebar-subitem">
//                       <span className="ide-sidebar-icon"><i className="fas fa-folder"></i></span>
//                       <span>src</span>
//                     </div>
//                     <div className="ide-sidebar-subitem active">
//                       <span className="ide-sidebar-icon"><i className="fas fa-folder-open"></i></span>
//                       <span>components</span>
//                     </div>
//                     <div className="ide-sidebar-subsubitem active">
//                       <span className="ide-sidebar-icon"><i className="fab fa-js-square" style={{color: "#f0db4f"}}></i></span>
//                       <span>DovUshman.js</span>
//                     </div>
//                     <div className="ide-sidebar-subsubitem">
//                       <span className="ide-sidebar-icon"><i className="fab fa-react" style={{color: "#61dafb"}}></i></span>
//                       <span>Portfolio.jsx</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Main code area */}
//                 <div className="ide-editor">
//                   <pre
//                     className="ide-code-area"
//                   >
//                     <span ref={ideTypedRef} />
//                   </pre>
//                 </div>
//               </div>
              
//               {/* Status bar */}
//               <div className="ide-status-bar">
//                 <div className="ide-status-left">
//                   <span className="ide-status-item"><i className="fab fa-git-alt"></i> main</span>
//                   <span className="ide-status-item"><i className="fas fa-code-branch"></i> 0 ⟳ 0 <i className="fas fa-arrow-down"></i> 0 <i className="fas fa-arrow-up"></i></span>
//                 </div>
//                 <div className="ide-status-right">
//                   <span className="ide-status-item">JavaScript</span>
//                   <span className="ide-status-item">UTF-8</span>
//                   <span className="ide-status-item">LF</span>
//                   <span className="ide-status-item">Ln 20, Col 1</span>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <>
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
//                 Hi, I&apos;m Dov,{" "}
//                 <span className="inline sm:block md:inline">
//                   a{" "}
//                   <span
//                     className="text-accent-color whitespace-nowrap w-full sm:w-auto min-h-[1.5em] typewriter-container"
//                   >
//                     <span ref={typedRef} />
//                   </span>
//                 </span>
//               </h1>
//               <p className="text-sm sm:text-base md:text-lg mt-3 md:mt-4 max-w-lg mx-auto md:mx-0">
//                 I&apos;m passionate about creating impactful software that changes the
//                 world. I specialize in building scalable, user-focused applications.
//               </p>
//             </>
//           )}

//           {/* Call to Action - Improved button sizing and spacing */}
//           <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center ${isIdeMode ? 'md:justify-center' : 'md:justify-start'}`}>
//             <button
//               className="px-3 py-2 md:px-5 md:py-2.5 text-sm font-medium rounded-md transition-transform hover:scale-105 w-44 sm:w-auto mx-auto sm:mx-0"
//               style={{
//                 backgroundColor: isIdeMode ? "#1e1e1e" : "var(--button-background)",
//                 color: isIdeMode ? "#00ff88" : "var(--button-text-color)",
//                 fontFamily: isIdeMode ? "'Fira Code', monospace" : "inherit",
//                 border: isIdeMode ? "1px solid #333" : "none",
//                 boxShadow: isIdeMode ? "0 0 8px rgba(0, 255, 136, 0.4)" : "none",
//               }}
//             >
//               {isIdeMode ? "> View My Work" : "View My Work"}
//             </button>

//             <button
//               onClick={() => {
//                 window.open(
//                   "/static/images/Dov Ushman Resume.pdf",
//                   "_blank",
//                   "noopener,noreferrer"
//                 );
//               }}
//               className="px-3 py-2 md:px-5 md:py-2.5 text-sm font-medium rounded-md transition-transform hover:scale-105 w-44 sm:w-auto mx-auto sm:mx-0"
//               style={{
//                 backgroundColor: isIdeMode ? "#1e1e1e" : "transparent",
//                 color: isIdeMode ? "#00bfff" : "var(--button-background)",
//                 fontFamily: isIdeMode ? "'Fira Code', monospace" : "inherit",
//                 border: isIdeMode ? "1px solid #333" : "2px solid var(--button-background)",
//                 boxShadow: isIdeMode ? "0 0 8px rgba(0, 191, 255, 0.4)" : "none",
//               }}
//             >
//               {isIdeMode ? "> View Resume" : "View Resume"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
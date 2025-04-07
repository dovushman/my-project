"use client";

import { useTheme } from "../ThemeContext"; // Import the useTheme hook
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Typed } from "react-typed"; // Ensure you are importing the correct Typed library

export default function Hero() {
  const { theme } = useTheme(); // Access the current theme from context
  const isIdeMode = theme === "ide"; // Determine if the current theme is IDE mode
  const typedRef = useRef<HTMLSpanElement>(null); // Ref for the typewriter element
  const ideTypedRef = useRef<HTMLSpanElement>(null); // Ref for the IDE mode typewriter
  let typedInstance: Typed | null = null; // Store the Typed instance
  let ideTypedInstance: Typed | null = null; // Store the IDE mode Typed instance

  useEffect(() => {
    if (!isIdeMode && typedRef.current) {
      // Initialize Typed.js for non-IDE mode
      typedInstance = new Typed(typedRef.current, {
        strings: [
          "Full Stack Engineer",
          "Software Developer",
          "Web Developer",
          "Mobile Developer",
          "Problem Solver",
          "Creative Thinker",
          "Tech Enthusiast",
        ],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
      });
    } else if (isIdeMode && ideTypedRef.current) {
      // Initialize Typed.js for IDE mode
      ideTypedInstance = new Typed(ideTypedRef.current, {
        strings: [
          `<span style="color: var(--text-comment); line-height: 1.2;">{"// Welcome to my portfolio"}</span><br/>
  <span style="color: var(--text-keyword); line-height: 1.2;">const</span> <span style="color: var(--text-variable); line-height: 1.2;">name</span> <span style="color: var(--text-operator); line-height: 1.2;">=</span> <span style="color: var(--text-string); line-height: 1.2;">&quot;Dov Ushman&quot;</span>;<br/>
  <span style="color: var(--text-keyword); line-height: 1.2;">function</span> <span style="color: var(--text-function); line-height: 1.2;">introduce</span>() {<br/>
  &nbsp;&nbsp;<span style="color: var(--text-keyword); line-height: 1.2;">return</span> <span style="color: var(--text-string); line-height: 1.2;">&quot;Hi, I&apos;m Dov, a Full Stack Engineer passionate about creating impactful software.&quot;</span>;<br/>
  }`,
        ],
        typeSpeed: 30, // Faster typing speed for IDE mode
        backSpeed: 15,
        showCursor: true,
        cursorChar: "|",
        loop: false,
      });
    }

    return () => {
      // Destroy the Typed instances on cleanup
      if (typedInstance) {
        typedInstance.destroy();
        typedInstance = null;
      }
      if (ideTypedInstance) {
        ideTypedInstance.destroy();
        ideTypedInstance = null;
      }
    };
  }, [isIdeMode]); // Re-run effect when `isIdeMode` changes

  return (
    <section
      className="flex items-center justify-between h-screen px-10 section"
      style={{
        background: "linear-gradient(to right, var(--hero-gradient-start), var(--hero-gradient-end))",
        fontFamily: isIdeMode ? "'Fira Code', monospace" : "inherit", // Monospaced font for IDE mode
      }}
    >
      {/* Image or Graphic */}
      <div className="flex-1">
        <Image
          src="/images/profilePic2.jpeg"
          alt="Dov"
          width={320}
          height={320}
          className="rounded-full shadow-lg object-cover mx-auto"
          style={{
            width: "320px", // Ensure width and height are explicitly set
            height: "320px",
            borderRadius: "50%", // Force circular shape
            objectFit: "cover", // Ensure the image fills the circle
            objectPosition: "0% 30%", // Shift the image to the left (horizontal vertical)
            transform: "scale(1.2)", // No zoom applied
          }}
        />
      </div>

      {/* Text Section */}
      <div className="flex-1">
        {isIdeMode ? (
          // IDE-like mode
          <div className="w-full max-w-4xl mx-auto">
            <pre
              style={{
                color: "var(--text-comment)",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              }}
            >
              <span ref={ideTypedRef} />
            </pre>
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-bold">
              Hi, I&apos;m Dov, a{" "}
              <span className="text-accent-color">
                <span ref={typedRef} />
              </span>
            </h1>
            <p className="text-lg mt-4 max-w-lg">
              I&apos;m passionate about creating impactful software that changes the world. I specialize in building scalable, user-focused applications.
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
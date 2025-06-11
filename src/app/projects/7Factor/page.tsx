"use client";

import Image from "next/image";
import { useTheme } from "../../ThemeContext";
import SidePanel from "../../components/SidePanel";
import { useEffect, useState } from "react";

export default function SevenFactorProjectPage() {
    const { theme } = useTheme();
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size to determine if it's mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024); // Adjust breakpoint as needed
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const sections = [
        { id: "intro", title: "Introduction" },
        { id: "features", title: "Key Features" },
        { id: "overview", title: "Overview" },
        { id: "why", title: "Why I Built This" },
        { id: "tech-stack", title: "Tech Stack" },
        { id: "screenshots", title: "Screenshots" },
    ];

    return (
        <div
            className={`flex min-h-screen`}
            style={{
                backgroundColor: theme === "dark" ? "var(--dark-background)" : "var(--light-background)",
                color: theme === "dark" ? "var(--dark-text-color)" : "var(--light-text-color)",
            }}
        >
            {/* Conditionally render SidePanel only on larger screens */}
            {!isMobile && <SidePanel sections={sections} theme={theme as "dark" | "light"} />}

            {/* Main Content */}
            <div
                className={`flex-1 max-w-5xl mx-auto px-4 py-12`}
                style={{
                    backgroundColor: "var(--background-color)",
                    color: "var(--text-color)",
                }}
            >
                {/* Hero Section */}
                <section id="intro" className="py-16 text-center">
                    <h1 className="text-4xl font-bold mb-2">7Factor AWS Analysis</h1>
                    <p
                        className="text-lg mb-6"
                        style={{ color: "var(--secondary-text-color)" }}
                    >
                        A full-stack web application designed to analyze AWS usage and recommend measures to lower AWS costs.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://digital.wpi.edu/concern/student_works/x633f550j?locale=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-md shadow-md hover:bg-opacity-90 transition duration-300 font-semibold"
                            style={{
                                backgroundColor: "var(--button-background)",
                                color: "var(--button-text-color)",
                            }}
                        >
                            <span className="font-semibold">Learn More</span>
                        </a>
                    </div>
                </section>

                {/* Key Features */}
                <section id="features" className="py-12">
                    <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
                    <ul className="space-y-6" style={{ color: "var(--text-color)" }}>
                        <li className="flex items-start gap-4">
                            <div>
                                <strong className="font-semibold">Cost Optimization:</strong> Analyzes AWS EC2 instances to provide recommendations to reduce cloud spending
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div>
                                <strong className="font-semibold">Custom Tools:</strong> Developed internal tools for 7Factor to improve storage efficiency
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div>
                                <strong className="font-semibold">Modern Tech Stack:</strong> Built with a Python backend and React frontend for responsive performance and scalability
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Overview */}
                <section id="overview" className="py-12">
                    <h2 className="text-3xl font-semibold mb-6">Overview</h2>
                    <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
                        AWS cost management can be a major challenge for businesses. This tool was designed to offer a straightforward yet effective solution for analyzing AWS usage and identifying cost-saving opportunities. Our MQP team at WPI was tasked with modernizing and expanding upon an existing internal tool created by the prior year&apros;s MQP project. We transitioned the project to a modern tech stack, maintained the core functionality, improved performance and completely redesigned the frontend for a more intuitive user experience.
                    </p>
                </section>

                {/* Why I Built This */}
                <section id="why" className="py-12">
                    <h2 className="text-3xl font-semibold mb-6">Why I Built This</h2>
                    <p className="text-lg leading-relaxed" style={{ color: "var(--text-color)" }}>
                        AWS cost management can be a major challenge for businesses and costs thousands of dollars. This tool was designed to offer a straightforward yet effective solution for analyzing AWS usage and identifying cost-saving opportunities. Our MQP team at WPI was tasked with modernizing and expanding upon an existing internal tool created by the prior year&apos;s MQP project. We transitioned the project to a modern tech stack, maintained the core functionality, improved performance and completely redesigned the frontend for a more intuitive user experience.
                    </p>
                </section>

                {/* Tech Stack */}
                <section id="tech-stack" className="py-12">
                    <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center" style={{ color: "var(--text-color)" }}>
                        {[
                            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
                            { name: "Axios", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" },
                            { name: "Chart.js", icon: "https://www.chartjs.org/img/chartjs-logo.svg" },
                            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
                            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                        ].map((tech, index) => (
                            <li key={index} className="flex flex-col items-center gap-2">
                                <Image src={tech.icon} alt={tech.name} width={50} height={50} className="inline-block" />
                                <span className="text-sm font-medium">{tech.name}</span>
                            </li>
                        ))}
                    </ul>
                </section>


                {/* Screenshots */}
                <section id="screenshots" className="py-12">
                    <h2 className="text-3xl font-semibold mb-6">Screenshots</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                        <div className="shadow-md rounded-lg overflow-hidden">
                            <Image
                                src="/static/images/7Factor/AWSAnalysisMQPPoster.png"
                                alt="7Factor Report"
                                width={100000}
                                height={100000}
                                className="h-auto object-cover"
                            />
                        </div>
                    </div>
                    <br></br>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="shadow-md rounded-lg overflow-hidden">
                            <Image
                                src="/static/images/7Factor/7FactorHomePage.jpg"
                                alt="7Factor Report"
                                width={100000}
                                height={100000}
                                className="h-auto object-cover"
                            />
                        </div>
                        <div className="shadow-md rounded-lg overflow-hidden">
                            <Image
                                src="/static/images/7Factor/CpuUtil.jpg"
                                alt="7Factor Report"
                                width={100000}
                                height={100000}
                                className="h-auto object-cover"
                            />
                        </div>
                        {/* Add more screenshots here */}
                    </div>
                </section>

                {/* Back Link */}
                <div className="text-center py-8">
                    <button
                        onClick={() => {
                            const section = document.getElementById("projects");
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" });
                            } else {
                                window.location.href = "/?section=projects&selected=1"; // 1 stands for 7 factor project
                            }
                        }}
                        className="inline-block px-8 py-3 rounded-md shadow-md hover:bg-opacity-90 transition duration-300 font-semibold"
                        style={{
                            backgroundColor: "var(--button-background)",
                            color: "var(--button-text-color)",
                        }}
                    >
                        ← Back to Projects
                    </button>
                </div>
            </div>
        </div>
    );
}
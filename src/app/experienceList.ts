export type Experience = {
  id: number;
  company: string;
  role: string;
  type: "Startup" | "Internship";
  location: string;
  dates: string;
  summary: string;
  highlights: string[];
  skills?: string[];
  url?: string;
};

export const experienceList: Experience[] = [
  {
    id: 0,
    company: "TurboTune",
    role: "Lead Software Engineer",
    type: "Startup",
    location: "Remote",
    dates: "Jun 2025 - Present",
    url: "https://tryturbotune.com",
    summary: "AI-powered automotive image enhancement platform for auto dealers.",
    highlights: [
      "Architected AWS (S3, RDS) with presigned URL flows to securely intake dealer photo uploads.",
      "Integrated fal.ai image enhancement into a scalable pipeline for user-submitted photos.",
      "Built full-stack workflows (React, Node.js, TypeScript) for uploads, previews, usage tracking, and galleries.",
    ],
    skills: ["AWS (S3/RDS)", "React", "Node.js", "TypeScript", "fal.ai"],
  },
  {
    id: 1,
    company: "New Blue Interactive",
    role: "Software Intern",
    type: "Internship",
    location: "Remote",
    dates: "Jun 2022 - Aug 2022 & Jun 2023 - Aug 2023",
    summary: "Digital marketing agency focused on fundraising and engagement campaigns.",
    highlights: [
      "Built Python dashboards to visualize live fundraising totals and campaign performance.",
      "Developed dynamic marketing emails (HTML/CSS/JS) sent to 10,000+ recipients.",
      "Improved targeting and engagement, contributing to ~12% CTR lift and ~15% higher open rates.",
    ],
    skills: ["Python", "HTML/CSS/JS", "Email automation", "Data dashboards"],
  },
  {
    id: 2,
    company: "Technical Computer Solutions",
    role: "Intern",
    type: "Internship",
    location: "Holden, MA",
    dates: "Jun 2021 - Aug 2021",
    summary: "Local IT services provider supporting client hardware and software needs.",
    highlights: [
      "Performed hardware upgrades and software installs to keep client systems performant.",
      "Communicated setup plans and delivered fully operational machines on deadline.",
    ],
    skills: ["PC setup", "Client support", "Networking basics"],
  },
];

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
      "Designed AWS infrastructure (S3, RDS) with secure presigned-URL workflows for image uploads.",
      "Integrated fal.ai image enhancement APIs into a scalable backend pipeline for processing user-uploaded photos.",
      "Built full-stack features using React, Node.js, Typescript for upload workflows, previews, usage tracking and galleries.",
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
      "Utilized Python to develop dashboards displaying live campaign funds raised and to track marketing performance.",
      "Created dynamic marketing emails using HTML, CSS, and JavaScript which were sent to 10,000+ recipients.",
      "Improved email targeting and engagement, contributing to ~12% increase in click through rate and ~15% in open rates.",
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
      "Executed hardware adjustments and software installations to ensure optimal performance and functionality of client systems.",
      "Enhanced client satisfaction through effective communication and timely delivery of fully operational setups.",
    ],
    skills: ["PC setup", "Client support", "Networking basics"],
  },
];

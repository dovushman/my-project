import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./ThemeContext"; // Import ThemeProvider
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dov Ushman | Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Dov Ushman | Portfolio",
  },
  keywords: [
    "Dov Ushman",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Full Stack Developer",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "CSS",
    "HTML",
    "Web Design",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "UI Development",
    "UX Development",
    "User Interface",
    "User Experience",
    "Responsive Web Design",
    "Mobile First Design",
    "Progressive Enhancement",
    "Progressive Web Apps",
    "Single Page Applications",
    "Server-Side Rendering",
    "Static Site Generation",
    "Client-Side Rendering",
    "JavaScript Frameworks",
    "JavaScript Libraries",
    "React.js",
    "Mobile Development",
    "Cross-Platform Development",
    "Agile Development",
    "Git",
    "GitHub",
    "Version Control",
    "API Development",
    "REST",
    "Database",
    "SQL",
    "NoSQL",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "Cloud Computing",
    "AWS",
    "Docker",
  ],
  authors: [
    {
      name: "Dov Ushman",
    },
  ],
  creator: "Dov Ushman",
  publisher: "Dov Ushman",
  applicationName: "Dov Ushman Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    noarchive: false,
    notranslate: false,
  },
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  description: "A personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
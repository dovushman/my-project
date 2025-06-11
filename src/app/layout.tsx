import { Suspense } from "react";
import ClientSideHeader from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./ThemeContext"; 
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"; 
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Dov Ushman | Portfolio",
  icons: {
    icon: "/static/images/favicon.ico",
    shortcut: "/static/images/favicon.ico",
    apple: "/static/images/favicon.ico",
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
  ],
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
        <link rel="icon" href="/static/images/favicon.ico" />
        {/* Inline script to set theme before React loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || theme === 'dark' || theme === 'ide') {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Suspense fallback={<div className="h-14 bg-gray-100 dark:bg-gray-800 shadow-md"></div>}>
            <ClientSideHeader />
          </Suspense>
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
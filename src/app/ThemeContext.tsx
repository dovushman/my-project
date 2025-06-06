"use client";

import { createContext, useContext, useState, useEffect, useLayoutEffect, ReactNode } from "react";

type Theme = "dark" | "light" | "ide";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    let initial: Theme = "dark";
    if (typeof document !== "undefined") {
      const attr = document.documentElement.getAttribute("data-theme");
      if (attr === "light" || attr === "dark" || attr === "ide") initial = attr;
      else {
        const stored = localStorage.getItem("theme");
        if (stored === "light" || stored === "dark" || stored === "ide") initial = stored;
      }
    }
    setThemeState(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => setThemeState(newTheme);

  if (!mounted) {
    // Optionally, render a blank div or a skeleton header here
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
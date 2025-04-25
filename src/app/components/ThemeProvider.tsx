"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "portfolio-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // Load saved theme on initial render
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(storageKey);
      if (
        savedTheme === "light" ||
        savedTheme === "dark" ||
        savedTheme === "system"
      ) {
        setTheme(savedTheme);
      }
    } catch (e) {
      console.error("Error accessing localStorage:", e);
    }
  }, [storageKey]);

  // Apply the theme class to the document element
  useEffect(() => {
    const root = document.documentElement;
    const prevTheme = root.classList.contains("dark") ? "dark" : "light";

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.remove(prevTheme);
      root.classList.add(systemTheme);
    } else {
      root.classList.remove(prevTheme);
      root.classList.add(theme);
    }

    // Save to localStorage
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (e) {
        console.error("Error saving to localStorage:", e);
      }
    }
  }, [theme, storageKey]);

  // Create context value
  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

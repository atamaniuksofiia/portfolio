"use client";

import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme(); // Використовуємо useTheme для доступу до теми

  // Функція для перемикання між темами
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light"); // Якщо зараз темна тема, перемикаємо на світлу
    } else if (theme === "light") {
      setTheme("dark"); // Якщо зараз світла тема, перемикаємо на темну
    } else {
      setTheme("system"); // Якщо "system", перемикаємо на системну тему (автоматичну)
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" /> // Іконка для темної теми
      ) : (
        <Moon className="h-5 w-5" /> // Іконка для світлої теми
      )}
    </button>
  );
}

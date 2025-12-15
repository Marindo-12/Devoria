import { useEffect, useState } from "react";

export function useColorScheme() {

  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;

  
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}

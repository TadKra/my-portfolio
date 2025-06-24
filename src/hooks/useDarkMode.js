import { useEffect, useState } from "react";

export default function useDarkMode() {
  // výchozí stav: podle localStorage nebo preferencí systému
  const [enabled, setEnabled] = useState(() =>
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", enabled);     // Tailwind přepne styly
    localStorage.theme = enabled ? "dark" : "light";
  }, [enabled]);

  return [enabled, setEnabled];
}


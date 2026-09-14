"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => { setTheme(document.documentElement.dataset.theme || "dark"); }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try { localStorage.setItem("detali-theme", next); } catch { /* The switch also works without storage. */ }
  }

  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === "dark" ? "Включить светлую тему" : "Включить тёмную тему"} aria-pressed={theme === "light"}>
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></svg>
    <span>{theme === "dark" ? "Светлая" : "Тёмная"}</span>
  </button>;
}

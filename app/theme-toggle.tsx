"use client";

export default function ThemeToggle() {
  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("detali-theme", next); } catch { /* Theme changes also work without storage. */ }
  }

  return <button className="theme-toggle" type="button" onClick={toggleTheme} title="Переключить цветовую тему сайта">
    <svg className="theme-icon-sun" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
    </svg>
    <svg className="theme-icon-moon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
    </svg>
    <span className="theme-toggle-label theme-label-light">Светлая<span> тема</span></span>
    <span className="theme-toggle-label theme-label-dark">Тёмная<span> тема</span></span>
  </button>;
}

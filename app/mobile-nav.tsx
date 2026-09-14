"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { label: "Обучение", href: "#programs" },
  { label: "Как учим", href: "#method" },
  { label: "О школе", href: "#people" },
  { label: "Контакты", href: "#locations" },
  { label: "Бесплатное занятие", href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open]);

  return (
    <div
      className={`mobile-nav${open ? " is-open" : ""}`}
      ref={rootRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={toggleRef}
        className="mobile-nav-toggle"
        type="button"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <div id="mobile-menu" role="navigation" aria-label="Мобильная навигация" hidden={!open}>
        {items.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

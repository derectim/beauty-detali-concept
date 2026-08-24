"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { index: "01", label: "Профессии", href: "#programs" },
  { index: "02", label: "Метод", href: "#method" },
  { index: "03", label: "Люди", href: "#people" },
  { index: "04", label: "Адреса", href: "#locations" },
  { index: "→", label: "Записаться", href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
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
    <div className={`mobile-nav${open ? " is-open" : ""}`} ref={rootRef}>
      <button
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
            <b>{item.index}</b>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

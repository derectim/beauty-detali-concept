"use client";

import { useEffect, useRef, useState } from "react";
import { navigation, pagePath, school } from "./site-config";

const items = [
  ...navigation,
  { label: "Бесплатное занятие", href: pagePath("/#contact") },
];

export default function MobileNav({ directions }: { directions: { title: string; path: string }[] }) {
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
        <details className="mobile-directions"><summary>Направления обучения<span className="disclosure-mark" aria-hidden="true" /></summary><div>{directions.map(direction => <a href={pagePath(direction.path)} key={direction.path} onClick={() => setOpen(false)}>{direction.title}</a>)}</div></details>
        {items.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
            <span>{item.label}</span>
          </a>
        ))}
        <a className="mobile-menu-phone" href={school.phoneHref}>{school.phone}</a>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { basePath, navigation, pagePath } from "./site-config";

export default function DesktopNav({ directions }: { directions: { title: string; detail: string; path: string }[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname()?.replace(basePath, "").replace(/\/$/, "") || "/";

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => { if (!rootRef.current?.contains(event.target as Node)) setOpen(false); };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); buttonRef.current?.focus(); } };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => { document.removeEventListener("pointerdown", closeOutside); document.removeEventListener("keydown", closeOnEscape); };
  }, [open]);

  return <nav className="desktop-navigation" aria-label="Основная навигация" ref={rootRef} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <div className="catalog-nav-entry"><a href={pagePath("/vse-kursy")} aria-current={pathname === "/vse-kursy" ? "page" : undefined}>Обучение</a><button ref={buttonRef} type="button" className="catalog-nav-toggle" aria-label={open ? "Закрыть направления обучения" : "Открыть направления обучения"} aria-controls="desktop-courses" aria-expanded={open} onClick={() => setOpen(value => !value)}><svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" aria-hidden="true"><path d="m5 8 5 5 5-5" /></svg></button></div>
    {navigation.slice(1).map(item => <a key={item.href} href={item.href} aria-current={pathname === item.href.replace(basePath, "").replace(/\/$/, "") ? "page" : undefined}>{item.label}</a>)}
    <div id="desktop-courses" className="desktop-courses-panel" hidden={!open}><div className="menu-catalog-intro"><span className="eyebrow">ОБУЧЕНИЕ В DETALI</span><p>Выберите направление</p><a className="text-link" href={pagePath("/vse-kursy")}>Весь каталог курсов</a></div><div className="menu-direction-links">{directions.map(direction => <a key={direction.path} href={pagePath(direction.path)} aria-current={pathname === direction.path ? "page" : undefined}><span>{direction.title}</span><small>{direction.detail}</small></a>)}</div></div>
  </nav>;
}

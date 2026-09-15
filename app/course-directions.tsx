"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { assetPath, pagePath } from "./site-config";

export type Direction = {
  title: string;
  detail: string;
  path: string;
  image: string;
  alt: string;
  position?: string;
};

const canHover = () => window.matchMedia("(min-width: 821px) and (hover: hover) and (pointer: fine)").matches;

export default function CourseDirections({ directions }: { directions: Direction[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<number | null>(null);

  function hidePreview() {
    activeRef.current = null;
    setActiveIndex(null);
  }

  function showPreview(index: number, clientX: number, clientY: number, toLeft = false) {
    if (!canHover() || !previewRef.current) return;
    const preview = previewRef.current;
    const width = preview.offsetWidth;
    const height = preview.offsetHeight;
    let x = toLeft ? clientX - width - 24 : clientX + 24;
    if (x + width > window.innerWidth - 16) x = clientX - width - 24;
    x = Math.max(16, Math.min(x, window.innerWidth - width - 16));
    const y = Math.max(16, Math.min(clientY - height / 2, window.innerHeight - height - 16));
    preview.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    if (activeRef.current !== index) {
      activeRef.current = index;
      setActiveIndex(index);
    }
  }

  useEffect(() => {
    const hide = () => {
      activeRef.current = null;
      setActiveIndex(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") hide();
    };
    window.addEventListener("scroll", hide, true);
    window.addEventListener("resize", hide);
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", hide, true);
      window.removeEventListener("resize", hide);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return <section className="programs-section content-grid wrap section" id="programs" aria-labelledby="programs-title">
    <div className="programs-intro">
      <p className="eyebrow">КУРСЫ В BEAUTY DETALI SCHOOL</p>
      <h2 id="programs-title">Выберите<br />свою профессию.</h2>
      <p>Найдите базовую программу или обучение конкретной технике.</p>
      <a className="text-link" href={pagePath("/vse-kursy")}>Все программы обучения</a>
    </div>
    <div
      className="programs-index"
      onPointerLeave={hidePreview}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) hidePreview();
      }}
    >{directions.map((course, index) => <a
      key={course.path}
      href={pagePath(course.path)}
      onPointerEnter={(event) => showPreview(index, event.clientX, event.clientY)}
      onPointerMove={(event) => showPreview(index, event.clientX, event.clientY)}
      onFocus={(event) => {
        if (!event.currentTarget.matches(":focus-visible")) return;
        const rect = event.currentTarget.getBoundingClientRect();
        showPreview(index, rect.left, rect.top + rect.height / 2, true);
      }}
      onClick={hidePreview}
    >
      <img className="course-thumbnail" src={assetPath(`/images/direction-${course.image}-320.webp`)} width="68" height="76" loading="lazy" decoding="async" alt="" style={{ objectPosition: course.position ?? "center" }} />
      <div className="course-row-copy"><h3>{course.title}</h3><span>{course.detail}</span></div>
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
    </a>)}</div>
    <div ref={previewRef} className={`course-cursor-preview${activeIndex === null ? "" : " is-visible"}`} aria-hidden="true">
      {directions.map((course, index) => <img
        key={course.path}
        className={index === activeIndex ? "is-visible" : undefined}
        src={assetPath(`/images/direction-${course.image}-960.webp`)}
        width="960" height="1200"
        alt="" loading="lazy" decoding="async" fetchPriority="low"
        style={{ objectPosition: course.position ?? "center" }}
      />)}
    </div>
  </section>;
}

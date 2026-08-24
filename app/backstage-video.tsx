"use client";

import { useEffect, useRef } from "react";

const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export default function BackstageVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="backstage-video"
      muted
      loop
      playsInline
      preload="metadata"
      poster={assetPath("/images/classroom-practice-2025.jpg")}
      aria-label="Короткое видео пространства Beauty Detali School без звука"
    >
      <source src={assetPath("/videos/detali-backstage.mp4")} type="video/mp4" />
    </video>
  );
}

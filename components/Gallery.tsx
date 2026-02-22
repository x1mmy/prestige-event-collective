"use client";

import { useRef } from "react";
import Image from "next/image";

const GALLERY_IMAGES = [
  "/images/grid1.jpeg",
  "/images/grid2.jpeg",
  "/images/grid3.jpeg",
  "/images/grid4.jpeg",
  "/images/grid5.jpeg",
  "/images/grid6.jpeg",
  "/images/grid7.jpeg",
  "/images/grid8.jpeg",
  "/images/grid9.jpeg",
];

const HOVER_SOUND_PATH = "/sounds/hover.mp3";

export function Gallery() {
  const hoverSound = useRef<HTMLAudioElement | null>(null);

  const playHoverSound = () => {
    if (typeof window === "undefined") return;
    if (!hoverSound.current) {
      hoverSound.current = new Audio(HOVER_SOUND_PATH);
    }
    const audio = hoverSound.current;
    audio.currentTime = 0;
    audio.volume = 0.4;
    audio.play().catch(() => {});
  };

  return (
    <section id="gallery" className="gallery-section" aria-label="Gallery">
      <div className="gallery-header reveal">
        <h2>Gallery</h2>
      </div>
      <div className="photo-grid">
        {GALLERY_IMAGES.map((src, i) => (
          <div
            key={i}
            className="photo-grid-item"
            onMouseEnter={playHoverSound}
          >
            <Image
              src={src}
              alt={`Event photo ${i + 1}`}
              fill
              sizes="(max-width: 768px) 33vw, 33vw"
              className="photo-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

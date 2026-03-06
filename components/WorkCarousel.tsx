"use client";

import { useRef, useEffect, useState } from "react";

const VIDEOS = [
  "/videos/vid1.mp4",
  "/videos/vid2.mp4",
  "/videos/vid3.mp4",
  "/videos/vid4.mp4",
  "/videos/vid5.mp4",
  "/videos/vid6.mp4",
  "/videos/vid7.mp4",
  "/videos/vid8.mp4",
  "/videos/vid9.mp4",
  "/videos/vid10.mp4",
  "/videos/vid11.mp4",
  "/videos/vid12.mp4",
  "/videos/vid13.mp4",
];

export function WorkCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [useHoverPlay, setUseHoverPlay] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mqHover = window.matchMedia("(hover: hover)");
    const mqNarrow = window.matchMedia("(max-width: 768px)");
    const update = () => setUseHoverPlay(mqHover.matches && !mqNarrow.matches);
    update();
    mqHover.addEventListener("change", update);
    mqNarrow.addEventListener("change", update);
    return () => {
      mqHover.removeEventListener("change", update);
      mqNarrow.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDown.current = true;
      track.classList.add("dragging");
      startX.current = e.pageX - track.offsetLeft;
      scrollLeft.current = track.scrollLeft;
    };
    const handleMouseLeave = () => {
      isDown.current = false;
      track.classList.remove("dragging");
    };
    const handleMouseUp = () => {
      isDown.current = false;
      track.classList.remove("dragging");
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      track.scrollLeft = scrollLeft.current - walk;
    };

    track.addEventListener("mousedown", handleMouseDown);
    track.addEventListener("mouseleave", handleMouseLeave);
    track.addEventListener("mouseup", handleMouseUp);
    track.addEventListener("mousemove", handleMouseMove);
    return () => {
      track.removeEventListener("mousedown", handleMouseDown);
      track.removeEventListener("mouseleave", handleMouseLeave);
      track.removeEventListener("mouseup", handleMouseUp);
      track.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const go = (delta: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: delta, behavior: "smooth" });
  };

  const handleSlideEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = false;
      video.play().catch(() => {});
    }
  };

  const handleSlideLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.muted = true;
    }
  };

  return (
    <section id="work" className="work-section">
      <div className="work-header reveal">
        <h2>Our Work</h2>
      </div>

      <div className="carousel-container">
        <div className="carousel-track" ref={trackRef} id="workCarousel">
          {VIDEOS.map((src, i) => (
            <div
              key={i}
              className="carousel-slide"
              data-cursor-hover={useHoverPlay ? true : undefined}
              onMouseEnter={useHoverPlay ? () => handleSlideEnter(i) : undefined}
              onMouseLeave={useHoverPlay ? () => handleSlideLeave(i) : undefined}
            >
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={src}
                muted
                loop
                playsInline
                preload="metadata"
                controls
                aria-label={`Work video ${i + 1}`}
              />
              <span className="play-hint">HOVER TO PLAY</span>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-nav">
        <button
          type="button"
          className="carousel-btn"
          onClick={() => go(-340)}
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          type="button"
          className="carousel-btn"
          onClick={() => go(340)}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </section>
  );
}

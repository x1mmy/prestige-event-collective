"use client";

import { useEffect, useRef } from "react";

export function useCountUp(containerRef: React.RefObject<HTMLElement | null>) {
  const done = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || done.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const targets = entry.target.querySelectorAll<HTMLElement>("[data-count]");
          targets.forEach((el) => {
            const target = parseInt(el.getAttribute("data-count") ?? "0", 10);
            const duration = 1600;
            const step = target / (duration / 16);
            let current = 0;
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = String(Math.floor(current));
            }, 16);
          });
          done.current = true;
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [containerRef]);
}

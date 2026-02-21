"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const cursor = useRef({ x: 0, y: 0 });
  const el = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);

  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    const prefersCoarse =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    if (isTouch || prefersCoarse) {
      document.documentElement.classList.remove("using-mouse");
      return;
    }
    document.documentElement.classList.add("using-mouse");

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const hoverSelectors =
      "a, button, [data-cursor-hover], .carousel-slide, .test-card, .service-card, input, select, textarea";
    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    document.querySelectorAll(hoverSelectors).forEach((node) => {
      node.addEventListener("mouseenter", handleEnter);
      node.addEventListener("mouseleave", handleLeave);
    });

    let visibleScheduled = false;
    const scheduleVisible = () => {
      if (!visibleScheduled) {
        visibleScheduled = true;
        requestAnimationFrame(() => setVisible(true));
      }
    };

    const animate = () => {
      scheduleVisible();
      cursor.current.x += (pos.current.x - cursor.current.x) * 0.12;
      cursor.current.y += (pos.current.y - cursor.current.y) * 0.12;
      if (el.current) {
        el.current.style.left = `${cursor.current.x}px`;
        el.current.style.top = `${cursor.current.y}px`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.querySelectorAll(hoverSelectors).forEach((node) => {
        node.removeEventListener("mouseenter", handleEnter);
        node.removeEventListener("mouseleave", handleLeave);
      });
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={el}
      className={`cursor-dot ${hovering ? "hovering" : ""} ${clicking ? "clicking" : ""}`}
      aria-hidden
    />
  );
}

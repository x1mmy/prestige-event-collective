"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoIcon } from "./LogoIcon";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Book an Event Now", cta: true },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav-bar">
      <Link href="#" className="logo-link" data-cursor-hover>
        <LogoIcon className="logo-icon" />
        <div className="logo-text-wrap">
          <span className="brand">Prestige</span>
          <span className="tagline">Event Collective</span>
        </div>
      </Link>
      <ul className="nav-links">
        {LINKS.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={l.cta ? "nav-cta" : undefined}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="nav-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>
      <div className={`nav-overlay ${open ? "nav-overlay-open" : ""}`} aria-hidden>
        <div className="nav-overlay-backdrop" onClick={() => setOpen(false)} />
        <ul className="nav-overlay-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={l.cta ? "nav-cta" : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

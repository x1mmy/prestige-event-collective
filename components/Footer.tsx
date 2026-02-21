import Link from "next/link";
import { LogoIcon } from "./LogoIcon";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <Link href="#" className="logo-link">
          <LogoIcon className="logo-icon" />
          <div className="logo-text-wrap">
            <span className="brand">Prestige</span>
            <span className="tagline">Event Collective</span>
          </div>
        </Link>
        <nav className="footer-nav" aria-label="Footer">
          <Link href="#services">Services</Link>
          <Link href="#work">Our Work</Link>
          <Link href="#testimonials">Testimonials</Link>
        </nav>
      </div>
      <div className="footer-right">
        <span>© 2026 Prestige Event Collective.</span>
        <Link
          href="https://www.stashlabs.com.au/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-credit"
        >
          Built by Stash Labs
        </Link>
      </div>
    </footer>
  );
}

import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-wave-bg" aria-hidden>
        {/* Liquid layer: rotating light + flowing shapes */}
        <div className="hero-liquid">
          <div className="hero-liquid-conic" />
          <div className="hero-liquid-flow hero-liquid-flow-1" />
          <div className="hero-liquid-flow hero-liquid-flow-2" />
          <div className="hero-liquid-flow hero-liquid-flow-3" />
        </div>
        {/* Soft blobs (subtle) */}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-blob hero-blob-4" />
      </div>
      <div className="hero-content">
        <h1>
          Unforgettable
          <br />
          Entertainment.
          <br />
          Effortless Booking.
        </h1>
        <p className="hero-sub">
          Sydney&apos;s Premium Event Production Specialists that transform
          ordinary occasions into extraordinary memories
        </p>
        <div className="hero-btns">
          <Link href="#contact" className="btn-primary" data-cursor-hover>
            Book Now
          </Link>
          <Link href="#work" className="btn-outline" data-cursor-hover>
            See Our Work
          </Link>
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll down</span>
        <div className="scroll-mouse" aria-hidden />
        <span>to see our work</span>
      </div>
    </section>
  );
}

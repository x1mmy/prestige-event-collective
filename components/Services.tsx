import Link from "next/link";
import Image from "next/image";
import {
  HeartIcon,
  BriefcaseIcon,
  EngagementRingIcon,
  MusicNoteIcon,
} from "./ServiceIcons";

const MARQUEE_ITEMS: { emoji: string; label: string }[] = [
  { emoji: "🎧", label: "DJs" },
  { emoji: "🎤", label: "MCs & Hosts" },
  { emoji: "🎷", label: "Live Bands" },
  { emoji: "🥁", label: "Zaffe Drummers" },
  { emoji: "💃", label: "Dancers & Dancefloor" },
  { emoji: "💨", label: "CO₂ FX" },
  { emoji: "✨", label: "LED Screens & Lighting Design" },
  { emoji: "🎆", label: "Special Effects" },
  { emoji: "🎇", label: "Fireworks" },
  { emoji: "📸", label: "Photobooths & 360° Video" },
  { emoji: "🎬", label: "Photo & Video Production" },
  { emoji: "🍔", label: "Live Food Stations" },
  { emoji: "🍸", label: "Professional Bartenders" },
  { emoji: "🎪", label: "Full Event Production" },
  { emoji: "🛡️", label: "Event Security" },
  { emoji: "💡", label: "Custom Neon Signs" },
];

const MARQUEE_ROW1 = MARQUEE_ITEMS.slice(0, 8);
const MARQUEE_ROW2 = MARQUEE_ITEMS.slice(8, 16);

const CARDS = [
  {
    Icon: HeartIcon,
    title: "Weddings",
    text: "Setting the perfect soundtrack for your special day. From emotional ceremony moments to high-energy reception dancing, we read the room and curate the perfect musical journey — ensuring every song reflects your love story and keeps the dance floor packed all night.",
  },
  {
    Icon: BriefcaseIcon,
    title: "Corporate",
    text: "Elevating professional gatherings with sophisticated entertainment. Whether it's conferences, product launches, or company celebrations, we provide the right energy and ambiance — from background music to full DJ sets that engage your audience and strengthen your brand presence.",
  },
  {
    Icon: EngagementRingIcon,
    title: "Engagements",
    text: "Creating the perfect atmosphere for your milestone moment. We provide carefully curated music that sets a romantic, intimate vibe from surprise proposals with that special song to engagement parties where your love story comes alive through the perfect soundtrack.",
  },
  {
    Icon: MusicNoteIcon,
    title: "Private Events",
    text: "Bringing the party to life's special celebrations. Milestone birthdays, anniversaries, or family reunions — we deliver high-energy DJ sets tailored to your crowd, reading the room and keeping guests of all ages entertained and dancing all night long.",
  },
];

export function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-inner">
        <div className="section-header reveal">
          <div className="section-header-text">
            <h2>Services</h2>
            <p>
              Premium DJ entertainment that transforms weddings, corporate events,
              and celebrations into unforgettable experiences.
            </p>
          </div>
          <div className="section-header-image">
            <div className="section-header-image-inner">
              <Image
                src="/images/services.jpeg"
                alt="DJ and event entertainment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="section-header-photo"
              />
            </div>
          </div>
          <div className="section-btns section-btns-outline">
            <Link href="#contact" className="btn-outline" data-cursor-hover>
              Book An Event
            </Link>
            <Link href="#work" className="btn-outline" data-cursor-hover>
              Recent Works
            </Link>
          </div>
        </div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-row">
          <div className="marquee-track">
            {[...MARQUEE_ROW1, ...MARQUEE_ROW1].map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="marquee-emoji" aria-hidden>{item.emoji}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>
        <div className="marquee-row">
          <div className="marquee-track marquee-track-reverse">
            {[...MARQUEE_ROW2, ...MARQUEE_ROW2].map((item, i) => (
              <span key={i} className="marquee-item">
                <span className="marquee-emoji" aria-hidden>{item.emoji}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="services-inner">
        <div className="service-cards">
          {CARDS.map((card) => (
            <div key={card.title} className="service-card reveal">
              <div className="service-card-icon">
                <card.Icon className="service-card-icon-svg" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

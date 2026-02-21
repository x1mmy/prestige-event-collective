import Image from "next/image";

const TAGS = [
  "Event Planning & Coordination",
  "Professional DJ Services",
  "Wedding & Entertainment",
  "Corporate Events",
  "Sound & Lighting Design",
  "Emcee / Event Consultation",
];

export function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-heading reveal">About Us</h2>
      <div className="about-img reveal">
        <div className="about-img-inner">
          <Image
            src="/images/about-us.jpeg"
            alt="Prestige Event Collective"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="about-photo"
          />
        </div>
        <div className="neon-accent" aria-hidden />
      </div>
      <div className="about-text reveal">
        <p>
          Prestige Event Collective delivers premium event planning and DJ
          services across Sydney specialising in weddings, corporate functions
          and private celebrations.
        </p>
        <p>
          We combine strategic expertise with flawless coordination to craft
          personal experiences and leave your guests talking long after the
          music stops. Based in Sydney, Australia.
        </p>
        <div className="about-tags">
          {TAGS.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Working with Prestige Events Collective was a once-in-a-lifetime experience. Their ability to merge creativity with technical precision not only impressed our guests but ensured every moment was perfect all night.",
    rating: "5.0",
    event: "Private Event",
  },
  {
    quote:
      "We hired Prestige Events Collective for our wedding reception, and Isaac was phenomenal. He read the crowd perfectly, transitioning between genres seamlessly while maintaining the energy throughout the night. Worth every dollar!",
    rating: "5.0",
    event: "Wedding Reception",
  },
  {
    quote:
      "Prestige Events Collective brought our vision to life. The strategic approach to music and atmosphere elevated our product launch beyond expectations. Professional setup, flawless execution and the team was incredibly responsive throughout the planning process.",
    rating: "5.0",
    event: "Corporate Launch",
  },
  {
    quote:
      "From the moment we booked to the final song, everything was seamless. The lighting setup transformed our venue completely. Our guests are still talking about the night months later.",
    rating: "5.0",
    event: "Birthday Celebration",
  },
  {
    quote:
      "Absolutely incredible. The DJ read the room from the very first song and the dance floor never emptied. Professional, punctual, and genuinely passionate about what they do.",
    rating: "5.0",
    event: "Engagement Party",
  },
];

export function Testimonials() {
  const duplicated = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="test-header reveal">
        <h2>Testimonials</h2>
      </div>

      <div className="testimonials-track-wrapper">
        <div className="testimonials-track">
          {duplicated.map((t, i) => (
            <div key={i} className="test-card" data-cursor-hover>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <div className="stars" aria-hidden>
                ★★★★★
              </div>
              <div className="test-rating">
                {t.rating} — {t.event}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

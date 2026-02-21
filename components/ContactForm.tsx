"use client";

import { useState, FormEvent } from "react";

const SERVICE_OPTIONS = [
  "",
  "DJ",
  "MCs & Hosts",
  "Live Bands",
  "Zaffe Drummers",
  "Dancers & Dancefloor",
  "CO₂ FX",
  "LED Screens & Lighting Design",
  "Photobooths & 360° Video",
  "Photo & Video Production",
  "Live Food Stations",
  "Professional Bartenders",
  "Special Effects",
  "Neon Signs & more",
  "Full Event Production",
  "Other",
];

const EVENT_TYPES = [
  "",
  "Wedding",
  "Corporate Event",
  "Engagement Party",
  "Birthday Celebration",
  "Private Event",
  "Other",
];

const HOW_HEAR = [
  "",
  "Instagram",
  "TikTok",
  "LinkTree",
  "Google",
  "Referral",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage("Form is not configured. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
      return;
    }

    const fd = new FormData(form);
    fd.set("access_key", accessKey);
    fd.set("subject", "Prestige Event Collective - Website Enquiry");
    fd.set("from_name", "Prestige Event Collective (Website)");

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner reveal">
        <h2>Let&apos;s create something extraordinary together!</h2>
        <p className="contact-intro">
          Tell us about your event and we&apos;ll get back to you shortly.
        </p>

        {status === "success" ? (
          <div className="form-success visible">
            ✓ Thanks! We&apos;ll be in touch shortly.
          </div>
        ) : (
          <>
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="James Smith"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="james@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="0400 000 000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service</label>
                <select id="service" name="service">
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt || "empty"} value={opt}>
                      {opt || "Select..."}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="job_location">Job location</label>
                <input
                  type="text"
                  id="job_location"
                  name="job_location"
                  placeholder="e.g. Sydney CBD"
                />
              </div>
              <div className="form-group">
                <label htmlFor="time_required">Time required</label>
                <input
                  type="text"
                  id="time_required"
                  name="time_required"
                  placeholder="e.g. 4 hours"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="event_date">Event date</label>
                  <input type="date" id="event_date" name="event_date" />
                </div>
                <div className="form-group">
                  <label htmlFor="type_of_event">Type of event</label>
                  <select id="type_of_event" name="type_of_event">
                    {EVENT_TYPES.map((opt) => (
                      <option key={opt || "empty"} value={opt}>
                        {opt || "Select..."}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="amount_of_guests">Amount of guests</label>
                  <input
                    type="text"
                    id="amount_of_guests"
                    name="amount_of_guests"
                    placeholder="e.g. 80-100"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget</label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    placeholder="e.g. $2,000 - $5,000"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="special_notes">Special notes</label>
                <textarea
                  id="special_notes"
                  name="special_notes"
                  placeholder="Venue, vibe, anything important we should know..."
                />
              </div>
              <div className="form-group">
                <label htmlFor="how_did_you_hear">How did you hear about us?</label>
                <select id="how_did_you_hear" name="how_did_you_hear">
                  {HOW_HEAR.map((opt) => (
                    <option key={opt || "empty"} value={opt}>
                      {opt || "Select..."}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-submit">
                <button type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Enquiry →"}
                </button>
              </div>
            </form>
            {status === "error" && errorMessage && (
              <p style={{ color: "rgba(255,255,255,0.8)", marginTop: 16 }}>
                {errorMessage}
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}

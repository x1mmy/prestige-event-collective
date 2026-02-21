"use client";

import { useRef } from "react";
import { InstagramIcon, TikTokIcon, LinkTreeIcon } from "./SocialIcons";
import { useCountUp } from "@/lib/useCountUp";

const STATS = [
  { value: 100, label: "+ successful events" },
  { value: 96, label: "% Client satisfaction rate" },
  { value: 3, label: "+ Years of experience" },
];

const SOCIAL = [
  {
    href: "https://www.instagram.com/prestigeeventcollective_/",
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: "https://www.tiktok.com/@prestigeeventcollective_",
    label: "TikTok",
    Icon: TikTokIcon,
  },
  {
    href: "https://linktr.ee/prestigeeventcollective?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnIK6SmgcmcLAEpRQam53QFWUAa_hBp9eah9mnU3qrTrOAAkuMP3YBmmbwJi4_aem_UK3Oz2Lealb8wiRSorMfzQ",
    label: "LinkTree",
    Icon: LinkTreeIcon,
  },
];

export function Stats() {
  const barRef = useRef<HTMLDivElement>(null);
  useCountUp(barRef);

  return (
    <section id="stats" className="stats-section">
      <div className="social-links reveal">
        {SOCIAL.map(({ href, label, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" data-cursor-hover>
            <Icon />
            {label}
          </a>
        ))}
      </div>
      <div className="stats-bar reveal" ref={barRef}>
        {STATS.map((stat) => (
          <div key={stat.label} className="stat-item">
            <span className="stat-number" data-count={stat.value}>
              0
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

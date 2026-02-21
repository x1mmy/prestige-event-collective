const iconClass = "service-icon-svg";

export function MusicNoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  );
}

export function MicIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
    </svg>
  );
}

export function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M14 2l1 3 3 1-1 3 3 1-3 1 1 3-1 3-3-1-1-3-3 1 1-3-3-1 3-1-1-3 1-3zM8 8l1.5 4.5 4.5 1.5-1.5 4.5 4.5 1.5-4.5 1.5L10 20l-1.5-4.5L4 14l4.5-1.5L8 8zm-6 6l2 2 2-2-2-2-2 2z" />
    </svg>
  );
}

export function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    </svg>
  );
}

export function RingIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C9.24 2 7 4.24 7 7c0 2.85 2.92 7.21 5 9.88 2.08-2.67 5-7.03 5-9.88 0-2.76-2.24-5-5-5zm0 7.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 20c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-1H3v1z" />
    </svg>
  );
}

/** Engagement ring / diamond — for Engagements service card */
export function EngagementRingIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      {/* Diamond (gem) — classic engagement symbol */}
      <path d="M12 2l10 10-10 10L2 12 12 2z" />
    </svg>
  );
}

export function PartyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M14 2l1 3 3 1-1 3 3 1-3 1 1 3-1 3-3-1-1-3-3 1 1-3-3-1 3-1-1-3 1-3zM8 8l1.5 4.5 4.5 1.5-1.5 4.5 4.5 1.5-4.5 1.5L10 20l-1.5-4.5L4 14l4.5-1.5L8 8z" />
    </svg>
  );
}

/* Marquee: use bullet + text for items that don't have a dedicated icon */
export function BulletIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? iconClass}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

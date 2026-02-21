export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="3" y="18" width="3" height="4" rx="1.5" fill="white" opacity="0.5" />
      <rect x="8" y="13" width="3" height="14" rx="1.5" fill="white" opacity="0.65" />
      <rect x="13" y="8" width="3" height="24" rx="1.5" fill="white" opacity="0.8" />
      <rect x="18" y="4" width="3" height="32" rx="1.5" fill="white" />
      <rect x="23" y="10" width="3" height="20" rx="1.5" fill="white" opacity="0.8" />
      <rect x="28" y="15" width="3" height="10" rx="1.5" fill="white" opacity="0.65" />
      <rect x="33" y="19" width="3" height="2" rx="1" fill="white" opacity="0.4" />
    </svg>
  );
}

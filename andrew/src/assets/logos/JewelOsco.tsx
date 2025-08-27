const JewelOscoLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M7 10h10M7 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="6" cy="4" r="2" fill="currentColor"/>
    <rect x="10" y="2" width="4" height="4" rx="1" fill="currentColor"/>
  </svg>
);

export default JewelOscoLogo;

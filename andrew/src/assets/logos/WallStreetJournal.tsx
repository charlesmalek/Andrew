const WallStreetJournalLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M6 8h12M6 12h12M6 16h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="19" cy="6" r="2" fill="currentColor"/>
  </svg>
);

export default WallStreetJournalLogo;

const MarriottLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="6" y="6" width="12" height="2" rx="1" fill="currentColor"/>
    <circle cx="9" cy="12" r="1" fill="currentColor"/>
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
    <circle cx="15" cy="12" r="1" fill="currentColor"/>
    <path d="M8 15h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 4l6 2 6-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default MarriottLogo;

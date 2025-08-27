const LegoLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="16" height="12" rx="2" fill="currentColor"/>
    <circle cx="8" cy="6" r="2" fill="currentColor"/>
    <circle cx="12" cy="6" r="2" fill="currentColor"/>
    <circle cx="16" cy="6" r="2" fill="currentColor"/>
    <circle cx="8" cy="12" r="1" fill="white"/>
    <circle cx="12" cy="12" r="1" fill="white"/>
    <circle cx="16" cy="12" r="1" fill="white"/>
    <circle cx="8" cy="16" r="1" fill="white"/>
    <circle cx="12" cy="16" r="1" fill="white"/>
    <circle cx="16" cy="16" r="1" fill="white"/>
  </svg>
);

export default LegoLogo;

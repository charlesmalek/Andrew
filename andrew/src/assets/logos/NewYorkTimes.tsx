const NewYorkTimesLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M6 8h12M6 12h12M6 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default NewYorkTimesLogo;

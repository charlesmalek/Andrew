const StarbucksLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M12 6c2 0 3 1 3 2s-1 2-3 2-3-1-3-2 1-2 3-2z" fill="currentColor"/>
    <ellipse cx="12" cy="12" rx="4" ry="2" fill="currentColor"/>
    <path d="M8 15c1 2 2 3 4 3s3-1 4-3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="9" cy="9" r="1" fill="currentColor"/>
    <circle cx="15" cy="9" r="1" fill="currentColor"/>
  </svg>
);

export default StarbucksLogo;

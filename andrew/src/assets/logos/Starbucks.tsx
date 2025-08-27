const StarbucksLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* Outer circle - Starbucks green */}
      <circle cx="40" cy="40" r="38" fill="#00704A" stroke="#00704A" strokeWidth="2"/>
      
      {/* Inner circle */}
      <circle cx="40" cy="40" r="34" fill="none" stroke="white" strokeWidth="1"/>
      
      {/* Siren figure - simplified iconic representation */}
      {/* Crown */}
      <path d="M40 15 L35 20 L40 18 L45 20 Z" fill="white"/>
      
      {/* Head */}
      <circle cx="40" cy="28" r="8" fill="white"/>
      
      {/* Hair/crown details */}
      <path d="M32 25 Q35 22 40 25 Q45 22 48 25" fill="white"/>
      
      {/* Body */}
      <ellipse cx="40" cy="42" rx="12" ry="8" fill="white"/>
      
      {/* Arms/wings */}
      <path d="M28 40 Q25 35 22 40 Q25 45 28 42" fill="white"/>
      <path d="M52 40 Q55 35 58 40 Q55 45 52 42" fill="white"/>
      
      {/* Tail fins */}
      <path d="M32 50 Q28 55 25 60 Q30 58 35 55" fill="white"/>
      <path d="M48 50 Q52 55 55 60 Q50 58 45 55" fill="white"/>
      
      {/* Stars around the logo */}
      <path d="M15 25 L16 27 L18 27 L16.5 28.5 L17 30.5 L15 29 L13 30.5 L13.5 28.5 L12 27 L14 27 Z" fill="white"/>
      <path d="M65 25 L66 27 L68 27 L66.5 28.5 L67 30.5 L65 29 L63 30.5 L63.5 28.5 L62 27 L64 27 Z" fill="white"/>
    </g>
  </svg>
);

export default StarbucksLogo;

const MarriottLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 180 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* Main text "MARRIOTT" */}
      <text x="15" y="25" fontSize="18" fontFamily="serif" fontWeight="700" 
            fill="#8B0000" letterSpacing="2px">
        MARRIOTT
      </text>
      
      {/* Decorative flourish above */}
      <path d="M15 8 Q30 5 45 8 Q60 5 75 8 Q90 5 105 8 Q120 5 135 8 Q150 5 165 8" 
            stroke="#8B0000" strokeWidth="1.5" fill="none"/>
      
      {/* Small decorative elements */}
      <circle cx="25" cy="12" r="1" fill="#8B0000"/>
      <circle cx="155" cy="12" r="1" fill="#8B0000"/>
      
      {/* Underline */}
      <line x1="15" y1="30" x2="165" y2="30" stroke="#8B0000" strokeWidth="1"/>
      
      {/* Small "HOTELS" text */}
      <text x="15" y="38" fontSize="8" fontFamily="serif" fontWeight="400" 
            fill="#8B0000" letterSpacing="3px">
        HOTELS
      </text>
    </g>
  </svg>
);

export default MarriottLogo;

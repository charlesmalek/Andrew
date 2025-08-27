const JewelOscoLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* Background */}
      <rect x="5" y="10" width="190" height="40" rx="6" fill="#E31E24"/>
      
      {/* "Jewel" text */}
      <text x="20" y="30" fontSize="16" fontFamily="sans-serif" fontWeight="700" 
            fill="white" letterSpacing="1px">
        Jewel
      </text>
      
      {/* Separator dot */}
      <circle cx="85" cy="25" r="3" fill="white"/>
      
      {/* "Osco" text */}
      <text x="95" y="30" fontSize="16" fontFamily="sans-serif" fontWeight="700" 
            fill="white" letterSpacing="1px">
        Osco
      </text>
      
      {/* Tagline */}
      <text x="20" y="45" fontSize="8" fontFamily="sans-serif" fontWeight="400" 
            fill="white" letterSpacing="0.5px">
        Food &amp; Drug
      </text>
      
      {/* Decorative elements */}
      <path d="M15 15 L25 20 L15 25" fill="white" opacity="0.3"/>
      <path d="M175 15 L185 20 L175 25" fill="white" opacity="0.3"/>
    </g>
  </svg>
);

export default JewelOscoLogo;

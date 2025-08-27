const LegoLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* Red background rectangle */}
      <rect x="5" y="8" width="110" height="24" rx="4" fill="#D40000"/>
      
      {/* White "LEGO" text */}
      <text x="60" y="26" fontSize="18" fontFamily="sans-serif" fontWeight="900" 
            textAnchor="middle" fill="white" letterSpacing="2px">
        LEGO
      </text>
      
      {/* Characteristic studs on top */}
      <circle cx="25" cy="8" r="3" fill="#D40000"/>
      <circle cx="40" cy="8" r="3" fill="#D40000"/>
      <circle cx="55" cy="8" r="3" fill="#D40000"/>
      <circle cx="70" cy="8" r="3" fill="#D40000"/>
      <circle cx="85" cy="8" r="3" fill="#D40000"/>
      <circle cx="100" cy="8" r="3" fill="#D40000"/>
      
      {/* Stud highlights */}
      <circle cx="25" cy="6" r="1.5" fill="#FF4444"/>
      <circle cx="40" cy="6" r="1.5" fill="#FF4444"/>
      <circle cx="55" cy="6" r="1.5" fill="#FF4444"/>
      <circle cx="70" cy="6" r="1.5" fill="#FF4444"/>
      <circle cx="85" cy="6" r="1.5" fill="#FF4444"/>
      <circle cx="100" cy="6" r="1.5" fill="#FF4444"/>
    </g>
  </svg>
);

export default LegoLogo;

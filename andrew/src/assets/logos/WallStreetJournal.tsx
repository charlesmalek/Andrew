const WallStreetJournalLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* "THE WALL STREET" */}
      <text x="10" y="20" fontSize="14" fontFamily="serif" fontWeight="700" letterSpacing="3px">
        THE WALL STREET
      </text>
      
      {/* "JOURNAL" */}
      <text x="10" y="40" fontSize="18" fontFamily="serif" fontWeight="700" letterSpacing="4px">
        JOURNAL
      </text>
      
      {/* Distinctive dot pattern */}
      <circle cx="285" cy="15" r="2" fill="currentColor"/>
      <circle cx="285" cy="25" r="2" fill="currentColor"/>
      <circle cx="285" cy="35" r="2" fill="currentColor"/>
      
      {/* Decorative line */}
      <line x1="10" y1="28" x2="275" y2="28" stroke="currentColor" strokeWidth="0.5"/>
    </g>
  </svg>
);

export default WallStreetJournalLogo;

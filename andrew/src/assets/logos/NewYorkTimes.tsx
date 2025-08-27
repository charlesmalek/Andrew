const NewYorkTimesLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 280 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* "The" */}
      <text x="10" y="20" fontSize="12" fontFamily="serif" fontWeight="400">The</text>
      
      {/* "New York Times" - Main masthead style */}
      <text x="10" y="35" fontSize="16" fontFamily="serif" fontWeight="700" letterSpacing="2px">
        NEW YORK TIMES
      </text>
      
      {/* Decorative underline */}
      <line x1="10" y1="37" x2="270" y2="37" stroke="currentColor" strokeWidth="0.5"/>
    </g>
  </svg>
);

export default NewYorkTimesLogo;

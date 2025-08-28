import { useState, useEffect, useRef } from 'react';

const BrandCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const brands = [
    { 
      name: "Jewel-Osco", 
      logo: "/images/jewel-osco-logo.svg",
      alt: "Jewel-Osco Logo"
    },
    { 
      name: "LEGO", 
      logo: "/images/lego-logo.svg",
      alt: "LEGO Logo"
    },
    { 
      name: "Starbucks", 
      logo: "/images/starbucks-logo.svg",
      alt: "Starbucks Logo"
    },
    { 
      name: "The New York Times", 
      logo: "/images/new-york-times-logo.svg",
      alt: "The New York Times Logo"
    },
    { 
      name: "Wall Street Journal", 
      logo: "/images/wsj-logo.svg",
      alt: "Wall Street Journal Logo"
    },
  ];

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div 
      className="relative overflow-hidden bg-transparent"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={carouselRef}
        className={`flex items-center gap-8 md:gap-12 lg:gap-16 ${
          isPaused ? 'animate-pause' : 'animate-scroll'
        }`}
        style={{
          animationDuration: '30s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <div 
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="flex items-center justify-center px-4 py-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={brand.logo} 
                alt={brand.alt}
                className="h-8 w-auto md:h-10 lg:h-12 object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;

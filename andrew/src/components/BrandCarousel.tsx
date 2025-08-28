import { useState, useEffect, useRef } from 'react';
import { 
  NewYorkTimesLogo, 
  WallStreetJournalLogo, 
  LegoLogo, 
  StarbucksLogo, 
  JewelOscoLogo,
  MarriottLogo 
} from "@/assets/logos";

const BrandCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const brands = [
    { name: "New York Times", logo: NewYorkTimesLogo },
    { name: "Wall Street Journal", logo: WallStreetJournalLogo },
    { name: "LEGO", logo: LegoLogo },
    { name: "Starbucks", logo: StarbucksLogo },
    { name: "Jewel-Osco", logo: JewelOscoLogo },
    { name: "Marriott Hotels", logo: MarriottLogo },
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
            <div className="flex items-center gap-3 px-4 py-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <brand.logo className="h-6 w-auto md:h-8 lg:h-10" />
              <span className="text-sm md:text-base lg:text-lg font-medium text-foreground whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;

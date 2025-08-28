import { useRef } from 'react';

const BrandCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const brands = [
    { 
      name: "Jewel-Osco", 
      logo: "/images/Jewel Osco.svg.png",
      alt: "Jewel-Osco Logo"
    },
    { 
      name: "LEGO", 
      logo: "/images/Lego.png",
      alt: "LEGO Logo"
    },
    { 
      name: "Starbucks", 
      logo: "/images/Starbuks.svg.png",
      alt: "Starbucks Logo"
    },
    { 
      name: "The New York Times", 
      logo: "/images/The New York Times.png",
      alt: "The New York Times Logo"
    },
    { 
      name: "Wall Street Journal", 
      logo: "/images/WSJ.png",
      alt: "Wall Street Journal Logo"
    },
  ];

  // Quintuple the brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands, ...brands];

  return (
    <div className="relative overflow-hidden bg-transparent py-12 md:py-16 lg:py-20">
      <div 
        ref={carouselRef}
        className="flex items-center gap-4 md:gap-6 lg:gap-8 animate-scroll"
        style={{
          animationDuration: '3s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <div 
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="flex items-center justify-center px-2 py-10 md:py-12 lg:py-16 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
              <img 
                src={brand.logo} 
                alt={brand.alt}
                className="h-16 w-auto md:h-20 lg:h-24 object-contain drop-shadow-lg"
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

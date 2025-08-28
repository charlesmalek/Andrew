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

  // Triple the brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="relative overflow-hidden bg-transparent py-8 md:py-12 lg:py-16">
      <div 
        ref={carouselRef}
        className="flex items-center gap-12 md:gap-16 lg:gap-20 animate-scroll"
        style={{
          animationDuration: '15s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <div 
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="flex items-center justify-center px-6 py-8 md:py-10 lg:py-12 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
              <img 
                src={brand.logo} 
                alt={brand.alt}
                className="h-12 w-auto md:h-16 lg:h-20 object-contain drop-shadow-lg"
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

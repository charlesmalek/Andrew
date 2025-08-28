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

  // Quadruple the brands for perfect seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="relative overflow-hidden bg-transparent py-16 md:py-20 lg:py-24">
      <div 
        ref={carouselRef}
                  className="flex items-center gap-6 md:gap-8 lg:gap-10 carousel-seamless"
      >
        {duplicatedBrands.map((brand, index) => (
          <div 
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="flex items-center justify-center px-4 py-12 md:py-16 lg:py-20 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
              <img 
                src={brand.logo} 
                alt={brand.alt}
                className="h-20 w-auto md:h-24 lg:h-28 object-contain drop-shadow-lg"
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

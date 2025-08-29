import { useRef } from 'react';

const BrandCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // All available logos from public/images folder
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

  // Triple the brands for perfect seamless infinite scroll
  // We need exactly 3 sets: one that shows, one that's animating in, and one that's off-screen
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="relative py-16 md:py-20 lg:py-24">
      {/* Container with proper overflow and gradient masks for smooth edges */}
      <div className="relative overflow-hidden">
        {/* Gradient masks for polished edges */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none" />
        
        <div 
          ref={carouselRef}
          className="flex items-center carousel-seamless"
          style={{ gap: '80px' }} // Optimized gap for better visibility
        >
          {duplicatedBrands.map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ minWidth: '180px' }} // Consistent width ensuring all logos are visible
            >
              <div className="flex items-center justify-center px-3 py-8 opacity-75 hover:opacity-90 transition-opacity duration-300">
                <img 
                  src={brand.logo} 
                  alt={brand.alt}
                  className="h-14 w-auto md:h-18 lg:h-20 max-w-[160px] object-contain"
                  style={{ filter: 'grayscale(0.2) brightness(0.95)' }}
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load logo: ${brand.logo}`);
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    
                    // Create a fallback element
                    const fallback = document.createElement('div');
                    fallback.textContent = brand.name;
                    fallback.className = 'text-xs font-medium text-gray-400 text-center px-3 py-2 bg-gray-100 rounded';
                    target.parentNode?.appendChild(fallback);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;

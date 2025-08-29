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
    <div className="relative overflow-hidden bg-transparent py-16 md:py-20 lg:py-24" style={{ clipPath: 'inset(0)' }}>
      <div 
        ref={carouselRef}
        className="flex items-center carousel-seamless"
        style={{ gap: '120px' }} // Consistent gap for perfect spacing
      >
        {duplicatedBrands.map((brand, index) => (
          <div 
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
            style={{ minWidth: '200px' }} // Ensure consistent width
          >
            <div className="flex items-center justify-center px-4 py-12 md:py-16 lg:py-20 opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
              <img 
                src={brand.logo} 
                alt={brand.alt}
                className="h-16 w-auto md:h-20 lg:h-24 max-w-[180px] object-contain drop-shadow-lg"
                style={{ filter: 'grayscale(0.3)' }}
                onError={(e) => {
                  console.error(`Failed to load logo: ${brand.logo}`);
                  // Create a fallback text element
                  const fallback = document.createElement('div');
                  fallback.textContent = brand.name;
                  fallback.className = 'text-sm font-medium text-gray-500 text-center';
                  e.currentTarget.parentNode?.replaceChild(fallback, e.currentTarget);
                }}
                onLoad={(e) => {
                  // Ensure the image is visible once loaded
                  const img = e.target as HTMLImageElement;
                  if (img) {
                    img.style.opacity = '1';
                  }
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

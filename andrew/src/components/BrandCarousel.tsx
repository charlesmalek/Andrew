import { useRef, useState, useEffect } from 'react';

const BrandCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const brands = [
    { 
      name: "Jewel-Osco", 
      logo: "/images/Jewel Osco.svg.png",
      alt: "Jewel-Osco Logo",
      description: "Grocery & Retail Distribution"
    },
    { 
      name: "LEGO", 
      logo: "/images/Lego.png",
      alt: "LEGO Logo",
      description: "Toy & Entertainment Distribution"
    },
    { 
      name: "Starbucks", 
      logo: "/images/Starbuks.svg.png",
      alt: "Starbucks Logo",
      description: "Food & Beverage Distribution"
    },
    { 
      name: "The New York Times", 
      logo: "/images/The New York Times.png",
      alt: "The New York Times Logo",
      description: "Publishing & Media Distribution"
    },
    { 
      name: "Wall Street Journal", 
      logo: "/images/WSJ.png",
      alt: "Wall Street Journal Logo",
      description: "Financial Media Distribution"
    },
  ];

  // Enhanced duplication for smoother infinite scroll
  const duplicatedBrands = [
    ...brands, ...brands, ...brands, 
    ...brands, ...brands, ...brands,
    ...brands, ...brands
  ];

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-section-bg/50 to-background py-16 md:py-20 lg:py-24">
      {/* Section Header */}
      <div className="container-enterprise mb-12">
        <div className="text-center">
          <h2 className="heading-md text-primary mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            We proudly serve leading brands across multiple industries with reliable, 
            professional distribution services.
          </p>
        </div>
      </div>

      {/* Enhanced Carousel */}
      <div 
        className="relative overflow-hidden"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div 
          ref={carouselRef}
          className={`flex items-center gap-8 md:gap-12 lg:gap-16 carousel-enhanced ${
            isVisible ? 'animate' : ''
          }`}
        >
          {duplicatedBrands.map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 group"
            >
              <div className="relative flex flex-col items-center justify-center p-6 md:p-8 transition-all duration-500 ease-out">
                {/* Logo Container with Enhanced Effects */}
                <div className="relative mb-4 transform group-hover:scale-110 transition-transform duration-300 ease-out">
                  <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl group-hover:bg-primary/10 transition-colors duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-card hover:shadow-enterprise transition-all duration-300">
                    <img 
                      src={brand.logo} 
                      alt={brand.alt}
                      className="h-16 w-auto md:h-20 lg:h-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        // Show fallback text
                        const fallback = target.parentElement?.querySelector('.fallback-text');
                        if (fallback) {
                          (fallback as HTMLElement).style.display = 'block';
                        }
                      }}
                    />
                    {/* Fallback text */}
                    <div className="fallback-text hidden text-primary font-semibold text-sm">
                      {brand.name}
                    </div>
                  </div>
                </div>

                {/* Brand Information */}
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-sm text-primary mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {brand.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="container-enterprise mt-12">
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>15+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>98% On-Time Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>24/7 Customer Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;

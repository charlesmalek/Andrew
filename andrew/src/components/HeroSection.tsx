import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Truck, 
  Users, 
  MapPin, 
  TrendingUp 
} from "lucide-react";
import heroImage from "@/assets/andrew-fleet-final.jpg";
import BrandCarousel from "./BrandCarousel";

const HeroSection = () => {
  const stats = [
    { icon: Users, label: "500+ Employees", value: "500+" },
    { icon: Truck, label: "225+ Vehicles", value: "225+" },
    { icon: MapPin, label: "Retail Accounts", value: "3,500+" },
    { icon: TrendingUp, label: "Daily Deliveries", value: "2,500+" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Andrew Distribution's impressive fleet of 15+ white delivery trucks organized in formation at modern distribution center with multiple loading dock bays"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
      </div>

      {/* Content */}
      <div className="container-enterprise relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="space-y-6 fade-in-up">
              <div className="space-y-4">
                <h1 className="heading-xl lg:text-[52px] xl:text-[64px] leading-tight font-heading">
                  Reliable Distribution 
                  <span className="block text-accent-coral">
                    Across the Midwest
                  </span>
                </h1>
                <p className="body-large lg:text-[20px] lg:leading-[30px] text-primary-foreground/90 leading-relaxed max-w-2xl">
                  Trusted by publishers, retailers and global brands for over 30 years. 
                  Newspapers, magazines, books and freight — delivered on time, every time.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta-outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                  Talk to Sales
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-12">
                <p className="text-base text-primary-foreground/80 mb-6">
                  Trusted by leading brands
                </p>
                <div className="text-primary-foreground/60 py-4">
                  <BrandCarousel />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-2 gap-6 fade-in-up">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 hover:bg-card/20 transition-all duration-300 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-accent-orange/20 p-2 rounded-lg">
                    <stat.icon className="h-6 w-6 text-accent-orange" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="heading-sm text-primary-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/80">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
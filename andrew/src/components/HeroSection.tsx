import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Truck, 
  Users, 
  MapPin, 
  TrendingUp 
} from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";
import { 
  NewYorkTimesLogo, 
  WallStreetJournalLogo, 
  LegoLogo, 
  StarbucksLogo, 
  JewelOscoLogo 
} from "@/assets/logos";

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
          alt="Andrew Distribution fleet and warehouse operations showing trucks and logistics facilities"
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
              <div className="pt-8">
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Trusted by leading brands
                </p>
                <div className="flex flex-wrap items-center gap-6 text-primary-foreground/60">
                  <div className="flex items-center gap-2">
                    <NewYorkTimesLogo className="h-5 w-auto opacity-70" />
                    <span className="text-sm font-medium">New York Times</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <WallStreetJournalLogo className="h-4 w-auto opacity-70" />
                    <span className="text-sm font-medium">Wall Street Journal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LegoLogo className="h-5 w-auto opacity-70" />
                    <span className="text-sm font-medium">LEGO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarbucksLogo className="h-6 w-auto opacity-70" />
                    <span className="text-sm font-medium">Starbucks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <JewelOscoLogo className="h-4 w-auto opacity-70" />
                    <span className="text-sm font-medium">Jewel-Osco</span>
                  </div>
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
                  <div className="bg-accent-coral/20 p-2 rounded-lg">
                    <stat.icon className="h-6 w-6 text-accent-coral" />
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
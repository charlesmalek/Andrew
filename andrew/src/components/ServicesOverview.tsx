import { Button } from "@/components/ui/button";
import { 
  Truck, 
  Newspaper, 
  BookOpen, 
  ArrowRight,
  Clock,
  Shield,
  Award
} from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Truck,
      title: "Transportation & Logistics",
      description: "Complete freight solutions with 225+ vehicles serving 15+ states across the Midwest. From warehousing to delivery, we handle it all.",
      features: ["Daily Service", "Fleet Management", "Warehousing", "Redelivery"],
      href: "/transportation"
    },
    {
      icon: Newspaper,
      title: "Newspaper Distribution",
      description: "25+ years of trusted newspaper delivery to 3,500+ retail accounts including major hotels, Starbucks, and airports.",
      features: ["Major Publishers", "3,500+ Accounts", "Daily Delivery", "Columbus & Cincinnati"],
      href: "/newspapers"
    },
    {
      icon: BookOpen,
      title: "Magazines & Books",
      description: "Comprehensive magazine and book distribution with direct human support and same-day additional copies available.",
      features: ["1,700+ Titles", "Weekly Delivery", "Return Credits", "Custom Selection"],
      href: "/magazines"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "30+ Years Experience",
      description: "Proven track record since 1992"
    },
    {
      icon: Shield,
      title: "Reliable Service",
      description: "On-time delivery, every time"
    },
    {
      icon: Award,
      title: "World-Class Performance",
      description: "Measurable service metrics"
    }
  ];

  return (
    <section className="section-padding bg-section-bg">
      <div className="container-enterprise">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-lg mb-6 text-foreground font-heading">
            Complete Distribution Solutions
          </h2>
          <p className="body-large text-foreground max-w-3xl mx-auto leading-relaxed">
            From newspapers to freight, we deliver comprehensive logistics solutions 
            across the Midwest with unmatched reliability and professional service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-card-hover transition-all duration-300 hover-lift fade-in-up flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon */}
              <div className="bg-foreground/10 p-4 rounded-lg w-fit mb-6">
                <service.icon className="h-8 w-8 text-foreground" />
              </div>

              {/* Service Content */}
              <div className="space-y-4 mb-6 flex-grow">
                <h3 className="heading-sm text-foreground font-heading">
                  {service.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button className="w-full group mt-auto bg-accent-coral text-accent-coral-foreground hover:bg-accent-coral-dark shadow-button hover:shadow-lift btn-hover-lift">
                Learn More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 text-primary-foreground fade-in-up">
          <div className="text-center mb-12">
            <h3 className="heading-md mb-4 font-heading">
              Why Choose Andrew Distribution?
            </h3>
            <p className="body-large text-primary-foreground/90 max-w-2xl mx-auto">
              We don't just compete on price — we build long-term partnerships and deliver world-class performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="text-center fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-accent-orange/20 p-4 rounded-lg w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-accent-orange" />
                </div>
                <h4 className="text-xl font-semibold mb-2 font-heading">{benefit.title}</h4>
                <p className="text-primary-foreground/80">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="xl" className="group">
              Contact Us Today
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
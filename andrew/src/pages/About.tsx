import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Shield, 
  Target,
  Calendar,
  MapPin,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "1992",
      title: "Company Founded",
      description: "Andrew Distribution established in Melrose Park, Illinois"
    },
    {
      year: "2000",
      title: "Fleet Expansion", 
      description: "Expanded to 100+ vehicles serving the greater Midwest"
    },
    {
      year: "2010",
      title: "Technology Integration",
      description: "Implemented advanced logistics and tracking systems"
    },
    {
      year: "2020",
      title: "225+ Vehicles",
      description: "Reached milestone of 225+ vehicles and 500+ employees"
    },
    {
      year: "Today",
      title: "Industry Leader",
      description: "Serving 3,500+ retail accounts across 15+ states"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "On-time delivery, every time. We understand that your business depends on our consistency."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We don't just compete on price — we build long-term partnerships with our clients."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "World-class performance with measurable service metrics and continuous improvement."
    },
    {
      icon: Target,
      title: "Focus",
      description: "Specialized expertise in newspaper, magazine, and freight distribution across the Midwest."
    }
  ];

  const stats = [
    { number: "30+", label: "Years of Experience" },
    { number: "500+", label: "Dedicated Employees" },
    { number: "225+", label: "Fleet Vehicles" },
    { number: "3,500+", label: "Retail Accounts" },
    { number: "15+", label: "States Served" },
    { number: "2,500+", label: "Daily Deliveries" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container-enterprise">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="heading-xl mb-6">About Andrew Distribution</h1>
              <p className="body-large text-primary-foreground/90 mb-8">
                For over 30 years, Andrew Distribution has been the trusted partner for businesses 
                across the Midwest, delivering newspapers, magazines, books, and freight with 
                unmatched reliability and professional service.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <p className="heading-lg text-accent-coral mb-2">{stat.number}</p>
                    <p className="caption text-primary-foreground/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-padding">
          <div className="container-enterprise">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg text-primary mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 1992 in Melrose Park, Illinois, Andrew Distribution began as a small 
                    family-owned business with a simple mission: provide reliable, professional 
                    distribution services to businesses across the Midwest.
                  </p>
                  <p>
                    What started with a handful of vehicles has grown into a fleet of 225+ vehicles 
                    and 500+ dedicated employees. We've built our reputation on consistency, 
                    reliability, and the understanding that your business success depends on our performance.
                  </p>
                  <p>
                    Today, we serve over 3,500 retail accounts across 15+ states, from major hotel 
                    chains and Starbucks locations to independent retailers and airports. Our 
                    specialized expertise in newspaper distribution, magazine circulation, and 
                    freight logistics makes us the partner of choice for publishers and businesses 
                    throughout the region.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(3).map((stat, index) => (
                  <Card key={stat.label} className="text-center p-6">
                    <CardContent className="pt-6">
                      <p className="heading-md text-primary mb-2">{stat.number}</p>
                      <p className="caption text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-enterprise">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-primary mb-4">Our Journey</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                Three decades of growth, innovation, and unwavering commitment to service excellence.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden lg:block"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <Card className="p-6">
                        <CardContent className="pt-0">
                          <div className="flex items-center gap-3 mb-3">
                            <Calendar className="h-5 w-5 text-accent-coral" />
                            <span className="text-lg font-semibold text-primary">{milestone.year}</span>
                          </div>
                          <h3 className="heading-sm text-primary mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="hidden lg:block w-4 h-4 bg-accent-coral rounded-full border-4 border-background shadow-lg z-10"></div>
                    
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="section-padding">
          <div className="container-enterprise">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-primary mb-4">Our Values</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and define who we are as a company.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={value.title} className="text-center p-6 hover:shadow-card-hover transition-all duration-300 hover-lift">
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="heading-sm text-primary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container-enterprise">
            <div className="text-center">
              <h2 className="heading-md mb-4">Ready to Partner With Us?</h2>
              <p className="body-large text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join the thousands of businesses who trust Andrew Distribution for their logistics needs. 
                Let's discuss how we can support your distribution requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta-outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About; 
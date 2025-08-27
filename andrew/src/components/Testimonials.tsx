import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { 
  NewYorkTimesLogo, 
  WallStreetJournalLogo, 
  LegoLogo, 
  StarbucksLogo, 
  JewelOscoLogo,
  MarriottLogo 
} from "@/assets/logos";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Operations Director",
      company: "Midwest Publishing Group",
      content: "Andrew Distribution has been our trusted partner for over 15 years. Their reliability in newspaper distribution is unmatched — we've never had a missed delivery.",
      rating: 5
    },
    {
      name: "Mike Chen",
      title: "Logistics Manager", 
      company: "National Retail Chain",
      content: "The team at Andrew Distribution understands our business needs. Their flexibility and professional service have made them an invaluable part of our supply chain.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      title: "Regional Manager",
      company: "Hotel Management Corp",
      content: "Consistent, professional, and reliable. Andrew Distribution delivers our newspapers to 50+ hotel locations daily without fail. Outstanding service.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-enterprise">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-lg mb-6 text-primary font-heading">
            What Our Clients Say
          </h2>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our long-term partners have to say 
            about working with Andrew Distribution.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="relative p-8 hover:shadow-card-hover transition-all duration-300 hover-lift fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-0">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="h-12 w-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-coral text-accent-coral" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-sm text-accent-coral font-medium">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center fade-in-up">
          <p className="caption text-muted-foreground mb-6">
            Trusted by leading brands across the Midwest
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <NewYorkTimesLogo className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            <WallStreetJournalLogo className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            <LegoLogo className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            <StarbucksLogo className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            <JewelOscoLogo className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity" />
            <MarriottLogo className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
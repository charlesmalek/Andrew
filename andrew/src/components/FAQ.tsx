import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "Services",
      question: "What types of distribution services do you offer?",
      answer: "We specialize in three main areas: Transportation & Logistics (freight distribution with 225+ vehicles), Newspaper Distribution (serving 3,500+ retail accounts including hotels, Starbucks, and airports), and Magazine & Book Distribution (1,700+ titles with weekly delivery and return credits)."
    },
    {
      category: "Coverage",
      question: "Which states do you serve?",
      answer: "We serve 15+ states across the Midwest region, with our primary coverage area including Illinois, Indiana, Wisconsin, Michigan, Ohio, Iowa, Missouri, and surrounding states. Our main hub is located in Melrose Park, Illinois."
    },
    {
      category: "Reliability",
      question: "How do you ensure on-time delivery?",
      answer: "We maintain a 99%+ on-time delivery rate through our advanced logistics systems, experienced drivers, and comprehensive fleet management. We have backup vehicles and contingency plans to handle any unexpected situations."
    },
    {
      category: "Pricing",
      question: "How do you structure your pricing?",
      answer: "Our pricing is customized based on your specific needs including delivery frequency, volume, distance, and service requirements. We offer competitive rates and flexible payment terms. Contact us for a personalized quote."
    },
    {
      category: "Technology",
      question: "Do you provide tracking and reporting?",
      answer: "Yes, we offer real-time tracking capabilities and detailed reporting on all deliveries. You can monitor your shipments and access delivery confirmations, performance metrics, and custom reports through our systems."
    },
    {
      category: "Partnership",
      question: "What makes Andrew Distribution different from competitors?",
      answer: "Our 30+ years of experience, family-owned commitment to service, specialized expertise in newspaper and magazine distribution, and our focus on building long-term partnerships rather than just competing on price sets us apart."
    },
    {
      category: "Getting Started",
      question: "How do I get started with your services?",
      answer: "Simply contact us at (708) 344-3200 or email info@andrewdistribution.com. We'll discuss your needs, provide a customized quote, and can typically begin service within 1-2 weeks of agreement."
    },
    {
      category: "Support",
      question: "What kind of customer support do you provide?",
      answer: "We provide dedicated account management, 24/7 dispatch support, and direct human contact for any issues. Our team is available Monday-Friday 6AM-6PM and Saturday 6AM-2PM, with emergency support available outside these hours."
    }
  ];

  return (
    <section className="section-padding bg-section-bg">
      <div className="container-enterprise">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="heading-lg mb-6 text-primary font-heading">
            Frequently Asked Questions
          </h2>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get quick answers to common questions about our distribution services, 
            coverage areas, and partnership opportunities.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-card-hover fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-inset"
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-accent-orange bg-accent-orange/10 px-2 py-1 rounded">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="heading-sm text-primary font-heading text-left">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {openItems.includes(index) ? (
                        <ChevronUp className="h-5 w-5 text-accent-coral" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <CardContent 
                    id={`faq-answer-${index}`}
                    className="pt-0 pb-6 px-6 animate-in slide-in-from-top-2 duration-200"
                  >
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gradient-subtle rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="heading-md text-primary mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Contact us directly for personalized answers 
              to your specific distribution needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:(708) 344-3200"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary-light px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Call (708) 344-3200
              </a>
              <a 
                href="mailto:info@andrewdistribution.com"
                className="inline-flex items-center justify-center gap-2 bg-accent-coral text-accent-coral-foreground hover:bg-accent-coral-dark px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
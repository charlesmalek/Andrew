import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, MapPin, Shield, CheckCircle } from "lucide-react";

const Transportation = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container-enterprise py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-primary p-4 rounded-lg">
              <Truck className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="heading-xl text-primary mb-6">
            Transportation & Logistics
          </h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Comprehensive transportation solutions across the Midwest with our fleet of 225+ vehicles. 
            Reliable, efficient, and tailored to your business needs.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <Truck className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Fleet of 225+ Vehicles</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Diverse fleet capable of handling any transportation need across multiple states.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <Clock className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>On-Time Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                99.5% on-time delivery rate with real-time tracking and communication.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>15+ States Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Extensive coverage across the Midwest and surrounding regions.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Secure & Insured</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Fully insured operations with advanced security measures for your peace of mind.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Services Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="heading-lg text-primary mb-6">Our Transportation Services</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Freight Transportation</h3>
                  <p className="text-muted-foreground">Full truckload and less-than-truckload shipping solutions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Expedited Delivery</h3>
                  <p className="text-muted-foreground">Rush delivery services for time-sensitive shipments.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Warehouse Solutions</h3>
                  <p className="text-muted-foreground">Storage and distribution center services.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Route Optimization</h3>
                  <p className="text-muted-foreground">Advanced logistics planning for maximum efficiency.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="heading-lg text-primary mb-6">Why Choose Our Transportation?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">30+ Years Experience</h3>
                  <p className="text-muted-foreground">Decades of proven reliability in logistics and transportation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Advanced Technology</h3>
                  <p className="text-muted-foreground">GPS tracking, automated dispatch, and real-time updates.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Flexible Service</h3>
                  <p className="text-muted-foreground">Customizable solutions to meet your specific requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">24/7 Support</h3>
                  <p className="text-muted-foreground">Round-the-clock customer service and dispatch support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card border border-border rounded-lg p-8">
          <h2 className="heading-lg text-primary mb-4">
            Ready to Streamline Your Transportation?
          </h2>
          <p className="body-large text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact our logistics experts to discuss your transportation needs and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Get a Quote
            </Button>
            <Button variant="enterprise" size="lg">
              Call (708) 344-3200
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Transportation;

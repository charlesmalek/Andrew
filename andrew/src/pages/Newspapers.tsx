import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, Clock, MapPin, Users, CheckCircle } from "lucide-react";

const Newspapers = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container-enterprise py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-primary p-4 rounded-lg">
              <Newspaper className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="heading-xl text-primary mb-6">
            Newspaper Distribution
          </h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Specialized newspaper distribution services across the Midwest. Ensuring your publications 
            reach readers on time, every time with our dedicated distribution network.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <Clock className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Early Morning Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Publications delivered before dawn to ensure availability when readers need them.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Wide Coverage Area</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Serving newspapers across 15+ states with established distribution routes.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Dedicated Teams</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Specialized crews trained specifically for newspaper handling and distribution.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <Newspaper className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Volume Handling</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Capable of handling high-volume newspaper runs for major publications.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Services Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="heading-lg text-primary mb-6">Our Newspaper Services</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Daily Newspaper Distribution</h3>
                  <p className="text-muted-foreground">Regular daily delivery routes for newspapers and publications.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Retail Newsstand Delivery</h3>
                  <p className="text-muted-foreground">Direct delivery to retail locations and newsstands.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Subscription Fulfillment</h3>
                  <p className="text-muted-foreground">Direct-to-subscriber delivery services for home delivery.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Return Handling</h3>
                  <p className="text-muted-foreground">Efficient collection and processing of unsold newspapers.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="heading-lg text-primary mb-6">Why Publishers Choose Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Proven Track Record</h3>
                  <p className="text-muted-foreground">30+ years of successful newspaper distribution experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Timing Precision</h3>
                  <p className="text-muted-foreground">Understanding the critical importance of publication timing.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Scalable Solutions</h3>
                  <p className="text-muted-foreground">From local weeklies to major metropolitan dailies.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Cost-Effective</h3>
                  <p className="text-muted-foreground">Competitive pricing with reliable service quality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-card border border-border rounded-lg p-8 mb-16">
          <h2 className="heading-lg text-primary text-center mb-8">Distribution by the Numbers</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">225+</div>
              <p className="text-muted-foreground">Delivery Vehicles</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">States Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
              <p className="text-muted-foreground">On-Time Delivery Rate</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card border border-border rounded-lg p-8">
          <h2 className="heading-lg text-primary mb-4">
            Partner with Us for Your Newspaper Distribution
          </h2>
          <p className="body-large text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let our experienced team handle your newspaper distribution needs while you focus on creating great content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Request a Quote
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

export default Newspapers;

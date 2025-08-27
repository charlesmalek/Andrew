import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Package, Truck, Calendar, CheckCircle } from "lucide-react";

const Magazines = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container-enterprise py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-primary p-4 rounded-lg">
              <BookOpen className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="heading-xl text-primary mb-6">
            Magazines & Books Distribution
          </h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Specialized distribution services for magazines, books, and periodicals. 
            From monthly magazines to special publications, we ensure your content reaches the right audience.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <Package className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Careful Handling</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Specialized handling to preserve publication quality during transport.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <Calendar className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Flexible Scheduling</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Adaptable delivery schedules for weekly, monthly, and special publications.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <Truck className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Climate-Controlled</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Temperature and humidity controlled vehicles for premium publications.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Volume Capacity</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Handle everything from small indie publications to major magazine runs.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Services Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="heading-lg text-primary mb-6">Our Magazine & Book Services</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Magazine Distribution</h3>
                  <p className="text-muted-foreground">Weekly, monthly, and quarterly magazine delivery to retailers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Book Distribution</h3>
                  <p className="text-muted-foreground">New release and backlist distribution to bookstores and libraries.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Subscription Services</h3>
                  <p className="text-muted-foreground">Direct-to-consumer delivery for subscription publications.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Special Editions</h3>
                  <p className="text-muted-foreground">Handling of limited editions and collector publications.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="heading-lg text-primary mb-6">Why Publishers Trust Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Industry Expertise</h3>
                  <p className="text-muted-foreground">Deep understanding of publishing industry requirements and timelines.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Quality Preservation</h3>
                  <p className="text-muted-foreground">Maintaining publication integrity from warehouse to shelf.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Flexible Partnerships</h3>
                  <p className="text-muted-foreground">Customizable solutions for independent and major publishers.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Return Management</h3>
                  <p className="text-muted-foreground">Efficient processing of returns and damaged goods.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Publication Types */}
        <div className="bg-card border border-border rounded-lg p-8 mb-16">
          <h2 className="heading-lg text-primary text-center mb-8">Publications We Handle</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2">Consumer Magazines</h3>
              <p className="text-sm text-muted-foreground">Lifestyle, hobby, and interest publications</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2">Trade Publications</h3>
              <p className="text-sm text-muted-foreground">Industry-specific and professional magazines</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2">Academic Journals</h3>
              <p className="text-sm text-muted-foreground">Research and scholarly publications</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2">Children's Books</h3>
              <p className="text-sm text-muted-foreground">Educational and entertainment books for young readers</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2">Textbooks</h3>
              <p className="text-sm text-muted-foreground">Educational materials for schools and universities</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2">Special Editions</h3>
              <p className="text-sm text-muted-foreground">Limited runs and collector publications</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card border border-border rounded-lg p-8">
          <h2 className="heading-lg text-primary mb-4">
            Ready to Distribute Your Publications?
          </h2>
          <p className="body-large text-muted-foreground mb-6 max-w-2xl mx-auto">
            Partner with us for reliable magazine and book distribution services across the Midwest and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Get Distribution Quote
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

export default Magazines;

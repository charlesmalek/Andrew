import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, Shield, Heart, CheckCircle, Briefcase } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container-enterprise py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-primary p-4 rounded-lg">
              <Briefcase className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="heading-xl text-primary mb-6">
            Join Our Team
          </h1>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            Build your career with a company that's been trusted for over 30 years. 
            We're always looking for dedicated professionals to join our growing team.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Growth Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Advance your career with training programs and internal promotion opportunities.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Competitive Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Comprehensive benefits package including health insurance and retirement plans.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Team Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Work with experienced professionals in a supportive, collaborative environment.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="bg-secondary p-3 rounded-lg w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Work-Life Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Flexible scheduling and time-off policies that respect your personal life.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="heading-lg text-primary text-center mb-8">Current Openings</h2>
          <div className="grid gap-6">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>CDL Driver</CardTitle>
                    <CardDescription>Full-time • Midwest Region</CardDescription>
                  </div>
                  <Button variant="cta">Apply Now</Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Seeking experienced CDL drivers for newspaper and freight distribution routes. 
                  Clean driving record required. Competitive pay and benefits.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm">CDL Required</span>
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm">Benefits Package</span>
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm">Regular Routes</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Logistics Coordinator</CardTitle>
                    <CardDescription>Full-time • Chicago, IL</CardDescription>
                  </div>
                  <Button variant="cta">Apply Now</Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Coordinate delivery schedules, manage routes, and ensure efficient operations. 
                  Experience in logistics or transportation preferred.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm">Logistics Experience</span>
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm">Problem Solving</span>
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm">Team Player</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Warehouse Associate</CardTitle>
                    <CardDescription>Full-time & Part-time • Multiple Locations</CardDescription>
                  </div>
                  <Button variant="cta">Apply Now</Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Handle incoming and outgoing shipments, maintain inventory accuracy, 
                  and support warehouse operations. No experience required - we'll train!
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm">Entry Level</span>
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm">Training Provided</span>
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm">Physical Work</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits & Culture */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="heading-lg text-primary mb-6">Benefits & Perks</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Health Insurance</h3>
                  <p className="text-muted-foreground">Comprehensive medical, dental, and vision coverage.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Retirement Plans</h3>
                  <p className="text-muted-foreground">401(k) with company matching to secure your future.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Paid Time Off</h3>
                  <p className="text-muted-foreground">Generous vacation and sick leave policies.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Performance Bonuses</h3>
                  <p className="text-muted-foreground">Reward programs for exceptional performance.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="heading-lg text-primary mb-6">Our Culture</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Family Atmosphere</h3>
                  <p className="text-muted-foreground">We treat our employees like family with respect and care.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Safety First</h3>
                  <p className="text-muted-foreground">Comprehensive safety training and equipment provided.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Continuous Learning</h3>
                  <p className="text-muted-foreground">Ongoing training and development opportunities.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Recognition Programs</h3>
                  <p className="text-muted-foreground">Regular appreciation events and employee recognition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-card border border-border rounded-lg p-8 mb-16">
          <h2 className="heading-lg text-primary text-center mb-8">How to Apply</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold text-foreground mb-2">Submit Application</h3>
              <p className="text-muted-foreground">Apply online or call us directly to express your interest.</p>
            </div>
            <div>
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold text-foreground mb-2">Interview Process</h3>
              <p className="text-muted-foreground">Phone screening followed by in-person interview with our team.</p>
            </div>
            <div>
              <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold text-foreground mb-2">Start Your Career</h3>
              <p className="text-muted-foreground">Complete onboarding and begin your journey with Andrew Distribution.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card border border-border rounded-lg p-8">
          <h2 className="heading-lg text-primary mb-4">
            Ready to Start Your Career with Us?
          </h2>
          <p className="body-large text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't see a position that fits? We're always interested in talking to qualified candidates. 
            Send us your resume and let's discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Apply Today
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

export default Careers;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Truck, 
  Phone,
  Mail
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    { name: "Transportation & Logistics", href: "/transportation" },
    { name: "Newspaper Distribution", href: "/newspapers" },
    { name: "Magazines & Books", href: "/magazines" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-enterprise">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(708) 344-3200</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@andrewdistribution.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Serving the Midwest for 30+ Years</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-enterprise">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <Truck className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Andrew Distribution</h1>
              <p className="text-sm text-muted-foreground">Reliable. Professional. Trusted.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-enterprise py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/payment" className="text-foreground hover:text-primary transition-colors">
              Payment Center
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/careers" className="text-foreground hover:text-primary transition-colors">
              Careers
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="enterprise" size="sm">
              Get Quote
            </Button>
            <Button variant="cta" size="sm">
              Talk to Sales
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              
              <div className="space-y-2">
                <p className="font-medium text-primary">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block pl-4 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link to="/payment" className="text-foreground hover:text-primary transition-colors">
                Payment Center
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/careers" className="text-foreground hover:text-primary transition-colors">
                Careers
              </Link>
              
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="enterprise" size="sm" className="w-full">
                  Get Quote
                </Button>
                <Button variant="cta" size="sm" className="w-full">
                  Talk to Sales
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
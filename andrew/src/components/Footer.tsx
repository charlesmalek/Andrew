import { Link } from "react-router-dom";
import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Linkedin
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Transportation & Logistics", href: "/transportation" },
    { name: "Newspaper Distribution", href: "/newspapers" },
    { name: "Magazines & Books", href: "/magazines" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Directions", href: "/directions" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-enterprise">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-accent-coral p-2 rounded-lg">
                <Truck className="h-8 w-8 text-accent-coral-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading">Andrew Distribution</h3>
                <p className="caption text-primary-foreground/80">Reliable. Professional. Trusted.</p>
              </div>
            </Link>

            <p className="text-primary-foreground/90 max-w-md leading-relaxed">
              Serving the Midwest for over 30 years with reliable distribution services. 
              From newspapers to freight, we deliver on time, every time.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent-coral" />
                <span className="caption">2000 Anson Dr, Melrose Park, IL 60160</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-coral" />
                <span className="caption">(708) 344-3200</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-coral" />
                <span className="caption">info@andrewdistribution.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent-coral" />
                <span className="caption">Mon-Fri: 6AM-6PM | Sat: 6AM-2PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="bg-primary-light p-2 rounded-lg hover:bg-accent-coral transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-light p-2 rounded-lg hover:bg-accent-coral transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-light p-2 rounded-lg hover:bg-accent-coral transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-accent-coral transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-primary-foreground/80 hover:text-accent-coral transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-light py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Andrew Distribution. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-primary-foreground/70 hover:text-accent-coral transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-primary-foreground/70 hover:text-accent-coral transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
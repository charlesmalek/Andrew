import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Truck } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container-enterprise">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="bg-primary p-4 rounded-lg">
              <Truck className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>

          {/* Error Content */}
          <div className="space-y-6 mb-8">
            <h1 className="heading-xl text-primary">
              404 - Page Not Found
            </h1>
            <p className="body-large text-muted-foreground">
              Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or the URL might be incorrect.
            </p>
            <p className="caption text-muted-foreground">
              Requested path: <code className="bg-muted px-2 py-1 rounded text-foreground">{location.pathname}</code>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="cta" size="lg">
              <Link to="/">
                <Home className="h-5 w-5" />
                Return Home
              </Link>
            </Button>
            <Button asChild variant="enterprise" size="lg">
              <Link to="/contact">
                Contact Support
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="caption text-muted-foreground mb-4">
              Or try one of these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about" className="text-accent-blue hover:text-accent-blue-light transition-colors">
                About Us
              </Link>
              <Link to="/transportation" className="text-accent-blue hover:text-accent-blue-light transition-colors">
                Transportation
              </Link>
              <Link to="/newspapers" className="text-accent-blue hover:text-accent-blue-light transition-colors">
                Newspaper Distribution
              </Link>
              <Link to="/contact" className="text-accent-blue hover:text-accent-blue-light transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

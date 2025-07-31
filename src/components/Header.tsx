import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hello! I would like to inquire about prices.", "_blank");
  };

  return (
    <header className="bg-white shadow-elegant sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <span className="text-white font-bold text-xl">GR</span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-foreground">
                GR FRESH MEAT
              </h1>
              <p className="text-xs md:text-sm text-primary font-medium">
                WELCOME!
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right text-xs lg:text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>9 AM - 7 PM (Mon-Sat)</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>Secunderabad</span>
              </div>
            </div>
            <Button 
              variant="contact" 
              size="sm"
              onClick={handleWhatsApp}
              className="hidden lg:flex"
            >
              Contact for Prices
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-secondary transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="contact" 
                  size="sm" 
                  className="w-full"
                  onClick={handleWhatsApp}
                >
                  Contact for Prices
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
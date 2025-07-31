import { Button } from "@/components/ui/button";
import { ChefHat, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-meat.jpg";

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hello! I would like to inquire about prices for your meat cuts.", "_blank");
  };

  return (
    <section id="home" className="relative bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              25+ Years of Excellence
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              Premium Fresh Meat
              <span className="block text-primary">Cut to Perfection</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Expert meat cutting services specializing in Biryani pieces, Chicken 65 cuts, and premium Keema. 
              <span className="block mt-2 font-medium text-foreground">
                Professional quality since 2000.
              </span>
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <ChefHat className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">Expert Cutting</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">Fresh Daily</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                onClick={handleWhatsApp}
                className="shadow-glow"
              >
                Contact for Prices
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant transform hover:scale-105 transition-transform duration-500">
              <img
                src={heroImage}
                alt="Premium fresh meat cuts"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-card animate-slide-in-right">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-48 -translate-x-48 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
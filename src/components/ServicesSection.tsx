import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Scissors, ChefHat, Utensils, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Utensils,
      title: "Biryani Pieces",
      description: "Perfectly sized pieces cut specifically for authentic biryani preparation. Each piece is expertly trimmed to ensure even cooking and maximum flavor absorption.",
      features: ["Uniform sizing", "Bone-in options", "Quick cooking", "Authentic taste"]
    },
    {
      icon: Star,
      title: "Chicken 65 Pieces",
      description: "Bite-sized boneless pieces ideal for the popular Chicken 65 dish. Cut to optimal dimensions for crispy exterior and tender interior.",
      features: ["Boneless cuts", "Optimal marination", "Perfect frying size", "Restaurant quality"]
    },
    {
      icon: ChefHat,
      title: "Keema Cutting",
      description: "Premium minced meat prepared with precision and care. Ground to the perfect consistency for various dishes from kebabs to curries.",
      features: ["Fresh grinding", "Perfect texture", "No preservatives", "Custom consistency"]
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hello! I would like to inquire about your specialized cutting services.", "_blank");
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            <Scissors className="w-4 h-4 mr-2" />
            Our Specialized Cuts
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Expert Cutting Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each cut is prepared with 25+ years of expertise, ensuring the perfect piece for your specific cooking needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl lg:text-2xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-2">
                  <h5 className="font-semibold text-foreground text-sm">Features:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-white shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need Custom Cuts?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our expert team can prepare any custom cut according to your specific requirements. 
                Contact us for personalized service and competitive pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="contact" 
                  size="lg"
                  onClick={handleWhatsApp}
                >
                  Get Quote on WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Contact Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Navigation,
  Calendar
} from "lucide-react";

const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hello! I would like to inquire about your meat cutting services and prices.", "_blank");
  };

  const handleDirections = () => {
    window.open("https://maps.app.goo.gl/dpBXkg2YAcJUKKNPA", "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Shop",
      content: "1-30-572/56, Shivanagar, Kanajiguda, Thirumulgherry, Secunderabad, Telangana, 500015",
      action: handleDirections,
      actionText: "Get Directions"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      content: (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>Monday - Saturday:</span>
            <span className="font-medium">9 AM - 7 PM</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Sunday:</span>
            <span className="font-medium">6 AM - 10 PM</span>
          </div>
        </div>
      )
    },
    {
      icon: MessageCircle,
      title: "Contact for Prices",
      content: "Get instant quotes and place orders through WhatsApp. Our team responds quickly to all inquiries.",
      action: handleWhatsApp,
      actionText: "Chat on WhatsApp"
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            <Phone className="w-4 h-4 mr-2" />
            Contact Us
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience premium quality meat cuts? Contact us for competitive prices and personalized service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="hover:shadow-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="bg-gradient-primary p-2 rounded-lg">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-foreground">{info.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-muted-foreground">
                    {typeof info.content === 'string' ? info.content : info.content}
                  </div>
                  {info.action && (
                    <Button 
                      variant="outline" 
                      onClick={info.action}
                      className="w-full sm:w-auto"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      {info.actionText}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}

            {/* Main CTA */}
            <Card className="bg-gradient-primary text-white border-0">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">
                  Ready to Order?
                </h3>
                <p className="opacity-90 mb-4">
                  Contact us on WhatsApp for instant pricing and order placement
                </p>
                <Button 
                  variant="whatsapp" 
                  size="lg"
                  onClick={handleWhatsApp}
                  className="bg-white text-green-600 hover:bg-gray-50"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <div className="animate-scale-in">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="bg-gradient-primary p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span>Find Us Here</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1234567890123!2d78.51234567890123!3d17.51234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a123456789a%3A0x123456789abcdef0!2sShivanagar%2C%20Kanajiguda%2C%20Thirumulgherry%2C%20Secunderabad%2C%20Telangana%20500015!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GR Fresh Meat Location"
                  ></iframe>
                  
                  {/* Map Overlay Button */}
                  <div className="absolute bottom-4 right-4">
                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={handleDirections}
                      className="shadow-lg"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Hours Display */}
        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto bg-white shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">Today's Hours</h4>
              </div>
              <div className="text-lg font-medium text-primary">
                {new Date().getDay() === 0 ? "6 AM - 10 PM" : "9 AM - 7 PM"}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {new Date().getDay() === 0 ? "Sunday Hours" : "Monday - Saturday"}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
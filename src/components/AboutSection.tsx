import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, Award, Scissors } from "lucide-react";
import ownerPhoto from "@/assets/owner-photo.jpg";

const AboutSection = () => {
  const achievements = [
    { icon: Calendar, label: "Since 2000", value: "25+ Years" },
    { icon: Scissors, label: "Specialty", value: "Expert Cutting" },
    { icon: Award, label: "Quality", value: "Premium Grade" },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            <User className="w-4 h-4 mr-2" />
            About Our Owner
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Ramulu Gajibinkar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The expert behind GR Fresh Meat with over two decades of experience in premium meat cutting
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Owner Image */}
          <div className="relative animate-scale-in">
            <div className="relative mx-auto lg:mx-0 max-w-md">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={ownerPhoto}
                  alt="Ramulu Gajibinkar - Owner of GR Fresh Meat"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Owner Title Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      Ramulu Gajibinkar
                    </h3>
                    <p className="text-primary font-medium">
                      Owner & Master Butcher
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Professional Meat Expert Since 2000
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    With <strong className="text-foreground">25 years of dedicated experience</strong> in the meat industry, 
                    Ramulu Gajibinkar has built GR Fresh Meat into a trusted name for premium quality cuts.
                  </p>
                  <p className="text-lg leading-relaxed">
                    His expertise extends to specialized cutting techniques, ensuring each piece is perfectly prepared 
                    for your specific cooking needs.
                  </p>
                </div>
              </div>

              {/* Specializations */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Specialized Cutting Expertise:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Biryani Pieces",
                    "Chicken 65 Pieces", 
                    "Premium Keema Cutting",
                    "Custom Cuts"
                  ].map((specialty) => (
                    <div key={specialty} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300">
                    <CardContent className="p-4">
                      <achievement.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-lg font-bold text-foreground">
                        {achievement.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {achievement.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
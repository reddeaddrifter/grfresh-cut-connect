import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Calendar, Award, Scissors } from "lucide-react";

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

        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="animate-fade-in text-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Professional Meat Expert Since 2000
                </h3>
                <div className="space-y-6 text-muted-foreground max-w-3xl mx-auto">
                  <p className="text-lg leading-relaxed">
                    With <strong className="text-foreground">25 years of dedicated experience</strong> in the meat industry, 
                    Ramulu Gajibinkar has built GR Fresh Meat into a trusted name for premium quality cuts.
                  </p>
                  <p className="text-lg leading-relaxed">
                    His expertise extends to specialized cutting techniques, ensuring each piece is perfectly prepared 
                    for your specific cooking needs. Every cut reflects decades of mastery and commitment to quality.
                  </p>
                </div>
              </div>

              {/* Specializations */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h4 className="text-xl font-semibold text-foreground mb-6">
                  Specialized Cutting Expertise:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { name: "Biryani Pieces", desc: "Perfect sizing for authentic biryani" },
                    { name: "Chicken 65 Pieces", desc: "Bite-sized cuts for crispy dishes" },
                    { name: "Premium Keema", desc: "Perfectly ground fresh meat" },
                    { name: "Custom Cuts", desc: "Tailored to your requirements" }
                  ].map((specialty, index) => (
                    <div key={index} className="text-center p-4 bg-gradient-subtle rounded-xl">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Scissors className="w-6 h-6 text-white" />
                      </div>
                      <h5 className="font-semibold text-foreground mb-2">{specialty.name}</h5>
                      <p className="text-sm text-muted-foreground">{specialty.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300">
                    <CardContent className="p-6">
                      <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <div className="text-2xl font-bold text-foreground mb-2">
                        {achievement.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
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
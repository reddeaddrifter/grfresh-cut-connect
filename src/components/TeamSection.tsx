import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const TeamSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const teamMembers = [
    { name: "Ramulu Gajibinkar", role: "Owner & Master Butcher" },
    { name: "Prakash Rao", role: "Head Butcher" },
    { name: "Sunita Devi", role: "Quality Control" },
    { name: "Rajesh Kumar", role: "Senior Butcher" },
    { name: "Manjula Reddy", role: "Customer Service" },
    { name: "Venkat Reddy", role: "Meat Specialist" },
    { name: "Lakshmi Devi", role: "Hygiene Officer" },
    { name: "Anil Kumar", role: "Cutting Expert" },
    { name: "Priya Sharma", role: "Order Coordinator" },
    { name: "Ravi Teja", role: "Delivery Specialist" }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  };

  return (
    <section id="team" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            <Users className="w-4 h-4 mr-2" />
            Our Dedicated Team
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our skilled professionals work together to ensure the highest quality meat cutting and customer service
          </p>
        </div>

        {/* Team Members Scroll Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 transition-all duration-300 ${
              canScrollLeft ? 'opacity-100 hover:shadow-xl' : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 transition-all duration-300 ${
              canScrollRight ? 'opacity-100 hover:shadow-xl' : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Scrollable Team Container */}
          <div
            ref={scrollRef}
            onScroll={updateScrollButtons}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-72 hover:shadow-card transition-all duration-300 transform hover:-translate-y-1 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  {/* Avatar Placeholder */}
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  {/* Member Info */}
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-primary/30 rounded-full group-hover:bg-primary transition-colors duration-300"
                      ></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 lg:mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Years Combined Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Quality Commitment</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
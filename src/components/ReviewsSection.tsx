import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const customerReviews = [
    {
      name: "Priya Sharma",
      location: "Secunderabad",
      review: "The biryani pieces from GR Fresh Meat are perfectly cut! Ramulu ji's expertise really shows in every piece. Best quality meat in the area.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Hyderabad",
      review: "Been buying from here for 3 years. The Chicken 65 cuts are always uniform and fresh. Excellent service and very hygienic.",
      rating: 5
    },
    {
      name: "Sunita Devi",
      location: "Secunderbad",
      review: "Amazing keema cutting! The texture is perfect for kebabs. Ramulu sir has 25+ years experience and it shows in his work.",
      rating: 5
    },
    {
      name: "Venkat Reddy",
      location: "Begumpet",
      review: "Fresh meat daily, expert cutting, and reasonable prices. The biryani pieces cook evenly every time. Highly recommended!",
      rating: 5
    },
    {
      name: "Manjula Rao",
      location: "Trimulgherry",
      review: "Best meat shop in the locality! The custom cuts are exactly what I need. Clean, fresh, and professionally handled.",
      rating: 5
    },
    {
      name: "Anil Singh",
      location: "Secunderabad",
      review: "Outstanding quality! The Chicken 65 pieces are restaurant-quality. My family loves the taste and freshness.",
      rating: 5
    },
    {
      name: "Kavitha Reddy",
      location: "Alwal",
      review: "GR Fresh Meat never disappoints! Perfect cuts for biryani, always fresh, and Ramulu ji is very knowledgeable about different cuts.",
      rating: 5
    },
    {
      name: "Deepak Rao",
      location: "Secunderabad",
      review: "Excellent keema preparation! Ground to perfect consistency. Been a loyal customer for over 2 years. Trust and quality guaranteed.",
      rating: 5
    },
    {
      name: "Lakshmi Devi",
      location: "Yapral",
      review: "The meat quality is exceptional! Specialized cutting for every dish. Clean environment and very professional service.",
      rating: 5
    },
    {
      name: "Ravi Teja",
      location: "Hyderabad",
      review: "Best place for chicken cuts! The pieces are always uniform and cook perfectly. Great customer service and fair pricing.",
      rating: 5
    },
    {
      name: "Pooja Sharma",
      location: "Secunderabad",
      review: "Fresh meat daily! The biryani cuts are exactly the right size. Ramulu sir's experience makes all the difference.",
      rating: 5
    },
    {
      name: "Srinivas Reddy",
      location: "Kompally",
      review: "Top quality meat with expert cutting! The Chicken 65 pieces are perfect every time. Highly satisfied with the service.",
      rating: 5
    },
    {
      name: "Neetha Rao",
      location: "Secunderabad",
      review: "Amazing keema quality! Perfect texture for all dishes. The shop maintains high hygiene standards. Excellent work!",
      rating: 5
    },
    {
      name: "Krishnan Nair",
      location: "Trimulgherry",
      review: "Been coming here for years! Consistent quality, fresh meat, and professional cutting. Ramulu ji is a true expert.",
      rating: 5
    },
    {
      name: "Meera Devi",
      location: "Secunderabad",
      review: "Excellent meat cutting services! Custom cuts are exactly what I need. Clean, fresh, and always reliable. Five stars!",
      rating: 5
    }
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            <Quote className="w-4 h-4 mr-2" />
            Customer Reviews
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real testimonials from satisfied customers who trust our expert meat cutting services
          </p>
        </div>

        {/* Reviews Scroll Container */}
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

          {/* Scrollable Reviews Container */}
          <div
            ref={scrollRef}
            onScroll={updateScrollButtons}
            className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4 px-16 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {customerReviews.map((review, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 snap-center hover:shadow-card transition-all duration-300 transform hover:-translate-y-1 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-muted-foreground leading-relaxed mb-4 min-h-[80px]">
                    "{review.review}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(review.rating)}
                  </div>
                  
                  {/* Customer Info */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-foreground">
                      {review.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {review.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Review Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 lg:mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center">
              5.0 <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 ml-1" />
            </div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-card">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
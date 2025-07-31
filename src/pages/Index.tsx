import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <span className="text-white font-bold text-lg">GR</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">GR FRESH MEAT WELCOME!</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Premium meat cutting services since 2000
            </p>
            <div className="text-sm text-gray-500">
              <p>1-30-572/56, Shivanagar, Kanajiguda, Thirumulgherry, Secunderabad, Telangana, 500015</p>
              <p className="mt-2">© 2024 GR Fresh Meat. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

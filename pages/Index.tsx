import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { GlobalMouseFollower } from "@/components/3d/GlobalMouseFollower";

const Index = () => {
  return (
    <div className="min-h-screen">
      <GlobalMouseFollower />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

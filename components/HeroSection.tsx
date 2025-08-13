import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Zap, Star, Target, Award } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    console.log('Download resume clicked');
    const link = document.createElement('a');
    link.href = '/assets/Aarogya Raj Katwal -C.Vpdf (1).pdf';
    link.download = 'Aarogya_Raj_Katwal_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Resume download initiated');
  };

  const scrollToPortfolio = () => {
    console.log('View My Work clicked');
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      console.log('Portfolio section found, scrolling...');
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Portfolio section not found');
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.03
        }}
      />
      
      {/* Enhanced Floating Elements with More Variety */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-primary rounded-full morphing-shape float-animation opacity-30 animate-pulse-glow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-secondary rounded-full morphing-shape float-animation opacity-25 animate-pulse-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-accent rounded-full morphing-shape float-animation opacity-30 animate-pulse-glow" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-primary rounded-full morphing-shape float-animation opacity-20 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        
        {/* New floating icons */}
        <div className="absolute top-1/4 left-1/3 animate-bounce opacity-20" style={{animationDelay: '0.5s'}}>
          <Star className="w-8 h-8 text-primary animate-spin" style={{animationDuration: '3s'}} />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce opacity-20" style={{animationDelay: '1.5s'}}>
          <Target className="w-6 h-6 text-secondary animate-pulse" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-bounce opacity-20" style={{animationDelay: '2.5s'}}>
          <Award className="w-7 h-7 text-accent animate-pulse" />
        </div>
        
        {/* Particle effects */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-secondary rounded-full animate-ping opacity-40" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-accent rounded-full animate-ping opacity-50" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Enhanced Main Heading with Staggered Animation */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
              <span className="block text-foreground animate-fade-in-up" style={{animationDelay: '0.2s'}}>Aarogya Raj</span>
              <span className="block gradient-text glow-text animate-fade-in-up animate-pulse-glow" style={{animationDelay: '0.4s'}}>Katwal</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-medium text-muted-foreground mt-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>UI/UX | Front-End Knowledge</span>
            </h1>
          </div>

          {/* Enhanced Subheading with Typing Effect */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            Creative and detail-oriented UI/UX Designer with hands-on experience in Figma and a strong grasp of front-end principles. 
            Skilled in designing clean, user-centered, and development-ready interfaces.
          </p>

          {/* Enhanced CTA Buttons with Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '1s'}}>
            <Button 
              variant="creative" 
              size="lg" 
              className="group hover:scale-110 transition-all duration-500 px-8 py-3 text-lg shadow-creative hover:shadow-neon transform hover:-translate-y-1 cursor-pointer"
              onClick={scrollToPortfolio}
            >
              <Zap className="w-5 h-5 mr-3 group-hover:animate-pulse group-hover:rotate-12 transition-transform" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group hover:scale-110 transition-all duration-500 px-8 py-3 text-lg border-2 hover:bg-primary hover:text-primary-foreground transform hover:-translate-y-1 cursor-pointer"
              onClick={downloadResume}
            >
              <span className="mr-3">Download Resume</span>
              <ArrowDown className="w-5 h-5 group-hover:animate-bounce group-hover:rotate-180 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
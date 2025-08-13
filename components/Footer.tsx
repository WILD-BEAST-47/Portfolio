import { Heart, ArrowUp, Sparkles, Zap, Star, Target, Award, Mail, Phone, MapPin, ExternalLink, Linkedin, Dribbble, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileImage from "@/assets/ProfileImage.jpg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  };

  const navLinks = [
    { name: "Home", href: "#home", icon: Sparkles },
    { name: "About", href: "#about", icon: Target },
    { name: "Portfolio", href: "#portfolio", icon: Star },
    { name: "Skills", href: "#skills", icon: Zap },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/aarogya-raj-katwal", icon: Linkedin, color: "hover:text-blue-500" },
    { name: "Dribbble", href: "https://dribbble.com/Aarogya_Raj_Katwal1", icon: Dribbble, color: "hover:text-pink-500" },
    { name: "GitHub", href: "https://github.com", icon: Github, color: "hover:text-gray-400" },
  ];

  return (
    <footer className="relative py-16 border-t border-border/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-primary rounded-full opacity-10 animate-pulse morphing-shape"></div>
        <div className="absolute top-20 right-20 w-12 h-12 bg-gradient-secondary rounded-full opacity-15 animate-pulse morphing-shape" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-accent rounded-full opacity-10 animate-pulse morphing-shape" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-gradient-primary rounded-full opacity-15 animate-pulse morphing-shape" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={ProfileImage} 
                  alt="Profile" 
                  className="relative w-16 h-16 rounded-full object-cover border-4 border-accent/50 hover:border-accent transition-all duration-500 hover:scale-110 shadow-creative group-hover:shadow-neon"
                />
              </button>
              <div>
                <h3 className="text-2xl font-bold gradient-text glow-text">Aarogya Raj Katwal</h3>
                <p className="text-muted-foreground">Creative UI/UX Designer</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Crafting extraordinary digital experiences with passion and creativity. 
              Let's build something amazing together! ✨
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-card/50 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-glow ${social.color}`}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground flex items-center space-x-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Quick Links</span>
            </h4>
            <div className="space-y-3">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a 
                    key={link.name}
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer group"
                  >
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground flex items-center space-x-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>Get In Touch</span>
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">aarogyarajkatwal@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+977 9803573139</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Kadaghari, Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full group hover:shadow-glow hover:scale-110 transition-all duration-300 border-primary/30 hover:border-primary"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ProfileImage from "@/assets/ProfileImage.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  };

  const handleLetsTalkClick = () => {
    scrollToSection('contact');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center hover:scale-105 transition-transform cursor-pointer"
            >
              <img 
                src={ProfileImage} 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover border-2 border-accent/50 hover:border-accent transition-colors duration-300"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <Button 
                variant="creative" 
                size="sm"
                onClick={handleLetsTalkClick}
                className="hover:scale-105 transition-transform duration-200"
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:scale-105 transition-transform duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-lg border-b border-border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer hover:bg-primary/10 rounded-md"
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button 
                variant="creative" 
                size="sm" 
                className="w-full hover:scale-105 transition-transform duration-200"
                onClick={handleLetsTalkClick}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
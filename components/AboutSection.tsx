import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Zap, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Section not found:', sectionId);
    }
  };

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always pushing boundaries to create fresh, unique solutions"
    },
    {
      icon: Target,
      title: "Purpose",
      description: "Every design serves a purpose and solves real problems"
    },
    {
      icon: Zap,
      title: "Impact",
      description: "Creating designs that make a meaningful difference"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuinely love what I do and it shows in my work"
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-accent rounded-full blur-3xl opacity-5"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Me</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Crafting Digital
            <span className="gradient-text block">Experiences</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Creative and detail-oriented UI/UX Designer with hands-on experience in Figma and a strong grasp of front-end principles. 
            Passionate about solving real problems through modern design and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* About Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-3xl font-bold mb-6">My Approach</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                I believe in creating designs that not only look beautiful but also solve real problems. 
                My approach focuses on understanding user needs, conducting thorough research, and crafting 
                intuitive experiences that bridge aesthetics with functionality.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I thrive in team environments and cross-functional collaboration to create impactful digital experiences. 
                Skilled in designing clean, user-centered, and development-ready interfaces that deliver 
                intuitive and visually appealing solutions.
              </p>
            </div>



            <Button 
              variant="creative" 
              size="lg" 
              onClick={() => scrollToSection('portfolio')}
              className="group hover:scale-105 transition-all duration-300 px-8 py-3 text-lg"
            >
              View My Work
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 bg-card/40 backdrop-blur-sm border border-primary/10 hover:shadow-glow hover:scale-105 transition-all duration-300 group rounded-3xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { Card } from "@/components/ui/card";
import { 
  Palette, 
  Code, 
  Figma, 
  Smartphone, 
  Monitor, 
  Zap,
  Users,
  TrendingUp,
  Brain,
  Target,
  Rocket,
  Layout,
  Eye,
  MousePointer
} from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    { icon: Figma, name: "Figma", color: "from-purple-500 to-pink-500" },
    { icon: Code, name: "HTML/CSS", color: "from-orange-500 to-red-500" },
    { icon: Code, name: "JavaScript", color: "from-yellow-500 to-orange-500" },
    { icon: Smartphone, name: "Mobile Design", color: "from-blue-500 to-purple-500" },
    { icon: Monitor, name: "Responsive Design", color: "from-green-500 to-blue-500" },
    { icon: Rocket, name: "Prototyping", color: "from-indigo-500 to-purple-500" },
    { icon: Layout, name: "Wireframing", color: "from-teal-500 to-blue-500" },
    { icon: Eye, name: "Visual Design", color: "from-pink-500 to-red-500" },
    { icon: MousePointer, name: "Interaction Design", color: "from-green-600 to-teal-500" },
    { icon: Palette, name: "Color Theory", color: "from-purple-600 to-pink-600" },
    { icon: Users, name: "User Research", color: "from-blue-600 to-indigo-500" },
    { icon: TrendingUp, name: "User Testing", color: "from-orange-600 to-yellow-500" }
  ];

  const softSkills = [
    { 
      icon: Users, 
      title: "Team Collaboration", 
      desc: "Thriving in cross-functional environments",
      highlight: "Communication"
    },
    { 
      icon: Target, 
      title: "Problem Solving", 
      desc: "Turning complex challenges into elegant solutions",
      highlight: "Analytical"
    },
    { 
      icon: TrendingUp, 
      title: "User-Centered Design", 
      desc: "Always prioritizing user needs and experiences",
      highlight: "Empathetic"
    },
    { 
      icon: Brain, 
      title: "Continuous Learning", 
      desc: "Staying updated with latest design trends and technologies",
      highlight: "Adaptive"
    }
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-accent rounded-full blur-3xl opacity-5"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">My Expertise</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Skills &
            <span className="gradient-text block">Capabilities</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A diverse skill set that combines creative design thinking with technical implementation, 
            enabling me to deliver exceptional digital experiences.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Design & Development Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index}
                  className="group p-6 bg-card/40 backdrop-blur-sm border border-primary/10 hover:shadow-glow hover:scale-105 transition-all duration-300 animate-slide-up rounded-3xl text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold">{skill.name}</h4>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Design Philosophy
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 bg-card/40 backdrop-blur-sm border border-primary/10 hover:shadow-glow hover:scale-105 transition-all duration-300 group animate-scale-in rounded-3xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:animate-pulse flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-xl font-bold">{skill.title}</h4>
                        <span className="px-3 py-1 text-xs font-bold bg-primary/20 text-primary rounded-full">
                          {skill.highlight}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{skill.desc}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-scale-in">
          <Card className="p-8 bg-gradient-primary/10 backdrop-blur-sm border border-primary/10 rounded-3xl inline-block">
            <h4 className="text-2xl font-bold mb-4">Ready to Collaborate?</h4>
            <p className="text-muted-foreground mb-6 max-w-md">
              Let's work together to create something amazing. I'm always excited to take on new challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">UI/UX Design</span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">Prototyping</span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">User Research</span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">Visual Design</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
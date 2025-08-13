import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap } from "lucide-react";
import { toast } from "sonner";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Restaurant Landing Page",
      category: "web",
      description: "Designed a responsive UI/UX landing page for a restaurant, optimized for both mobile and desktop platforms. The page features a user-friendly interface for viewing trending menus and exploring the gallery, enhancing the overall customer experience.",
      image: project2,
      tags: ["UI/UX", "Responsive", "Restaurant", "Landing Page"],
      link: "https://www.figma.com/design/47t1qMXniVOp7yT9aqH7on/Projects?node-id=288-1264&t=bsW90yAnwcJpM0DB-1",
      github: "#"
    },
    {
      id: 2,
      title: "Mobile UI Design for Botanical Garden",
      category: "mobile",
      description: "A user-friendly UI design for Botanical Garden platform blending style and functionality.",
      image: project3,
      tags: ["Mobile UI", "Botanical", "User-Friendly"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "E-commerce App Design",
      category: "mobile",
      description: "Modern e-commerce mobile app design focusing on seamless shopping experience with intuitive navigation and beautiful product displays.",
      image: project1,
      tags: ["E-commerce", "Mobile App", "UI/UX", "Shopping"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Dashboard Interface Design",
      category: "web",
      description: "Clean and functional dashboard design for business applications with data visualization and user management features.",
      image: project2,
      tags: ["Dashboard", "Web App", "Data Visualization", "Admin"],
      link: "#",
      github: "#"
    }
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Design" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "branding", name: "Branding" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project: any) => {
    console.log('Project clicked:', project.title);
    if (project.link && project.link !== "#") {
      window.open(project.link, '_blank');
    } else {
      toast.info("Project link coming soon!");
    }
  };

  const handleGitHubClick = (project: any, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('GitHub clicked for:', project.title);
    if (project.github && project.github !== "#") {
      window.open(project.github, '_blank');
    } else {
      toast.info("GitHub repository coming soon!");
    }
  };

  const handleLiveDemoClick = (project: any, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Live demo clicked for:', project.title);
    if (project.link && project.link !== "#") {
      window.open(project.link, '_blank');
    } else {
      toast.info("Live demo coming soon!");
    }
  };

  const viewAllProjects = () => {
    console.log('View all projects clicked');
    window.open('https://www.figma.com/design/47t1qMXniVOp7yT9aqH7on/Projects?node-id=431-4697&t=1C7WezlTlbRuAbQV-1', '_blank');
  };

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-5 transform -translate-y-1/2"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-5"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Creative
            <span className="gradient-text block">Portfolio</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated selection of my best work, showcasing innovative solutions 
            and creative approaches to complex design challenges.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-scale-in">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "creative" : "outline"}
              onClick={() => {
                console.log('Filter clicked:', filter.name);
                setActiveFilter(filter.id);
              }}
              className="rounded-full hover:scale-105 transition-all duration-300 px-6 py-2"
            >
              {filter.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden bg-card/40 backdrop-blur-sm border border-primary/10 hover:shadow-glow hover:scale-105 transition-all duration-500 animate-slide-up cursor-pointer rounded-3xl"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary/0 group-hover:bg-gradient-primary/20 transition-all duration-300"></div>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full shadow-lg hover:scale-110 transition-transform w-12 h-12"
                    onClick={(e) => handleLiveDemoClick(project, e)}
                    title="View Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="w-12 h-12"
                    onClick={(e) => handleGitHubClick(project, e)}
                    title="View Source Code"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center animate-scale-in">
          <Button 
            variant="outline" 
            size="lg" 
            className="group hover:scale-105 transition-all duration-300 px-8 py-3 text-lg border-2"
            onClick={viewAllProjects}
          >
            <span className="mr-3">View All Projects</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
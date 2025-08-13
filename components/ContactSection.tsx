import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  MessageCircle, 
  MapPin, 
  Send, 
  Linkedin, 
  Twitter, 
  Github,
  Calendar,
  ExternalLink,
  Phone,
  Dribbble
} from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aarogyarajkatwal@gmail.com",
      action: "mailto:aarogyarajkatwal@gmail.com",
      type: "email"
    },
    {
      icon: MessageCircle,
      title: "Phone",
      value: "+977 9803573139",
      action: "tel:+9779803573139",
      type: "phone"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kadaghari, Kathmandu, Nepal",
      action: "https://maps.google.com/?q=Kadaghari,Kathmandu,Nepal",
      type: "location"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/aarogya-raj-katwal", label: "LinkedIn" },
    { icon: Dribbble, href: "https://dribbble.com/Aarogya_Raj_Katwal1", label: "Dribbble" },
    { icon: Github, href: "https://github.com", label: "GitHub" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactClick = (contact: any) => {
    if (contact.type === 'email') {
      window.open(contact.action, '_blank');
    } else if (contact.type === 'phone') {
      window.open(contact.action, '_blank');
    } else if (contact.type === 'location') {
      window.open(contact.action, '_blank');
    }
  };

  const handleSocialClick = (href: string, label: string) => {
    window.open(href, '_blank');
  };

  const bookConsultation = () => {
    const calendlyUrl = "https://calendly.com/your-username/consultation";
    window.open(calendlyUrl, '_blank');
    toast.info("Consultation booking feature coming soon! For now, please email me directly.");
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-secondary rounded-full blur-3xl opacity-5"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Let's Create
            <span className="gradient-text block">Together</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? I'd love to discuss how we can create 
            impactful digital experiences together. Let's connect and bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-10 bg-card/40 backdrop-blur-sm border border-primary/10 animate-slide-up rounded-3xl">
            <h3 className="text-3xl font-bold mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary transition-colors h-12 text-base"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary transition-colors h-12 text-base"
                  />
                </div>
              </div>
              
              <Input
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-background/50 border-primary/20 focus:border-primary transition-colors h-12 text-base"
              />
              
              <Textarea
                placeholder="Tell me about your project..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-background/50 border-primary/20 resize-none focus:border-primary transition-colors text-base"
              />
              
              <Button 
                type="submit" 
                variant="creative" 
                size="lg" 
                className="w-full group hover:scale-105 transition-all duration-300 h-12 text-lg"
                disabled={isSubmitting}
              >
                <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-scale-in">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={index}
                    className="p-8 bg-card/40 backdrop-blur-sm border border-primary/10 hover:shadow-glow hover:scale-105 transition-all duration-300 group cursor-pointer rounded-3xl"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleContactClick(info)}
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:animate-pulse">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-foreground mb-2">{info.title}</h4>
                        <p className="text-muted-foreground text-lg">{info.value}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Availability Card */}
            <Card className="p-8 bg-gradient-primary/10 backdrop-blur-sm border border-primary/10 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold text-primary">Available for new opportunities</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm currently accepting new freelance projects and collaborations. 
                Let's discuss your next big idea!
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full hover:scale-105 transition-all duration-300 h-12 text-lg border-2"
                onClick={bookConsultation}
              >
                <Calendar className="w-5 h-5 mr-3" />
                Book a Free Consultation
              </Button>
            </Card>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Follow Me</h4>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleSocialClick(social.href, social.label)}
                      className="w-full p-4 bg-gradient-primary/10 backdrop-blur-sm border border-primary/10 rounded-2xl hover:shadow-glow hover:scale-105 transition-all duration-300 group flex items-center gap-4"
                      aria-label={social.label}
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-pulse">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Response */}
            <Card className="p-6 bg-gradient-primary/10 backdrop-blur-sm border border-primary/10 rounded-2xl">
              <h4 className="text-lg font-bold mb-3">Quick Response</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond within 24 hours. For urgent inquiries, 
                feel free to call or connect on LinkedIn.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
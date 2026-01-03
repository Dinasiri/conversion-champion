import { Monitor, Layers, PenTool, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Monitor,
    title: "Web Design & Development",
    description: "Custom, responsive websites built with modern technologies that look stunning on all devices and drive real results.",
    features: ["Responsive Design", "Fast Loading", "SEO Optimized"],
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, engaging experiences keeping your audience coming back for more.",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: PenTool,
    title: "Graphic Design & Branding",
    description: "Memorable visual identities and graphics that tell your brand story and set you apart from the competition.",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials"],
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="services" 
      ref={ref}
      className={`py-20 lg:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">What I Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Services I Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive design solutions tailored to elevate your brand and achieve your business goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="ghost" 
                className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
                onClick={scrollToContact}
              >
                Learn More 
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

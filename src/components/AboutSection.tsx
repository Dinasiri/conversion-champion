import { Code, Palette, Layout, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import profileImage from "@/assets/dinasiri-profile.jpg";

const skills = [
  { icon: Layout, name: "Web Design", description: "Creating beautiful, responsive websites" },
  { icon: Sparkles, name: "UI/UX Design", description: "User-centered design experiences" },
  { icon: Palette, name: "Graphic Design", description: "Eye-catching visual content" },
  { icon: Code, name: "Branding", description: "Memorable brand identities" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 lg:py-32 bg-muted/30 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[3/4] max-w-sm mx-auto lg:mx-0 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-card rounded-3xl shadow-xl overflow-hidden">
                <img 
                  src={profileImage}
                  alt="Dinasiri Osman - Web & Graphic Designer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
          
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Crafting Digital Experiences
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a passionate web and graphic designer dedicated to creating visually appealing, 
              user-friendly websites and graphics for businesses, startups, and personal brands. 
              With a keen eye for detail and a love for clean design, I transform ideas into 
              modern, professional, and engaging digital experiences.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              My approach combines creativity with strategic thinking to deliver solutions 
              that not only look great but also achieve your business goals.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <skill.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

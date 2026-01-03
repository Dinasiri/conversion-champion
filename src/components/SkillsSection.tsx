import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Code, PenTool, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    id: 1,
    title: "Web Design",
    icon: Palette,
    skills: [
      { name: "UI/UX Design", level: 95 },
      { name: "Responsive Design", level: 90 },
      { name: "Figma", level: 92 },
      { name: "Adobe XD", level: 85 },
    ],
    description: "Creating beautiful, intuitive interfaces that users love to interact with.",
  },
  {
    id: 2,
    title: "Web Development",
    icon: Code,
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "WordPress", level: 90 },
      { name: "React", level: 80 },
    ],
    description: "Building fast, responsive websites with clean, maintainable code.",
  },
  {
    id: 3,
    title: "Graphic Design",
    icon: PenTool,
    skills: [
      { name: "Branding", level: 92 },
      { name: "Logo Design", level: 95 },
      { name: "Illustrator", level: 88 },
      { name: "Photoshop", level: 90 },
    ],
    description: "Crafting memorable visual identities that tell your brand's story.",
  },
  {
    id: 4,
    title: "Other Skills",
    icon: Lightbulb,
    skills: [
      { name: "SEO Basics", level: 80 },
      { name: "Social Media Graphics", level: 88 },
      { name: "Typography", level: 92 },
      { name: "Color Theory", level: 95 },
    ],
    description: "Complementary skills that enhance every project I work on.",
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            My Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse skill set combining creativity and technical expertise to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              style={{
                transitionDelay: `${categoryIndex * 100}ms`,
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    year: "2024 – Present",
    role: "UI/UX Designer",
    company: "Freelance",
    description:
      "Focused on creating user-friendly digital interfaces for web and mobile applications. Conducting user research, wireframing, and prototyping to deliver seamless user experiences.",
    highlights: ["User Research", "Wireframing", "Prototyping", "Mobile UI"],
  },
  {
    id: 2,
    year: "2023 – 2024",
    role: "Graphic Designer",
    company: "Freelance",
    description:
      "Designed logos, branding materials, and social media graphics for multiple clients across various industries. Developed comprehensive brand guidelines and visual identity systems.",
    highlights: ["Logo Design", "Brand Identity", "Social Media", "Print Design"],
  },
  {
    id: 3,
    year: "2022 – 2023",
    role: "Web Designer",
    company: "Freelance",
    description:
      "Created responsive websites and landing pages for small businesses and startups. Specialized in WordPress development and custom theme creation.",
    highlights: ["WordPress", "Landing Pages", "Responsive Design", "E-commerce"],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-20 lg:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            My Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my professional growth and the milestones that shaped my career.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-2 text-primary mb-3">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.year}</span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

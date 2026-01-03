import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-primary font-medium text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Experience
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            My Journey
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            A timeline of my professional growth and the milestones that shaped my career.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + (index * 0.2) }}
                />

                {/* Content */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <motion.div 
                    className="p-6 bg-card rounded-2xl border border-border transition-colors"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)",
                      borderColor: "hsl(var(--primary) / 0.5)"
                    }}
                  >
                    <div className="flex items-center gap-2 text-primary mb-3">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.year}</span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className="p-2 rounded-lg bg-primary/10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Briefcase className="h-5 w-5 text-primary" />
                      </motion.div>
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
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <motion.span
                          key={highlight}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.6 + (index * 0.2) + (highlightIndex * 0.05) }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

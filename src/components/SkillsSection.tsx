import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
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
            Skills
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            My Expertise
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            A diverse skill set combining creativity and technical expertise to deliver exceptional digital experiences.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="p-8 bg-card rounded-2xl border border-border transition-colors"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)",
                borderColor: "hsl(var(--primary) / 0.5)"
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="p-3 rounded-xl bg-primary/10"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className="h-6 w-6 text-primary" />
                </motion.div>
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
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <motion.span 
                        className="text-sm font-medium text-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.5 + (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span 
                        className="text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.7 + (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: "0%" }}
                        transition={{ 
                          duration: 1, 
                          delay: 0.3 + (categoryIndex * 0.1) + (skillIndex * 0.1),
                          ease: "easeOut" 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

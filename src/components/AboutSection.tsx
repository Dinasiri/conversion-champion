import { Code, Palette, Layout, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/dinasiri-profile.jpg";

const skills = [
  { icon: Layout, name: "Web Design", description: "Creating beautiful, responsive websites" },
  { icon: Sparkles, name: "UI/UX Design", description: "User-centered design experiences" },
  { icon: Palette, name: "Graphic Design", description: "Eye-catching visual content" },
  { icon: Code, name: "Branding", description: "Memorable brand identities" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 lg:py-32 bg-muted/30 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="aspect-[3/4] max-w-sm mx-auto lg:mx-0 relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl"
                initial={{ rotate: 0 }}
                animate={isInView ? { rotate: 6 } : { rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.div 
                className="absolute inset-0 bg-card rounded-3xl shadow-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={profileImage}
                  alt="Dinasiri Osman - Web & Graphic Designer"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span 
              className="text-primary font-medium text-sm uppercase tracking-wider"
              variants={itemVariants}
            >
              About Me
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6"
              variants={itemVariants}
            >
              Crafting Digital Experiences
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg mb-6 leading-relaxed"
              variants={itemVariants}
            >
              I'm a passionate web and graphic designer dedicated to creating visually appealing, 
              user-friendly websites and graphics for businesses, startups, and personal brands. 
              With a keen eye for detail and a love for clean design, I transform ideas into 
              modern, professional, and engaging digital experiences.
            </motion.p>
            <motion.p 
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
              variants={itemVariants}
            >
              My approach combines creativity with strategic thinking to deliver solutions 
              that not only look great but also achieve your business goals.
            </motion.p>
            
            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="p-2 bg-primary/10 rounded-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

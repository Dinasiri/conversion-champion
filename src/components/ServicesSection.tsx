import { Monitor, Layers, PenTool, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section 
      id="services" 
      ref={ref}
      className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
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
            What I Do
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Services I Offer
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Comprehensive design solutions tailored to elevate your brand and achieve your business goals.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="group p-8 bg-card rounded-2xl border border-border transition-colors"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)",
                borderColor: "hsl(var(--primary) / 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <service.icon className="h-7 w-7 text-primary" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-center text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.5 + (index * 0.1) + (featureIndex * 0.05) }}
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 bg-primary rounded-full mr-2"
                      whileHover={{ scale: 1.5 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              
              <motion.div whileHover={{ x: 5 }}>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
                  onClick={scrollToContact}
                >
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

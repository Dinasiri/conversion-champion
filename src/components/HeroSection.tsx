import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-secondary/10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 20, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          y: [0, -30, 0],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6 border border-secondary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--secondary) / 0.3)" }}
          >
            Web & Graphic Designer
          </motion.span>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hi, I'm{" "}
            <motion.span 
              className="text-gradient-primary inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              Dinasiri Osman
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Transforming ideas into stunning websites and graphics.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -10px hsl(var(--secondary) / 0.4)" }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-teal"
                onClick={() => scrollToSection("portfolio")}
              >
                See My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.button 
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-secondary transition-colors p-2 rounded-full hover:bg-secondary/10"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;

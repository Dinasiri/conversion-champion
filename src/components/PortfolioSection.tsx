import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const categories = ["All", "Web Design", "Graphic Design", "Branding"];

const projects = [
  {
    id: 1,
    title: "Luxury Brand Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    description: "A sophisticated e-commerce platform for a luxury fashion brand.",
    fullDescription: "A sophisticated e-commerce platform for a luxury fashion brand. This project involved creating a seamless shopping experience with elegant product showcases, intuitive navigation, and a checkout process optimized for conversions. The design emphasizes high-end aesthetics while maintaining excellent usability across all devices.",
    client: "Fashion House Co.",
    year: "2025",
    services: ["Web Design", "UI/UX", "E-commerce"],
  },
  {
    id: 2,
    title: "Tech Startup Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    description: "Complete brand identity for an innovative tech startup.",
    fullDescription: "Complete brand identity for an innovative tech startup. This comprehensive branding project included logo design, color palette development, typography selection, and brand guidelines. The goal was to create a modern, trustworthy identity that appeals to both investors and end-users.",
    client: "TechVision Inc.",
    year: "2025",
    services: ["Logo Design", "Brand Guidelines", "Visual Identity"],
  },
  {
    id: 3,
    title: "Restaurant Menu Design",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=800&fit=crop",
    description: "Modern menu design for an upscale dining establishment.",
    fullDescription: "Modern menu design for an upscale dining establishment. Created an elegant, easy-to-read menu that complements the restaurant's sophisticated atmosphere. The design features beautiful typography, strategic use of white space, and subtle decorative elements that enhance the dining experience.",
    client: "Gourmet Kitchen",
    year: "2024",
    services: ["Menu Design", "Print Design", "Typography"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
    description: "Clean and minimalist portfolio for a creative photographer.",
    fullDescription: "Clean and minimalist portfolio for a creative photographer. This website showcases the photographer's work with a focus on letting the images speak for themselves. Features include a responsive gallery, smooth animations, and an optimized loading experience for high-resolution images.",
    client: "Studio Lens",
    year: "2024",
    services: ["Web Design", "Gallery System", "Performance Optimization"],
  },
  {
    id: 5,
    title: "Event Poster Series",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop",
    description: "Eye-catching poster designs for a music festival.",
    fullDescription: "Eye-catching poster designs for a music festival. Created a series of vibrant, dynamic posters that capture the energy and excitement of live music. Each poster maintains brand consistency while featuring unique artistic elements for different performers and events.",
    client: "Melody Fest",
    year: "2024",
    services: ["Poster Design", "Print Materials", "Event Branding"],
  },
  {
    id: 6,
    title: "Health App Interface",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    description: "Intuitive UI design for a health and wellness application.",
    fullDescription: "Intuitive UI design for a health and wellness application. Designed a user-friendly interface that makes tracking health metrics simple and engaging. The app features clear data visualization, motivational elements, and accessibility-focused design principles.",
    client: "HealthFirst",
    year: "2024",
    services: ["UI Design", "UX Research", "Mobile App Design"],
  },
  {
    id: 7,
    title: "Coffee Shop Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=800&fit=crop",
    description: "Warm and inviting brand identity for an artisan coffee shop.",
    fullDescription: "Warm and inviting brand identity for an artisan coffee shop. This branding project created a cozy, approachable identity that reflects the shop's commitment to quality and community. Deliverables included logo, packaging design, signage, and social media templates.",
    client: "Brew & Co.",
    year: "2023",
    services: ["Brand Identity", "Packaging", "Signage Design"],
  },
  {
    id: 8,
    title: "Annual Report Design",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop",
    description: "Professional annual report design for a financial firm.",
    fullDescription: "Professional annual report design for a financial firm. Created a comprehensive 50+ page report featuring clear data visualization, executive photography, and a cohesive layout that communicates financial performance effectively to stakeholders.",
    client: "FinanceHub",
    year: "2023",
    services: ["Report Design", "Data Visualization", "Print Production"],
  },
];

type Project = typeof projects[0];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section 
      id="portfolio" 
      ref={ref}
      className="py-20 lg:py-32 bg-muted/30 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
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
            Portfolio
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            A selection of my best work across web design, graphic design, and branding.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)",
                  borderColor: "hsl(var(--primary) / 0.5)"
                }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <motion.img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button 
                        size="sm" 
                        className="rounded-full"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {project.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Client: {project.client}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <img 
                  src={selectedProject.fullImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              
              <div className="p-6 lg:p-8">
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider px-2 py-1 bg-primary/10 rounded-full">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {selectedProject.year}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl lg:text-3xl font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Client</h4>
                    <p className="text-muted-foreground">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((service) => (
                        <motion.span 
                          key={service}
                          className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                          whileHover={{ scale: 1.05 }}
                        >
                          {service}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      onClick={() => {
                        setSelectedProject(null);
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="rounded-full"
                    >
                      Start a Similar Project
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;

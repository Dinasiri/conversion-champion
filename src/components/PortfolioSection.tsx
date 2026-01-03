import { useState } from "react";
import { ExternalLink, Github, Eye, ArrowRight, X, ZoomIn, ZoomOut } from "lucide-react";
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
    liveUrl: "https://example.com/fashion-house",
    githubUrl: "https://github.com/example/fashion-house",
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
    liveUrl: "https://example.com/techvision",
    githubUrl: null,
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
    liveUrl: null,
    githubUrl: null,
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
    liveUrl: "https://example.com/studio-lens",
    githubUrl: "https://github.com/example/studio-lens",
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
    liveUrl: null,
    githubUrl: null,
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
    liveUrl: "https://example.com/healthfirst",
    githubUrl: "https://github.com/example/healthfirst",
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
    liveUrl: "https://example.com/brew-co",
    githubUrl: null,
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
    liveUrl: null,
    githubUrl: null,
  },
];

type Project = typeof projects[0];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
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
            className="text-secondary font-medium text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Portfolio
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2 mb-4"
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
                className={`rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground shadow-teal" 
                    : "hover:border-secondary hover:text-secondary"
                }`}
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
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100
                }}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-premium hover:shadow-teal transition-all duration-500 cursor-pointer"
                whileHover={{ 
                  y: -12,
                  borderColor: "hsl(var(--secondary))"
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <motion.img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent flex flex-col items-center justify-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="flex gap-3"
                      initial={{ y: 30, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Button 
                        size="sm" 
                        className="rounded-full bg-card text-foreground hover:bg-secondary hover:text-secondary-foreground"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      {project.liveUrl && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="rounded-full border-card text-card hover:bg-card hover:text-foreground"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxImage({ url: project.fullImage, title: project.title });
                          }}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="rounded-full border-card text-card hover:bg-card hover:text-foreground"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </motion.div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <motion.span 
                    className="inline-block text-xs font-medium text-secondary uppercase tracking-wider px-2 py-1 bg-secondary/10 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.span>
                  <h3 className="text-lg font-display font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      {project.client} • {project.year}
                    </p>
                    <motion.button
                      className="text-secondary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      whileHover={{ x: 3 }}
                    >
                      Details <ArrowRight className="h-3 w-3" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 border-secondary/20">
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <motion.img 
                  src={selectedProject.fullImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              
              <div className="p-6 lg:p-8">
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <motion.span 
                      className="text-xs font-medium text-secondary uppercase tracking-wider px-3 py-1 bg-secondary/10 rounded-full"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedProject.category}
                    </motion.span>
                    <motion.span 
                      className="text-xs text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {selectedProject.year}
                    </motion.span>
                  </div>
                  <DialogTitle className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <motion.p 
                  className="text-muted-foreground mt-4 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedProject.fullDescription}
                </motion.p>
                
                <motion.div 
                  className="grid sm:grid-cols-2 gap-6 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Client</h4>
                    <p className="text-muted-foreground">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((service, idx) => (
                        <motion.span 
                          key={service}
                          className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground hover:bg-secondary/10 hover:text-secondary transition-colors duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + idx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {service}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="mt-8 pt-6 border-t border-border flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {selectedProject.liveUrl && (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        onClick={() => setLightboxImage({ url: selectedProject.fullImage, title: selectedProject.title })}
                        className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View Live Preview
                      </Button>
                    </motion.div>
                  )}
                  {selectedProject.githubUrl && (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        variant="outline"
                        onClick={() => window.open(selectedProject.githubUrl!, '_blank')}
                        className="rounded-full hover:border-secondary hover:text-secondary"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </motion.div>
                  )}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setSelectedProject(null);
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="rounded-full hover:border-accent hover:text-accent hover:bg-accent/10"
                    >
                      Start a Similar Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md"
            onClick={() => {
              setLightboxImage(null);
              setIsZoomed(false);
            }}
          >
            {/* Controls */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <motion.button
                className="p-3 bg-card/80 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isZoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
              </motion.button>
              <motion.button
                className="p-3 bg-card/80 rounded-full text-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
                onClick={() => {
                  setLightboxImage(null);
                  setIsZoomed(false);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Title */}
            <motion.div
              className="absolute top-4 left-4 z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-foreground bg-card/80 px-4 py-2 rounded-full">
                {lightboxImage.title}
              </h3>
            </motion.div>

            {/* Image */}
            <motion.div
              className={`relative ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'} max-w-[90vw] max-h-[85vh]`}
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <motion.img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="rounded-2xl shadow-2xl object-contain max-h-[85vh]"
                animate={{ scale: isZoomed ? 1.5 : 1 }}
                transition={{ type: "spring", damping: 20 }}
                style={{ transformOrigin: "center center" }}
              />
            </motion.div>

            {/* Hint */}
            <motion.p
              className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground text-sm bg-card/80 px-4 py-2 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Click image to {isZoomed ? 'zoom out' : 'zoom in'} • Click outside or × to close
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;

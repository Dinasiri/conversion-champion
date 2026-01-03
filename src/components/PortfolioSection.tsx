import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Web Design", "Graphic Design", "Branding"];

const projects = [
  {
    id: 1,
    title: "Luxury Brand Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "A sophisticated e-commerce platform for a luxury fashion brand.",
    client: "Fashion House Co.",
  },
  {
    id: 2,
    title: "Tech Startup Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    description: "Complete brand identity for an innovative tech startup.",
    client: "TechVision Inc.",
  },
  {
    id: 3,
    title: "Restaurant Menu Design",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
    description: "Modern menu design for an upscale dining establishment.",
    client: "Gourmet Kitchen",
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    description: "Clean and minimalist portfolio for a creative photographer.",
    client: "Studio Lens",
  },
  {
    id: 5,
    title: "Event Poster Series",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    description: "Eye-catching poster designs for a music festival.",
    client: "Melody Fest",
  },
  {
    id: 6,
    title: "Health App Interface",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Intuitive UI design for a health and wellness application.",
    client: "HealthFirst",
  },
  {
    id: 7,
    title: "Coffee Shop Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop",
    description: "Warm and inviting brand identity for an artisan coffee shop.",
    client: "Brew & Co.",
  },
  {
    id: 8,
    title: "Annual Report Design",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    description: "Professional annual report design for a financial firm.",
    client: "FinanceHub",
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my best work across web design, graphic design, and branding.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button size="sm" className="rounded-full">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

import { Star, Quote, Play, X } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "Dinasiri transformed our vision into a stunning website that exceeded all expectations. The attention to detail and creative approach made all the difference.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, Brew & Co.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Working with Dinasiri was a fantastic experience. The branding package perfectly captured our coffee shop's essence and helped us stand out in a competitive market.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, Fashion House",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "The e-commerce website Dinasiri designed has significantly improved our online presence. Clean, modern, and incredibly user-friendly. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    role: "Owner, Park Studios",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Fast, reliable, and talented. Dinasiri delivered our complete brand identity on time and exceeded our expectations. The logo design is exactly what we envisioned.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Founder, Wellness Hub",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    content: "Excellent graphic design services! Very creative and professional. Dinasiri understood our vision from day one and translated it beautifully into our website.",
    rating: 5,
  },
];

const videoTestimonials = [
  {
    id: 1,
    name: "Creative Studio Review",
    role: "Brand Identity Project",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
    videoId: "dQw4w9WgXcQ", // Replace with actual testimonial video IDs
    description: "How our brand identity was transformed",
  },
  {
    id: 2,
    name: "E-commerce Success",
    role: "Website Design Project",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    videoId: "jNQXAC9IVRw",
    description: "Our online store redesign journey",
  },
  {
    id: 3,
    name: "Startup Branding",
    role: "Complete Branding Package",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
    videoId: "FTQbiNvZqaY",
    description: "From idea to iconic brand",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<typeof videoTestimonials[0] | null>(null);

  return (
    <section
      id="testimonials"
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
            Testimonials
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            What Clients Say
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            Don't just take my word for it – here's what my clients have to say about working together.
          </motion.p>
        </motion.div>

        {/* Video Testimonials Row */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center flex items-center justify-center gap-2">
            <Play className="h-5 w-5 text-primary" />
            Video Testimonials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-premium hover:shadow-teal transition-shadow duration-300"
                onClick={() => setSelectedVideo(video)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={video.thumbnail}
                    alt={`${video.name} video testimonial`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  
                  {/* Play Button */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-teal"
                      whileHover={{ scale: 1.2 }}
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(26, 188, 156, 0.4)", 
                          "0 0 0 20px rgba(26, 188, 156, 0)", 
                          "0 0 0 0 rgba(26, 188, 156, 0.4)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Play className="h-7 w-7 text-primary-foreground ml-1" fill="currentColor" />
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Video Info */}
                <div className="p-4 bg-card">
                  <h4 className="text-foreground font-semibold text-lg mb-1">
                    {video.name}
                  </h4>
                  <p className="text-primary text-sm font-medium mb-2">
                    {video.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div 
                    className="relative p-8 h-full bg-card rounded-2xl border border-border transition-colors"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)",
                      borderColor: "hsl(var(--primary) / 0.5)"
                    }}
                  >
                    <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: 1 + (i * 0.1) }}
                        >
                          <Star className="h-4 w-4 fill-accent text-accent" />
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-4">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-4">
                      <motion.img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4" />
            <CarouselNext className="hidden sm:flex -right-4" />
          </Carousel>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl bg-card rounded-2xl overflow-hidden shadow-teal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedVideo(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Video Player */}
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                  title={selectedVideo.name}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {selectedVideo.name}
                </h3>
                <p className="text-primary font-medium mb-2">
                  {selectedVideo.role}
                </p>
                <p className="text-muted-foreground">
                  {selectedVideo.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialsSection;

import { Star, Quote, Play } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "Dinasiri transformed our vision into a stunning website that exceeded all expectations. The attention to detail and creative approach made all the difference.",
    rating: 5,
    hasVideo: true,
    videoThumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, Brew & Co.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "Working with Dinasiri was a fantastic experience. The branding package perfectly captured our coffee shop's essence and helped us stand out in a competitive market.",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, Fashion House",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "The e-commerce website Dinasiri designed has significantly improved our online presence. Clean, modern, and incredibly user-friendly. Highly recommended!",
    rating: 5,
    hasVideo: true,
    videoThumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "David Park",
    role: "Owner, Park Studios",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Fast, reliable, and talented. Dinasiri delivered our complete brand identity on time and exceeded our expectations. The logo design is exactly what we envisioned.",
    rating: 5,
    hasVideo: false,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Founder, Wellness Hub",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    content: "Excellent graphic design services! Very creative and professional. Dinasiri understood our vision from day one and translated it beautifully into our website.",
    rating: 5,
    hasVideo: true,
    videoThumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<typeof testimonials[0] | null>(null);

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
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            Video Testimonials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials
              .filter((t) => t.hasVideo)
              .map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden"
                  onClick={() => setSelectedVideo(testimonial)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.img
                    src={testimonial.videoThumbnail}
                    alt={`${testimonial.name} video testimonial`}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.2 }}
                      animate={{ 
                        boxShadow: ["0 0 0 0 rgba(var(--primary), 0.4)", "0 0 0 20px rgba(var(--primary), 0)", "0 0 0 0 rgba(var(--primary), 0.4)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Play className="h-6 w-6 text-primary-foreground ml-1" />
                    </motion.div>
                  </motion.div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-foreground font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role}
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
              {testimonials.map((testimonial, index) => (
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
                          <Star className="h-4 w-4 fill-primary text-primary" />
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
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <img
                src={selectedVideo?.image}
                alt={selectedVideo?.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <span className="block">{selectedVideo?.name}</span>
                <span className="text-sm font-normal text-muted-foreground">
                  {selectedVideo?.role}
                </span>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-primary" />
              </div>
              <p className="text-muted-foreground">
                Video testimonial coming soon
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                "{selectedVideo?.content}"
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TestimonialsSection;

import { Star, Quote, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedVideo, setSelectedVideo] = useState<typeof testimonials[0] | null>(null);

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it – here's what my clients have to say about working together.
          </p>
        </div>

        {/* Video Testimonials Row */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            Video Testimonials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials
              .filter((t) => t.hasVideo)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden"
                  onClick={() => setSelectedVideo(testimonial)}
                >
                  <img
                    src={testimonial.videoThumbnail}
                    alt={`${testimonial.name} video testimonial`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-6 w-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-foreground font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Text Testimonials Carousel */}
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
                <div className="relative p-8 h-full bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                  <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-4">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-4" />
          <CarouselNext className="hidden sm:flex -right-4" />
        </Carousel>
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

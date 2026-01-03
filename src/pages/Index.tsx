import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className={`min-h-screen bg-background ${isLoading ? 'overflow-hidden' : ''}`}>
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <PortfolioSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <BackToTopButton />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Index;

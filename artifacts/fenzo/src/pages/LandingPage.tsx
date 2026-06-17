import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/sections/Navbar";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TimelineSection from "@/components/sections/TimelineSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TechMarquee from "@/components/sections/TechMarquee";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import { FaInstagram } from "react-icons/fa";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          >
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent"
            >
              FENZO
            </motion.h1>
            <div className="w-48 h-1 mt-8 overflow-hidden rounded-full bg-muted">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <ProcessSection />
          <PortfolioSection />
          <TimelineSection />
          <TechMarquee />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </main>
        
        <footer className="py-16 border-t border-border/40 bg-card/30 backdrop-blur-md">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="mb-4 text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">FENZO</h3>
                <p className="text-muted-foreground leading-relaxed">Building Digital Products That Move Businesses Forward. We craft premium software experiences.</p>
              </div>
              
              <div>
                <h4 className="mb-6 font-bold uppercase tracking-wider text-sm">Company</h4>
                <ul className="space-y-4 text-muted-foreground">
                  <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                </ul>
              </div>

              <div>
                <h4 className="mb-6 font-bold uppercase tracking-wider text-sm">Services</h4>
                <ul className="space-y-4 text-muted-foreground">
                  <li><a href="/work/websites" className="hover:text-primary transition-colors">Website Development</a></li>
                  <li><a href="/work/mobile" className="hover:text-primary transition-colors">Mobile App Development</a></li>
                  <li><a href="/work/ecommerce" className="hover:text-primary transition-colors">E-Commerce Solutions</a></li>
                  <li><a href="/work/ai" className="hover:text-primary transition-colors">AI Solutions</a></li>
                  <li><a href="/work/dashboards" className="hover:text-primary transition-colors">Logo Design</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-6 font-bold uppercase tracking-wider text-sm">Contact</h4>
                <ul className="space-y-4 text-muted-foreground mb-8">
                  <li>info.fenzo@gmail.com</li>
                  <li>+91 6383213966</li>
                  <li>Katpadi, Vellore, Tamil Nadu, India</li>
                </ul>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/fenzo_webdesign/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center border border-border/50 hover:border-primary hover:text-primary transition-all">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-8 mt-16 text-center border-t text-sm font-medium text-muted-foreground border-border/40">
              <p>&copy; 2026 FENZO. All Rights Reserved. Built with passion.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20 px-4 mx-auto md:px-6">
        <a href="#" className="flex items-center gap-2" data-testid="link-home">
          <span className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            FENZO
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#process" className="hover:text-foreground transition-colors">Process</a>
          <a href="#technologies" className="hover:text-foreground transition-colors">Technologies</a>
        </nav>

        <Button 
          data-testid="button-start-project"
          className="relative group overflow-hidden bg-transparent border border-primary/50 text-foreground hover:bg-primary/10 transition-all duration-300"
        >
          <span className="relative z-10">Start Project</span>
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>
    </motion.header>
  );
}

import { useState, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Building2, Users, Star, Handshake } from "lucide-react";

const aboutLinks = [
  {
    href: "/about",
    label: "About FENZO",
    description: "Our story, mission & vision",
    icon: Building2,
    color: "#8B5CF6",
  },
  {
    href: "/team",
    label: "Our Team",
    description: "The people behind the products",
    icon: Users,
    color: "#3B82F6",
  },
  {
    href: "/testimonials",
    label: "Testimonials",
    description: "What our clients say",
    icon: Star,
    color: "#06B6D4",
  },
  {
    href: "/clients",
    label: "Our Clients",
    description: "Brands that trust us",
    icon: Handshake,
    color: "#8B5CF6",
  },
];

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
    setIsScrolled(latest > 50);
  });

  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutOpen(true);
  };
  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => setAboutOpen(false), 120);
  };

  const isAboutActive = ["/about", "/team", "/testimonials", "/clients"].includes(location);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/process", label: "Process" },
    { href: "/technologies", label: "Technologies" },
  ];

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20 px-4 mx-auto md:px-6">
          <Link href="/" className="flex items-center gap-2" data-testid="link-home">
            <span className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              FENZO
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {/* Home */}
            {navLinks.slice(0, 1).map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-1 py-2 transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* About Us dropdown */}
            <div
              className="relative"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                data-testid="button-about-dropdown"
                className={`relative flex items-center gap-1 px-1 py-2 transition-colors ${
                  isAboutActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                About Us
                <motion.span animate={{ rotate: aboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={14} />
                </motion.span>
                {isAboutActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl border border-border/60 bg-background/90 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] overflow-hidden"
                    onMouseEnter={handleAboutEnter}
                    onMouseLeave={handleAboutLeave}
                  >
                    {/* top gradient bar */}
                    <div className="h-[2px] bg-gradient-to-r from-primary via-secondary to-accent" />
                    <div className="p-2">
                      {aboutLinks.map((item, i) => {
                        const Icon = item.icon;
                        const isItemActive = location === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setAboutOpen(false)}
                            data-testid={`link-about-${i}`}
                            className={`flex items-center gap-3 px-3 py-3 rounded-xl group transition-all duration-150 ${
                              isItemActive
                                ? "bg-primary/10 text-foreground"
                                : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <span
                              className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                              style={{ background: `${item.color}18`, boxShadow: `0 0 0 1px ${item.color}30` }}
                            >
                              <Icon size={15} style={{ color: item.color }} />
                            </span>
                            <span className="flex flex-col">
                              <span className="text-sm font-medium leading-tight text-foreground">
                                {item.label}
                              </span>
                              <span className="text-xs text-muted-foreground leading-tight mt-0.5">
                                {item.description}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Rest of nav links */}
            {navLinks.slice(1).map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-1 py-2 transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              data-testid="button-start-project"
              className="hidden md:flex relative group overflow-hidden bg-transparent border border-primary/50 text-foreground hover:bg-primary/10 transition-all duration-300"
              onClick={() => {
                if (location === "/") {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  setLocation("/");
                  setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400);
                }
              }}
            >
              <span className="relative z-10">Start Project</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <button
              className="md:hidden flex items-center justify-center p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 pt-20 bg-background/95 backdrop-blur-xl border-b border-border/50 flex flex-col items-center overflow-y-auto"
          >
            <nav className="flex flex-col items-center gap-6 mt-8 text-lg font-medium w-full max-w-xs px-4">
              {navLinks.slice(0, 1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 transition-colors ${location === link.href ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile About Us accordion */}
              <div className="w-full">
                <button
                  className="w-full flex items-center justify-between px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  data-testid="button-mobile-about"
                >
                  <span>About Us</span>
                  <motion.span animate={{ rotate: mobileAboutOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 rounded-xl border border-border/40 bg-card/50 p-2 flex flex-col gap-1">
                        {aboutLinks.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => { setIsMobileMenuOpen(false); setMobileAboutOpen(false); }}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground"
                            >
                              <Icon size={15} style={{ color: item.color }} />
                              <span className="text-sm">{item.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 transition-colors ${location === link.href ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {link.label}
                </Link>
              ))}

              <Button
                data-testid="button-start-project-mobile"
                className="mt-2 relative group overflow-hidden bg-transparent border border-primary/50 text-foreground hover:bg-primary/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">Start Project</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

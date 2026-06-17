import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ChevronRight, ArrowUpRight, PenTool, ArrowRight, X } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  { name: "ConstructPro", desc: "Construction Brand Identity", detail: "Complete brand identity for a construction company including logo, color palette, typography, and brand guidelines.", tech: ["Illustrator", "Figma", "Photoshop"], metric: "60% faster reporting", gradient: "from-emerald-400 to-teal-600", images: ["constructpro-1.png", "constructpro-2.png"] },
  { name: "MediTrack", desc: "Healthcare Brand System", detail: "Healthcare brand system with patient-friendly logo design, medical iconography, and compliance-ready visual identity.", tech: ["Illustrator", "Figma", "Photoshop"], metric: "10k+ patients managed", gradient: "from-teal-400 to-emerald-500", images: ["meditrack-1.png", "meditrack-2.png", "meditrack-3.png"] },
  { name: "FinPulse", desc: "Financial Brand Identity", detail: "Financial services brand identity with trust-focused logo design, premium typography, and investor-ready materials.", tech: ["Illustrator", "Figma", "Photoshop"], metric: "50k concurrent users", gradient: "from-rose-400 to-orange-500", images: ["finpluse-1.png", "finpluse-2.png"] },
  { name: "SalesPilot", desc: "SaaS Brand Identity", detail: "SaaS brand identity with modern logo design, scalable icon system, and comprehensive brand guidelines.", tech: ["Illustrator", "Figma", "Photoshop"], metric: "+40% deal close rate", gradient: "from-blue-500 to-indigo-600", images: ["salespilot-1.png", "salespilot-2.png"] },
  { name: "FleetOps", desc: "Logistics Brand Design", detail: "Logistics brand design with bold logo, vehicle graphics, and operational identity system.", tech: ["Illustrator", "Figma", "Photoshop"], metric: "500+ vehicles tracked", gradient: "from-amber-400 to-orange-600", images: ["fleetops-1.png", "fleetops-2.png"] },
  { name: "AdminHub", desc: "Multi-Tenant Brand System", detail: "White-label brand system used by 12 SaaS companies with flexible logo design and identity framework.", tech: ["Illustrator", "Figma", "Photoshop"], metric: "12 tenants, 5k+ admins", gradient: "from-violet-500 to-purple-700", images: ["adminhub-1.png", "adminhub-2.png"] },
];

const stats = [
  { value: "100+", label: "Logos Designed" },
  { value: "50+", label: "Brand Identities" },
  { value: "3-5", label: "Days Delivery" },
  { value: "100%", label: "Client Satisfaction" },
];

const techs = ["Illustrator", "Figma", "Photoshop", "Sketch", "Canva", "InDesign", "After Effects", "Blender", "Adobe XD", "Framer", "Principle", "Lottie"];

export default function DashboardsPage() {
  const [location, setLocation] = useLocation();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images!.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length);
    }
  };

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsZoomed(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative min-h-[58vh] flex flex-col items-center justify-center text-center overflow-hidden pt-24 pb-16 px-4">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(59,130,246,0.08) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(6,182,212,0.06) 40px)" }} />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 max-w-4xl">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
            <ChevronRight size={12} />
            <span className="text-primary">Logo Design</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
            <PenTool size={15} />
            Logo Design & Brand Identity
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.06]">
            Brands That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Stand Out
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Professional logo design and brand identity that captures your essence and resonates with your audience — no more generic templates.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="h-12 px-7 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 font-semibold"
              onClick={() => {
                setLocation("/");
                setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400);
              }}>
              Design My Logo
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-2">Portfolio</p>
            <h2 className="text-4xl font-bold tracking-tighter">Logo Design Projects</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {projects.map((p, i) => (
                <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-card/40 border border-white/5 rounded-3xl overflow-hidden cursor-pointer hover:border-blue-500/30 transition-all duration-300"
                  onClick={() => p.images && (setSelectedProject(p), setCurrentImageIndex(0))}
                >
                  {p.images ? (
                    <img
                      src={`/works/${encodeURIComponent(p.images[0])}`}
                      alt={p.name}
                      style={{ objectPosition: "0% center" }}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className={`w-full aspect-[4/3] bg-gradient-to-br ${p.gradient} opacity-80 group-hover:scale-105 transition-transform duration-700`} />
                  )}
                  <div className="p-6 relative z-10 bg-gradient-to-t from-card via-card to-transparent absolute bottom-0 inset-x-0 pt-20">
                    <Badge className="mb-2 bg-white/10 text-white hover:bg-white/20 border-0">Logo Design</Badge>
                    <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{p.detail}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tech.map(t => <span key={t} className="text-[10px] uppercase tracking-wider text-muted-foreground px-2 py-1 bg-white/5 rounded-md">{t}</span>)}
                    </div>
                    <div className="text-blue-400 font-semibold text-sm border-t border-white/10 pt-3">{p.metric}</div>
                  </div>
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <div className="flex items-center gap-2 font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Images <ArrowUpRight size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 border-y border-border/30 bg-card/20">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-2">Our Stack</p>
            <h2 className="text-3xl font-bold tracking-tighter">Logo Design Technologies</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {techs.map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="px-4 py-2 rounded-full border border-border/60 bg-card/50 text-sm text-muted-foreground hover:text-foreground hover:border-blue-500/40 transition-colors">
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-10 rounded-3xl border border-blue-500/20" style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.08), transparent 70%)" }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Still using a generic logo template?</h2>
            <p className="text-muted-foreground mb-8">Let's create a unique logo design that truly represents your brand.</p>
            <Button className="h-12 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 font-semibold"
              onClick={() => { window.location.href = "/"; setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400); }}>
              Get a Free Quote <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-card rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
                <div className="relative">
                  {/* Navigation Arrows */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                      >
                        <ArrowUpRight className="w-6 h-6 text-white rotate-180" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                      >
                        <ArrowUpRight className="w-6 h-6 text-white" />
                      </button>
                    </>
                  )}
                  {/* Main Image */}
                  {selectedProject.images && (
                    <img
                      src={`/works/${encodeURIComponent(selectedProject.images[currentImageIndex])}`}
                      alt={`${selectedProject.name} screenshot ${currentImageIndex + 1}`}
                      onClick={handleImageClick}
                      className={`w-full h-auto rounded-lg cursor-pointer transition-transform duration-300 ${
                        isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
                      }`}
                      style={{ maxHeight: "70vh", objectFit: "contain" }}
                    />
                  )}
                  {/* Image Counter */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <div className="text-center mt-4 text-sm text-muted-foreground">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

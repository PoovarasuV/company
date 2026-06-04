import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingAI from "@/components/FloatingAI";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categories = ["All", "Websites", "Mobile Apps", "E-Commerce", "AI Solutions", "Dashboards"];

const projects = [
  { id: 1, name: "SV Builders", category: "Websites", desc: "Corporate Website", tech: ["React", "Next.js", "Tailwind"], metric: "+200% lead gen", gradient: "from-blue-500 to-cyan-400" },
  { id: 2, name: "SV Mahal", category: "Websites", desc: "Booking Platform", tech: ["React", "Node.js", "PostgreSQL"], metric: "5k+ bookings/mo", gradient: "from-purple-500 to-pink-500" },
  { id: 3, name: "ConstructPro", category: "Dashboards", desc: "Monitoring Dashboard", tech: ["Vue", "D3.js", "AWS"], metric: "60% faster reporting", gradient: "from-emerald-400 to-teal-600" },
  { id: 4, name: "CostAI", category: "AI Solutions", desc: "AI Cost Estimator", tech: ["Python", "OpenAI", "FastAPI"], metric: "$2M saved", gradient: "from-orange-400 to-red-500" },
  { id: 5, name: "DineEasy", category: "Mobile Apps", desc: "Restaurant Ordering", tech: ["React Native", "Firebase"], metric: "50k+ orders", gradient: "from-indigo-400 to-cyan-400" },
  { id: 6, name: "StyleHub", category: "E-Commerce", desc: "Premium E-Commerce", tech: ["Next.js", "Stripe", "Shopify"], metric: "+340% revenue YoY", gradient: "from-violet-600 to-fuchsia-500" },
  { id: 7, name: "HRFlow", category: "Websites", desc: "HR Automation", tech: ["Node.js", "n8n", "PostgreSQL"], metric: "80% manual work cut", gradient: "from-blue-600 to-indigo-600" },
  { id: 8, name: "MediTrack", category: "Dashboards", desc: "Healthcare Dashboard", tech: ["React", "Express", "MongoDB"], metric: "10k+ patients", gradient: "from-teal-400 to-emerald-500" },
  { id: 9, name: "LegalAI", category: "AI Solutions", desc: "Legal Document AI", tech: ["Python", "LangChain", "GPT-4"], metric: "90% faster review", gradient: "from-slate-700 to-slate-900" },
  { id: 10, name: "PropScan", category: "Mobile Apps", desc: "Real Estate App", tech: ["React Native", "Maps API"], metric: "200k+ properties", gradient: "from-sky-400 to-blue-600" },
  { id: 11, name: "FinPulse", category: "Dashboards", desc: "FinTech Dashboard", tech: ["React", "D3.js", "WebSockets"], metric: "Real-time for 50k users", gradient: "from-rose-400 to-orange-500" },
  { id: 12, name: "EduLearn", category: "Websites", desc: "E-Learning Platform", tech: ["Next.js", "PostgreSQL", "AWS"], metric: "500k+ learners", gradient: "from-amber-300 to-orange-500" }
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(p => activeFilter === "All" || p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden flex flex-col justify-center min-h-[50vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background z-0" />
        
        <div className="container px-4 mx-auto relative z-10 text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Projects that move the needle.
          </motion.p>
        </div>

        {/* Stat Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto px-4 z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">150+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center md:border-l md:border-r border-white/10">
              <div className="text-4xl font-bold text-secondary mb-1">80+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">$50M+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Revenue Gen</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-30 bg-background/80 backdrop-blur-md border-y border-white/5 py-4 mb-12">
        <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-start md:justify-center gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === cat ? "text-white" : "text-muted-foreground hover:text-white"
                }`}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div
                    layoutId="work-filter"
                    className="absolute inset-0 bg-white/10 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-card/40 border border-white/5 rounded-3xl overflow-hidden cursor-pointer"
                >
                  {/* Image Placeholder */}
                  <div className={`w-full aspect-[4/3] bg-gradient-to-br ${project.gradient} opacity-80 group-hover:scale-105 transition-transform duration-700`} />
                  
                  <div className="p-6 relative z-10 bg-gradient-to-t from-card via-card to-transparent absolute bottom-0 inset-x-0 pt-20">
                    <Badge className="mb-3 bg-white/10 text-white hover:bg-white/20 border-0">{project.category}</Badge>
                    <h3 className="text-2xl font-bold font-heading mb-1">{project.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
                    
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] uppercase tracking-wider text-muted-foreground px-2 py-1 bg-white/5 rounded-md">{t}</span>
                      ))}
                    </div>
                    
                    <div className="text-primary font-medium text-sm border-t border-white/10 pt-4 mt-auto">
                      {project.metric}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <div className="flex items-center gap-2 font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Case Study <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-white/10 rounded-3xl overflow-hidden flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center">
              <Badge className="w-fit mb-6 bg-primary/20 text-primary border-primary/20">Featured Case Study</Badge>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">StyleHub: Redefining Premium E-Commerce</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-2">The Problem</h4>
                  <p className="text-white/80">A high-end fashion retailer was losing 40% of checkout conversions due to slow load times and a clunky mobile experience.</p>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground font-bold uppercase tracking-wider mb-2">The Solution</h4>
                  <p className="text-white/80">We architected a headless Shopify storefront using Next.js, implementing instant page transitions and a frictionless one-click checkout flow.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8 py-6 border-y border-white/10">
                <div>
                  <div className="text-4xl font-bold text-white mb-1">+340%</div>
                  <div className="text-sm text-muted-foreground">Revenue YoY</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">0.8s</div>
                  <div className="text-sm text-muted-foreground">Avg Load Time</div>
                </div>
              </div>

              <Button className="w-fit">Read Full Story <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </div>
            
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-violet-600 to-fuchsia-500 relative min-h-[400px] flex items-center justify-center p-12 text-center">
              <div className="bg-black/40 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-left max-w-md">
                <p className="text-lg font-medium italic mb-6">"FENZO didn't just rebuild our website; they transformed our entire digital business model. The ROI paid for the project in the first 45 days."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full" />
                  <div>
                    <div className="font-bold">Sarah Jenkins</div>
                    <div className="text-sm text-white/70">CTO, StyleHub</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-primary via-secondary to-accent mb-8">
            <div className="bg-background rounded-full px-8 py-3">
              <h2 className="text-3xl md:text-5xl font-bold font-heading">Have a project in mind?</h2>
            </div>
          </div>
          <p className="text-xl text-muted-foreground mb-10">Let's craft something exceptional together.</p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8">
            Start a Conversation
          </Button>
        </div>
      </section>

      <Footer />
      <FloatingAI />
    </div>
  );
}
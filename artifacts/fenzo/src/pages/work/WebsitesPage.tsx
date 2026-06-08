import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ArrowUpRight, Monitor, ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingAI from "@/components/FloatingAI";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  { name: "SV Builders", desc: "Corporate Website", detail: "A premium construction company site with a full CMS, project gallery, and lead capture system.", tech: ["React", "Next.js", "Tailwind"], metric: "+200% lead gen", gradient: "from-blue-500 to-cyan-400" },
  { name: "SV Mahal", desc: "Booking Platform", detail: "Full-stack venue booking platform with real-time availability, payments, and admin dashboard.", tech: ["React", "Node.js", "PostgreSQL"], metric: "5k+ bookings/mo", gradient: "from-purple-500 to-pink-500" },
  { name: "HRFlow", desc: "HR Automation Portal", detail: "Internal HR platform replacing spreadsheets with a modern self-service portal and workflow engine.", tech: ["Node.js", "n8n", "PostgreSQL"], metric: "80% manual work cut", gradient: "from-blue-600 to-indigo-600" },
  { name: "EduLearn", desc: "E-Learning Platform", detail: "Full LMS with course creation, live sessions, progress tracking, and a subscription paywall.", tech: ["Next.js", "PostgreSQL", "AWS"], metric: "500k+ learners", gradient: "from-amber-300 to-orange-500" },
  { name: "TechFlow", desc: "SaaS Landing + App", detail: "Marketing site and onboarding flow for a B2B SaaS product. Conversion-optimised with Framer-quality animations.", tech: ["Next.js", "Framer Motion", "Stripe"], metric: "+180% signups", gradient: "from-violet-500 to-purple-700" },
  { name: "PropScan Web", desc: "Real Estate Portal", detail: "Property listing portal with AI-powered search, map view, and instant valuation estimates.", tech: ["Next.js", "Maps API", "Python"], metric: "200k+ listings", gradient: "from-sky-400 to-blue-600" },
];

const stats = [
  { value: "60+", label: "Websites Shipped" },
  { value: "0.8s", label: "Avg Load Time" },
  { value: "100%", label: "Mobile-First" },
  { value: "98", label: "Avg PageSpeed" },
];

const techs = ["Next.js", "React", "Tailwind CSS", "Framer Motion", "GSAP", "TypeScript", "Node.js", "PostgreSQL", "Vercel", "AWS", "Figma", "Webflow"];

export default function WebsitesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[58vh] flex flex-col items-center justify-center text-center overflow-hidden pt-24 pb-16 px-4">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(139,92,246,0.08) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(59,130,246,0.06) 40px)" }} />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 max-w-4xl">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
            <ChevronRight size={12} />
            <span className="text-primary">Websites</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Monitor size={15} />
            Websites & Web Experiences
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.06]">
            Websites That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400">
              Convert & Inspire
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            From high-performance landing pages to full-stack web platforms — every site we build is fast, beautiful, and built to grow your business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="h-12 px-7 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 border-0 font-semibold"
              onClick={() => { window.location.href = "/"; setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400); }}>
              Start Your Project
            </Button>
            <Link href="/work">
              <Button variant="outline" className="h-12 px-7 border-white/10 hover:bg-white/5 font-semibold">All Projects</Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Portfolio</p>
            <h2 className="text-4xl font-bold tracking-tighter">Website Projects</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {projects.map((p, i) => (
                <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-card/40 border border-white/5 rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-300">
                  <div className={`w-full aspect-[4/3] bg-gradient-to-br ${p.gradient} opacity-80 group-hover:scale-105 transition-transform duration-700`} />
                  <div className="p-6 relative z-10 bg-gradient-to-t from-card via-card to-transparent absolute bottom-0 inset-x-0 pt-20">
                    <Badge className="mb-2 bg-white/10 text-white hover:bg-white/20 border-0">Website</Badge>
                    <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{p.detail}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tech.map(t => <span key={t} className="text-[10px] uppercase tracking-wider text-muted-foreground px-2 py-1 bg-white/5 rounded-md">{t}</span>)}
                    </div>
                    <div className="text-primary font-semibold text-sm border-t border-white/10 pt-3">{p.metric}</div>
                  </div>
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <div className="flex items-center gap-2 font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Case Study <ArrowUpRight size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 border-y border-border/30 bg-card/20">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Our Stack</p>
            <h2 className="text-3xl font-bold tracking-tighter">Technologies We Use</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {techs.map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="px-4 py-2 rounded-full border border-border/60 bg-card/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-10 rounded-3xl border border-primary/20" style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.08), transparent 70%)" }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Need a website that works as hard as you do?</h2>
            <p className="text-muted-foreground mb-8">Tell us about your project and we'll come back with a clear plan, timeline, and quote.</p>
            <Button className="h-12 px-8 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 border-0 font-semibold"
              onClick={() => { window.location.href = "/"; setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400); }}>
              Get a Free Quote <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingAI />
    </div>
  );
}

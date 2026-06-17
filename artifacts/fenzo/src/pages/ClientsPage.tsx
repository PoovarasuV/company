import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const clients = [
  { name: "TechFlow Inc.", sector: "SaaS", initials: "TF", gradient: "from-violet-600 to-purple-700", description: "Series A startup building workflow automation tools. FENZO built their core product dashboard.", result: "3× user growth in 6 months", url: "#" },
  { name: "FashionHub", sector: "E-Commerce", initials: "FH", gradient: "from-blue-600 to-cyan-700", description: "Fast-fashion retailer serving 200k+ customers. We rebuilt their storefront and checkout.", result: "+340% revenue YoY", url: "#" },
  { name: "RetailPro AI", sector: "AI / Retail", initials: "RP", gradient: "from-cyan-600 to-teal-700", description: "AI-powered retail intelligence platform. FENZO engineered their LLM-based customer support.", result: "80% support automation", url: "#" },
  { name: "BuildRight Group", sector: "Construction", initials: "BR", gradient: "from-purple-600 to-violet-800", description: "National construction company needing a project management overhaul.", result: "60% efficiency increase", url: "#" },
  { name: "MediTrack Health", sector: "Healthcare", initials: "MT", gradient: "from-blue-700 to-indigo-800", description: "Digital health platform managing patient records and clinical workflows.", result: "10k+ patients managed", url: "#" },
  { name: "DineEasy", sector: "Food Tech", initials: "DE", gradient: "from-violet-700 to-blue-700", description: "Restaurant tech startup launching a multi-platform ordering app.", result: "50k orders, Q1", url: "#" },
  { name: "HRFlow Systems", sector: "HR Tech", initials: "HR", gradient: "from-cyan-700 to-blue-800", description: "HR automation platform eliminating manual processes for mid-sized businesses.", result: "80% of HR ops automated", url: "#" },
  { name: "LegalAI", sector: "Legal Tech", initials: "LA", gradient: "from-purple-700 to-violet-900", description: "AI-powered legal document analysis tool for law firms and corporate legal teams.", result: "90% faster doc review", url: "#" },
  { name: "FinPulse", sector: "FinTech", initials: "FP", gradient: "from-blue-800 to-cyan-900", description: "Real-time financial analytics dashboard serving institutional investors.", result: "50k concurrent users", url: "#" },
  { name: "PropScan", sector: "Real Estate", initials: "PS", gradient: "from-violet-500 to-purple-700", description: "Property discovery app listing 200k+ properties with AI-powered recommendations.", result: "200k+ properties indexed", url: "#" },
  { name: "EduLearn", sector: "EdTech", initials: "EL", gradient: "from-blue-500 to-violet-600", description: "E-learning platform for professional skills, serving learners in 50+ countries.", result: "500k+ active learners", url: "#" },
  { name: "SV Builders", sector: "Construction", initials: "SV", gradient: "from-cyan-500 to-blue-600", description: "Regional construction firm upgrading their online presence and lead generation.", result: "+200% lead generation", url: "#" },
];

const sectors = ["All", "SaaS", "E-Commerce", "AI / Retail", "Construction", "Healthcare", "Food Tech", "HR Tech", "Legal Tech", "FinTech", "Real Estate", "EdTech"];

const spotlights = [
  { name: "StyleHub", description: "A full e-commerce rebuild — from legacy Shopify to a custom Next.js storefront with Stripe, inventory management, and a mobile-first design. The result: 340% revenue growth in year one.", gradient: "from-violet-600 to-blue-600", stat: "+340%", statLabel: "Revenue Growth" },
  { name: "LegalAI", description: "Building an AI document review system for a law firm that processes thousands of contracts monthly. What took 6 hours now takes 20 minutes.", gradient: "from-blue-600 to-cyan-600", stat: "90%", statLabel: "Faster Reviews" },
  { name: "FinPulse", description: "Real-time financial dashboard built to handle 50,000 concurrent users with live WebSocket data streams and zero-lag D3.js visualizations.", gradient: "from-cyan-600 to-violet-600", stat: "50k", statLabel: "Concurrent Users" },
];

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden pt-24 pb-12 px-4">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(6,182,212,0.12) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(6,182,212,0.06) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(139,92,246,0.05) 40px)" }} />
        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10 max-w-3xl">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <ChevronRight size={12} />
            <span className="text-primary">Our Clients</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Brands That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Trust Us</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From early-stage startups to established enterprises across 12 countries — these are the companies we've built for.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "80+", label: "Clients Served" },
            { value: "12+", label: "Countries" },
            { value: "15+", label: "Industries" },
            { value: "95%", label: "Retention Rate" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client grid */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Our Portfolio of Partners</p>
            <h2 className="text-4xl font-bold tracking-tighter">Companies We've Built For</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {clients.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.55 }}
                whileHover={{ y: -5 }}
                className="group p-5 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                data-testid={`card-client-${i}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <span className="text-sm font-bold text-white">{c.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm leading-tight">{c.name}</h3>
                    <span className="text-xs text-muted-foreground">{c.sector}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary">{c.result}</span>
                  <a href={c.url} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground" data-testid={`link-client-${i}`}>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector breakdown */}
      <section className="py-24 px-4 border-y border-border/30 bg-card/20">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Industries</p>
            <h2 className="text-4xl font-bold tracking-tighter">We work across sectors</h2>
          </motion.div>
          <div className="flex flex-wrap gap-3 justify-center">
            {sectors.filter(s => s !== "All").map((sector, i) => (
              <motion.span key={sector} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="px-4 py-2 rounded-full border border-border/60 bg-card/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors cursor-default">
                {sector}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Case study spotlights */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Highlights</p>
            <h2 className="text-4xl font-bold tracking-tighter">Spotlight Results</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {spotlights.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="relative p-6 rounded-2xl border border-border/50 bg-card/50 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(135deg, ${["rgba(139,92,246,1)", "rgba(59,130,246,1)", "rgba(6,182,212,1)"][i]}, transparent)` }} />
                <div className="relative z-10">
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">{s.name}</p>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${s.gradient}`}>{s.stat}</span>
                    <span className="text-sm text-muted-foreground">{s.statLabel}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 rounded-3xl border border-cyan-500/20" style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.07), transparent 70%)" }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Your company could be next.</h2>
            <p className="text-muted-foreground mb-8">Tell us about your project and we'll show you exactly how we'd approach it.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="h-12 px-8 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-0 font-semibold" onClick={() => { window.location.href = "/"; setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400); }}>
                Start a Project
              </Button>
              <Link href="/work">
                <Button variant="outline" className="h-12 px-8 border-white/10 hover:bg-white/5 font-semibold">View Our Work</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

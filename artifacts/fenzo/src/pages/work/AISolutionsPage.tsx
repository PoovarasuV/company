import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ArrowUpRight, Bot, ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingAI from "@/components/FloatingAI";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  { name: "CostAI", desc: "AI Cost Estimator", detail: "GPT-4 powered construction cost estimator trained on 10 years of project data. Generates detailed quotes in under 60 seconds.", tech: ["Python", "OpenAI GPT-4", "FastAPI"], metric: "$2M in savings identified", gradient: "from-orange-400 to-red-500" },
  { name: "LegalAI", desc: "Legal Document Reviewer", detail: "LLM-powered contract analysis tool that flags risks, extracts clauses, and generates summaries. Replaces 90% of first-pass review.", tech: ["Python", "LangChain", "GPT-4"], metric: "90% faster doc review", gradient: "from-slate-600 to-slate-900" },
  { name: "RetailPro AI", desc: "Customer Support AI", detail: "Multi-channel AI support agent trained on product catalogues and policies. Handles 80% of tickets without human escalation.", tech: ["LangChain", "Node.js", "Pinecone"], metric: "80% query automation", gradient: "from-blue-500 to-cyan-600" },
  { name: "PropPredict", desc: "Real Estate Valuation AI", detail: "ML model trained on 5M+ property transactions to predict sale prices and rental yields with ±4% accuracy.", tech: ["Python", "scikit-learn", "FastAPI"], metric: "±4% price accuracy", gradient: "from-emerald-500 to-teal-700" },
  { name: "HireIQ", desc: "AI Recruitment Screener", detail: "Automated candidate screening tool that analyses CVs, ranks applicants, and schedules interviews — all without HR involvement.", tech: ["OpenAI", "Node.js", "PostgreSQL"], metric: "70% reduction in time-to-hire", gradient: "from-violet-500 to-purple-700" },
  { name: "MedAI Triage", desc: "Healthcare Triage Bot", detail: "Symptom checker and patient intake bot that collects structured data before GP appointments, reducing consultation time by 40%.", tech: ["LangChain", "FastAPI", "HL7"], metric: "40% shorter consultations", gradient: "from-pink-500 to-rose-600" },
];

const stats = [
  { value: "20+", label: "AI Systems Deployed" },
  { value: "80%", label: "Avg Task Automation" },
  { value: "10M+", label: "AI Requests Served" },
  { value: "99.9%", label: "Uptime SLA" },
];

const techs = ["OpenAI GPT-4o", "Claude 3.5", "LangChain", "LlamaIndex", "Pinecone", "Weaviate", "Python", "FastAPI", "n8n", "Zapier", "HuggingFace", "TensorFlow"];

export default function AISolutionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative min-h-[58vh] flex flex-col items-center justify-center text-center overflow-hidden pt-24 pb-16 px-4">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(139,92,246,0.18) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(139,92,246,0.07) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(59,130,246,0.06) 40px)" }} />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 max-w-4xl">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
            <ChevronRight size={12} />
            <span className="text-primary">AI Solutions</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-semibold mb-6">
            <Bot size={15} />
            AI & Intelligent Automation
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.06]">
            AI That Does{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
              Real Work
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            From LLM-powered chatbots to custom ML models — we build AI systems that automate the repetitive, augment the complex, and unlock new capabilities for your business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="h-12 px-7 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 border-0 font-semibold"
              onClick={() => { window.location.href = "/"; setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400); }}>
              Build AI Into My Business
            </Button>
            <Link href="/work">
              <Button variant="outline" className="h-12 px-7 border-white/10 hover:bg-white/5 font-semibold">All Projects</Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-violet-400 mb-2">Portfolio</p>
            <h2 className="text-4xl font-bold tracking-tighter">AI & Automation Projects</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {projects.map((p, i) => (
                <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-card/40 border border-white/5 rounded-3xl overflow-hidden cursor-pointer hover:border-violet-500/30 transition-all duration-300">
                  <div className={`w-full aspect-[4/3] bg-gradient-to-br ${p.gradient} opacity-80 group-hover:scale-105 transition-transform duration-700`} />
                  <div className="p-6 relative z-10 bg-gradient-to-t from-card via-card to-transparent absolute bottom-0 inset-x-0 pt-20">
                    <Badge className="mb-2 bg-white/10 text-white hover:bg-white/20 border-0">AI Solution</Badge>
                    <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{p.detail}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tech.map(t => <span key={t} className="text-[10px] uppercase tracking-wider text-muted-foreground px-2 py-1 bg-white/5 rounded-md">{t}</span>)}
                    </div>
                    <div className="text-violet-400 font-semibold text-sm border-t border-white/10 pt-3">{p.metric}</div>
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

      <section className="py-20 px-4 border-y border-border/30 bg-card/20">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-violet-400 mb-2">Our Stack</p>
            <h2 className="text-3xl font-bold tracking-tighter">AI & ML Technologies</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {techs.map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="px-4 py-2 rounded-full border border-border/60 bg-card/50 text-sm text-muted-foreground hover:text-foreground hover:border-violet-500/40 transition-colors">
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-10 rounded-3xl border border-violet-500/20" style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.1), transparent 70%)" }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Ready to put AI to work?</h2>
            <p className="text-muted-foreground mb-8">Tell us about the process you want to automate and we'll design the right AI solution for it.</p>
            <Button className="h-12 px-8 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 border-0 font-semibold"
              onClick={() => { window.location.href = "/"; setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400); }}>
              Get a Free Consultation <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingAI />
    </div>
  );
}

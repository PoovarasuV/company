import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ArrowUpRight, LayoutDashboard, ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingAI from "@/components/FloatingAI";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  { name: "ConstructPro", desc: "Project Monitoring Dashboard", detail: "Real-time construction project tracker with Gantt charts, budget burn, resource allocation, and contractor comms in one view.", tech: ["Vue", "D3.js", "AWS"], metric: "60% faster reporting", gradient: "from-emerald-400 to-teal-600" },
  { name: "MediTrack", desc: "Healthcare Operations Dashboard", detail: "Clinical operations centre for NHS-aligned hospital group — patient flow, bed occupancy, and compliance metrics in real time.", tech: ["React", "Express", "MongoDB"], metric: "10k+ patients managed", gradient: "from-teal-400 to-emerald-500" },
  { name: "FinPulse", desc: "Financial Analytics Platform", detail: "Institutional trading dashboard with live WebSocket data, customisable charting, portfolio attribution, and risk alerts.", tech: ["React", "D3.js", "WebSockets"], metric: "50k concurrent users", gradient: "from-rose-400 to-orange-500" },
  { name: "SalesPilot", desc: "CRM & Revenue Dashboard", detail: "Custom CRM with pipeline visualisation, quota tracking, and AI-powered lead scoring for a 200-person sales team.", tech: ["React", "Node.js", "PostgreSQL"], metric: "+40% deal close rate", gradient: "from-blue-500 to-indigo-600" },
  { name: "FleetOps", desc: "Fleet Management Dashboard", detail: "GPS-tracked fleet management system with driver performance, maintenance schedules, fuel analytics, and route optimisation.", tech: ["React", "Maps API", "Node.js"], metric: "500+ vehicles tracked", gradient: "from-amber-400 to-orange-600" },
  { name: "AdminHub", desc: "Multi-Tenant Admin Portal", detail: "White-label admin portal used by 12 SaaS companies. Role-based access, audit logs, billing management, and customer health scores.", tech: ["Next.js", "Stripe", "PostgreSQL"], metric: "12 tenants, 5k+ admins", gradient: "from-violet-500 to-purple-700" },
];

const stats = [
  { value: "25+", label: "Dashboards Built" },
  { value: "50k", label: "Peak Concurrent Users" },
  { value: "<100ms", label: "Avg Data Refresh" },
  { value: "99.9%", label: "Uptime SLA" },
];

const techs = ["React", "Next.js", "D3.js", "Recharts", "Chart.js", "WebSockets", "Node.js", "PostgreSQL", "Redis", "AWS", "Vercel", "Grafana"];

export default function DashboardsPage() {
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
            <span className="text-primary">Dashboards</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
            <LayoutDashboard size={15} />
            Dashboards & Internal Tools
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.06]">
            Data You Can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Act On
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Real-time analytics dashboards, CRMs, and internal tools that give your team instant visibility and control — no more spreadsheet chaos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="h-12 px-7 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 font-semibold"
              onClick={() => { window.location.href = "/"; setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400); }}>
              Build My Dashboard
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
            <h2 className="text-4xl font-bold tracking-tighter">Dashboard Projects</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {projects.map((p, i) => (
                <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-card/40 border border-white/5 rounded-3xl overflow-hidden cursor-pointer hover:border-blue-500/30 transition-all duration-300">
                  <div className={`w-full aspect-[4/3] bg-gradient-to-br ${p.gradient} opacity-80 group-hover:scale-105 transition-transform duration-700`} />
                  <div className="p-6 relative z-10 bg-gradient-to-t from-card via-card to-transparent absolute bottom-0 inset-x-0 pt-20">
                    <Badge className="mb-2 bg-white/10 text-white hover:bg-white/20 border-0">Dashboard</Badge>
                    <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{p.detail}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tech.map(t => <span key={t} className="text-[10px] uppercase tracking-wider text-muted-foreground px-2 py-1 bg-white/5 rounded-md">{t}</span>)}
                    </div>
                    <div className="text-blue-400 font-semibold text-sm border-t border-white/10 pt-3">{p.metric}</div>
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
            <p className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-2">Our Stack</p>
            <h2 className="text-3xl font-bold tracking-tighter">Dashboard Technologies</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Still running your business on spreadsheets?</h2>
            <p className="text-muted-foreground mb-8">Let's replace them with a real-time dashboard your whole team can rely on.</p>
            <Button className="h-12 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 font-semibold"
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

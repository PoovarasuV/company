import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Target, Eye, Heart, Zap, Globe, Award } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingAI from "@/components/FloatingAI";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const values = [
  { icon: Target, label: "Mission-Driven", color: "#8B5CF6", desc: "Every line of code serves a purpose. We build products that make a real difference — not just for clients, but for the people who use them every day." },
  { icon: Eye, label: "Radical Transparency", color: "#3B82F6", desc: "No hidden costs, no vague timelines. We keep clients fully informed at every step, because trust is built through honesty, not promises." },
  { icon: Heart, label: "People First", color: "#06B6D4", desc: "Technology should solve human problems. We stay obsessively focused on end users — their needs, frustrations, and goals shape every decision." },
  { icon: Zap, label: "Speed Without Compromise", color: "#8B5CF6", desc: "We move fast and ship quality. Agile sprints, automated pipelines, and years of experience let us deliver premium work at startup velocity." },
  { icon: Globe, label: "Global Standards", color: "#3B82F6", desc: "We build to international standards — WCAG accessibility, GDPR compliance, and performance benchmarks that hold up anywhere in the world." },
  { icon: Award, label: "Relentless Excellence", color: "#06B6D4", desc: "We don't stop at 'good enough'. Every project is a chance to set a new bar, and we take that responsibility seriously." },
];

const milestones = [
  { year: "2019", title: "Founded", desc: "FENZO was born in a small co-working space with three developers and a shared conviction — software should be extraordinary." },
  { year: "2020", title: "First 10 Clients", desc: "Rapid word-of-mouth growth fueled by results. We hit 10 clients in 12 months, entirely through referrals." },
  { year: "2021", title: "AI Division Launched", desc: "We built our dedicated AI & automation practice as demand for intelligent systems surged post-pandemic." },
  { year: "2022", title: "50+ Projects Delivered", desc: "Crossed the milestone of 50 successfully shipped products — websites, apps, platforms, and AI tools — each on time." },
  { year: "2023", title: "Global Expansion", desc: "Our client base grew across 12 countries. Remote-first culture let us hire the best talent regardless of geography." },
  { year: "2024", title: "150+ Projects, 80+ Clients", desc: "FENZO is now a trusted partner to startups, SMEs, and enterprises building their digital future." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[58vh] flex flex-col items-center justify-center text-center overflow-hidden pt-24 pb-16 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(139,92,246,0.15) 0%, transparent 70%)" }} className="absolute inset-0" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(139,92,246,0.08) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(59,130,246,0.06) 40px)" }} />
        </div>
        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10 max-w-3xl">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-primary">About Us</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.08]">
            We Build The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400">
              Digital Future
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            FENZO is a next-generation software agency building websites, apps, AI systems, and automation tools that give businesses an unfair advantage.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
            <Button className="h-12 px-7 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 border-0 font-semibold" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Work With Us
            </Button>
            <Link href="/team">
              <Button variant="outline" className="h-12 px-7 border-white/10 bg-white/5 hover:bg-white/10 font-semibold">
                Meet The Team
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "150+", label: "Projects Shipped" },
            { value: "80+", label: "Happy Clients" },
            { value: "5+", label: "Years Building" },
            { value: "12+", label: "Countries Served" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1 tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-28 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">From a shared office to a global agency</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                FENZO was founded in 2019 by a group of engineers who were tired of watching companies overpay for mediocre software. We believed that world-class digital products should be accessible to every business — not just the Fortune 500.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Starting with three developers and a handful of clients who trusted us, we grew through results alone. Every project shipped on time. Every client who came back with a bigger project. Every referral that turned into a long-term relationship.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, FENZO is a team of engineers, designers, AI specialists, and strategists working across time zones to deliver extraordinary digital products. We're not just a vendor — we're a partner invested in your success.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="relative">
                <div className="w-full aspect-square rounded-3xl" style={{ background: "radial-gradient(ellipse at 30% 30%, rgba(139,92,246,0.3), rgba(59,130,246,0.2), rgba(6,182,212,0.1), #050505 70%)", border: "1px solid rgba(139,92,246,0.2)" }}>
                  <div className="absolute inset-6 rounded-2xl border border-white/5 flex items-center justify-center">
                    <span className="text-[120px] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-violet-400/30 via-blue-400/20 to-cyan-400/10 select-none">F</span>
                  </div>
                  {[{ top: "10%", right: "8%", label: "150+ Projects", sub: "Delivered on time" }, { bottom: "12%", left: "8%", label: "100% Satisfaction", sub: "Client retention" }].map((badge, i) => (
                    <div key={i} className="absolute px-4 py-2.5 rounded-xl border border-border/60 bg-background/80 backdrop-blur-sm" style={{ top: badge.top, right: badge.right, bottom: badge.bottom, left: badge.left }}>
                      <p className="text-sm font-bold text-foreground">{badge.label}</p>
                      <p className="text-xs text-muted-foreground">{badge.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-card/20 border-y border-border/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-widest uppercase text-primary mb-3">What We Stand For</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tighter">Our Core Values</motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${v.color}18`, boxShadow: `0 0 0 1px ${v.color}30` }}>
                    <Icon size={18} style={{ color: v.color }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{v.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-widest uppercase text-primary mb-3">How We Got Here</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tighter">Our Journey</motion.h2>
          </motion.div>
          <div className="relative pl-8 border-l-2 border-border/40">
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                className="mb-10 relative">
                <div className="absolute -left-[41px] w-5 h-5 rounded-full border-2 border-primary bg-background" style={{ boxShadow: "0 0 12px rgba(139,92,246,0.5)" }} />
                <span className="text-xs font-bold tracking-widest text-primary uppercase">{m.year}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{m.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 rounded-3xl border border-primary/20" style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.08), transparent 70%)" }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Ready to build something great?</h2>
            <p className="text-muted-foreground mb-8">Join the 80+ companies who chose FENZO as their technology partner.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/work"><Button className="h-12 px-7 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 border-0 font-semibold">See Our Work</Button></Link>
              <Link href="/team"><Button variant="outline" className="h-12 px-7 border-white/10 hover:bg-white/5 font-semibold">Meet The Team</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingAI />
    </div>
  );
}

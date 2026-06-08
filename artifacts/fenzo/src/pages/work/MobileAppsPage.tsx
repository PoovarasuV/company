import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ArrowUpRight, Smartphone, ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingAI from "@/components/FloatingAI";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  { name: "DineEasy", desc: "Restaurant Ordering App", detail: "Multi-restaurant ordering app with real-time kitchen updates, in-app payments, and loyalty rewards. Shipped in 11 weeks.", tech: ["React Native", "Firebase", "Stripe"], metric: "50k+ orders served", gradient: "from-indigo-400 to-cyan-400" },
  { name: "PropScan", desc: "Real Estate Discovery", detail: "Property search app with AR property previews, map-based search, and instant mortgage calculators.", tech: ["React Native", "Maps API", "AR Kit"], metric: "200k+ properties indexed", gradient: "from-sky-400 to-blue-600" },
  { name: "FitTrack Pro", desc: "Fitness & Wellness App", detail: "Personalised workout planner with AI-generated programmes, video guides, and progress analytics.", tech: ["React Native", "TensorFlow", "AWS"], metric: "20k+ active users", gradient: "from-emerald-400 to-teal-600" },
  { name: "ShopLocal", desc: "Hyperlocal Marketplace", detail: "Marketplace connecting independent retailers with nearby shoppers, complete with real-time inventory.", tech: ["React Native", "Node.js", "PostgreSQL"], metric: "5k+ merchants listed", gradient: "from-orange-400 to-red-500" },
  { name: "MediBook", desc: "Healthcare Booking App", detail: "Patient-facing app for booking GP appointments, accessing test results, and managing prescriptions.", tech: ["React Native", "HL7 FHIR", "PostgreSQL"], metric: "30k+ appointments booked", gradient: "from-violet-500 to-purple-700" },
  { name: "EduLearn Mobile", desc: "Mobile Learning App", detail: "Offline-first learning app with video lessons, quizzes, certifications, and peer discussion boards.", tech: ["React Native", "Expo", "SQLite"], metric: "4.9★ App Store rating", gradient: "from-amber-400 to-orange-600" },
];

const stats = [
  { value: "30+", label: "Apps Shipped" },
  { value: "4.9★", label: "Avg App Store Rating" },
  { value: "11 wks", label: "Avg Time to Launch" },
  { value: "0", label: "Launch-Day Crashes" },
];

const platforms = ["iOS (Swift)", "Android (Kotlin)", "React Native", "Expo", "Flutter", "Firebase", "App Store Connect", "Google Play", "RevenueCat", "OneSignal", "Stripe Mobile", "AWS Amplify"];

export default function MobileAppsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative min-h-[58vh] flex flex-col items-center justify-center text-center overflow-hidden pt-24 pb-16 px-4">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(59,130,246,0.08) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(139,92,246,0.06) 40px)" }} />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 max-w-4xl">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
            <ChevronRight size={12} />
            <span className="text-primary">Mobile Apps</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
            <Smartphone size={15} />
            iOS & Android Applications
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.06]">
            Apps Users{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Actually Love
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Native-quality mobile apps built with React Native — shipped to both App Store and Google Play, fast. Buttery animations, zero crashes, and real results.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="h-12 px-7 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 font-semibold"
              onClick={() => { window.location.href = "/"; setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400); }}>
              Start Your App
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
            <h2 className="text-4xl font-bold tracking-tighter">Mobile App Projects</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {projects.map((p, i) => (
                <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-card/40 border border-white/5 rounded-3xl overflow-hidden cursor-pointer hover:border-blue-500/30 transition-all duration-300">
                  <div className={`w-full aspect-[4/3] bg-gradient-to-br ${p.gradient} opacity-80 group-hover:scale-105 transition-transform duration-700`} />
                  <div className="p-6 relative z-10 bg-gradient-to-t from-card via-card to-transparent absolute bottom-0 inset-x-0 pt-20">
                    <Badge className="mb-2 bg-white/10 text-white hover:bg-white/20 border-0">Mobile App</Badge>
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
            <h2 className="text-3xl font-bold tracking-tighter">Mobile Technologies</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((t, i) => (
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Have an app idea? Let's build it.</h2>
            <p className="text-muted-foreground mb-8">From concept to App Store in as little as 8 weeks. Tell us what you're building.</p>
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

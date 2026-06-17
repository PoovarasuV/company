import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ChevronRight, ArrowUpRight, Bot, ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  { title: "AI Chatbots & Assistants", desc: "Custom LLM-powered chatbots trained on your data for customer support, internal knowledge bases, and automated assistance.", image: "ai-1.webp", gradient: "from-violet-500 to-purple-600" },
  { title: "Process Automation", desc: "Intelligent workflow automation using n8n, Zapier, or custom solutions to eliminate repetitive tasks and manual data entry.", image: "ai-2.webp", gradient: "from-blue-500 to-cyan-600" },
  { title: "Document Intelligence", desc: "AI-powered document analysis for contract review, invoice processing, data extraction, and automated document workflows.", image: "ai-3.png", gradient: "from-emerald-500 to-teal-600" },
  { title: "Predictive Analytics", desc: "Custom ML models for forecasting, trend analysis, customer behavior prediction, and data-driven decision making.", image: "ai-4.webp", gradient: "from-orange-500 to-red-600" },
  { title: "Content Generation", desc: "AI-powered content creation for marketing copy, product descriptions, reports, and personalized communications at scale.", image: "ai-5.avif", gradient: "from-pink-500 to-rose-600" },
  { title: "Voice & Speech AI", desc: "Speech-to-text, text-to-speech, and voice command systems for accessibility, transcription, and voice-enabled applications.", image: "ai-6.jpg", gradient: "from-amber-500 to-yellow-600" },
];

const stats = [
  { value: "20+", label: "AI Systems Deployed" },
  { value: "80%", label: "Avg Task Automation" },
  { value: "10M+", label: "AI Requests Served" },
  { value: "99.9%", label: "Uptime SLA" },
];

const techs = ["OpenAI GPT-4o", "Claude 3.5", "LangChain", "LlamaIndex", "Pinecone", "Weaviate", "Python", "FastAPI", "n8n", "Zapier", "HuggingFace", "TensorFlow"];

export default function AISolutionsPage() {
  const [location, setLocation] = useLocation();
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
              onClick={() => {
                setLocation("/");
                setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400);
              }}>
              Build AI Into My Business
            </Button>
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
            <p className="text-xs font-bold tracking-widest uppercase text-violet-400 mb-2">What We Build</p>
            <h2 className="text-4xl font-bold tracking-tighter">AI & Automation Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {services.map((s, i) => (
                <motion.div key={s.title} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  animate={{ y: [0, -6, 0] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{
                    opacity: { delay: i * 0.15, duration: 0.6 },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.2 }
                  }}
                  className="group relative bg-card/40 border border-white/5 rounded-3xl overflow-hidden hover:border-violet-500/30 transition-all duration-300">
                  {s.image ? (
                    <img
                      src={`/works/${encodeURIComponent(s.image)}`}
                      alt={s.title}
                      className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className={`w-full aspect-[4/3] bg-gradient-to-br ${s.gradient} opacity-80 group-hover:scale-105 transition-transform duration-700`} />
                  )}
                  <div className="p-6 relative z-10 bg-gradient-to-t from-card via-card to-transparent absolute bottom-0 inset-x-0 pt-20">
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm">{s.desc}</p>
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
    </div>
  );
}

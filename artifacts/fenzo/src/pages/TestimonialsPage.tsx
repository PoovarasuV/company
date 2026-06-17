import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Star, Quote } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const testimonials = [
  { name: "Sarah Kim", role: "CEO", company: "TechFlow Inc.", initials: "SK", gradient: "from-violet-600 to-purple-800", rating: 5, category: "Website", result: "+200% lead generation", quote: "FENZO didn't just build us a website — they rebuilt how we present ourselves to the world. Within 3 months, our inbound leads doubled. The attention to detail, the animations, the speed — everything was flawless. They felt like an extension of our own team, not an outside agency.", short: "Within 3 months, our inbound leads doubled." },
  { name: "Marcus Reid", role: "Founder", company: "RetailPro AI", initials: "MR", gradient: "from-blue-600 to-cyan-700", rating: 5, category: "AI Solution", result: "80% query automation", quote: "The AI chatbot FENZO built for us handles 80% of our customer support queries automatically. That's thousands of hours saved and a dramatically better customer experience. They understood our business deeply before writing a single line of code — that's rare.", short: "Their AI chatbot saved us thousands of support hours." },
  { name: "Priya Sharma", role: "Director of Growth", company: "FashionHub", initials: "PS", gradient: "from-cyan-600 to-teal-700", rating: 5, category: "E-Commerce", result: "+340% revenue YoY", quote: "Our previous e-commerce platform was holding us back. FENZO migrated us to a custom Next.js storefront with a seamless Stripe integration and our revenue increased 340% year-over-year. The checkout conversion rate alone improved by 60%. Remarkable team.", short: "Revenue increased 340% year-over-year after launch." },
  { name: "David McKenna", role: "CTO", company: "BuildRight Group", initials: "DM", gradient: "from-purple-600 to-pink-700", rating: 5, category: "Custom Software", result: "60% efficiency gain", quote: "We had a complex project management system that was a mess of spreadsheets and manual processes. FENZO built us a custom dashboard that replaced all of it. Project visibility improved, errors dropped, and our teams are 60% more efficient. Best investment we made.", short: "Best investment we made. ROI within 4 months." },
  { name: "Amara Diallo", role: "Operations Lead", company: "MediTrack Health", initials: "AD", gradient: "from-blue-700 to-indigo-800", rating: 5, category: "Dashboard", result: "10k+ patients managed", quote: "Healthcare software needs to be accurate and intuitive under pressure. FENZO delivered both. The patient management dashboard they built is used by our clinical teams every day, and the adoption rate was near-instant. They understand regulated industries.", short: "Adoption was instant — the UX just makes sense." },
  { name: "Takeshi Mori", role: "CEO", company: "DineEasy", initials: "TM", gradient: "from-violet-700 to-blue-700", rating: 5, category: "Mobile App", result: "50k+ orders served", quote: "Our restaurant ordering app went from concept to App Store in 11 weeks. FENZO's mobile team is exceptional — React Native with buttery-smooth animations, real-time order updates, and zero crashes at launch. We hit 50,000 orders in the first quarter.", short: "From concept to App Store in 11 weeks. Zero crashes." },
  { name: "Elena Vasquez", role: "COO", company: "HRFlow Systems", initials: "EV", gradient: "from-cyan-700 to-blue-800", rating: 5, category: "Automation", result: "80% manual work cut", quote: "Our HR team was drowning in manual processes — onboarding, payroll coordination, compliance reports. FENZO automated 80% of it using intelligent workflows. The ROI was immediate and the system is reliable enough that I genuinely don't think about it anymore.", short: "We automated 80% of HR ops. ROI was immediate." },
  { name: "James Okonkwo", role: "Founder", company: "LegalAI", initials: "JO", gradient: "from-purple-700 to-violet-900", rating: 5, category: "AI Solution", result: "90% faster doc review", quote: "Document review that used to take a senior paralegal 6 hours now takes our AI system 20 minutes. FENZO's team really understood our legal workflow before building anything. The accuracy is remarkable and the time savings have transformed our practice.", short: "6-hour legal reviews now take 20 minutes." },
  { name: "Chen Wei", role: "VP Product", company: "FinPulse", initials: "CW", gradient: "from-blue-800 to-cyan-900", rating: 5, category: "Dashboard", result: "50k real-time users", quote: "Building a real-time financial dashboard that handles 50,000 concurrent users with live WebSocket data is hard. FENZO made it look easy. Zero performance issues at scale, the data visualizations are stunning, and the team communicated clearly throughout.", short: "50k concurrent users, zero performance issues." },
];

const categories = ["All", "Website", "Mobile App", "E-Commerce", "AI Solution", "Dashboard", "Automation", "Custom Software"];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? testimonials : testimonials.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden pt-24 pb-12 px-4">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(139,92,246,0.13) 0%, transparent 70%)" }} />
        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10 max-w-3xl">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <ChevronRight size={12} />
            <span className="text-primary">Testimonials</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400">Clients Say</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Real results from real businesses. Every review is from a client who trusted us with their vision.
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#F59E0B" stroke="none" />)}
            <span className="ml-2 text-sm text-muted-foreground">5.0 average across 80+ clients</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "80+", label: "Verified Reviews" },
            { value: "5.0", label: "Average Rating" },
            { value: "100%", label: "Would Recommend" },
            { value: "95%", label: "Repeat Clients" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filter + grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-[0_0_20px_-4px_rgba(139,92,246,0.5)]"
                    : "border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 flex flex-col"
                  data-testid={`card-testimonial-${i}`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="#F59E0B" stroke="none" />)}
                  </div>
                  {/* Quote icon */}
                  <Quote size={24} className="text-primary/30 mb-3" />
                  {/* Quote text */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1 italic">"{t.quote}"</p>
                  {/* Result badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-5 w-fit">
                    {t.result}
                  </div>
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-xs font-bold text-white">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                    </div>
                    <span className="ml-auto px-2 py-0.5 rounded-full text-xs border border-border/50 text-muted-foreground">{t.category}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 rounded-3xl border border-primary/20" style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.08), transparent 70%)" }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Ready to be our next success story?</h2>
            <p className="text-muted-foreground mb-8">Join 80+ businesses who transformed their digital presence with FENZO.</p>
            <Link href="/work">
              <button className="h-12 px-8 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold transition-all duration-300 shadow-[0_0_30px_-8px_rgba(139,92,246,0.6)]">
                See Our Portfolio
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

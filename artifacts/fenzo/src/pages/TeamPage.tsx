import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Github, Linkedin, Twitter } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const team = [
  { name: "Poovarasu V", role: "CEO", dept: "Leadership", initials: "PV", gradient: "from-violet-600 to-purple-800", bio: "3+ years building products at scale. Former lead engineer at a Series B startup. Obsessed with developer experience and product strategy.", skills: ["Product Strategy", "Engineering Leadership", "AI/ML"] },
  { name: "Arvind M", role: "Head of Design", dept: "Design", initials: "AM", gradient: "from-cyan-600 to-teal-700", bio: "Previously UX Lead at a Fortune 500. Believes great design is invisible — it just works. Champion of accessibility-first thinking.", skills: ["UI/UX Design", "Design Systems", "Figma"] },
  { name: "Punith T", role: "AI Solutions Lead", dept: "AI", initials: "PT", gradient: "from-purple-600 to-pink-700", bio: "ML engineer with 6 years in NLP and computer vision. Has deployed AI systems serving millions of users across 4 continents.", skills: ["LLMs", "Python/PyTorch", "LangChain"] },
  { name: "Rajesh J", role: "Mobile Lead", dept: "Engineering", initials: "RJ", gradient: "from-blue-700 to-indigo-800", bio: "Built apps with 50k+ daily active users. Specialist in React Native and Flutter with a passion for buttery-smooth animations.", skills: ["React Native", "Flutter", "iOS/Android"] },
  { name: "Jagath Kumar", role: "E-Commerce Architect", dept: "Engineering", initials: "JK", gradient: "from-violet-700 to-blue-700", bio: "Shopify Partner Expert and Stripe certified developer. Has built checkout flows processing over $20M in annual transactions.", skills: ["Next.js", "Shopify", "Stripe"] },
  { name: "Lokesh K", role: "DevOps & Cloud Engineer", dept: "Infrastructure", initials: "LK", gradient: "from-cyan-700 to-blue-800", bio: "AWS certified architect who lives in the terminal. Zero-downtime deployments and 99.9% uptime are his baseline — not his goal.", skills: ["AWS", "Docker", "Kubernetes"] },
  { name: "Vignesh S", role: "Business Automation Lead", dept: "Automation", initials: "VS", gradient: "from-purple-700 to-violet-900", bio: "Process engineer who eliminated 10,000 hours of manual work for clients in the last year alone. Makes companies hum.", skills: ["n8n", "Zapier", "Node.js"] },
  { name: "Jaya Prakash K", role: "Backend Architect", dept: "Engineering", initials: "JP", gradient: "from-blue-800 to-cyan-900", bio: "Java and Spring Boot veteran with deep PostgreSQL expertise. Designed systems handling millions of concurrent requests.", skills: ["Java/Spring", "PostgreSQL", "Microservices"] },
];

const deptColors: Record<string, string> = {
  Leadership: "#8B5CF6",
  Engineering: "#3B82F6",
  Design: "#06B6D4",
  AI: "#EC4899",
  Infrastructure: "#10B981",
  Automation: "#F59E0B",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden pt-24 pb-12 px-4">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(59,130,246,0.13) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(59,130,246,0.07) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(139,92,246,0.05) 40px)" }} />
        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10 max-w-3xl">
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <ChevronRight size={12} />
            <span className="text-primary">Our Team</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            The People Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">The Products</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Engineers, designers, AI specialists, and strategists who care deeply about the work — and the people it affects.
          </motion.p>
        </motion.div>
      </section>

      {/* Team grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-2xl border border-border/50 bg-card/40 hover:border-primary/30 hover:bg-card/70 transition-all duration-300"
                data-testid={`card-team-${i}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="text-lg font-bold text-white">{member.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg leading-tight">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{member.role}</p>
                    <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: `${deptColors[member.dept] ?? "#8B5CF6"}18`, color: deptColors[member.dept] ?? "#8B5CF6" }}>
                      {member.dept}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((s, j) => (
                    <span key={j} className="px-2.5 py-1 rounded-full text-xs border border-border/60 bg-background/50 text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-github-${i}`}><Github size={16} /></a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-linkedin-${i}`}><Linkedin size={16} /></a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-twitter-${i}`}><Twitter size={16} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture section */}
      <section className="py-24 px-4 border-y border-border/30 bg-card/20">
        <div className="container mx-auto max-w-5xl">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Life at FENZO</p>
            <h2 className="text-4xl font-bold tracking-tighter">A culture built on craft</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Remote-First", desc: "Work from wherever you do your best thinking. We have team members across 8 time zones.", gradient: "from-violet-600/20 to-transparent" },
              { title: "Ship & Learn", desc: "Fast feedback loops, weekly demos, and a culture where it's safe to experiment and fail.", gradient: "from-blue-600/20 to-transparent" },
              { title: "Ownership", desc: "Every engineer owns their feature end to end — design, code, deployment, and monitoring.", gradient: "from-cyan-600/20 to-transparent" },
              { title: "Growth Focus", desc: "Learning budgets, conference tickets, and dedicated time for exploration and personal projects.", gradient: "from-violet-600/20 to-transparent" },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border/50 bg-card/50">
                <div className={`w-full h-1 rounded-full bg-gradient-to-r ${c.gradient} mb-4`} style={{ background: ["linear-gradient(to right,#8B5CF6,transparent)", "linear-gradient(to right,#3B82F6,transparent)", "linear-gradient(to right,#06B6D4,transparent)", "linear-gradient(to right,#8B5CF6,transparent)"][i] }} />
                <h3 className="font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 rounded-3xl border border-blue-500/20" style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.08), transparent 70%)" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-3">We're Growing</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Want to join us?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">We're always looking for exceptional engineers, designers, and strategists who take their craft seriously.</p>
            <Button className="h-12 px-8 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 border-0 font-semibold">
              View Open Roles
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

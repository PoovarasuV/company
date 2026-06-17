import { motion } from "framer-motion";
import { Check, Layers } from "lucide-react";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVuedotjs, 
  SiNodedotjs, SiExpress, SiSpringboot, SiPython, SiFastapi,
  SiReactos, SiFlutter, SiSwift, SiKotlin, SiExpo,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiSupabase, SiFirebase,
  SiDocker, SiKubernetes, SiVercel, SiNetlify, SiGithubactions,
  SiOpenai, SiTensorflow, SiHuggingface,
  SiFigma, SiGit, SiJira, SiSlack, SiZapier
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Frontend",
    icon: <Layers className="w-6 h-6 text-primary" />,
    tech: [
      { name: "React", Icon: SiReact, exp: "5+ Years", level: 95 },
      { name: "Next.js", Icon: SiNextdotjs, exp: "4+ Years", level: 90 },
      { name: "TypeScript", Icon: SiTypescript, exp: "5+ Years", level: 95 },
      { name: "Tailwind CSS", Icon: SiTailwindcss, exp: "4+ Years", level: 95 },
      { name: "Vue.js", Icon: SiVuedotjs, exp: "3+ Years", level: 80 }
    ]
  },
  {
    name: "Backend",
    icon: <Layers className="w-6 h-6 text-secondary" />,
    tech: [
      { name: "Node.js", Icon: SiNodedotjs, exp: "5+ Years", level: 90 },
      { name: "Express", Icon: SiExpress, exp: "5+ Years", level: 90 },
      { name: "Java", Icon: FaJava, exp: "6+ Years", level: 85 },
      { name: "Spring Boot", Icon: SiSpringboot, exp: "4+ Years", level: 80 },
      { name: "Python", Icon: SiPython, exp: "5+ Years", level: 85 },
      { name: "FastAPI", Icon: SiFastapi, exp: "3+ Years", level: 85 }
    ]
  },
  {
    name: "Mobile",
    icon: <Layers className="w-6 h-6 text-accent" />,
    tech: [
      { name: "React Native", Icon: SiReactos, exp: "4+ Years", level: 90 },
      { name: "Flutter", Icon: SiFlutter, exp: "3+ Years", level: 80 },
      { name: "Swift", Icon: SiSwift, exp: "4+ Years", level: 75 },
      { name: "Kotlin", Icon: SiKotlin, exp: "3+ Years", level: 75 },
      { name: "Expo", Icon: SiExpo, exp: "4+ Years", level: 90 }
    ]
  },
  {
    name: "Database",
    icon: <Layers className="w-6 h-6 text-emerald-500" />,
    tech: [
      { name: "PostgreSQL", Icon: SiPostgresql, exp: "5+ Years", level: 95 },
      { name: "MySQL", Icon: SiMysql, exp: "5+ Years", level: 85 },
      { name: "MongoDB", Icon: SiMongodb, exp: "4+ Years", level: 85 },
      { name: "Redis", Icon: SiRedis, exp: "4+ Years", level: 80 },
      { name: "Supabase", Icon: SiSupabase, exp: "3+ Years", level: 90 },
      { name: "Firebase", Icon: SiFirebase, exp: "5+ Years", level: 90 }
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: <Layers className="w-6 h-6 text-orange-500" />,
    tech: [
      { name: "AWS", Icon: FaAws, exp: "5+ Years", level: 85 },
      { name: "Docker", Icon: SiDocker, exp: "4+ Years", level: 90 },
      { name: "Kubernetes", Icon: SiKubernetes, exp: "3+ Years", level: 75 },
      { name: "Vercel", Icon: SiVercel, exp: "4+ Years", level: 95 },
      { name: "Netlify", Icon: SiNetlify, exp: "4+ Years", level: 90 },
      { name: "GitHub Actions", Icon: SiGithubactions, exp: "4+ Years", level: 85 }
    ]
  },
  {
    name: "AI & ML",
    icon: <Layers className="w-6 h-6 text-pink-500" />,
    tech: [
      { name: "OpenAI API", Icon: SiOpenai, exp: "2+ Years", level: 95 },
      { name: "TensorFlow", Icon: SiTensorflow, exp: "3+ Years", level: 70 },
      { name: "Hugging Face", Icon: SiHuggingface, exp: "2+ Years", level: 80 }
    ]
  },
  {
    name: "Tools & Workflow",
    icon: <Layers className="w-6 h-6 text-yellow-500" />,
    tech: [
      { name: "Figma", Icon: SiFigma, exp: "5+ Years", level: 90 },
      { name: "Git", Icon: SiGit, exp: "6+ Years", level: 95 },
      { name: "Jira", Icon: SiJira, exp: "5+ Years", level: 85 },
      { name: "Slack", Icon: SiSlack, exp: "6+ Years", level: 95 },
      { name: "Zapier", Icon: SiZapier, exp: "4+ Years", level: 85 }
    ]
  }
];

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden flex flex-col justify-center min-h-[50vh]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)]" />
        
        <div className="container px-4 mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-6"
          >
            Our Tech Stack
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Cutting-edge tools, battle-tested in production. We use the right tech for the job, not just what's trending.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-white mb-2">30+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">5+ Years</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Avg Exp In Production</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Zero</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Vendor Lock-in</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-24">
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-4">
                  {cat.icon}
                  <h2 className="text-3xl font-bold font-heading">{cat.name}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.tech.map((t) => (
                    <div 
                      key={t.name}
                      className="group bg-card/30 border border-white/10 rounded-2xl p-6 hover:bg-card/60 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(255,255,255,0.1)] relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <t.Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-white/5 rounded-md text-muted-foreground">{t.exp}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4">{t.name}</h3>
                      
                      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${t.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proficiency Matrix */}
      <section className="py-24 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-5xl overflow-x-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">Technology Matrix</h2>
            <p className="text-muted-foreground">How we apply our stack across different service domains.</p>
          </div>
          
          <div className="min-w-[800px] bg-background/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="p-4 font-bold text-white/90">Technology</th>
                  <th className="p-4 font-bold text-white/90 text-center">Websites</th>
                  <th className="p-4 font-bold text-white/90 text-center">Mobile</th>
                  <th className="p-4 font-bold text-white/90 text-center">E-Comm</th>
                  <th className="p-4 font-bold text-white/90 text-center">AI</th>
                  <th className="p-4 font-bold text-white/90 text-center">Custom SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { name: "React / Next.js", checks: [true, false, true, true, true] },
                  { name: "React Native", checks: [false, true, false, false, false] },
                  { name: "Node.js", checks: [true, true, true, true, true] },
                  { name: "Python", checks: [false, false, false, true, true] },
                  { name: "PostgreSQL", checks: [true, true, true, true, true] },
                  { name: "OpenAI API", checks: [false, false, false, true, true] },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-medium">{row.name}</td>
                    {row.checks.map((check, j) => (
                      <td key={j} className="p-4 text-center">
                        {check ? <Check className="w-4 h-4 text-primary mx-auto" /> : <span className="text-white/10">-</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent">
              <h3 className="text-xl font-bold mb-3">Project first, tech second.</h3>
              <p className="text-muted-foreground leading-relaxed">We don't force every problem into a React-shaped hole. We choose the stack that offers the best balance of speed, maintainability, and scalability for your specific use case.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent">
              <h3 className="text-xl font-bold mb-3">No over-engineering.</h3>
              <p className="text-muted-foreground leading-relaxed">If a simple SQLite database and a Next.js frontend solves the problem elegantly, we won't build a 10-node Kubernetes microservices cluster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-primary/10 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">Want to talk tech?</h2>
          <p className="text-xl text-white/70 mb-10">Let's geek out together and architect your next big thing.</p>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            Schedule a Technical Call
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
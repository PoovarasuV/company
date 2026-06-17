import { motion } from "framer-motion";
import { Code2, Compass, Layers, Lightbulb, Rocket, ShieldCheck, UserCheck, Zap } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const phases = [
  {
    num: "1",
    name: "Discovery & Strategy",
    tagline: "Measure twice, cut once.",
    desc: "We dive deep into your business objectives, target audience, and technical requirements. This isn't just a brief meeting—it's a comprehensive audit where we align our engineering approach with your business goals to ensure long-term ROI.",
    timeline: "Week 1-2",
    deliverables: ["Technical Architecture Document", "User Journey Maps", "Project Roadmap", "Risk Assessment"],
    color: "text-purple-500",
    border: "border-purple-500",
    bg: "from-purple-500/20"
  },
  {
    num: "2",
    name: "UI/UX Design",
    tagline: "Form follows function.",
    desc: "Our design team translates strategy into wireframes and high-fidelity prototypes. We focus on creating intuitive, frictionless interfaces that look stunning while driving user action and engagement.",
    timeline: "Week 2-4",
    deliverables: ["Interactive Prototypes", "Design System", "Accessibility Audit", "Motion Guidelines"],
    color: "text-blue-500",
    border: "border-blue-500",
    bg: "from-blue-500/20"
  },
  {
    num: "3",
    name: "Development",
    tagline: "Where the magic happens.",
    desc: "Our engineers build your product using modern, scalable tech stacks. We write clean, documented code using agile methodologies, ensuring you have complete visibility into the build process via weekly sprints.",
    timeline: "Week 4-10+",
    deliverables: ["Frontend & Backend Code", "API Integration", "Database Setup", "Staging Environment"],
    color: "text-cyan-500",
    border: "border-cyan-500",
    bg: "from-cyan-500/20"
  },
  {
    num: "4",
    name: "Quality Assurance",
    tagline: "Bulletproofing the build.",
    desc: "Rigorous testing across all devices, browsers, and edge cases. We employ both automated testing and manual QA to guarantee your product performs flawlessly under pressure before it ever sees a real user.",
    timeline: "Week 10-12",
    deliverables: ["Security Audit", "Performance Report", "Cross-browser Testing", "UAT Sign-off"],
    color: "text-emerald-500",
    border: "border-emerald-500",
    bg: "from-emerald-500/20"
  },
  {
    num: "5",
    name: "Launch & Deployment",
    tagline: "Houston, we have liftoff.",
    desc: "A meticulous, zero-downtime deployment process. We configure production servers, optimize CI/CD pipelines, set up monitoring tools, and seamlessly transition from staging to live.",
    timeline: "Week 12",
    deliverables: ["Production Deployment", "DNS Configuration", "Analytics Setup", "Source Code Handover"],
    color: "text-amber-500",
    border: "border-amber-500",
    bg: "from-amber-500/20"
  },
  {
    num: "6",
    name: "Growth & Support",
    tagline: "The launch is just the beginning.",
    desc: "Post-launch, we monitor system health, optimize performance, and iterate based on real user data. We offer SLA-backed support to ensure your digital infrastructure scales alongside your business.",
    timeline: "Ongoing",
    deliverables: ["24/7 Monitoring", "Monthly Maintenance", "Feature Iterations", "Performance Tuning"],
    color: "text-pink-500",
    border: "border-pink-500",
    bg: "from-pink-500/20"
  }
];

export default function ProcessPage() {
  const title = "Our Process".split("");

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden flex flex-col justify-center min-h-[55vh]">
        {/* CSS Particle background approximation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container px-4 mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-6 flex justify-center">
            {title.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={char === " " ? "w-4" : "inline-block"}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A battle-tested methodology that delivers every time.
          </motion.p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
              <Lightbulb className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3 font-heading">Clarity First</h3>
              <p className="text-muted-foreground">No buzzwords, no ambiguity. We define clear scopes, timelines, and deliverables before a single line of code is written.</p>
            </div>
            <div className="bg-card/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
              <Zap className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3 font-heading">Quality at Speed</h3>
              <p className="text-muted-foreground">Agile sprints combined with automated CI/CD pipelines allow us to ship fast without sacrificing architectural integrity.</p>
            </div>
            <div className="bg-card/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
              <UserCheck className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold mb-3 font-heading">Long-Term Partnership</h3>
              <p className="text-muted-foreground">We don't build and vanish. We engineer systems designed for scalability and stick around to help you grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Phases */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {phases.map((phase, i) => {
              const isEven = i % 2 !== 0;
              return (
                <motion.div 
                  key={phase.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
                >
                  {/* Content */}
                  <div className={`flex-1 relative pl-8 border-l-4 ${phase.border}`}>
                    <div className="absolute top-0 right-0 lg:-right-12 -z-10 text-[200px] font-bold font-heading text-white/5 leading-none select-none">
                      {phase.num}
                    </div>
                    
                    <div className={`text-sm font-bold uppercase tracking-wider mb-2 ${phase.color}`}>Phase {phase.num}</div>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">{phase.name}</h2>
                    <p className="text-xl text-white/80 font-medium mb-6 italic">{phase.tagline}</p>
                    
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {phase.desc}
                    </p>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                      <div className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-bold">Estimated Timeline</div>
                      <div className="text-xl font-bold">{phase.timeline}</div>
                    </div>

                    <div>
                      <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Key Deliverables</div>
                      <ul className="space-y-2">
                        {phase.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-white/90">
                            <div className={`w-2 h-2 rounded-full bg-current ${phase.color}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 w-full flex justify-center">
                    <div className={`w-full max-w-[400px] aspect-square rounded-full bg-gradient-to-br ${phase.bg} to-transparent border border-white/10 flex items-center justify-center relative overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-t ${phase.bg} opacity-50 backdrop-blur-3xl`} />
                      <div className="relative z-10 text-center">
                        <Layers className={`w-16 h-16 mx-auto mb-4 ${phase.color} opacity-50`} />
                        <div className="font-heading font-bold text-2xl opacity-50">Phase {phase.num}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">What Makes Us Different</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-background border border-white/10 p-8 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">No Hidden Costs</h3>
              <p className="text-muted-foreground">Fixed-price contracts mean the price we quote is the price you pay. Period.</p>
            </div>
            <div className="bg-background border border-white/10 p-8 rounded-2xl">
              <UserCheck className="w-8 h-8 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Dedicated Project Manager</h3>
              <p className="text-muted-foreground">A single point of contact who understands both business needs and technical execution.</p>
            </div>
            <div className="bg-background border border-white/10 p-8 rounded-2xl">
              <Compass className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Weekly Progress Reports</h3>
              <p className="text-muted-foreground">Never wonder about status. You get transparent, detailed updates every Friday.</p>
            </div>
            <div className="bg-background border border-white/10 p-8 rounded-2xl">
              <Rocket className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Post-Launch Support Included</h3>
              <p className="text-muted-foreground">30 days of bug fixes and performance monitoring included standard on every build.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Process FAQ</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1" className="border-white/10 py-2">
              <AccordionTrigger className="text-lg hover:text-primary transition-colors">How do you handle scope changes mid-project?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                We use an agile change-request process. If new requirements arise, we pause, estimate the time/cost impact, and require your approval before proceeding. We never surprise you with bills.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="border-white/10 py-2">
              <AccordionTrigger className="text-lg hover:text-primary transition-colors">Do I own the code after launch?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                100%. Upon final payment, all intellectual property, source code, and design assets are fully transferred to your ownership.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3" className="border-white/10 py-2">
              <AccordionTrigger className="text-lg hover:text-primary transition-colors">Will I have access to the staging environment?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Yes. We provide a live staging link early in the development phase so you can test features and provide feedback as they are built, not just at the end.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4" className="border-white/10 py-2">
              <AccordionTrigger className="text-lg hover:text-primary transition-colors">How do you ensure security during development?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                We follow OWASP guidelines, use environment variables for all secrets, implement proper CORS/CSRF protections, and run automated vulnerability scans on all dependencies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5" className="border-white/10 py-2">
              <AccordionTrigger className="text-lg hover:text-primary transition-colors">What happens if my project is delayed?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Our timeline estimates are highly accurate due to our rigorous discovery phase. If delays occur on our end, we eat the cost. If they occur due to delayed client feedback/assets, we adjust the timeline transparently.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
}
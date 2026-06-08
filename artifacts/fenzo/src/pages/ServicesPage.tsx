import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronDown, ExternalLink } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingAI from "@/components/FloatingAI";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "01",
    title: "Website Development",
    tagline: "High-performance marketing sites",
    description: "We architect digital experiences that convert visitors into customers. Our websites are built with modern frameworks to ensure lightning-fast load times, flawless SEO, and exceptional user experiences across all devices. We don't just build sites; we build growth engines.",
    features: ["Custom React/Next.js Architecture", "Headless CMS Integration", "Advanced SEO Optimization", "Framer Motion Animations", "Conversion Rate Optimization", "Accessibility Compliance"],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    included: [
      { q: "Responsive Design", a: "Flawless layout across all mobile, tablet, and desktop viewports." },
      { q: "Performance Audits", a: "Core Web Vitals optimization guaranteeing 90+ Lighthouse scores." },
      { q: "Analytics Setup", a: "Google Analytics 4 and custom event tracking implementation." }
    ]
  },
  {
    id: "02",
    title: "Mobile App Development",
    tagline: "Native performance, cross-platform reach",
    description: "From concept to app store in record time. We build applications that users love and use daily. Leveraging cutting-edge mobile frameworks, we deliver seamless native experiences while maintaining the efficiency of a unified codebase.",
    features: ["iOS & Android Development", "App Store Optimization", "Offline Capabilities", "Push Notifications", "Biometric Authentication", "In-App Purchases"],
    tech: ["React Native", "Flutter", "Swift", "Kotlin"],
    included: [
      { q: "Store Submission", a: "We handle the complete Apple App Store and Google Play Store review process." },
      { q: "Beta Testing", a: "TestFlight and Google Play Console setup for private beta distribution." },
      { q: "Crash Analytics", a: "Sentry/Crashlytics integration for real-time bug tracking." }
    ]
  },
  {
    id: "03",
    title: "E-Commerce Solutions",
    tagline: "Scalable stores that convert",
    description: "We build stores that sell while you sleep. Combining beautiful design with robust backend architecture to handle high-volume traffic, complex inventory, and secure global payments.",
    features: ["Custom Storefronts", "Inventory Management", "Global Payment Gateways", "Abandoned Cart Recovery", "Dynamic Pricing", "ERP Integration"],
    tech: ["Shopify", "WooCommerce", "Stripe", "PostgreSQL"],
    included: [
      { q: "Payment Setup", a: "Secure integration of Stripe, PayPal, Apple Pay, and Google Pay." },
      { q: "Tax Configuration", a: "Automated regional tax calculation and compliance." },
      { q: "Fulfillment Workflows", a: "Connection to 3PL and major shipping carriers." }
    ]
  },
  {
    id: "04",
    title: "AI Solutions",
    tagline: "Intelligent systems that learn",
    description: "Intelligent systems that learn, adapt, and deliver outsized ROI. We integrate state-of-the-art LLMs and custom machine learning models directly into your business workflows.",
    features: ["Custom LLM Integration", "RAG Pipeline Development", "Automated Support Agents", "Predictive Analytics", "Document Processing", "Voice & Vision AI"],
    tech: ["OpenAI", "LangChain", "Python", "TensorFlow"],
    included: [
      { q: "Prompt Engineering", a: "Meticulously crafted system prompts to ensure brand safety and accuracy." },
      { q: "Data Privacy", a: "Secure zero-retention API configurations protecting your proprietary data." },
      { q: "Model Evaluation", a: "Continuous monitoring of output quality and latency." }
    ]
  },
  {
    id: "05",
    title: "Business Automation",
    tagline: "Work smarter, not harder",
    description: "Eliminate manual work with smart automation pipelines. We connect disparate systems, syncing data across your organization to save thousands of hours and reduce human error.",
    features: ["API Integrations", "Custom Webhooks", "CRM Syncing", "Automated Reporting", "Invoice Generation", "Onboarding Workflows"],
    tech: ["Node.js", "n8n", "Zapier", "PostgreSQL"],
    included: [
      { q: "Process Mapping", a: "Comprehensive audit of your existing manual workflows." },
      { q: "Error Handling", a: "Robust fallback mechanisms and alert systems for API failures." },
      { q: "Scalable Architecture", a: "Systems designed to handle 10x your current volume." }
    ]
  },
  {
    id: "06",
    title: "Custom Software",
    tagline: "Complex problems, elegant solutions",
    description: "Enterprise-grade software built for scale and longevity. When off-the-shelf tools fail, we engineer bespoke SaaS platforms, internal tools, and legacy system modernizations.",
    features: ["Microservices Architecture", "Legacy Modernization", "Real-time Dashboards", "Role-based Access Control", "Multi-tenant SaaS", "Audit Logging"],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    included: [
      { q: "Architecture Design", a: "Scalable system design blueprints before writing a single line of code." },
      { q: "Security Audits", a: "OWASP Top 10 compliance and penetration testing." },
      { q: "Documentation", a: "Comprehensive API and system documentation for your internal team." }
    ]
  }
];

function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Starter */}
      <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-8 flex flex-col relative overflow-hidden">
        <h3 className="text-xl font-bold mb-2">Starter</h3>
        <p className="text-muted-foreground text-sm mb-6">Perfect for small businesses establishing digital presence.</p>
        <div className="text-4xl font-bold mb-6">$5k<span className="text-lg text-muted-foreground font-normal">-$15k</span></div>
        <ul className="space-y-4 mb-8 flex-1">
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> Landing Page Design</li>
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> Basic SEO Setup</li>
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> Contact Forms</li>
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> Mobile Responsive</li>
          <li className="flex gap-3 text-sm items-center text-muted-foreground"><X className="w-5 h-5" /> Complex Integrations</li>
          <li className="flex gap-3 text-sm items-center text-muted-foreground"><X className="w-5 h-5" /> AI Capabilities</li>
        </ul>
        <Button variant="outline" className="w-full">Get Started</Button>
      </div>

      {/* Growth */}
      <div className="bg-card backdrop-blur-md border-2 border-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.15)] rounded-2xl p-8 flex flex-col relative overflow-hidden transform md:-translate-y-4">
        <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Most Popular</div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <h3 className="text-xl font-bold mb-2 text-primary">Growth</h3>
        <p className="text-muted-foreground text-sm mb-6">For scaling startups needing robust digital infrastructure.</p>
        <div className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">$15k<span className="text-lg text-muted-foreground font-normal">-$40k</span></div>
        <ul className="space-y-4 mb-8 flex-1">
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> Multi-page Web App</li>
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> CMS Integration</li>
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> Custom Animations</li>
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> E-commerce / Payments</li>
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> Basic Automations</li>
          <li className="flex gap-3 text-sm items-center text-muted-foreground"><X className="w-5 h-5" /> Advanced AI Systems</li>
        </ul>
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">Choose Growth</Button>
      </div>

      {/* Enterprise */}
      <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-8 flex flex-col relative overflow-hidden">
        <h3 className="text-xl font-bold mb-2">Enterprise</h3>
        <p className="text-muted-foreground text-sm mb-6">Custom engineering for complex, high-volume operations.</p>
        <div className="text-4xl font-bold mb-6">Custom</div>
        <ul className="space-y-4 mb-8 flex-1">
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> Full Stack Architecture</li>
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> Custom AI Models</li>
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> Complex Cloud Auth</li>
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> Native Mobile Apps</li>
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> Dedicated Engineering Team</li>
          <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="w-5 h-5 text-primary" /> 24/7 SLA Support</li>
        </ul>
      </div>
    </div>
  );
}

// Just a tiny x icon
function X({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  );
}


export default function ServicesPage() {
  const title = "Our Services".split(" ");

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container px-4 mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronDown className="w-4 h-4 -rotate-90" />
            <span className="text-foreground">Services</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tighter mb-6 flex flex-wrap justify-center gap-x-4">
            {title.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            End-to-end digital engineering from concept to scale.
          </motion.p>
        </div>
      </section>

      {/* Services Deep Dives */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          {services.map((service, index) => {
            const isEven = index % 2 !== 0;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 py-20 items-center border-b border-white/5 last:border-0`}
              >
                {/* Content Side */}
                <div className="flex-1 relative z-10">
                  <div className="absolute -top-16 -left-8 text-8xl md:text-[150px] font-bold font-heading text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none z-0">
                    {service.id}
                  </div>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">{service.title}</h2>
                    <p className="text-xl text-primary font-medium mb-6">{service.tagline}</p>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 hover:bg-white/10 text-white/90">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Key Capabilities</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                            <span className="text-sm text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <Accordion type="single" collapsible className="w-full">
                        {service.included.map((item, i) => (
                          <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                            <AccordionTrigger className="hover:no-underline hover:text-primary transition-colors text-left">
                              {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                              {item.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>

                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 group">
                      Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1 w-full flex justify-center lg:justify-end items-center">
                  <div className="relative w-full aspect-square max-w-[500px] rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 overflow-hidden flex items-center justify-center p-8">
                    {/* Placeholder for complex CSS visual - using simple glowing orb + text for now to avoid massive code bloat */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white mb-6 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                        <ExternalLink className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold font-heading">{service.title} Abstract</h3>
                      <p className="text-muted-foreground mt-2">Visual representation</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-black relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">No hidden fees, no surprises. Just world-class engineering tailored to your operational scale.</p>
          </div>
          
          <PricingCards />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent z-0" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter mb-6">Ready to build something extraordinary?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Let's discuss how we can transform your vision into a scalable digital reality.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8">
              Start Project
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-lg px-8">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingAI />
    </div>
  );
}
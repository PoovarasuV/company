import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ArrowUpRight, ShoppingBag, ArrowRight } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingAI from "@/components/FloatingAI";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  { name: "StyleHub", desc: "Premium Fashion Store", detail: "Headless Shopify storefront built with Next.js. Instant page transitions, one-click checkout, and AI-powered recommendations. Revenue grew 340% YoY.", tech: ["Next.js", "Shopify", "Stripe"], metric: "+340% revenue YoY", gradient: "from-violet-600 to-fuchsia-500" },
  { name: "FashionHub", desc: "Multi-Brand Marketplace", detail: "Multi-vendor fashion marketplace with vendor dashboards, inventory management, and multi-currency checkout.", tech: ["Next.js", "Stripe Connect", "PostgreSQL"], metric: "200k+ customers", gradient: "from-pink-500 to-rose-600" },
  { name: "OrganicBox", desc: "Subscription Commerce", detail: "Weekly organic produce subscription with dynamic box customisation, skip/pause logic, and smart delivery scheduling.", tech: ["Next.js", "Stripe Billing", "Node.js"], metric: "10k+ active subscribers", gradient: "from-emerald-500 to-green-700" },
  { name: "LuxeWatches", desc: "Luxury Product Store", detail: "Ultra-premium watch retailer with 3D product viewer, AR try-on, and concierge checkout experience.", tech: ["Three.js", "Next.js", "Shopify"], metric: "£2M+ GMV in year one", gradient: "from-amber-500 to-yellow-600" },
  { name: "GearPro", desc: "Sports Equipment Store", detail: "B2C and B2B sports equipment store with quote requests, bulk pricing, and integrated ERP.", tech: ["Next.js", "Stripe", "SAP"], metric: "60% checkout conversion", gradient: "from-blue-500 to-indigo-600" },
  { name: "PrintShop", desc: "Custom Print-on-Demand", detail: "Product personalisation engine allowing customers to design custom prints with live preview and instant pricing.", tech: ["React", "Node.js", "Printful API"], metric: "25k+ custom orders", gradient: "from-orange-400 to-red-600" },
];

const stats = [
  { value: "25+", label: "Stores Built" },
  { value: "+340%", label: "Best Revenue Lift" },
  { value: "60%", label: "Avg Checkout Conversion" },
  { value: "$50M+", label: "GMV Processed" },
];

const techs = ["Next.js", "Shopify Storefront API", "Shopify Admin API", "Stripe", "Stripe Connect", "Stripe Billing", "WooCommerce", "Printful", "ShipStation", "Klaviyo", "Algolia", "Sanity CMS"];

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative min-h-[58vh] flex flex-col items-center justify-center text-center overflow-hidden pt-24 pb-16 px-4">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(6,182,212,0.15) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(6,182,212,0.08) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(139,92,246,0.06) 40px)" }} />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 max-w-4xl">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
            <ChevronRight size={12} />
            <span className="text-primary">E-Commerce</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6">
            <ShoppingBag size={15} />
            E-Commerce & Digital Commerce
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.06]">
            Stores Built To{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
              Sell More
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Headless storefronts, seamless checkouts, and subscription engines — we build e-commerce experiences that convert browsers into loyal buyers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="h-12 px-7 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 border-0 font-semibold"
              onClick={() => { window.location.href = "/"; setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400); }}>
              Build My Store
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
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2">Portfolio</p>
            <h2 className="text-4xl font-bold tracking-tighter">E-Commerce Projects</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {projects.map((p, i) => (
                <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-card/40 border border-white/5 rounded-3xl overflow-hidden cursor-pointer hover:border-cyan-500/30 transition-all duration-300">
                  <div className={`w-full aspect-[4/3] bg-gradient-to-br ${p.gradient} opacity-80 group-hover:scale-105 transition-transform duration-700`} />
                  <div className="p-6 relative z-10 bg-gradient-to-t from-card via-card to-transparent absolute bottom-0 inset-x-0 pt-20">
                    <Badge className="mb-2 bg-white/10 text-white hover:bg-white/20 border-0">E-Commerce</Badge>
                    <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{p.detail}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tech.map(t => <span key={t} className="text-[10px] uppercase tracking-wider text-muted-foreground px-2 py-1 bg-white/5 rounded-md">{t}</span>)}
                    </div>
                    <div className="text-cyan-400 font-semibold text-sm border-t border-white/10 pt-3">{p.metric}</div>
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
            <p className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2">Our Stack</p>
            <h2 className="text-3xl font-bold tracking-tighter">Commerce Technologies</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {techs.map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="px-4 py-2 rounded-full border border-border/60 bg-card/50 text-sm text-muted-foreground hover:text-foreground hover:border-cyan-500/40 transition-colors">
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-10 rounded-3xl border border-cyan-500/20" style={{ background: "radial-gradient(ellipse at center, rgba(6,182,212,0.08), transparent 70%)" }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Ready to grow your online store?</h2>
            <p className="text-muted-foreground mb-8">Let's talk about your products, your customers, and how to turn your store into your best salesperson.</p>
            <Button className="h-12 px-8 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 border-0 font-semibold"
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

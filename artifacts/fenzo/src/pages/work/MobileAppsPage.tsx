import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ChevronRight, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const appTypes = [
  {
    title: "E-Commerce & Retail Apps",
    description: "Feature-rich shopping applications with secure payments, inventory management, and loyalty programs.",
    features: ["Secure Payment Integration", "Real-time Inventory", "Push Notifications", "Loyalty Rewards", "Order Tracking"]
  },
  {
    title: "Food & Delivery Apps",
    description: "On-demand food ordering and delivery platforms with real-time order tracking and restaurant management.",
    features: ["Real-time Kitchen Display", "GPS Tracking", "Multi-vendor Support", "In-app Payments", "Rating & Reviews"]
  },
  {
    title: "Healthcare & Fitness Apps",
    description: "Patient management, telemedicine, and fitness tracking applications with HIPAA compliance.",
    features: ["Appointment Booking", "Video Consultations", "Health Tracking", "Prescription Management", "Secure Messaging"]
  },
  {
    title: "Social & Communication Apps",
    description: "Community platforms, messaging apps, and social networks with real-time features.",
    features: ["Real-time Chat", "Video/Audio Calls", "Social Feeds", "User Profiles", "Content Sharing"]
  },
  {
    title: "Business & Productivity Apps",
    description: "Enterprise solutions, project management, and productivity tools for teams.",
    features: ["Task Management", "Team Collaboration", "Analytics Dashboard", "Document Sharing", "Time Tracking"]
  },
  {
    title: "Education & E-Learning Apps",
    description: "Learning management systems, course platforms, and educational content delivery.",
    features: ["Video Courses", "Interactive Quizzes", "Progress Tracking", "Certificates", "Offline Access"]
  }
];

const stats = [
  { value: "30+", label: "Apps Shipped" },
  { value: "4.9★", label: "Avg App Store Rating" },
  { value: "11 wks", label: "Avg Time to Launch" },
  { value: "0", label: "Launch-Day Crashes" },
];

const platforms = ["iOS (Swift)", "Android (Kotlin)", "React Native", "Expo", "Flutter", "Firebase", "App Store Connect", "Google Play", "RevenueCat", "OneSignal", "Stripe Mobile", "AWS Amplify"];

export default function MobileAppsPage() {
  const [location, setLocation] = useLocation();

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
              onClick={() => {
                setLocation("/");
                setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400);
              }}>
              Start Your App
            </Button>
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
            <p className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-2">What We Build</p>
            <h2 className="text-4xl font-bold tracking-tighter">Types of Mobile Apps We Develop</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appTypes.map((app, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group relative bg-card/40 border border-white/5 rounded-3xl p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-foreground">{app.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{app.description}</p>
                <ul className="space-y-2">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              onClick={() => {
                setLocation("/");
                setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 400);
              }}>
              Get a Free Quote <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

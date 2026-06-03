import React from "react";
import { motion } from "framer-motion";
import { Monitor, Smartphone, ShoppingCart, Bot, Zap, Code } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "High-performance web applications built with modern frameworks for optimal speed and SEO.",
    icon: Monitor,
    tags: ["Corporate", "Landing pages", "Portfolio"]
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences that engage users on iOS and Android.",
    icon: Smartphone,
    tags: ["iOS", "Android", "Cross-platform"]
  },
  {
    title: "E-Commerce Solutions",
    description: "Scalable online stores with seamless payment integrations and inventory management.",
    icon: ShoppingCart,
    tags: ["Online stores", "Payments", "Inventory"]
  },
  {
    title: "AI Solutions",
    description: "Intelligent automation and chatbots that streamline operations and enhance customer support.",
    icon: Bot,
    tags: ["Chatbots", "Automation", "BI"]
  },
  {
    title: "Business Automation",
    description: "Custom internal tools and CRM systems that eliminate manual data entry and save hours.",
    icon: Zap,
    tags: ["CRM", "Workflows", "Reporting"]
  },
  {
    title: "Custom Software",
    description: "Tailored enterprise software designed specifically for your unique business logic and requirements.",
    icon: Code,
    tags: ["Enterprise", "Dashboards", "Systems"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      <div className="container px-4 mx-auto md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">What We Build</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">End-to-end technical solutions designed to scale your business to the next level.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(139,92,246,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary/80 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

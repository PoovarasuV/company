import React from "react";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discover", desc: "We understand your goals, target audience, and business requirements to formulate a winning strategy." },
  { num: "02", title: "Design", desc: "Our designers craft beautiful, intuitive interfaces that ensure a flawless user experience." },
  { num: "03", title: "Develop", desc: "We build scalable, secure, and high-performance applications using modern technologies." },
  { num: "04", title: "Deploy", desc: "Rigorous testing and seamless deployment to ensure your product launches perfectly." },
  { num: "05", title: "Scale", desc: "Ongoing support and iterative improvements to help your product grow with your business." }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container px-4 mx-auto md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">How We Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A proven methodology designed to deliver exceptional results with speed and precision.</p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center text-xl font-bold mb-6 relative z-10 group-hover:border-primary group-hover:text-primary group-hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)] transition-all duration-300">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

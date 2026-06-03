import React from "react";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Requirement Analysis", desc: "We gather detailed requirements and define project scope." },
  { num: "02", title: "UI/UX Design", desc: "Creating wireframes and high-fidelity mockups for approval." },
  { num: "03", title: "Development", desc: "Writing clean, scalable code using cutting-edge tech." },
  { num: "04", title: "Testing", desc: "Rigorous QA testing to ensure bug-free delivery." },
  { num: "05", title: "Deployment", desc: "Launching your product to production servers." },
  { num: "06", title: "Support", desc: "Continuous monitoring and maintenance." }
];

export default function TimelineSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-card/10">
      <div className="container px-4 mx-auto md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From concept to deployment, we follow a strict protocol.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-card border border-border flex flex-col"
            >
              <div className="text-4xl font-black text-muted/30 mb-4">{step.num}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

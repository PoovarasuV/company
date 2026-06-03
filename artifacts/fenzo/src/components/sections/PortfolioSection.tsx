import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { name: "SV Builders", category: "Corporate Website", gradient: "from-blue-600 to-cyan-500" },
  { name: "SV Mahal", category: "Booking Platform", gradient: "from-purple-600 to-pink-500" },
  { name: "Construction Monitor", category: "Dashboard", gradient: "from-emerald-500 to-teal-400" },
  { name: "AI Cost Estimator", category: "AI Tool", gradient: "from-orange-500 to-red-500" },
  { name: "Restaurant App", category: "Ordering System", gradient: "from-indigo-500 to-blue-500" },
  { name: "StyleHub", category: "E-Commerce Platform", gradient: "from-violet-600 to-fuchsia-500" }
];

export default function PortfolioSection() {
  return (
    <section id="work" className="py-24 relative bg-background">
      <div className="container px-4 mx-auto md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Work</h2>
            <p className="text-lg text-muted-foreground max-w-xl">Digital products we've built for forward-thinking brands.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-card border border-border"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700`} />
              
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-background/50 backdrop-blur-md mb-3 inline-block">
                    {project.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <div className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { Link } from "wouter";

const projects = [
  { name: "Customized Gym Website", category: "Fitness Platform", gradient: "from-green-500 to-emerald-400", images: ["gym-1.png", "gym-2.png", "gym-3.png", "gym-4.png", "gym-5.png", "gym-6.png"] },
  { name: "Customized Clinic Website", category: "Healthcare Platform", gradient: "from-teal-500 to-cyan-400", images: ["clinic-preview.png", "clinic-1.png", "clinic-2.png", "clinic-3.png", "clinic-4.png", "clinic-5.png", "clinic-6.png", "clinic-7.png", "clinic-8.png", "clinic-9.png", "clinic-10.png"] },
  { name: "EduLearn", category: "E-Learning Platform", gradient: "from-amber-300 to-orange-500", images: ["edulearn-1.png", "edulearn-2.png", "edulearn-3.png", "edulearn-4.png", "edulearn-5.png", "edulearn-6.png", "edulearn-7.png", "edulearn-8.png", "edulearn-9.png", "edulearn-10.png"] },
  { name: "TechFlow", category: "SaaS Landing + App", gradient: "from-violet-500 to-purple-700", images: ["techflow-1.png", "techflow-2.png", "techflow-3.png", "techflow-4.png", "techflow-5.png", "techflow-6.png", "techflow-7.png", "techflow-8.png"] },
  { name: "PropScan Web", category: "Real Estate Portal", gradient: "from-sky-400 to-blue-600", images: ["propscan-1.png", "propscan-2.png", "propscan-3.png", "propscan-4.png", "propscan-5.png", "propscan-6.png", "propscan-7.png", "propscan-8.png"] },
  { name: "HRFlow", category: "HR Automation Portal", gradient: "from-blue-600 to-indigo-600", images: ["hrflow-1.png", "hrflow-2.png", "hrflow-3.png", "hrflow-4.png", "hrflow-5.png", "hrflow-6.png"] },
];

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleNextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images!.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images!.length) % selectedProject.images!.length);
    }
  };

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsZoomed(false);
  };

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
              className="group"
            >
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-card border border-border cursor-pointer mb-4"
                onClick={() => project.images && (setSelectedProject(project), setCurrentImageIndex(0))}
              >
                {project.images ? (
                  <img
                    src={`/works/${encodeURIComponent(project.images[0])}`}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover object-left group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700`} />
                )}
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
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
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-card rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
                <div className="relative">
                  {/* Navigation Arrows */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                      >
                        <ArrowUpRight className="w-6 h-6 text-white rotate-180" />
                      </button>
                      <button
                        onClick={handleNextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                      >
                        <ArrowUpRight className="w-6 h-6 text-white" />
                      </button>
                    </>
                  )}
                  {/* Main Image */}
                  {selectedProject.images && (
                    <img
                      src={`/works/${encodeURIComponent(selectedProject.images[currentImageIndex])}`}
                      alt={`${selectedProject.name} screenshot ${currentImageIndex + 1}`}
                      onClick={handleImageClick}
                      className={`w-full h-auto rounded-lg cursor-pointer transition-transform duration-300 ${
                        isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
                      }`}
                      style={{ maxHeight: "70vh", objectFit: "contain" }}
                    />
                  )}
                  {/* Image Counter */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <div className="text-center mt-4 text-sm text-muted-foreground">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

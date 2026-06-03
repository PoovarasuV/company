import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "FENZO transformed our business with a stunning website.",
    name: "Sarah K.",
    role: "CEO TechFlow",
    initials: "SK",
    color: "bg-blue-500"
  },
  {
    quote: "The AI chatbot they built handles 80% of our customer queries.",
    name: "Marcus R.",
    role: "Founder RetailPro",
    initials: "MR",
    color: "bg-purple-500"
  },
  {
    quote: "Our e-commerce sales jumped 300% after the new platform.",
    name: "Priya S.",
    role: "Director FashionHub",
    initials: "PS",
    color: "bg-pink-500"
  },
  {
    quote: "Best investment we made. ROI within 3 months.",
    name: "David M.",
    role: "CTO BuildRight",
    initials: "DM",
    color: "bg-cyan-500"
  }
];

export default function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="py-24 relative overflow-hidden bg-card/20">
      <div className="container px-4 mx-auto md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground">Don't just take our word for it.</p>
        </motion.div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((test, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-6">
                <div className="p-8 rounded-2xl bg-card border border-border h-full flex flex-col justify-between hover:border-primary/50 transition-colors">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-lg mb-8 font-medium">"{test.quote}"</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${test.color}`}>
                      {test.initials}
                    </div>
                    <div>
                      <h4 className="font-bold">{test.name}</h4>
                      <p className="text-sm text-muted-foreground">{test.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

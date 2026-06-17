import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Our pricing depends on the project scope, features, and complexity. A standard corporate website might start around 10,000, while custom e-commerce platforms or web apps scale up based on requirements."
  },
  {
    q: "How long does development take?",
    a: "A typical website takes 4-6 weeks from discovery to deployment. More complex mobile apps or enterprise software can take 3-6 months depending on the specific features."
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes, we offer ongoing maintenance and support packages to keep your software secure, up-to-date, and running smoothly long after launch."
  },
  {
    q: "Can you develop AI solutions?",
    a: "Absolutely. We specialize in integrating AI into business processes, from custom customer service chatbots to predictive analytics and automated workflows."
  },
  {
    q: "Do you create mobile apps?",
    a: "Yes, we build both native (iOS/Android) and cross-platform mobile applications using frameworks like React Native and Flutter, ensuring high performance."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container px-4 mx-auto md:px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

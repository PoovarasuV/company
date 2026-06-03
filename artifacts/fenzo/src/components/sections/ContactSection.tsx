import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // show success message
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-card/30 border-t border-border/50">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Let's build the <br />future together.</h2>
            <p className="text-lg text-muted-foreground mb-12">Whether you need a full-scale web application, a robust mobile app, or an intelligent AI solution, we have the expertise to bring your vision to life.</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email</h4>
                <p className="text-xl font-medium">hello@fenzo.com</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Phone</h4>
                <p className="text-xl font-medium">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Location</h4>
                <p className="text-xl font-medium">San Francisco, CA</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl bg-background border border-border"
          >
            <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input {...register("name")} placeholder="John Doe" className="bg-card" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input {...register("email")} type="email" placeholder="john@company.com" className="bg-card" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Project Type</label>
                <select {...register("projectType")} className="flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="website">Website Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="ai">AI Solution</option>
                  <option value="custom">Custom Software</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea {...register("message")} placeholder="Tell us about your project..." className="min-h-[120px] bg-card" />
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                Send Request
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

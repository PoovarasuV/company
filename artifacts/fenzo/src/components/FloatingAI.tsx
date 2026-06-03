import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_20px_rgba(139,92,246,0.5)] flex items-center justify-center text-white"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-4 bg-background border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="font-bold text-sm">AI</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">FENZO AI</h4>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 h-64 overflow-y-auto bg-muted/20 flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary mt-1">
                  <span className="font-bold text-[10px]">AI</span>
                </div>
                <div className="bg-card border border-border p-3 rounded-2xl rounded-tl-sm text-sm">
                  Hi! I'm FENZO AI. Need a website, app, or AI solution? Let's talk!
                </div>
              </div>
            </div>

            <div className="p-4 bg-background border-t border-border">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="flex-1 bg-muted border border-border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary/50"
                />
                <Button size="icon" className="rounded-full flex-shrink-0 bg-primary hover:bg-primary/90">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

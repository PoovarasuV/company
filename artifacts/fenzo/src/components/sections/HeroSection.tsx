import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function CSSphere() {
  return (
    <div className="relative w-[420px] h-[420px] flex items-center justify-center">
      <div
        className="absolute w-[380px] h-[380px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #a78bfa 0%, #8B5CF6 25%, #3B82F6 55%, #06B6D4 80%, #050505 100%)",
          boxShadow:
            "0 0 80px 20px rgba(139,92,246,0.35), 0 0 160px 60px rgba(59,130,246,0.15), inset 0 0 60px rgba(6,182,212,0.2)",
          animation: "sphereSpin 12s linear infinite",
        }}
      />
      <div
        className="absolute w-[380px] h-[380px] rounded-full"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(139,92,246,0.12) 29px), repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(139,92,246,0.12) 29px)",
          borderRadius: "50%",
          animation: "sphereSpin 12s linear infinite",
        }}
      />
      {[0, 60, 120].map((deg, i) => (
        <div
          key={i}
          className="absolute w-[380px] h-[380px] rounded-full border border-purple-500/20"
          style={{
            transform: `rotateX(${deg}deg)`,
            animation: `sphereSpin ${10 + i * 2}s linear infinite`,
          }}
        />
      ))}
      <div
        className="absolute w-[460px] h-[460px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          animation: "pulse 3s ease-in-out infinite",
        }}
      />
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% -10%, rgba(139,92,246,0.18) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(139,92,246,0.08) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(59,130,246,0.06) 40px)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none transition-all duration-700"
          style={{
            width: "600px",
            height: "600px",
            left: `calc(${(mousePos.x * 0.5 + 0.5) * 100}% - 300px)`,
            top: `calc(${(mousePos.y * 0.5 + 0.5) * 100}% - 300px)`,
            background:
              "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {[
          { size: 6, top: "15%", left: "10%", delay: "0s", color: "rgba(139,92,246,0.6)" },
          { size: 4, top: "70%", left: "8%", delay: "1s", color: "rgba(59,130,246,0.5)" },
          { size: 8, top: "30%", right: "15%", left: undefined, delay: "0.5s", color: "rgba(6,182,212,0.4)" },
          { size: 3, top: "80%", right: "20%", left: undefined, delay: "1.5s", color: "rgba(139,92,246,0.5)" },
          { size: 5, top: "50%", left: "50%", delay: "2s", color: "rgba(59,130,246,0.4)" },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              right: p.right,
              background: p.color,
              animation: `float ${3 + i}s ease-in-out infinite`,
              animationDelay: p.delay,
              boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 mx-auto md:px-6 flex items-center justify-between gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex-1"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border rounded-full bg-card/50 border-primary/30 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              Next-Gen Software Agency
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[82px] font-bold tracking-tighter leading-[1.08] mb-8"
          >
            Building Digital Products That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Move Businesses Forward.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mb-10 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            We create websites, mobile apps, e-commerce platforms, AI solutions, and business
            automation systems that help companies scale faster.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                data-testid="button-start-project"
                className="h-14 px-8 text-base font-semibold bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 border-0 shadow-[0_0_40px_-8px_rgba(139,92,246,0.6)] transition-all duration-300"
              >
                Start Your Project
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                data-testid="button-view-work"
                className="h-14 px-8 text-base font-semibold border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/40 transition-all duration-300"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="hidden lg:flex flex-shrink-0 items-center justify-center"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <CSSphere />
        </motion.div>
      </div>

      <style>{`
        @keyframes sphereSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}

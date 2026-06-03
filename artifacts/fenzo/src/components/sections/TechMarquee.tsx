import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SiReact, SiNextdotjs, SiNodedotjs, SiSpringboot, SiPython, SiMysql, SiPostgresql, SiMongodb, SiDocker, SiOpenai, SiFirebase } from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

const row1 = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
  { name: "Java", Icon: FaJava, color: "#007396" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
];

const row2 = [
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "OpenAI", Icon: SiOpenai, color: "#412991" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
];

export default function TechMarquee() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!row1Ref.current || !row2Ref.current) return;

    gsap.to(row1Ref.current, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    gsap.to(row2Ref.current, {
      xPercent: 50,
      ease: "none",
      duration: 25,
      repeat: -1,
    });
  }, []);

  return (
    <section id="technologies" className="py-24 relative overflow-hidden bg-background">
      <div className="container px-4 mx-auto md:px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Technologies We Use</h2>
        <p className="text-lg text-muted-foreground">The cutting-edge stack powering our solutions.</p>
      </div>

      <div className="relative flex flex-col gap-8 w-full overflow-hidden">
        {/* Row 1 */}
        <div className="flex w-[200vw]" ref={row1Ref}>
          {[...row1, ...row1, ...row1].map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center min-w-[200px] group">
              <tech.Icon className="w-16 h-16 mb-4 text-muted-foreground transition-all duration-300 group-hover:scale-110" style={{ filter: `drop-shadow(0 0 10px ${tech.color}40)` }} />
              <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-[200vw] -translate-x-[100vw]" ref={row2Ref}>
          {[...row2, ...row2, ...row2].map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center min-w-[200px] group">
              <tech.Icon className="w-16 h-16 mb-4 text-muted-foreground transition-all duration-300 group-hover:scale-110" style={{ filter: `drop-shadow(0 0 10px ${tech.color}40)` }} />
              <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>
        
        {/* Gradients to hide edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}

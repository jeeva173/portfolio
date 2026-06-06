"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./MagneticButton";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Python Developer",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !containerRef.current) return;
      const { clientX, clientY } = e;
      const { left, top } = containerRef.current.getBoundingClientRect();
      
      gsap.to(spotlightRef.current, {
        x: clientX - left,
        y: clientY - top,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Mouse Follow Spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute -left-[250px] -top-[250px] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] will-change-transform"
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-xs font-medium text-primary"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-gradient"
        >
          Jeeva RD
        </motion.h1>

        <div className="h-12 md:h-16 mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[roleIndex]}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="text-2xl md:text-4xl font-medium text-white/70"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable web applications with React, Python, Django, Flask
          and modern frontend technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton>
            <a href="#projects" className="group relative inline-flex px-8 py-4 rounded-full bg-white text-black font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jeevard173@gmail.com" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 rounded-full glass hover:bg-white/10 font-semibold transition-all hover:scale-105 active:scale-95">
              <span className="flex items-center gap-2">
                Contact Me <Mail className="w-4 h-4" />
              </span>
            </a>
          </MagneticButton>

          <MagneticButton strength={0.2}>
            <a href="/Jeeva_Resume_ATS.pdf" download className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"
        />
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">Scroll to explore</span>
      </div>
    </section>
  );
}

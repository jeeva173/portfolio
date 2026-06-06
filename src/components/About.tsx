"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Internship Completed", value: "1" },
  { label: "Major Projects", value: "2+" },
  { label: "Candidate", value: "MCA" },
  { label: "Experience", value: "Full Stack" },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text animation effect (simple line-by-line reveal)
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-hidden px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Heading & Stats */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-12 tracking-tight"
            >
              Building the Future <br /> 
              <span className="text-white/40">One Line at a Time.</span>
            </motion.h2>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform origin-left duration-500">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="relative">
            <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-white/10 hidden lg:block" />
            <p 
              ref={textRef}
              className="text-xl md:text-2xl text-white/70 leading-relaxed font-light"
            >
              Motivated Full Stack Web Developer with hands-on experience in Python, React.js, Django, and Flask. 
              Currently pursuing a Master of Computer Applications at SRM University while strengthening problem-solving skills through Data Structures and Algorithms. 
              Passionate about building modern web experiences and solving real-world problems through software.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-12 p-8 rounded-3xl glass-dark border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 blur-xl animate-pulse" />
              </div>
              <p className="text-sm font-medium text-white/40 mb-4 uppercase tracking-[0.2em]">Current Focus</p>
              <p className="text-lg text-white/90">
                Mastering System Design & Advanced Data Structures to build production-grade architectures.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

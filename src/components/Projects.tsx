"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "Steganography System",
    description: "Built a Python-based steganography system capable of securely hiding confidential information inside images using encryption techniques.",
    tech: ["Python", "HTML", "CSS", "JavaScript"],
    features: [
      "Secure data embedding",
      "Advanced encryption",
      "Data retrieval system",
      "Image quality preservation"
    ]
  },
  {
    id: "02",
    title: "Moviepedia",
    description: "Developed a modern React.js Single Page Application for discovering movies through real-time search and API integration.",
    tech: ["React.js", "JavaScript", "REST API", "CSS"],
    features: [
      "Real-time movie search",
      "Responsive design",
      "API integration",
      "Error handling"
    ]
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative p-8 md:p-12 rounded-[2rem] glass-dark border-white/5 overflow-hidden"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <span className="text-5xl font-black text-white/5 tracking-tighter group-hover:text-primary/20 transition-colors">
            {project.id}
          </span>
          <div className="flex gap-4">
            <button className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
              <Github className="w-5 h-5 text-white/70" />
            </button>
            <button className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
              <ExternalLink className="w-5 h-5 text-white/70" />
            </button>
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-xl">
          {project.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {project.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-white/40">
              <div className="w-1 h-1 rounded-full bg-primary" />
              {feature}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((tag) => (
            <span key={tag} className="px-4 py-1.5 rounded-full glass text-xs font-medium text-white/60 group-hover:border-primary/30 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Spotlight Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-black/30 overflow-hidden px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-primary font-medium uppercase tracking-widest text-sm">Selected Works</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Digital <span className="text-white/30">Creations.</span>
          </motion.h2>
        </div>

        <div className="grid gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

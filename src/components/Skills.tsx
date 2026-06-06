"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Terminal, 
  Database, 
  Layout, 
  Box,
  Cpu,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Languages",
    icon: Terminal,
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20"
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["React.js", "Django", "Flask"],
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20"
  },
  {
    title: "Tools",
    icon: Box,
    skills: ["MySQL", "VS Code", "PyCharm"],
    color: "from-orange-500/20 to-yellow-500/20",
    border: "border-orange-500/20"
  }
];

export function Skills() {
  return (
    <section className="py-32 bg-black/50 overflow-hidden px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-lg"
          >
            Modern tools for modern solutions.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10 }}
              className={cn(
                "group relative p-8 rounded-3xl glass-dark transition-all duration-500",
                category.border
              )}
            >
              {/* Animated Glow Backdrop */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10 rounded-full",
                category.color
              )} />
              
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 rounded-2xl glass border-white/10 group-hover:border-primary/50 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    <span className="text-white/60 group-hover:text-white transition-colors">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent -z-10 rounded-tr-3xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

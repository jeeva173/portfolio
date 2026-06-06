"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "8 Queens",
    role: "Web Developer Intern",
    period: "May 2024 – June 2024",
    description: "Developed and maintained frontend components using React.js, focusing on responsive user interfaces and component-based architecture.",
    points: [
      "Developed and maintained frontend components using React.js",
      "Built responsive user interfaces",
      "Worked with component-based architecture",
      "Collaborated with team members using Agile practices",
      "Improved JavaScript and frontend development skills through real-world projects"
    ]
  }
];

export function Experience() {
  return (
    <section className="py-32 relative overflow-hidden px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative space-y-12">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(124,58,237,0.5)]" />

                <div className="w-full md:w-[45%] text-left md:text-right">
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-primary font-medium text-lg mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-white/40 md:justify-end text-sm">
                    <Calendar className="w-4 h-4" /> {exp.period}
                  </div>
                </div>

                <div className="w-full md:w-[45%]">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="glass-dark p-6 rounded-2xl border-white/5 hover:border-primary/20 transition-colors"
                  >
                    <ul className="space-y-3">
                      {exp.points.map((point, index) => (
                        <li key={index} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

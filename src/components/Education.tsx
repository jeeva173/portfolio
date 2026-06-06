"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    institution: "SRM University",
    degree: "Master of Computer Applications (MCA)",
    period: "2024 – 2026",
    status: "In Progress",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Analysis and Design",
      "Operating Systems",
      "System Design",
      "Database Technology",
      "Software Testing",
      "Software Project Management",
      "AI / ML"
    ]
  },
  {
    institution: "Dr MGR University",
    degree: "Bachelor of Computer Applications",
    period: "2021 – 2024",
    status: "Completed",
    cgpa: "6.91 / 10",
    coursework: [
      "Core Programming",
      "Web Development",
      "Database Management"
    ]
  }
];

export function Education() {
  return (
    <section className="py-32 relative overflow-hidden px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-white/40">Academic journey and continuous learning.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group p-8 rounded-3xl glass-dark border-white/5 hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 rounded-2xl glass border-white/10 text-primary group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <span className={edu.status === "In Progress" ? "text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full glass" : "text-white/30 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full glass"}>
                  {edu.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
              <p className="text-white/70 font-medium mb-1">{edu.degree}</p>
              <p className="text-sm text-white/40 mb-6">{edu.period}</p>

              {edu.cgpa && (
                <div className="flex items-center gap-2 mb-6 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">CGPA: {edu.cgpa}</span>
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-white/20 uppercase tracking-widest">
                  <BookOpen className="w-4 h-4" /> Relevant Coursework
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span key={course} className="text-xs px-3 py-1 rounded-lg glass-dark border-white/5 text-white/50">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

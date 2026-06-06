"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { MagneticButton } from "./MagneticButton";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-32 relative overflow-hidden px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Let&apos;s Build <br />
                <span className="text-primary italic">Something Amazing</span> <br />
                Together.
              </h2>
              <p className="text-white/40 text-lg max-w-md leading-relaxed">
                Ready to transform your ideas into reality? Let&apos;s connect and discuss how we can work together.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "+91 8682089879", href: "tel:+918682089879" },
                { icon: Mail, label: "Email", value: "jeevard173@gmail.com", href: "mailto:jeevard173@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/jeevard", href: "https://linkedin.com/in/jeevard" }
              ].map((item, i) => (
                <MagneticButton key={item.label} strength={0.1}>
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex items-center gap-6 p-6 rounded-2xl glass-dark border-white/5 hover:border-primary/20 transition-all w-full"
                  >
                    <div className="p-3 rounded-xl glass border-white/10 group-hover:bg-primary group-hover:text-white transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/20 font-bold mb-1">{item.label}</p>
                      <p className="text-white/80 group-hover:text-white transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                </MagneticButton>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] glass-dark border-white/5 relative"
          >
            <div className="absolute top-0 right-12 w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/30 font-bold ml-1">Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors text-white placeholder:text-white/10" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/30 font-bold ml-1">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="Your Email"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors text-white placeholder:text-white/10" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/30 font-bold ml-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors text-white placeholder:text-white/10 resize-none" 
                />
              </div>
              
              <button 
                disabled={isSubmitting || isSent}
                className="group w-full relative h-[64px] rounded-2xl bg-white text-black font-bold text-lg overflow-hidden transition-all active:scale-[0.98] disabled:opacity-50"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {isSent ? (
                    <>Sent Successfully!</>
                  ) : isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="mt-32 border-t border-white/5 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-sm">© 2024 Jeeva RD. All rights reserved.</p>
          <div className="flex gap-8 text-xs uppercase tracking-widest font-bold text-white/20">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </section>
  );
}

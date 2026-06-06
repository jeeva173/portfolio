"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const startTime = Date.now();
    const duration = 2500; // 2.5 seconds

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 800);
      }
    };

    interval = setInterval(updateProgress, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
          />

          <div className="relative flex flex-col items-center">
            {/* Animated Logo/Name */}
            <div className="overflow-hidden mb-4">
              <motion.div 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                className="text-5xl md:text-7xl font-bold tracking-tighter flex items-baseline"
              >
                <span className="text-white">JEEVA</span>
                <motion.span 
                  animate={{ opacity: [0, 1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-primary italic"
                >
                  .RD
                </motion.span>
              </motion.div>
            </div>
            
            {/* Dynamic Counter */}
            <div className="flex items-baseline gap-1 mb-8">
              <motion.span 
                className="text-8xl md:text-9xl font-black tabular-nums text-white/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {progress.toString().padStart(3, '0')}
              </motion.span>
              <span className="text-primary text-sm font-bold">%</span>
            </div>

            {/* Circular Progress (Minimal) */}
            <div className="relative w-48 h-1 overflow-hidden rounded-full bg-white/5">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.5 }}
              className="mt-6 font-mono text-[10px] uppercase tracking-[0.5em] text-white"
            >
              System Synchronization
            </motion.div>
          </div>

          {/* Cinematic Reveal Panels */}
          <motion.div 
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1], delay: 0.2 }}
            className="absolute inset-0 bg-primary/5 origin-top pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

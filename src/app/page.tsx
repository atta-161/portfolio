"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-black overflow-hidden font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white glow-hover">
          Coming Soon
        </h1>
        <p className="text-xl text-muted max-w-lg mx-auto">
          A premium artistic portfolio showcasing AI, Web & Mobile experiments. 
          Inspired by minimalism and motion.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="pt-10"
        >
          <div className="inline-block px-6 py-2 border border-white/20 rounded-full text-sm font-medium hover:border-white transition-colors cursor-pointer">
            Explore Projects
          </div>
        </motion.div>
      </motion.div>
      
      {/* Background Polish */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>
    </main>
  );
}

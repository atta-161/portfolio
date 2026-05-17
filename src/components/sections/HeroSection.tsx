"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function HeroSection() {
  function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="home" className="min-h-[85vh] flex flex-col items-center justify-center relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl"
      >
        <motion.p
          variants={itemVariants}
          className="text-accent text-sm font-mono tracking-widest uppercase mb-4"
        >
          Tieu An Tuan (Atta) - AI & Software Engineer
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8"
        >
          Building reliable <br />
          <span className="text-white/40">software systems</span> <br />
          with AI.
        </motion.h1>

        <motion.div variants={itemVariants} className="pt-4">
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-3 bg-white text-black font-medium rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">View Selected Work</span>
            <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}

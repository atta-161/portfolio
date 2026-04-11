"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h2 className="text-accent text-sm font-mono uppercase tracking-widest">
            Behind the code
          </h2>
          <p className="text-2xl md:text-3xl leading-relaxed text-white/90">
            I&apos;m a designer-developer hybrid passionate about building 
            <span className="text-white font-medium"> beautiful, high-performance web applications</span>. 
            My work lives at the intersection of aesthetic precision and technical robustness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
          <div className="space-y-4">
            <h3 className="text-white font-medium">The Vision</h3>
            <p className="text-muted leading-relaxed">
              Every pixel and every line of code should serve a purpose. 
              I strive for minimalist designs that don&apos;t compromise on functionality, 
              focusing on micro-interactions that make digital experiences feel alive.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-medium">The Strategy</h3>
            <p className="text-muted leading-relaxed">
              By combining AI-driven development with traditional engineering, 
              I build scalable solutions that are ready for the future. 
              Efficiency, accessibility, and speed are at the core of my workflow.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

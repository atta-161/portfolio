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
            Profile
          </h2>
          <p className="text-2xl md:text-3xl leading-relaxed text-white/90">
            I&apos;m an AI graduate with Good classification from HCMUS building
            <span className="text-white font-medium"> Python-first software, embedded algorithms, and computer vision systems</span>.
            My current work sits close to real devices: positioning logic, IoT data, and production-minded software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-white/5">
          <div className="space-y-4">
            <h3 className="text-white font-medium">Engineering Ground</h3>
            <p className="text-muted leading-relaxed">
              I have worked across embedded positioning software, robotics, Linux-based workflows,
              MQTT communication, and YOLO image recognition. That mix gives me a practical view
              of software that has to survive beyond a demo.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-white font-medium">Direction</h3>
            <p className="text-muted leading-relaxed">
              I&apos;m looking for roles around Python software engineering, full-stack product work,
              or AI engineering with a strong computer-vision focus. I&apos;m also interested in
              practical LLM systems when they connect to real product problems.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

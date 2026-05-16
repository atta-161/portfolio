"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/skills";
import SkillCard from "@/components/SkillCard";

export default function SkillsShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section id="skills" className="py-24 px-8 max-w-7xl mx-auto space-y-16">
      <div className="space-y-4">
        <h2 className="text-accent text-sm font-mono uppercase tracking-widest">
          Technological Edge
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          Mastering the tools of <br />
          <span className="text-muted">modern innovation.</span>
        </h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-fr"
      >
        {/* We'll manually map these to create a beautiful Bento pattern */}
        
        {/* MAIN SKILLS - ROW 1 */}
        {/* Next.js - Large */}
        <SkillCard 
          skill={SKILL_CATEGORIES[0].skills[0]} 
          className="md:col-span-2 md:row-span-1"
        />
        {/* Python - Large */}
        <SkillCard 
          skill={SKILL_CATEGORIES[2].skills[0]} 
          className="md:col-span-2 md:row-span-1"
        />

        {/* ROW 2 & 3 */}
        {/* React */}
        <SkillCard skill={SKILL_CATEGORIES[0].skills[1]} />
        {/* Node.js - Tall */}
        <SkillCard 
          skill={SKILL_CATEGORIES[1].skills[0]} 
          className="md:row-span-2"
        />
        {/* PyTorch - Large square */}
        <SkillCard 
          skill={SKILL_CATEGORIES[2].skills[1]} 
          className="md:col-span-2 md:row-span-2"
        />
        
        {/* PostgreSQL */}
        <SkillCard skill={SKILL_CATEGORIES[1].skills[1]} />
        {/* Git */}
        <SkillCard skill={SKILL_CATEGORIES[3].skills[0]} />
        
        {/* TypeScript */}
        <SkillCard skill={SKILL_CATEGORIES[0].skills[2]} />
      </motion.div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const categories = ["All", "AI", "Web", "App"] as const;
type Category = (typeof categories)[number];

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-8 max-w-7xl mx-auto space-y-16">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="space-y-4">
          <h2 className="text-accent text-sm font-mono uppercase tracking-widest">
            Selected Works
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            Digital craftsmanship <br />
            <span className="text-muted">at its finest.</span>
          </h3>
        </div>

        {/* Filter Tabs */}
        <div className="flex p-1 bg-white/5 border border-white/10 rounded-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2 text-sm font-medium transition-colors rounded-full ${
                activeCategory === cat ? "text-black" : "text-white/60 hover:text-white"
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {activeCategory === cat && (
                <motion.div
                  layoutId="active-cat-pill"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

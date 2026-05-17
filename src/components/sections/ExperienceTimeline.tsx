"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-8 max-w-4xl mx-auto space-y-16">
      <div className="space-y-4">
        <h2 className="text-accent text-sm font-mono uppercase tracking-widest">
          Career Path
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          From AI foundations <br />
          <span className="text-muted">to device-facing software.</span>
        </h3>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="relative pl-8 md:pl-20"
            >
              {/* Dot on timeline */}
              <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent/60 border-2 border-background" />

              <div className="space-y-3">
                <span className="text-xs font-mono text-accent/70 tracking-wider">
                  {exp.period}
                </span>

                <div>
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-muted">{exp.company}</p>
                </div>

                <p className="text-sm text-white/50 leading-relaxed max-w-xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-medium bg-white/5 text-white/50 border border-white/5 rounded-md"
                    >
                      {tag}
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

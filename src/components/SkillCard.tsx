"use client";

import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/data/skills";

interface SkillCardProps {
  skill: Skill;
  className?: string;
}

export default function SkillCard({ skill, className = "" }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`group relative p-6 bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-accent/40 transition-colors ${className}`}
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[100px] group-hover:bg-accent/10 transition-colors" />

      <div className="relative z-10 space-y-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-accent/30 transition-colors">
          <Icon className="w-5 h-5 text-white/60 group-hover:text-accent transition-colors" />
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-bold text-white tracking-tight">
            {skill.name}
          </h4>
          <p className="text-xs text-muted leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>

      {/* Subtle Bottom Border */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

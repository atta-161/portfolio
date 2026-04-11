"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="group relative bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white text-black rounded-full hover:scale-110 active:scale-95 transition-transform"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-black/60 text-white border border-white/10 rounded-full hover:scale-110 active:scale-95 transition-transform"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-medium bg-white/5 text-white/60 border border-white/5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle Glow on Hover */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

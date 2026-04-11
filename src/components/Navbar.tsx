"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // We'll create this lib helper

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
  { name: "Experience", path: "#experience" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="glass px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative px-4 py-1.5 text-sm transition-colors rounded-full",
                isActive ? "text-white" : "text-muted hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

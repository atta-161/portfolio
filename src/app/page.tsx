"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import GrainyBackground from "@/components/GrainyBackground";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main className="relative min-h-screen w-full bg-black overflow-x-hidden selection:bg-accent selection:text-black">
      <GrainyBackground />

      {/* Cursor Follower Glow */}
      <motion.div
        className="fixed top-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px] pointer-events-none z-[-10]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <div className="relative z-10 flex flex-col pt-32 px-8">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}

import React from "react";

export default function GrainyBackground() {
  return (
    <div className="fixed inset-0 -z-20 h-full w-full bg-black overflow-hidden pointer-events-none">
      {/* Subtle Gradients for depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
      
      {/* Noise Texture layer */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.15] filter contrast-150 brightness-100">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.65" 
            numOctaves="3" 
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}


"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) : 0; // Progress as a fraction (0 to 1)
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set progress on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-full w-[6px] bg-transparent z-[9999] pointer-events-none"
      aria-hidden="true" // Hide from assistive technologies as it's a visual enhancement
    >
      {/* Optional: A subtle track for the progress bar, useful for contrast */}
      <div className="absolute top-0 left-0 h-full w-full bg-muted/20" />
      <motion.div
        className="absolute top-0 left-0 h-full w-full bg-primary origin-top"
        style={{ scaleY: scrollProgress }} // Directly use the fraction for scaleY
        transition={{ duration: 0.05, ease: "linear" }} // Faster, more responsive transition
      />
    </div>
  );
}



"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { ArrowDown } from 'lucide-react';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly increased stagger for smoother effect
      delayChildren: 0.2,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 25 }, // Increased y for more noticeable entry
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const nameLetterVariants = (delayBase: number) => ({
  hidden: { opacity: 0, y: 20, rotateX: -90 }, // Changed to y and rotateX for a flip-up effect
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: delayBase + i * 0.06, // Adjusted timing
      duration: 0.5,
      ease: "circOut",
    },
  }),
});

const titleWordVariants = (delayBase: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delayBase + i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
});

const imageContainerVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 }, // Adjusted initial state for a subtle rise and scale
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 } // Custom cubic bezier for smooth pop
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 1.4 } }, // Adjusted delay
};


// --- Hero Section ---
export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);


  // Name and Title split for animation
  const name = "Ashish Kadian";
  const nameLetters = name.split('');
  const titleParts = "Site Reliability Engineer | DevOps | Cloud Security".split('|').map(part => part.trim().split(' '));
  
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);


  return (
    <SectionWrapper
      id="hero"
      ref={targetRef}
      className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background dark:from-background dark:via-muted/10 dark:to-background relative overflow-hidden flex items-center justify-center"
      containerClassName="flex flex-col items-center justify-center"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-10 md:gap-20 items-center text-center md:text-left relative z-10 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        ref={containerRef}
      >
        {/* Text Content */}
        <div className="space-y-6 order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            <motion.span variants={textItemVariants} className="block text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">Hi, I&apos;m</motion.span>
            <motion.span
              className="block text-primary"
              aria-label={name}
            >
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  custom={index}
                  variants={nameLetterVariants(0.4)}
                  className="inline-block"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              className="block text-base sm:text-lg md:text-xl font-medium text-muted-foreground mt-2 tracking-wide"
            >
              {titleParts.map((part, partIndex) => (
                <span key={partIndex} className="inline-block mr-1.5">
                  {part.map((word, wordIndex) => (
                    <motion.span
                      key={`${word}-${wordIndex}`}
                      custom={wordIndex + titleParts.slice(0, partIndex).flat().length}
                      variants={titleWordVariants(0.4 + nameLetters.length * 0.06 + 0.3)}
                      className="inline-block"
                    >
                      {word}{' '}
                    </motion.span>
                  ))}
                  {partIndex < titleParts.length - 1 && <span className="text-primary/70">| </span>}
                </span>
              ))}
            </motion.span>
          </h1>

          <motion.p variants={textItemVariants} transition={{ delay: 1.0 }} className="text-md md:text-lg text-muted-foreground text-balance max-w-lg mx-auto md:mx-0">
            Pioneering resilient, scalable, and secure cloud-native infrastructures through advanced SRE methodologies and robust DevOps automation.
          </motion.p>
          <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/30 transition-all duration-300 ease-out transform hover:scale-105 animate-pulse-slow">
              <Link href="#projects">Explore My Work <ArrowDown className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-all duration-300 ease-out transform hover:scale-105">
              <Link href="#contact">Let&apos;s Connect</Link>
            </Button>
          </motion.div>
        </div>

        {/* Image Area */}
        <motion.div
          className="relative group aspect-square max-w-xs sm:max-w-sm mx-auto md:max-w-md order-1 md:order-2 flex items-center justify-center"
          variants={imageContainerVariants}
        >
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] flex items-center justify-center">
            {/* Subtle background glow effect */}
            <motion.div
              className="absolute inset-[-20px] bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-1000"
              animate={{ 
                scale: [1, 1.05, 1], 
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <Image
              src="https://picsum.photos/seed/ashish-kadian-professional/400/400"
              alt="Ashish Kadian - SRE & DevOps Engineer"
              width={400}
              height={400}
              priority
              className="relative z-[1] rounded-full object-cover shadow-xl w-full h-full border-4 border-background/50 group-hover:shadow-primary/20 transition-shadow duration-500"
              data-ai-hint="professional tech headshot"
            />
             {/* Optional: Static decorative ring if orbiting icons are removed */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-pulse-slow opacity-50 group-hover:opacity-75 transition-opacity duration-500" style={{ animationDuration: '4s' }}></div>
            <div className="absolute inset-2 rounded-full border border-accent/10 opacity-75"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Removed decorative text elements and orbiting icons */}

      <style jsx>{`
        @keyframes subtle-glow {
          0%, 100% { text-shadow: 0 0 8px hsl(var(--primary) / 0.2), 0 0 15px hsl(var(--primary) / 0.1); }
          50% { text-shadow: 0 0 15px hsl(var(--primary) / 0.3), 0 0 25px hsl(var(--primary) / 0.2); }
        }
        .text-primary { /* Apply to name for subtle glow */
          /* animation: subtle-glow 4s ease-in-out infinite; */ /* Removing direct text glow for cleaner look, relying on color instead */
        }
      `}</style>
    </SectionWrapper>
  );
}

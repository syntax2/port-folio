"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { ArrowDown, Code, Cloud, Server, Database, Container, GitBranchPlus, ShieldCheck } from 'lucide-react'; // Updated icons for SRE/DevOps
import { useMemo } from 'react';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageContainerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67], delay: 0.4 } }, // Smoother ease
};

const decorativeTextVariants = (delay: number) => ({
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay } },
});

// Orbiting icons configuration
const icons = [
  { component: Cloud, size: 24, color: 'text-blue-500', duration: 15, delay: 0, radius: 150 }, // Faster orbit
  { component: Server, size: 28, color: 'text-green-500', duration: 25, delay: 1, radius: 180 },
  { component: Database, size: 22, color: 'text-purple-500', duration: 20, delay: 0.5, radius: 130 }, // Inner orbit
  { component: Container, size: 30, color: 'text-cyan-500', duration: 30, delay: 1.5, radius: 210 }, // Outer orbit
  { component: GitBranchPlus, size: 26, color: 'text-orange-500', duration: 18, delay: 0.8, radius: 160 },
];


export function HeroSection() {
  // Memoize icon components to prevent re-renders on parent update
   const orbitingIcons = useMemo(() => icons.map((icon, index) => {
    const angle = (index / icons.length) * 2 * Math.PI; // Distribute icons evenly

    return (
      <motion.div
        key={index}
        className="absolute"
        style={{
          // Position icons in a circle using transform
          originX: `${icon.radius}px`, // Set rotation origin relative to the center
          originY: `${icon.radius}px`,
        }}
        initial={{ x: -icon.size / 2, y: -icon.size / 2 }} // Center the icon itself
        animate={{
          rotate: 360, // The rotation animation
        }}
        transition={{
          loop: Infinity,
          ease: "linear",
          duration: icon.duration,
          delay: icon.delay,
        }}
      >
         {/* The actual icon, positioned at the edge of the orbit */}
        <motion.div
          style={{
            x: icon.radius * Math.cos(angle) - icon.size/2,
            y: icon.radius * Math.sin(angle) - icon.size/2,
            position: 'absolute',
          }}
          whileHover={{ scale: 1.3, zIndex: 10 }} // Scale up on hover
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <icon.component className={`${icon.color} drop-shadow-lg`} size={icon.size} />
         </motion.div>
      </motion.div>
    );
  }), []); // Empty dependency array ensures this runs only once


  return (
    <SectionWrapper
      id="hero"
      className="min-h-screen bg-gradient-to-br from-background via-secondary/50 to-background dark:from-background dark:via-muted/50 dark:to-background relative overflow-hidden flex items-center justify-center"
      containerClassName="flex flex-col items-center justify-center"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-8 md:gap-16 items-center text-center md:text-left relative z-10 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <motion.div className="space-y-6 order-2 md:order-1" variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            <motion.span variants={itemVariants} className="block">Hi, I&apos;m </motion.span>
            <motion.span variants={itemVariants} className="block text-primary">Alex Johnson</motion.span>
          </h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground text-balance">
            An SRE & DevOps Engineer focused on building <strong className="text-foreground">reliable</strong>, <strong className="text-foreground">scalable</strong>, and <strong className="text-foreground">automated</strong> infrastructure solutions. Welcome to my digital space.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow animate-pulse-slow">
              <Link href="#projects">See My Work <ArrowDown className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Image and Animation Area */}
        <motion.div
          className="relative group aspect-square max-w-sm sm:max-w-md mx-auto md:max-w-full order-1 md:order-2 flex items-center justify-center"
          variants={imageContainerVariants}
        >
          {/* Central Image Container - slightly smaller to give space for orbits */}
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] flex items-center justify-center">
             {/* Background Glow */}
             <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             />

             <Image
               src="https://picsum.photos/seed/devops-cloud/400/400"
               alt="SRE/DevOps Abstract Art or Headshot"
               width={400}
               height={400}
               priority
               className="relative z-[1] rounded-full object-cover shadow-xl w-full h-full border-4 border-background/50"
               data-ai-hint="cloud infrastructure"
             />

             {/* Orbiting Icons Container - Positioned absolutely around the image */}
            <div className="absolute inset-0 flex items-center justify-center z-[5]">
               {orbitingIcons}
            </div>
          </div>

           {/* Static Decorative Elements - Adjusted positions */}
           <motion.div
            className="absolute -bottom-8 -left-8 w-28 h-28 bg-accent/10 dark:bg-accent/5 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"
            variants={itemVariants}
            style={{ filter: 'blur(16px)' }} // Increased blur
          ></motion.div>
          <motion.div
            className="absolute -top-8 -right-8 w-24 h-24 border-4 border-primary/20 dark:border-primary/15 rounded-full animate-ping-slow opacity-40"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative text elements (positioned relative to the viewport) */}
      <motion.div
        className="absolute top-[15%] left-[5%] text-2xl font-semibold text-primary/15 dark:text-primary/10 -rotate-[15deg] opacity-50 select-none pointer-events-none hidden lg:block"
        variants={decorativeTextVariants(0.8)}
        initial="hidden"
        animate="visible"
      >
        <Server className="inline-block mr-2 h-8 w-8" /> Automate
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] right-[8%] text-2xl font-semibold text-accent/15 dark:text-accent/10 rotate-[10deg] opacity-50 select-none pointer-events-none hidden lg:block"
        variants={decorativeTextVariants(1.0)}
        initial="hidden"
        animate="visible"
      >
        <ShieldCheck className="inline-block mr-2 h-8 w-8" /> Secure
      </motion.div>
       <motion.div
        className="absolute top-[55%] right-[15%] text-xl font-light text-muted-foreground/10 dark:text-muted-foreground/5 -rotate-[5deg] opacity-40 select-none pointer-events-none hidden md:block"
        variants={decorativeTextVariants(1.2)}
        initial="hidden"
        animate="visible"
      >
        <Cloud className="inline-block mr-2 h-7 w-7" /> Scale
      </motion.div>

      <style jsx>{`
        /* Keep existing animations like ping-slow */
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; } /* Reduced opacity */
          50% { transform: scale(1.2); opacity: 0.1; }
        }
        .animate-ping-slow {
          animation: ping-slow 6s cubic-bezier(0, 0, 0.2, 1) infinite; /* Slower ping */
        }
        /* Pulse animation for background glow */
        @keyframes pulse-glow {
           0%, 100% { transform: scale(1); opacity: 0.5; }
           50% { transform: scale(1.05); opacity: 0.75; }
        }
        /* Ensure container has overflow visible if needed for orbiting elements */
        .relative.group {
           /* overflow: visible; */ /* Uncomment if elements clip */
        }
      `}</style>
    </SectionWrapper>
  );
}

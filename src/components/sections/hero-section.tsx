"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { ArrowDown, Code, Zap, Brain, Star } from 'lucide-react';

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
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } },
};

const decorativeTextVariants = (delay: number) => ({
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay } },
});

// Orbiting element animation
const orbitVariants = (radius: number, duration: number, delay: number = 0) => ({
  orbit: {
    rotate: 360,
    transition: {
      loop: Infinity,
      ease: "linear",
      duration: duration,
      delay: delay,
    }
  }
});

export function HeroSection() {
  return (
    <SectionWrapper
      id="hero"
      className="min-h-screen bg-gradient-to-br from-background via-secondary/70 to-background dark:from-background dark:via-muted/70 dark:to-background relative overflow-hidden flex items-center justify-center" // Ensure vertical centering
      containerClassName="flex flex-col items-center justify-center"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-8 md:gap-16 items-center text-center md:text-left relative z-10 w-full max-w-6xl" // Adjusted max-width
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
            A passionate Full Stack Developer specializing in creating modern, responsive, and user-friendly web applications. Welcome to my portfolio.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow animate-pulse-slow">
              <Link href="#projects">View My Work <ArrowDown className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Image and Animation Area */}
        <motion.div
          className="relative group aspect-square max-w-sm sm:max-w-md mx-auto md:max-w-full order-1 md:order-2 flex items-center justify-center" // Centering the container
          variants={imageContainerVariants}
        >
          {/* Background Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

           {/* Rotating Image Container */}
           <motion.div
             className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]" // Responsive size
             animate={{ rotate: 360 }}
             transition={{ loop: Infinity, ease: "linear", duration: 45 }} // Earth-like rotation
           >
             <Image
               src="https://picsum.photos/seed/future-tech/400/400"
               alt="Professional Headshot or Abstract Tech Art"
               width={400}
               height={400}
               priority
               className="rounded-full object-cover shadow-xl w-full h-full" // Ensure image fills container
               data-ai-hint="modern tech"
             />
              {/* Orbiting Elements (Simplified "Cars") */}
              {/* Element 1 */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" // Orbit path container
                variants={orbitVariants(1, 10)} // Radius doesn't directly map here, controls path via positioning. Duration 10s.
                animate="orbit"
              >
                <motion.div
                  className="absolute top-[5%] left-[50%] -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-md" // Element style
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
              </motion.div>
              {/* Element 2 */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" // Orbit path container
                variants={orbitVariants(1, 8, 0.5)} // Duration 8s, slight delay
                animate="orbit"
              >
                <motion.div
                   className="absolute bottom-[10%] left-[40%] -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-lg" // Element style
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   transition={{ delay: 0.8, duration: 0.5 }}
                 >
                    {/* Optional: Add a tiny icon inside */}
                    <Star className="w-2 h-2 text-accent-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                 </motion.div>
              </motion.div>
           </motion.div>

           {/* Static Decorative Elements */}
           <motion.div
            className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 dark:bg-accent/10 rounded-full blur-lg opacity-70 group-hover:opacity-90 transition-opacity duration-500 animate-pulse"
            variants={itemVariants}
            style={{ filter: 'blur(12px)' }}
          ></motion.div>
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 border-4 border-primary/30 dark:border-primary/20 rounded-full animate-ping-slow opacity-50"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative text elements (positioned relative to the viewport) */}
      <motion.div
        className="absolute top-[15%] left-[5%] text-2xl font-semibold text-primary/20 dark:text-primary/15 -rotate-[15deg] opacity-40 select-none pointer-events-none hidden lg:block"
        variants={decorativeTextVariants(0.8)}
        initial="hidden"
        animate="visible"
      >
        <Code className="inline-block mr-2 h-8 w-8" /> Innovate
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] right-[8%] text-2xl font-semibold text-accent/20 dark:text-accent/15 rotate-[10deg] opacity-40 select-none pointer-events-none hidden lg:block"
        variants={decorativeTextVariants(1.0)}
        initial="hidden"
        animate="visible"
      >
        <Zap className="inline-block mr-2 h-8 w-8" /> Create
      </motion.div>
      <motion.div
        className="absolute top-[55%] right-[15%] text-xl font-light text-muted-foreground/15 dark:text-muted-foreground/10 -rotate-[5deg] opacity-40 select-none pointer-events-none hidden md:block"
        variants={decorativeTextVariants(1.2)}
        initial="hidden"
        animate="visible"
      >
        <Brain className="inline-block mr-2 h-7 w-7" /> Deploy
      </motion.div>

      <style jsx>{`
        @keyframes tilt {
          0%, 100% { transform: rotate(-1deg) scale(1); }
          50% { transform: rotate(1deg) scale(1.01); }
        }
        .animate-tilt {
          animation: tilt 15s infinite linear alternate; /* Slower and alternate direction */
        }
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.4; } /* Reduced opacity */
          50% { transform: scale(1.2); opacity: 0.1; }
        }
        .animate-ping-slow {
          animation: ping-slow 6s cubic-bezier(0, 0, 0.2, 1) infinite; /* Slower ping */
        }
        /* Ensure container has overflow visible if needed for orbiting elements */
        .relative.group {
           /* overflow: visible; */ /* Uncomment if elements clip */
        }
      `}</style>
    </SectionWrapper>
  );
}

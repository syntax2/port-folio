"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { ArrowDown, Code, Zap, Brain } from 'lucide-react';

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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.4 } },
};

const decorativeTextVariants = (delay: number) => ({
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay } },
});


export function HeroSection() {
  return (
    <SectionWrapper 
      id="hero" 
      className="min-h-screen bg-gradient-to-br from-background via-secondary to-background dark:from-background dark:via-muted dark:to-background relative overflow-hidden" 
      containerClassName="flex flex-col items-center justify-center"
    >
      <motion.div 
        className="grid md:grid-cols-2 gap-8 md:gap-16 items-center text-center md:text-left relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-6" variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            <motion.span variants={itemVariants} className="block">Hi, I&apos;m </motion.span>
            <motion.span variants={itemVariants} className="block text-primary">Your Name</motion.span>
          </h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground text-balance">
            A passionate Full Stack Developer specializing in creating modern, responsive, and user-friendly web applications. Welcome to my portfolio.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="#projects">View My Work <ArrowDown className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="relative group aspect-square max-w-md mx-auto md:max-w-full"
          variants={imageVariants}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Image
            src="https://picsum.photos/seed/future-tech/400/400"
            alt="Professional Headshot or Abstract Tech Art"
            width={400}
            height={400}
            priority
            className="rounded-full object-cover shadow-xl relative"
            data-ai-hint="modern tech"
          />
           <motion.div 
            className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/30 rounded-full blur-lg opacity-70 group-hover:opacity-90 transition-opacity duration-500 animate-pulse"
            variants={itemVariants}
            style={{ filter: 'blur(12px)' }}
          ></motion.div>
          <motion.div 
            className="absolute -top-4 -right-4 w-20 h-20 border-4 border-primary/50 rounded-full animate-ping-slow opacity-50"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative text elements */}
      <motion.div 
        className="absolute top-[15%] left-[5%] text-2xl font-semibold text-primary/30 dark:text-primary/20 -rotate-[15deg] opacity-50 select-none pointer-events-none"
        variants={decorativeTextVariants(0.8)}
        initial="hidden"
        animate="visible"
      >
        <Code className="inline-block mr-2 h-8 w-8" /> Innovate
      </motion.div>
      <motion.div 
        className="absolute bottom-[20%] right-[8%] text-2xl font-semibold text-accent/30 dark:text-accent/20 rotate-[10deg] opacity-50 select-none pointer-events-none"
        variants={decorativeTextVariants(1.0)}
        initial="hidden"
        animate="visible"
      >
        <Zap className="inline-block mr-2 h-8 w-8" /> Create
      </motion.div>
      <motion.div 
        className="absolute top-[50%] right-[15%] text-xl font-light text-muted-foreground/20 -rotate-[5deg] opacity-50 select-none pointer-events-none hidden md:block"
        variants={decorativeTextVariants(1.2)}
        initial="hidden"
        animate="visible"
      >
        <Brain className="inline-block mr-2 h-7 w-7" /> Deploy
      </motion.div>
      
      <style jsx>{`
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(2deg) scale(1.02); }
        }
        .animate-tilt {
          animation: tilt 12s infinite linear;
        }
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 0.2; }
        }
        .animate-ping-slow {
          animation: ping-slow 5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </SectionWrapper>
  );
}

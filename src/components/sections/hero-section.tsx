
"use client";

import React, { useEffect, useRef, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValue, type MotionValue } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { ArrowDown, Code, Cloud, Server, ShieldCheck, GitBranchPlus } from 'lucide-react';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const nameLetterVariants = (delayBase: number) => ({
  hidden: { opacity: 0, x: -10, rotateY: -90 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      delay: delayBase + i * 0.05,
      duration: 0.4,
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
  hidden: { opacity: 0, scale: 0.8, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67], delay: 0.4 }
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 1.2 } },
};

// --- Orbiting Icon Component ---
interface OrbitingIconProps {
  component: React.ComponentType<{ className?: string; size?: number }>; // Changed from icon to component
  size: number;
  color: string;
  orbitRadius: number;
  angleOffset: number; // In radians
  duration: number; // Animation duration for one orbit
  delay: number;
}

const OrbitingIcon: React.FC<OrbitingIconProps> = ({ component: Icon, size, color, orbitRadius, angleOffset, duration, delay }) => { // Changed from icon: Icon
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const startTime = Date.now() + delay * 1000;
    let animationFrameId: number;

    const animate = () => {
      const elapsedTime = (Date.now() - startTime) / 1000;
      const currentAngle = (elapsedTime / duration) * 2 * Math.PI + angleOffset;

      const x = orbitRadius * Math.cos(currentAngle);
      const y = orbitRadius * Math.sin(currentAngle);

      setPosition({ x, y });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [orbitRadius, angleOffset, duration, delay]);

  return (
    <motion.div
      className="absolute"
      style={{
        x: position.x,
        y: position.y,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: [0, 0.7, 0.7, 0.7, 0], scale: [0.5, 1, 1, 1, 0.5] }}
      transition={{
        duration: duration * 1.5,
        ease: "easeInOut",
        delay: delay,
        repeat: Infinity,
        repeatDelay: duration * 0.5
      }}
    >
      <Icon className={`${color} drop-shadow-md`} size={size} />
    </motion.div>
  );
};

// --- Hero Section ---
export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Parallax transformations for decorative texts
  const automateY = useTransform(scrollYProgress, (value) => `${value * 30}%`);
  const secureY = useTransform(scrollYProgress, (value) => `${value * -20}%`);
  const scaleY = useTransform(scrollYProgress, (value) => `${value * 15}%`);

  // Name and Title split for animation
  const name = "Ashish Kadian";
  const nameLetters = name.split('');
  const titleParts = "Site Reliability Engineer | DevOps | Cloud Security".split('|').map(part => part.trim().split(' '));

  // Orbiting icons configuration
  const orbitingIcons = useMemo(() => [
    { component: Cloud, size: 20, color: 'text-blue-400', orbitRadius: 160, angleOffset: 0, duration: 15, delay: 0 },
    { component: Server, size: 22, color: 'text-green-400', orbitRadius: 170, angleOffset: Math.PI / 2, duration: 18, delay: 0.5 },
    { component: ShieldCheck, size: 21, color: 'text-teal-400', orbitRadius: 165, angleOffset: Math.PI, duration: 16, delay: 1.0 },
    { component: GitBranchPlus, size: 20, color: 'text-orange-400', orbitRadius: 175, angleOffset: 3 * Math.PI / 2, duration: 17, delay: 1.5 },
    { component: Code, size: 19, color: 'text-purple-400', orbitRadius: 160, angleOffset: Math.PI / 4, duration: 19, delay: 2.0 },
  ], []);

  // Mouse parallax effect for the image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (imageWrapperRef.current) {
        const rect = imageWrapperRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const imageParallaxX = useTransform(mouseX, (value) => (value / 200) * 10);
  const imageParallaxY = useTransform(mouseY, (value) => (value / 200) * 10);

  return (
    <SectionWrapper
      id="hero"
      ref={targetRef}
      className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background dark:from-background dark:via-muted/20 dark:to-background relative overflow-hidden flex items-center justify-center"
      containerClassName="flex flex-col items-center justify-center"
    >
      <motion.div
        className="grid md:grid-cols-2 gap-8 md:gap-16 items-center text-center md:text-left relative z-10 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="space-y-6 order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            <motion.span variants={textItemVariants} className="block text-lg sm:text-xl md:text-2xl text-muted-foreground">Hi, I&apos;m</motion.span>
            <motion.span
              className="block text-primary चमक"
              aria-label={name}
            >
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  custom={index}
                  variants={nameLetterVariants(0.3)}
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
                      variants={titleWordVariants(0.3 + nameLetters.length * 0.05 + 0.2)}
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

          <motion.p variants={textItemVariants} transition={{ delay: 0.8 }} className="text-md md:text-lg text-muted-foreground text-balance">
            Pioneering resilient, scalable, and secure cloud-native infrastructures through advanced SRE methodologies and robust DevOps automation.
          </motion.p>
          <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow animate-pulse-slow">
              <Link href="#projects">Explore My Work <ArrowDown className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow">
              <Link href="#contact">Let&apos;s Connect</Link>
            </Button>
          </motion.div>
        </div>

        {/* Image and Animation Area */}
        <motion.div
          ref={imageWrapperRef}
          className="relative group aspect-square max-w-sm sm:max-w-md mx-auto md:max-w-full order-1 md:order-2 flex items-center justify-center"
          variants={imageContainerVariants}
          style={{ x: imageParallaxX, y: imageParallaxY }}
        >
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] flex items-center justify-center">
            <motion.div
              className="absolute inset-[-15px] bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-1000"
              animate={{ scale: [1, 1.03, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <Image
              src="https://picsum.photos/seed/ashish-kadian-portfolio/400/400"
              alt="Ashish Kadian - SRE & DevOps Engineer"
              width={400}
              height={400}
              priority
              className="relative z-[1] rounded-full object-cover shadow-xl w-full h-full border-4 border-background/30"
              data-ai-hint="professional engineer portrait"
            />

            <div className="absolute inset-0 flex items-center justify-center z-[5] pointer-events-none">
              <div className="absolute w-full h-full">
                {orbitingIcons.map((iconData, index) => (
                  <OrbitingIcon key={index} {...iconData} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative text elements (with Parallax) */}
      <motion.div
        className="absolute top-[10%] left-[5%] text-2xl md:text-3xl font-semibold text-primary/5 dark:text-primary/10 -rotate-[12deg] opacity-60 select-none pointer-events-none hidden lg:block"
        style={{ y: automateY }}
      >
        <Server className="inline-block mr-2 h-7 w-7" /> Automate & Orchestrate
      </motion.div>
      <motion.div
        className="absolute bottom-[15%] right-[5%] text-2xl md:text-3xl font-semibold text-accent/5 dark:text-accent/10 rotate-[8deg] opacity-60 select-none pointer-events-none hidden lg:block"
        style={{ y: secureY }}
      >
        <ShieldCheck className="inline-block mr-2 h-7 w-7" /> Secure & Comply
      </motion.div>
      <motion.div
        className="absolute top-[50%] right-[10%] text-xl md:text-2xl font-light text-muted-foreground/5 dark:text-muted-foreground/10 -rotate-[6deg] opacity-50 select-none pointer-events-none hidden md:block"
        style={{ y: scaleY }}
      >
        <Cloud className="inline-block mr-2 h-6 w-6" /> Scale & Optimize
      </motion.div>

      <style jsx>{`
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.15); opacity: 0.05; }
        }
        .animate-ping-slow {
          animation: ping-slow 6s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes subtle-glow {
          0%, 100% { text-shadow: 0 0 5px hsl(var(--primary) / 0.3), 0 0 10px hsl(var(--primary) / 0.2); }
          50% { text-shadow: 0 0 10px hsl(var(--primary) / 0.4), 0 0 20px hsl(var(--primary) / 0.3); }
        }
        .चमक { /* Hindi for 'glow' */
          animation: subtle-glow 3s ease-in-out infinite;
        }
      `}</style>
    </SectionWrapper>
  );
}

    

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { ArrowDown, Code, Cloud, Server, Database, Container, GitBranchPlus, ShieldCheck } from 'lucide-react';
import { useEffect, useRef, useMemo } from 'react';


// --- Animation Variants ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly faster stagger
      delayChildren: 0.2,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const nameLetterVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5 + i * 0.05, // Staggered reveal after "Hi, I'm"
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const imageContainerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67], delay: 0.6 } },
};

const buttonVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 1.0 } }, // Delay buttons slightly more
}

// --- Particle Component ---
interface ParticleProps {
  id: number;
  x: number;
  y: number;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  size: number;
  color: string;
  initialDelay: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

const Particle: React.FC<ParticleProps> = ({ id, x, y, icon: Icon, size, color, initialDelay, containerRef }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateParticle = async () => {
      await controls.start({
        opacity: [0, 0.8, 0.8, 0], // Fade in and out
        scale: [0.5, 1, 1, 0.5],
        x: [x, x + (Math.random() - 0.5) * 80], // Random drift horizontally
        y: [y, y + (Math.random() - 0.5) * 80], // Random drift vertically
        transition: {
          duration: 3 + Math.random() * 3, // Random duration
          ease: "easeInOut",
          delay: initialDelay + Math.random() * 2, // Staggered start
          repeat: Infinity,
          repeatType: "reverse",
        },
      });
    };
    animateParticle();
  }, [controls, x, y, initialDelay]);

  // Mouse interaction - repel effect (Optional - can be performance intensive)
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
        if (!containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const mouseX = event.clientX - containerRect.left - containerRect.width / 2;
        const mouseY = event.clientY - containerRect.top - containerRect.height / 2;
        const distance = Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));
        const maxDistance = 150; // Radius of repulsion

        if (distance < maxDistance) {
            const repelForce = (maxDistance - distance) / maxDistance * 50; // Adjust force
            const angle = Math.atan2(y - mouseY, x - mouseX);
            controls.start({
                x: x + Math.cos(angle) * repelForce,
                y: y + Math.sin(angle) * repelForce,
                transition: { type: "spring", stiffness: 150, damping: 15 }
            });
        } else {
             // Gently return to drift animation if mouse moves away - needs more sophisticated state management
             // For simplicity, we'll let the repeat animation handle return for now.
        }
    };

    const currentRef = containerRef.current; // Capture ref value
    currentRef?.addEventListener('mousemove', handleMouseMove);
    return () => currentRef?.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, controls, containerRef]);


  return (
    <motion.div
      className="absolute"
      style={{ originX: "0px", originY: "0px" }} // Simplified origin
      animate={controls}
      initial={{ opacity: 0, scale: 0.5, x: x, y: y }} // Start at calculated position
    >
      <Icon className={`${color} drop-shadow-lg`} size={size} />
    </motion.div>
  );
};


// --- Hero Section ---
export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Define containerRef here
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"], // Track scroll from start of section to end of section
  });

  // Parallax transformations for decorative texts
  const automateY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const secureY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const scaleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Name split for animation
  const name = "Alex Johnson";
  const nameLetters = name.split('');

  // Particle configuration
  const particleIcons = useMemo(() => [
    { component: Cloud, size: 22, color: 'text-blue-400' },
    { component: Server, size: 26, color: 'text-green-400' },
    { component: Database, size: 20, color: 'text-purple-400' },
    { component: Container, size: 28, color: 'text-cyan-400' },
    { component: GitBranchPlus, size: 24, color: 'text-orange-400' },
    { component: Code, size: 22, color: 'text-pink-400' },
    { component: ShieldCheck, size: 25, color: 'text-teal-400' },
  ], []);

  const numParticles = 25; // Increase number of particles
  const particleRadius = 200; // Radius around the central image
  const particles = useMemo(() => {
      const generatedParticles = [];
      for (let i = 0; i < numParticles; i++) {
          const angle = (i / numParticles) * 2 * Math.PI + (Math.random() - 0.5) * 0.5; // Add some randomness to angle
          const radiusOffset = particleRadius + (Math.random() - 0.5) * 80; // Randomness in distance
          const x = radiusOffset * Math.cos(angle);
          const y = radiusOffset * Math.sin(angle);
          const iconData = particleIcons[i % particleIcons.length];
          generatedParticles.push({
              id: i,
              x,
              y,
              icon: iconData.component,
              size: iconData.size * (0.8 + Math.random() * 0.4), // Random size variation
              color: iconData.color,
              initialDelay: Math.random() * 1.5, // Random initial delay
          });
      }
      return generatedParticles;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [particleIcons]); // Regenerate only if icons change


  return (
    <SectionWrapper
      id="hero"
      ref={targetRef} // Ref for scroll tracking
      className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background dark:from-background dark:via-muted/30 dark:to-background relative overflow-hidden flex items-center justify-center"
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
            <motion.span variants={textItemVariants} className="block">Hi, I&apos;m </motion.span>
            <motion.span
              className="block text-primary"
              aria-label={name}
              // variants={textItemVariants} // Use letter variants instead
            >
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  custom={index}
                  variants={nameLetterVariants}
                  className="inline-block" // Needed for individual letter animation
                >
                  {letter === ' ' ? '\u00A0' : letter} {/* Handle space */}
                </motion.span>
              ))}
            </motion.span>
          </h1>
          <motion.p variants={textItemVariants} className="text-lg md:text-xl text-muted-foreground text-balance">
            An SRE & DevOps Engineer focused on building <strong className="text-foreground">reliable</strong>, <strong className="text-foreground">scalable</strong>, and <strong className="text-foreground">automated</strong> infrastructure solutions. Welcome to my digital space.
          </motion.p>
          <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow animate-pulse-slow">
              <Link href="#projects">See My Work <ArrowDown className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>

        {/* Image and Animation Area */}
        <motion.div
          className="relative group aspect-square max-w-sm sm:max-w-md mx-auto md:max-w-full order-1 md:order-2 flex items-center justify-center"
          variants={imageContainerVariants}
          ref={containerRef} // Ref for particle mouse interaction
        >
          {/* Central Image Container */}
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] flex items-center justify-center">
             {/* Background Glow */}
             <motion.div
                className="absolute inset-[-20px] bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-300"
                animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             />

             <Image
               src="https://picsum.photos/seed/devops-headshot/400/400" // Changed seed for potentially different image
               alt="Alex Johnson - SRE/DevOps Engineer" // More specific alt text
               width={400}
               height={400}
               priority
               className="relative z-[1] rounded-full object-cover shadow-xl w-full h-full border-4 border-background/50"
               data-ai-hint="professional portrait tech" // Updated hint
             />

             {/* --- Particle Network --- */}
            <div className="absolute inset-0 flex items-center justify-center z-[5] pointer-events-none"> {/* pointer-events-none on container */}
              <div className="absolute w-full h-full"> {/* Inner div for positioning particles */}
                {particles.map((p) => (
                  <Particle
                    key={p.id}
                    {...p}
                    containerRef={containerRef}
                  />
                ))}
              </div>
            </div>
          </div>

           {/* Static Decorative Elements - Kept simple */}
           <motion.div
            className="absolute -bottom-8 -left-8 w-28 h-28 bg-accent/5 dark:bg-accent/5 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"
             style={{ filter: 'blur(20px)' }}
             variants={textItemVariants} // Reuse variant for subtle fade-in
          ></motion.div>
          <motion.div
            className="absolute -top-8 -right-8 w-24 h-24 border-4 border-primary/10 dark:border-primary/10 rounded-full animate-ping-slow opacity-20"
             variants={textItemVariants} // Reuse variant
          ></motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative text elements (with Parallax) */}
      <motion.div
        className="absolute top-[15%] left-[5%] text-3xl font-semibold text-primary/10 dark:text-primary/15 -rotate-[15deg] opacity-50 select-none pointer-events-none hidden lg:block"
        style={{ y: automateY }} // Apply parallax
      >
        <Server className="inline-block mr-2 h-8 w-8" /> Automate
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] right-[8%] text-3xl font-semibold text-accent/10 dark:text-accent/15 rotate-[10deg] opacity-50 select-none pointer-events-none hidden lg:block"
        style={{ y: secureY }} // Apply parallax
      >
        <ShieldCheck className="inline-block mr-2 h-8 w-8" /> Secure
      </motion.div>
       <motion.div
        className="absolute top-[55%] right-[15%] text-2xl font-light text-muted-foreground/5 dark:text-muted-foreground/10 -rotate-[5deg] opacity-40 select-none pointer-events-none hidden md:block"
        style={{ y: scaleY }} // Apply parallax
      >
        <Cloud className="inline-block mr-2 h-7 w-7" /> Scale
      </motion.div>

      <style jsx>{`
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.15; } /* Adjusted opacity */
          50% { transform: scale(1.2); opacity: 0.05; }
        }
        .animate-ping-slow {
          animation: ping-slow 7s cubic-bezier(0, 0, 0.2, 1) infinite; /* Slightly slower */
        }
      `}</style>
    </SectionWrapper>
  );
}

// Add a ref to the SectionWrapper if needed for scroll tracking
declare module "@/components/section-wrapper" {
  interface SectionWrapperProps {
    ref?: React.Ref<HTMLDivElement>;
  }
}

    
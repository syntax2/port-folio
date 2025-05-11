import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <SectionWrapper id="hero" className="min-h-screen bg-gradient-to-br from-background via-secondary to-background dark:from-background dark:via-muted dark:to-background" containerClassName="flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center text-center md:text-left">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            <span className="block">Hi, I&apos;m </span>
            <span className="block text-primary">Your Name</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            A passionate Full Stack Developer specializing in creating modern, responsive, and user-friendly web applications. Welcome to my portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
              <Link href="#projects">View My Work <ArrowDown className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm hover:shadow-md transition-shadow">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        <div className="relative group animate-fade-in aspect-square max-w-md mx-auto md:max-w-full">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Image
            src="https://picsum.photos/seed/headshot/400/400"
            alt="Professional Headshot"
            width={400}
            height={400}
            priority
            className="rounded-full object-cover shadow-xl relative"
            data-ai-hint="professional headshot"
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
      `}</style>
    </SectionWrapper>
  );
}

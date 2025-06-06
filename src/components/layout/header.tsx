"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import { ALogo } from './logo';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Explain Tech', href: '#explain-tech' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="#hero" className="flex items-center gap-2 group" onClick={closeSheet}>
          <ALogo className="h-8 w-auto text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[10deg]" />
          <span className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">Ashish Kadian</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild>
              <Link
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 px-3 py-2 rounded-md transition-all duration-200"
              >
                {item.label}
              </Link>
            </Button>
          ))}
          <ThemeToggleButton />
        </nav>

        <div className="md:hidden flex items-center">
          <ThemeToggleButton />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-0">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b border-border/50">
                    <Link href="#hero" className="flex items-center gap-2" onClick={closeSheet}>
                        <ALogo className="h-7 w-auto text-primary" />
                        <span className="text-xl font-bold text-foreground">Ashish Kadian</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={closeSheet} className="text-muted-foreground hover:text-primary">
                        <X className="h-6 w-6" />
                    </Button>
                </div>
                <nav className="flex flex-col space-y-2 p-4 mt-4">
                  {navItems.map((item) => (
                     <Button key={item.label} variant="ghost" asChild className="w-full justify-start">
                        <Link
                        href={item.href}
                        className="text-lg font-medium text-foreground hover:text-primary py-3 px-2 rounded-md transition-all duration-200"
                        onClick={closeSheet}
                        >
                        {item.label}
                        </Link>
                    </Button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

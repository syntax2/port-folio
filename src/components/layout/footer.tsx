import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {currentYear} Ashish Kadian. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link href="https://github.com/syntax2/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/ashish-kadian/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="mailto:ashishkadian239@gmail.com" aria-label="Email">
            <Mail className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

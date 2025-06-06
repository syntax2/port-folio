import type { ReactNode } from 'react';
import React from 'react'; // Import React
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  titleClassName?: string;
  containerClassName?: string;
  // ref is handled by React.forwardRef, so it's not part of these props
}

export const SectionWrapper = React.forwardRef<HTMLDivElement, SectionWrapperProps>(
  ({ id, className, children, title, titleClassName, containerClassName }, ref) => {
    return (
      <section id={id} ref={ref} className={cn('py-16 md:py-24 scroll-mt-20 min-h-[60vh] flex items-center', className)}>
        <div className={cn('container mx-auto px-4 md:px-6 w-full', containerClassName)}>
          {title && (
            <h2 className={cn('text-3xl md:text-4xl font-bold mb-12 text-center text-foreground', titleClassName)}>
              {title}
            </h2>
          )}
          {children}
        </div>
      </section>
    );
  }
);

SectionWrapper.displayName = 'SectionWrapper';

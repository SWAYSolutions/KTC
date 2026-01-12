'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Section Component
 * Consistent page section wrapper with styling options
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: 'white' | 'cream' | 'charcoal' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  container?: boolean;
  children: ReactNode;
}

function Section({
  className,
  background = 'white',
  padding = 'lg',
  container = true,
  children,
  ...props
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    cream: 'bg-cream',
    charcoal: 'bg-charcoal text-white',
    gradient: 'bg-gradient-to-b from-cream to-white',
  };

  const paddings = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  return (
    <section
      className={cn(backgrounds[background], paddings[padding], className)}
      {...props}
    >
      {container ? (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

// Section Header with title and subtitle
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={cn('max-w-3xl mb-12', alignments[align], className)}>
      {subtitle && (
        <span className="text-gold font-medium text-sm uppercase tracking-wider mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-charcoal-400 text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export { Section, SectionHeader };

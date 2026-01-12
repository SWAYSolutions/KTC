'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Badge Component
 * Small status indicators and labels
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'gold' | 'wood' | 'sage' | 'outline';
  size?: 'sm' | 'md';
}

function Badge({
  className,
  variant = 'default',
  size = 'md',
  ...props
}: BadgeProps) {
  const variants = {
    default: 'bg-charcoal-100 text-charcoal',
    gold: 'bg-gold-100 text-gold-700',
    wood: 'bg-wood-100 text-wood-700',
    sage: 'bg-sage-100 text-sage-700',
    outline: 'bg-transparent border border-charcoal-200 text-charcoal',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}

export { Badge };

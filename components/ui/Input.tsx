'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Input Component
 * Styled form input with label and error states
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-charcoal mb-2"
          >
            {label}
            {props.required && <span className="text-gold ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3 rounded-xl border transition-all duration-300',
            'bg-white text-charcoal placeholder-charcoal-400',
            'focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold',
            error
              ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
              : 'border-charcoal-200 hover:border-charcoal-300',
            'disabled:bg-charcoal-50 disabled:cursor-not-allowed',
            className
          )}
          {...props}
        />
        {hint && !error && (
          <p className="mt-2 text-sm text-charcoal-400">{hint}</p>
        )}
        {error && (
          <p className="mt-2 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };

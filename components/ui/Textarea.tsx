'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Textarea Component
 * Styled form textarea with label and error states
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-charcoal mb-2"
          >
            {label}
            {props.required && <span className="text-gold ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-y min-h-[120px]',
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

Textarea.displayName = 'Textarea';

export { Textarea };

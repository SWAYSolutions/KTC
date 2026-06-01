'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Promo Lead Form Component
 * Simplified lead capture form for Facebook ads landing page
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button, Input } from '@/components/ui';
import { isValidEmail, isValidPhone } from '@/lib/utils';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
};

export function PromoLeadForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('submitting');

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xyzabcde';
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Facebook Lead: ${formData.projectType || 'New Inquiry'}`,
          source: 'Facebook Ads Landing Page',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData(initialFormData);
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-6"
      >
        <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-serif font-semibold text-charcoal mb-2">
          Thank You!
        </h3>
        <p className="text-charcoal-500">
          We&apos;ll contact you within 24 hours to schedule your free consultation.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 p-3 bg-red-50 rounded-xl text-red-700 text-sm"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>Something went wrong. Please try again.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Input
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="John Smith"
        required
      />

      <Input
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="john@example.com"
        required
      />

      <Input
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        placeholder="(902) 555-0123"
        required
      />

      <div className="w-full">
        <label className="block text-sm font-medium text-charcoal mb-2">
          Project Type
        </label>
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
        >
          <option value="">What are you interested in?</option>
          <option value="full-renovation">Full Kitchen Renovation</option>
          <option value="cabinet-replacement">Cabinet Replacement</option>
          <option value="new-construction">New Construction</option>
          <option value="design-consultation">Design Consultation</option>
          <option value="not-sure">Not Sure Yet</option>
        </select>
      </div>

      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="w-full"
        isLoading={status === 'submitting'}
      >
        {status === 'submitting' ? (
          'Sending...'
        ) : (
          <>
            Get My Free Quote
            <Send className="ml-2 w-5 h-5" />
          </>
        )}
      </Button>

      <p className="text-xs text-charcoal-400 text-center">
        Your information is secure. We&apos;ll never share your details.
      </p>
    </form>
  );
}

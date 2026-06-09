'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Renovation Lead Form
 * Streamlined, high-conversion lead capture form for the Facebook ad campaign.
 * Fewer fields than the full contact form to maximize completed submissions.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { Button, Input, Textarea } from '@/components/ui';
import { isValidEmail, isValidPhone } from '@/lib/utils';
import { trackLead } from '@/lib/fpixel';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const initialFormData: LeadFormData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
};

interface LeadFormProps {
  /** Campaign identifier sent with the submission for lead-source tracking */
  source?: string;
}

export function LeadForm({ source = 'Facebook Ad - Kitchen Renovations' }: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<LeadFormData>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof LeadFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<LeadFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
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
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!formspreeId) {
        // No form endpoint configured - fail loudly rather than silently
        // sending leads to an unknown account.
        throw new Error('NEXT_PUBLIC_FORMSPREE_ID is not configured');
      }
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _source: source,
          _subject: `New Renovation Lead (${source}): ${formData.name}`,
        }),
      });

      if (response.ok) {
        // Fire the Meta Pixel "Lead" conversion event so the ad campaign
        // can optimize for and report on form submissions.
        trackLead({ content_name: source });
        setStatus('success');
        setFormData(initialFormData);
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setStatus('error');
    }
  };

  // Success State
  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-8 text-center shadow-luxury"
      >
        <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-serif font-semibold text-charcoal mb-2">
          Request Received!
        </h3>
        <p className="text-charcoal-500 mb-6">
          Thank you. One of our kitchen design experts will reach out within one business
          day to schedule your free, no-obligation consultation.
        </p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-luxury">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-serif font-semibold text-charcoal">
          Book Your Free Consultation
        </h3>
        <p className="text-charcoal-500 text-sm mt-2">
          Tell us about your project and we&apos;ll be in touch within one business day.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 bg-red-50 rounded-xl text-red-700"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm">
              Something went wrong. Please try again or call us at (902) 955-2225.
            </p>
          </motion.div>
        )}

        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="John Smith"
          required
        />

        <div className="grid sm:grid-cols-2 gap-4">
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
        </div>

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
            <option value="">Select a project type</option>
            <option value="full-renovation">Full Kitchen Renovation</option>
            <option value="cabinet-replacement">Cabinet Replacement / Refacing</option>
            <option value="countertop-upgrade">Countertop Upgrade</option>
            <option value="new-construction">New Construction</option>
            <option value="not-sure">Not Sure Yet</option>
          </select>
        </div>

        <Textarea
          label="Project Details"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us a little about your kitchen and what you'd like to change..."
          rows={3}
          hint="Optional"
        />

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
              Get My Free Consultation
              <Send className="ml-2 w-5 h-5" />
            </>
          )}
        </Button>

        <div className="flex items-center justify-center gap-2 text-charcoal-400 text-xs">
          <ShieldCheck className="w-4 h-4 text-sage" />
          <span>
            No obligation. We&apos;ll never share your info. See our{' '}
            <a href="/privacy" className="text-gold hover:underline">
              Privacy Policy
            </a>
            .
          </span>
        </div>
      </form>
    </div>
  );
}

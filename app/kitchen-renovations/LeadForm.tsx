'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Lead Capture Form
 * Streamlined, high-conversion lead form shared by the campaign landing pages
 * (kitchen renovations + cabinet sales). Parameterized via props; defaults
 * preserve the original renovation-page behavior. Fewer required fields than the
 * full contact form to maximize completed submissions.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { Button, Input, Textarea } from '@/components/ui';
import { isValidEmail, isValidPhone } from '@/lib/utils';
import { trackLead } from '@/lib/fpixel';
import { getAttribution } from '@/lib/attribution';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface ProjectOption {
  value: string;
  label: string;
}

const initialFormData: LeadFormData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: '',
};

const defaultProjectOptions: ProjectOption[] = [
  { value: 'full-renovation', label: 'Full Kitchen Renovation' },
  { value: 'cabinet-replacement', label: 'Cabinet Replacement / Refacing' },
  { value: 'countertop-upgrade', label: 'Countertop Upgrade' },
  { value: 'new-construction', label: 'New Construction' },
  { value: 'not-sure', label: 'Not Sure Yet' },
];

interface LeadFormProps {
  /** Campaign identifier sent with the submission for lead-source tracking */
  source?: string;
  /** Form heading */
  heading?: string;
  /** Short line under the heading */
  subheading?: string;
  /** Submit button label */
  submitLabel?: string;
  /** Success-state title */
  successTitle?: string;
  /** Success-state body copy */
  successBody?: string;
  /** Label for the project-type select */
  projectTypeLabel?: string;
  /** First (placeholder) option in the project-type select */
  projectTypePlaceholder?: string;
  /** Options for the project-type select */
  projectOptions?: ProjectOption[];
  /** Prefix used to build the email subject line */
  subjectPrefix?: string;
  /** Category for the Meta "Lead" event so each offer can optimize/report separately */
  leadCategory?: string;
  /** Optional lead value for Meta value-based optimization (CAD) */
  leadValue?: number;
}

export function LeadForm({
  source = 'Facebook Ad - Kitchen Renovations',
  heading = 'Book Your Free Consultation',
  subheading = "Takes 30 seconds. No obligation, just expert advice and a clear plan. We'll reply within one business day.",
  submitLabel = 'Get My Free Consultation',
  successTitle = 'Request Received!',
  successBody = 'Thank you. One of our kitchen design experts will reach out within one business day to schedule your free, no-obligation consultation.',
  projectTypeLabel = 'Project Type',
  projectTypePlaceholder = 'Select a project type',
  projectOptions = defaultProjectOptions,
  subjectPrefix = 'New Renovation Lead',
  leadCategory = 'Kitchen Renovation',
  leadValue,
}: LeadFormProps) {
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

    // Phone is optional; validate only if provided.
    if (formData.phone && !isValidPhone(formData.phone)) {
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
          ...getAttribution(),
          _source: source,
          _subject: `${subjectPrefix} (${source}): ${formData.name}`,
        }),
      });

      if (response.ok) {
        // Fire the Meta Pixel "Lead" conversion event so the ad campaign
        // can optimize for and report on form submissions. content_category
        // lets each offer (cabinet sales vs renovation) optimize separately.
        trackLead({
          content_name: source,
          content_category: leadCategory,
          ...(leadValue ? { value: leadValue, currency: 'CAD' } : {}),
        });
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
          {successTitle}
        </h3>
        <p className="text-charcoal-500 mb-6">{successBody}</p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-luxury">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-serif font-semibold text-charcoal">{heading}</h3>
        <p className="text-charcoal-500 text-sm mt-2">{subheading}</p>
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
            hint="Optional"
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-charcoal mb-2">
            {projectTypeLabel}
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
          >
            <option value="">{projectTypePlaceholder}</option>
            {projectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <Textarea
          label="Project Details"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us a little about your project and what you're looking for..."
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
              {submitLabel}
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

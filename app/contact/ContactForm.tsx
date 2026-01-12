'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Contact Form Component
 * Form with validation and Formspree integration
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button, Input, Textarea } from '@/components/ui';
import { isValidEmail, isValidPhone } from '@/lib/utils';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  projectType: string;
  budget: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  projectType: '',
  budget: '',
  message: '',
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('product');

  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    subject: productId ? `Quote Request for Product: ${productId}` : '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
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
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('submitting');

    try {
      // Formspree submission
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xyzabcde';
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Contact: ${formData.subject}`,
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

  // Success State
  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-sage-50 rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-serif font-semibold text-charcoal mb-2">
          Message Sent!
        </h3>
        <p className="text-charcoal-500 mb-6">
          Thank you for reaching out. One of our design experts will contact you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error Alert */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 p-4 bg-red-50 rounded-xl text-red-700"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>Something went wrong. Please try again or contact us directly by phone.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name and Email */}
      <div className="grid md:grid-cols-2 gap-4">
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
      </div>

      {/* Phone and Subject */}
      <div className="grid md:grid-cols-2 gap-4">
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
        <Input
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          placeholder="Kitchen Renovation Inquiry"
          required
        />
      </div>

      {/* Project Type and Budget */}
      <div className="grid md:grid-cols-2 gap-4">
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
            <option value="cabinet-replacement">Cabinet Replacement</option>
            <option value="countertop-upgrade">Countertop Upgrade</option>
            <option value="new-construction">New Construction</option>
            <option value="design-consultation">Design Consultation Only</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-charcoal mb-2">
            Budget Range
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-charcoal-200 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
          >
            <option value="">Select your budget range</option>
            <option value="under-25k">Under $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-75k">$50,000 - $75,000</option>
            <option value="75k-100k">$75,000 - $100,000</option>
            <option value="over-100k">Over $100,000</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <Textarea
        label="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Tell us about your project, goals, and any specific products you're interested in..."
        rows={5}
        required
      />

      {/* Submit Button */}
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
            Send Message
            <Send className="ml-2 w-5 h-5" />
          </>
        )}
      </Button>

      {/* Privacy Note */}
      <p className="text-sm text-charcoal-400 text-center">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="text-gold hover:underline">
          Privacy Policy
        </a>
        . We&apos;ll never share your information with third parties.
      </p>
    </form>
  );
}

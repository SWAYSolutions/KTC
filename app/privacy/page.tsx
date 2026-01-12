/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Privacy Policy Page
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Kitchen Table Cabinetry website and services.',
};

export default function PrivacyPage() {
  return (
    <Section background="white" padding="xl">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          subtitle="Legal"
          title="Privacy Policy"
          description={`Last updated: ${new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}`}
          align="left"
        />

        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-charcoal prose-p:text-charcoal-600 prose-a:text-gold">
          <h2>Introduction</h2>
          <p>
            {siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to
            protecting the personal information you share with us. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you visit our website or
            use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide, including:</p>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Mailing address</li>
            <li>Project details and preferences</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain information, including:
          </p>
          <ul>
            <li>IP address and browser type</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>Device and operating system information</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer service</li>
            <li>Process and fulfill your requests</li>
            <li>Send you information about our products and services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share
            your information with:
          </p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Professional advisors (lawyers, accountants)</li>
            <li>Government authorities when required by law</li>
          </ul>

          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your browsing experience. You
            can control cookies through your browser settings, though this may affect some website
            functionality.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under 13. We do not knowingly collect personal
            information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: {siteConfig.contact.email}</li>
            <li>
              Address: {siteConfig.contact.address.street}, {siteConfig.contact.address.city},{' '}
              {siteConfig.contact.address.province} {siteConfig.contact.address.postalCode}
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

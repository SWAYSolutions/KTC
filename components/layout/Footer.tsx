'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Footer Component
 * Comprehensive site footer with links, contact info, and newsletter
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import Link from 'next/link';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig, footerLinks } from '@/data/site-config';
import { formatPhone } from '@/lib/utils';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-serif font-bold text-white">
                Kitchen Table
              </span>
              <span className="text-2xl font-serif text-gold ml-2">Cabinetry</span>
            </div>
            <p className="text-charcoal-300 mb-6 max-w-md leading-relaxed">
              {siteConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-600 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-600 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-600 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.houzz}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-600 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Houzz"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.5 0L2 5v14l4 2.5v-12l6.5 4 6.5-4v12l4-2.5V5L12.5 0zm0 13.5L8 11V7.5l4.5 2.75L17 7.5V11l-4.5 2.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-charcoal-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-charcoal-300 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.province}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-charcoal-300 hover:text-gold transition-colors"
                >
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.contact.address.street}
                    <br />
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.province}
                    <br />
                    {siteConfig.contact.address.postalCode}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center text-charcoal-300 hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  {formatPhone(siteConfig.contact.phone)}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center text-charcoal-300 hover:text-gold transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start text-charcoal-300">
                <Clock className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Mon-Fri: {siteConfig.contact.hours.weekday}
                  <br />
                  Sat: {siteConfig.contact.hours.saturday}
                  <br />
                  Sun: {siteConfig.contact.hours.sunday}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Partners Banner */}
      <div className="border-t border-charcoal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
            <span className="text-charcoal-400 text-sm uppercase tracking-wider">
              Authorized Dealer
            </span>
            <div className="flex items-center space-x-8">
              <span className="text-white font-serif text-xl">Kitchen Craft</span>
              <span className="text-charcoal-500">|</span>
              <span className="text-white font-serif text-xl">Triangle Kitchens</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-charcoal-400 text-sm">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-charcoal-400 hover:text-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-charcoal-400 hover:text-gold transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-charcoal-400 hover:text-gold transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

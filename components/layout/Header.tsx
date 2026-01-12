'use client';

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Header Component
 * Sticky navigation with dropdown menus and mobile responsive design
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigation, siteConfig } from '@/data/site-config';
import { Button } from '@/components/ui';
import { formatPhone } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top bar with contact info */}
      <div className="hidden lg:block bg-charcoal text-white text-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                {formatPhone(siteConfig.contact.phone)}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="text-charcoal-300">
              {siteConfig.contact.address.city}, {siteConfig.contact.address.province}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-luxury'
            : 'bg-white'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center">
                <span className="text-2xl font-serif font-bold text-charcoal">
                  Kitchen Table
                </span>
                <span className="text-2xl font-serif text-gold ml-2">Cabinetry</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center',
                      pathname === item.href
                        ? 'text-gold'
                        : 'text-charcoal hover:text-gold hover:bg-charcoal-50'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          'ml-1 w-4 h-4 transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full pt-2 w-64"
                      >
                        <div className="bg-white rounded-xl shadow-luxury-lg p-2 border border-charcoal-100">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-3 rounded-lg hover:bg-cream transition-colors"
                            >
                              <span className="font-medium text-charcoal block">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="text-sm text-charcoal-400">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <Button variant="gold" size="md">
                  Free Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-charcoal-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-charcoal-100 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
                {navigation.map((item) => (
                  <div key={item.href} className="mb-2">
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.label ? null : item.label
                            )
                          }
                          className="w-full flex items-center justify-between px-4 py-3 text-charcoal font-medium rounded-lg hover:bg-cream"
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              'w-5 h-5 transition-transform duration-200',
                              activeDropdown === item.label && 'rotate-180'
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 overflow-hidden"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block px-4 py-2 text-charcoal-600 hover:text-gold"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          'block px-4 py-3 rounded-lg font-medium',
                          pathname === item.href
                            ? 'text-gold bg-gold-50'
                            : 'text-charcoal hover:bg-cream'
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="mt-4 pt-4 border-t border-charcoal-100">
                  <Link href="/contact" className="block">
                    <Button variant="gold" size="lg" className="w-full">
                      Free Consultation
                    </Button>
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-4 pt-4 border-t border-charcoal-100 space-y-2">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center text-charcoal-600 hover:text-gold transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    {formatPhone(siteConfig.contact.phone)}
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center text-charcoal-600 hover:text-gold transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

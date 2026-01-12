/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Style Quiz Page
 * Discover your perfect kitchen style
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui';
import { StyleQuiz } from '@/components/features/StyleQuiz';

export const metadata: Metadata = {
  title: 'Style Quiz - Discover Your Perfect Kitchen Style',
  description:
    'Take our quick style quiz to discover your ideal kitchen aesthetic. Get personalized recommendations based on your preferences.',
};

export default function StyleQuizPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="cream" padding="xl">
        <SectionHeader
          subtitle="Style Quiz"
          title="Discover Your Perfect Kitchen Style"
          description="Answer a few questions to help us understand your aesthetic preferences. We'll provide personalized recommendations to guide your design journey."
        />

        {/* Quiz Component */}
        <StyleQuiz />
      </Section>
    </>
  );
}

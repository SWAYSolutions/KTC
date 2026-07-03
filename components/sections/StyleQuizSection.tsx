/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Style Quiz Section
 * Home-page section that embeds the interactive style quiz. Replaces the old
 * one-style-at-a-time carousel with something visitors can actually use: answer
 * six quick questions, get a style match plus cabinetry recommendations, then
 * book a consultation with the result attached.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { Section, SectionHeader } from '@/components/ui';
import { StyleQuiz } from '@/components/features/StyleQuiz';

export function StyleQuizSection() {
  return (
    <Section background="cream" padding="xl">
      <SectionHeader
        subtitle="Find Your Style"
        title="What's Your Kitchen Style?"
        description="Answer six quick questions and we'll match you to a kitchen style, with cabinetry and finish recommendations to bring to your free consultation. Takes about a minute."
      />
      <StyleQuiz />
    </Section>
  );
}

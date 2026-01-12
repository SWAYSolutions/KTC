/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Style Quiz Data
 * AI-powered style recommendation quiz questions and results
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { type QuizQuestion, type QuizResult, type ProjectStyle } from '@/types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Which word best describes your ideal kitchen atmosphere?',
    options: [
      { id: 'q1a', text: 'Sleek & Minimalist', styles: ['modern', 'contemporary'] },
      { id: 'q1b', text: 'Warm & Inviting', styles: ['rustic-luxury', 'traditional'] },
      { id: 'q1c', text: 'Elegant & Timeless', styles: ['traditional', 'transitional'] },
      { id: 'q1d', text: 'Bold & Innovative', styles: ['contemporary', 'modern'] },
    ],
  },
  {
    id: 'q2',
    question: 'What type of cabinet hardware appeals to you most?',
    options: [
      { id: 'q2a', text: 'No hardware (handleless design)', styles: ['modern', 'contemporary'] },
      { id: 'q2b', text: 'Brushed brass or copper pulls', styles: ['rustic-luxury', 'transitional'] },
      { id: 'q2c', text: 'Classic knobs and pulls', styles: ['traditional'] },
      { id: 'q2d', text: 'Sleek bar handles in black or chrome', styles: ['contemporary', 'modern'] },
    ],
  },
  {
    id: 'q3',
    question: 'Which countertop material appeals to you most?',
    options: [
      { id: 'q3a', text: 'Bright white quartz', styles: ['modern', 'contemporary'] },
      { id: 'q3b', text: 'Butcher block or warm wood', styles: ['rustic-luxury'] },
      { id: 'q3c', text: 'Richly veined marble or granite', styles: ['traditional', 'transitional'] },
      { id: 'q3d', text: 'Dramatic dark stone or concrete', styles: ['contemporary', 'modern'] },
    ],
  },
  {
    id: 'q4',
    question: 'How would you describe your home\'s overall style?',
    options: [
      { id: 'q4a', text: 'Modern/Contemporary', styles: ['modern', 'contemporary'] },
      { id: 'q4b', text: 'Farmhouse/Cottage', styles: ['rustic-luxury'] },
      { id: 'q4c', text: 'Classic/Traditional', styles: ['traditional'] },
      { id: 'q4d', text: 'Mix of styles (Eclectic)', styles: ['transitional', 'contemporary'] },
    ],
  },
  {
    id: 'q5',
    question: 'What cabinet door style do you prefer?',
    options: [
      { id: 'q5a', text: 'Flat/Slab (no detail)', styles: ['modern', 'contemporary'] },
      { id: 'q5b', text: 'Shaker (simple recessed panel)', styles: ['transitional', 'rustic-luxury'] },
      { id: 'q5c', text: 'Raised panel with decorative detail', styles: ['traditional'] },
      { id: 'q5d', text: 'Mix of solid and glass-front', styles: ['transitional', 'traditional'] },
    ],
  },
  {
    id: 'q6',
    question: 'Which color palette speaks to you?',
    options: [
      { id: 'q6a', text: 'Crisp whites and greys', styles: ['modern', 'contemporary'] },
      { id: 'q6b', text: 'Warm woods and earthy tones', styles: ['rustic-luxury', 'transitional'] },
      { id: 'q6c', text: 'Rich creams and classic neutrals', styles: ['traditional'] },
      { id: 'q6d', text: 'Bold colors with dramatic contrast', styles: ['contemporary', 'modern'] },
    ],
  },
];

export const quizResults: Record<ProjectStyle, QuizResult> = {
  modern: {
    style: 'modern',
    title: 'Modern Minimalist',
    description:
      'You appreciate clean lines, uncluttered spaces, and innovative design. Your ideal kitchen features handleless cabinetry, integrated appliances, and a restrained color palette that lets quality materials shine.',
    recommendations: [
      'Triangle Kitchens Infinity Edge Series',
      'Handleless push-to-open mechanisms',
      'Bright quartz countertops',
      'Integrated appliance packages',
      'Under-cabinet LED lighting',
    ],
    sampleProjects: ['proj-modern-minimalist-halifax'],
  },
  contemporary: {
    style: 'contemporary',
    title: 'Contemporary Creative',
    description:
      'You embrace current trends while maintaining a sophisticated edge. Your kitchen balances form and function with bold material choices and thoughtful details that reflect the latest in design innovation.',
    recommendations: [
      'Triangle Kitchens Smart Storage System',
      'Mixed metal hardware',
      'Statement stone countertops',
      'Color-blocked cabinetry',
      'Professional-style appliances',
    ],
    sampleProjects: ['proj-contemporary-coastal', 'proj-urban-loft'],
  },
  traditional: {
    style: 'traditional',
    title: 'Traditional Elegance',
    description:
      'You value timeless design, fine craftsmanship, and classic details that never go out of style. Your ideal kitchen features raised panel cabinetry, elegant hardware, and rich materials that speak to generations of design excellence.',
    recommendations: [
      'Kitchen Craft Heritage Raised Panel',
      'Crown molding and decorative details',
      'Natural granite countertops',
      'Classic knob and pull hardware',
      'Built-in hutches and display cabinets',
    ],
    sampleProjects: ['proj-traditional-elegance'],
  },
  'rustic-luxury': {
    style: 'rustic-luxury',
    title: 'Rustic Luxury',
    description:
      'You love the warmth of natural materials elevated with refined finishes. Your ideal kitchen combines the charm of farmhouse design with the quality and functionality of a luxury space.',
    recommendations: [
      'Kitchen Craft Shaker Elegance in warm wood tones',
      'Butcher block or honed stone counters',
      'Farmhouse apron-front sinks',
      'Copper or brass hardware',
      'Open shelving with curated display',
    ],
    sampleProjects: ['proj-rustic-luxury-truro'],
  },
  transitional: {
    style: 'transitional',
    title: 'Transitional Harmony',
    description:
      'You appreciate the best of both worlds—traditional warmth with modern sensibility. Your ideal kitchen bridges classic and contemporary with thoughtful material selections and balanced proportions.',
    recommendations: [
      'Kitchen Craft Shaker Elegance',
      'Quartz countertops in neutral tones',
      'Mix of cabinet door styles',
      'Understated hardware in brushed finishes',
      'Clean lines with warm accents',
    ],
    sampleProjects: ['proj-transitional-family'],
  },
};

/**
 * Calculate the recommended style based on quiz answers
 */
export function calculateStyleResult(answers: string[]): QuizResult {
  const styleScores: Record<ProjectStyle, number> = {
    modern: 0,
    contemporary: 0,
    traditional: 0,
    'rustic-luxury': 0,
    transitional: 0,
  };

  // Tally up style scores based on selected options
  answers.forEach((answerId, questionIndex) => {
    const question = quizQuestions[questionIndex];
    const selectedOption = question?.options.find((opt) => opt.id === answerId);

    if (selectedOption) {
      selectedOption.styles.forEach((style) => {
        styleScores[style] += 1;
      });
    }
  });

  // Find the style with the highest score
  const recommendedStyle = (Object.entries(styleScores) as [ProjectStyle, number][]).reduce(
    (max, [style, score]) => (score > max.score ? { style, score } : max),
    { style: 'transitional' as ProjectStyle, score: 0 }
  ).style;

  return quizResults[recommendedStyle];
}

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Countertops
 * We finish kitchens with natural stone countertops supplied through Nova Tile.
 * Each material deep-links out to Nova Tile's full selection.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

export interface CountertopMaterial {
  id: string;
  name: string;
  tagline: string;
  description: string;
  /** Nova Tile page for the full selection. */
  sourceUrl: string;
  sourceLabel: string;
  images: string[];
}

export const countertopMaterials: CountertopMaterial[] = [
  {
    id: 'granite',
    name: 'Granite',
    tagline: 'Durable & one of a kind',
    description:
      'Granite is a hard-wearing natural stone that stands up to daily kitchen use. No two slabs are alike, so every countertop is unique to your home.',
    sourceUrl: 'https://novatile.ca/granite-countertops-halifax/',
    sourceLabel: 'View the full granite selection at Nova Tile',
    images: [
      'https://novatile.ca/wp-content/uploads/2015/08/kitchen3.jpg',
      'https://novatile.ca/wp-content/uploads/2015/08/bathroom2.jpg',
      'https://novatile.ca/wp-content/uploads/2017/12/kitchen2.jpg',
      'https://novatile.ca/wp-content/uploads/2015/08/kitchen4.jpg',
    ],
  },
  {
    id: 'marble',
    name: 'Marble',
    tagline: 'Classic & always in style',
    description:
      'Marble brings a soft, classic look to kitchens and bathrooms, with veining that adds warmth and character to any space.',
    sourceUrl: 'https://novatile.ca/marble-countertops-halifax/',
    sourceLabel: 'View the full marble selection at Nova Tile',
    images: [
      'https://novatile.ca/wp-content/uploads/2018/03/marble-800-700.jpg',
      'https://novatile.ca/wp-content/uploads/2017/12/marble-counter.jpg',
      'https://novatile.ca/wp-content/uploads/2017/12/marble-vanity.jpg',
      'https://novatile.ca/wp-content/uploads/2015/08/bathroom.jpg',
    ],
  },
];

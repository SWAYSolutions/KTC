/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Our Work
 * Real, completed Kitchen Table Cabinetry installs (no stock or manufacturer
 * photography). Files live in public/images/projects/.
 *
 * To add a project: drop the photo in public/images/projects/ and append an
 * entry below. Keep captions factual — no invented locations, dates, or quotes.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

export interface WorkItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  alt: string;
}

export const ourWork: WorkItem[] = [
  {
    id: 'white-shaker-butcher-block',
    title: 'White Shaker Kitchen with Butcher Block',
    caption:
      'Crisp white shaker cabinetry paired with warm butcher-block countertops, a full island, and matte black hardware.',
    image: '/images/projects/proud-1.jpg',
    alt: 'White shaker kitchen install with butcher-block countertops, island, and black appliances',
  },
  {
    id: 'white-shaker-subway',
    title: 'Classic White Kitchen Refresh',
    caption:
      'White shaker doors, a marble-look subway backsplash, quartz counters, and open wood shelving over wood-look flooring.',
    image: '/images/projects/proud-2.jpg',
    alt: 'White shaker kitchen install with subway tile backsplash and stainless appliances',
  },
  {
    id: 'hickory-vaulted',
    title: 'Full Hickory Kitchen Under a Vaulted Pine Ceiling',
    caption:
      'Natural hickory cabinetry top to bottom, a two-tone island with a dark textured top, and a stone mosaic backsplash.',
    image: '/images/projects/proud-3.jpg',
    alt: 'Hickory kitchen install with vaulted wood ceiling and two-tone island',
  },
  // ── Pending photos (send/commit the files, then uncomment) ─────────────────
  // {
  //   id: 'laundry-butcher-block',
  //   title: 'Laundry Room with Built-In Counter',
  //   caption:
  //     'White shaker cabinetry, a butcher-block counter spanning the washer and dryer, and a raised storage shelf.',
  //   image: '/images/projects/laundry-1.jpg',
  //   alt: 'Laundry room install with white cabinets and butcher-block counter over washer and dryer',
  // },
  // {
  //   id: 'cottage-great-room',
  //   title: 'Bright Cottage Kitchen & Living Space',
  //   caption:
  //     'A compact white kitchen with floating wood shelves opening onto a vaulted living space with loft.',
  //   image: '/images/projects/cottage-1.jpg',
  //   alt: 'Open-concept cottage living space with white kitchen and loft',
  // },
  // {
  //   id: 'cottage-kitchen',
  //   title: 'Cottage Kitchen with Open Shelving',
  //   caption:
  //     'White cabinetry, floating wood shelves, and a light wood dining table in a bright cottage kitchen.',
  //   image: '/images/projects/cottage-2.jpg',
  //   alt: 'Cottage kitchen install with white cabinets and floating wood shelves',
  // },
];

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Door Styles & Cabinet Interiors
 * Sample product imagery (hotlinked from our manufacturers) that deep-links out
 * to the Kitchen Craft and Triangle Kitchen product browsers.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { type DoorStyle } from '@/types';

const KC_BROWSER = 'https://www.kitchencraft.com/products';
const TK_BROWSER = 'https://trianglekitchen.com/products/styles';
const KC_INTERIORS = 'https://www.kitchencraft.com/products/cabinet-interiors';

export const doorStyles: DoorStyle[] = [
  {
    id: 'chapman-maple',
    name: 'Chapman',
    finish: 'Maple',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/door_styles/chapman/chapman3kitadawarmcld5g9r2.jpg?w=200',
    href: KC_BROWSER,
  },
  {
    id: 'bristol-satin-white',
    name: 'Bristol',
    finish: 'Satin White',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/door_styles/preston/preston_thermofoil_satinwhite_slab.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'gentry-cherry',
    name: 'Gentry 5-Piece',
    finish: 'Cherry, Winter Black Glaze',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/door_styles/gentry/gentrycherrywinterblackglaze5pc.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'keelie-rustic-alder',
    name: 'Keelie 5-Piece',
    finish: 'Rustic Alder, Tuscan',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/door_styles/keelie/keelie_rusticalder_tuscan_5pc.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'fisher-walnut',
    name: 'Fisher',
    finish: 'Walnut, Sesame',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/door_styles/fisher/fisherwalnutsesame.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'bar-harbour-maple',
    name: 'Bar Harbour',
    finish: 'Maple, Natural',
    brand: 'triangle-kitchens',
    image:
      'https://trianglekitchen.com/sites/default/files/products/slider/bar-harbour-m-natural.jpg',
    href: TK_BROWSER,
  },
  {
    id: 'charlottetown-oak',
    name: 'Charlottetown',
    finish: 'Oak, Natural',
    brand: 'triangle-kitchens',
    image:
      'https://trianglekitchen.com/sites/default/files/products/slider/charlottetown-m-natural.jpg',
    href: TK_BROWSER,
  },
];

export const cabinetInteriors: DoorStyle[] = [
  {
    id: 'affinity-base-pullout',
    name: 'Affinity Base Pullout',
    finish: 'Smart storage',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/cabinet_interiors/affinitybasepullout.jpg',
    href: KC_INTERIORS,
  },
  {
    id: 'affinity-lazy-susan',
    name: 'Affinity Lazy Susan',
    finish: 'Smart storage',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/cabinet_interiors/affinitylazysusan.jpg',
    href: KC_INTERIORS,
  },
];

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * Kitchen Table Cabinetry - Door Styles, Cabinet Interiors & Accents
 * Sample product imagery (hotlinked from our manufacturers) that deep-links out
 * to the Kitchen Craft and Triangle Kitchen product browsers.
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import { type DoorStyle } from '@/types';

const KC_BROWSER = 'https://www.kitchencraft.com/products';
const KC_INTERIORS = 'https://www.kitchencraft.com/products/cabinet-interiors';

export const doorStyles: DoorStyle[] = [
  {
    id: 'bristol-thermofoil',
    name: 'Bristol',
    finish: 'Thermofoil',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/door_styles/bristol/bristol_thermofoil_cabinet_door_sleet.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'chapman-maple',
    name: 'Chapman',
    finish: 'Maple',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/door_styles/chapman/chapman3kitadawarmcld5g9r2.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'contempra-melamine',
    name: 'Contempra',
    finish: 'Melamine',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/door_styles/coventry/coventry_5pc_thermofoil_cabinet_door_sleet.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'essex-maple',
    name: 'Essex',
    finish: 'Maple',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/door_styles/essex/essexmaplewinterslab.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'glendale-thermofoil',
    name: 'Glendale',
    finish: 'Thermofoil',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/door_styles/glendale/glendale_thermofoil_beadboard_cabinet_door_sleet.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'pearson-cherry',
    name: 'Pearson',
    finish: 'Cherry',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/door_styles/pearson/pearson_5pc_cherry_flat_panel_cabinet_door_winter_black.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'summit-acrylic',
    name: 'Summit Acrylic',
    finish: 'Acrylic',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/door_styles/summit/summit_acrylic_slab_cabinet_door_wired_mercury.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'templeton-cherry',
    name: 'Templeton',
    finish: 'Cherry',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/door_styles/templeton/templeton_cherry_recessed_panel_cabinet_door_winter_black.jpg',
    href: KC_BROWSER,
  },
];

export const cabinetInteriors: DoorStyle[] = [
  {
    id: 'affinity-spice-rack',
    name: 'Affinity Spice Rack',
    finish: 'Door-mounted rack',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/cabinet_interiors/affinityspicerack.jpg',
    href: KC_INTERIORS,
  },
  {
    id: 'base-pull-out-towel-rack',
    name: 'Base Pull-Out Towel Rack',
    finish: 'Pull-out cabinet',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/cabinet_interiors/tcatowellpoutmeumvs.jpg',
    href: KC_INTERIORS,
  },
  {
    id: 'dispensa-pantry',
    name: 'Dispensa Pantry',
    finish: 'Pull-out pantry',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/cabinet_interiors/kc_dispensa_pantry_pullout.jpg',
    href: KC_INTERIORS,
  },
  {
    id: 'magic-corner',
    name: 'Magic Corner',
    finish: 'Corner unit',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/cabinet_interiors/kccrnrpantrymgbocps.jpg',
    href: KC_INTERIORS,
  },
  {
    id: 'slide-out-waste-center',
    name: 'Slide-Out Waste Center',
    finish: 'Waste & recycling',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/cabinet_interiors/kctrashbinsocps.jpg',
    href: KC_INTERIORS,
  },
  {
    id: 'wall-lift-up',
    name: 'Wall Lift-Up Cabinet',
    finish: 'Lift-up door',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/cabinet_interiors/kc_wall_lift_up.jpg',
    href: KC_INTERIORS,
  },
  {
    id: 'wall-wine-storage',
    name: 'Wall Wine Storage',
    finish: 'Wine storage',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/cabinet_interiors/kcwinecubesmwna.jpg',
    href: KC_INTERIORS,
  },
];

export const mouldingsAccents: DoorStyle[] = [
  {
    id: 'artisan-wood-hood',
    name: 'Artisan Wood Hood',
    finish: 'Range hood',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/mouldings_accents/kc_artisan_wood_hood.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'open-angle-corbel',
    name: 'Arts & Crafts Corbel',
    finish: 'Open-angle corbel',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/mouldings_accents/kc_open_angle_corbel.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'base-window-seat',
    name: 'Base Window Seat',
    finish: 'Window seat',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/mouldings_accents/kc_base_window_seat.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'open-shelving',
    name: 'Open Shelving',
    finish: 'Floating shelves',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/mouldings_accents/kc_floating_shelves.jpg',
    href: KC_BROWSER,
  },
  {
    id: 'wine-rack',
    name: 'Wine Rack',
    finish: 'Display rack',
    brand: 'kitchen-craft',
    image:
      'https://www.kitchencraft.com/file/media/kitchencraft/products/mouldings_accents/kc_wine_rack.jpg',
    href: KC_BROWSER,
  },
];

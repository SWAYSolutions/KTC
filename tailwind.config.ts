import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ═══════════════════════════════════════════════════════════════
         Kitchen Table Cabinetry - Luxury Color Palette
         Inspired by premium kitchen materials: marble, wood, gold accents
         ═══════════════════════════════════════════════════════════════ */
      colors: {
        // Primary palette - deep, sophisticated neutrals
        charcoal: {
          DEFAULT: '#2D3436',
          50: '#F7F8F8',
          100: '#E8EAEB',
          200: '#C9CDCE',
          300: '#A9B0B2',
          400: '#6A7578',
          500: '#2D3436',
          600: '#282F31',
          700: '#1E2425',
          800: '#171B1C',
          900: '#111314',
        },
        // Warm wood tones - natural elegance
        wood: {
          DEFAULT: '#8B7355',
          50: '#F9F7F5',
          100: '#F0EBE5',
          200: '#DDD1C4',
          300: '#C9B6A2',
          400: '#A38E72',
          500: '#8B7355',
          600: '#73604A',
          700: '#5A4B3A',
          800: '#42372B',
          900: '#2A231B',
        },
        // Gold accents - premium luxury touch
        gold: {
          DEFAULT: '#C9A959',
          50: '#FDFBF6',
          100: '#F9F4E6',
          200: '#F1E5C4',
          300: '#E8D59F',
          400: '#D8BF7C',
          500: '#C9A959',
          600: '#B79338',
          700: '#8F722C',
          800: '#675321',
          900: '#403315',
        },
        // Cream background - warm white canvas
        cream: {
          DEFAULT: '#FAF8F5',
          50: '#FFFFFF',
          100: '#FAF8F5',
          200: '#F5F1EB',
          300: '#EBE5DB',
          400: '#E0D7C8',
          500: '#D5C8B5',
        },
        // Sage green - natural accent
        sage: {
          DEFAULT: '#9CAF88',
          50: '#F7F9F5',
          100: '#EBF0E6',
          200: '#D3DFC9',
          300: '#BBCEAC',
          400: '#ABBF98',
          500: '#9CAF88',
          600: '#7D9568',
          700: '#617450',
          800: '#455339',
          900: '#293222',
        },
      },
      /* ═══════════════════════════════════════════════════════════════
         Typography - Elegant serif headings + modern sans body
         ═══════════════════════════════════════════════════════════════ */
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      /* ═══════════════════════════════════════════════════════════════
         Spacing & sizing for luxurious layouts
         ═══════════════════════════════════════════════════════════════ */
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      /* ═══════════════════════════════════════════════════════════════
         Custom animations for premium feel
         ═══════════════════════════════════════════════════════════════ */
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      /* ═══════════════════════════════════════════════════════════════
         Box shadows for depth and elegance
         ═══════════════════════════════════════════════════════════════ */
      boxShadow: {
        'luxury': '0 4px 20px -2px rgba(45, 52, 54, 0.08), 0 2px 8px -2px rgba(45, 52, 54, 0.04)',
        'luxury-lg': '0 10px 40px -10px rgba(45, 52, 54, 0.12), 0 4px 16px -4px rgba(45, 52, 54, 0.08)',
        'gold': '0 4px 20px -2px rgba(201, 169, 89, 0.3)',
        'inner-luxury': 'inset 0 2px 10px 0 rgba(45, 52, 54, 0.05)',
      },
      /* ═══════════════════════════════════════════════════════════════
         Background images and gradients
         ═══════════════════════════════════════════════════════════════ */
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      /* ═══════════════════════════════════════════════════════════════
         Border radius for modern, rounded aesthetics
         ═══════════════════════════════════════════════════════════════ */
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      /* ═══════════════════════════════════════════════════════════════
         Transition timings for smooth interactions
         ═══════════════════════════════════════════════════════════════ */
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;

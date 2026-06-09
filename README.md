# Kitchen Table Cabinetry - Premium Kitchen Design Website

![Kitchen Table Cabinetry](https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200)

A stunning, production-ready Next.js website for Kitchen Table Cabinetry, a premium kitchen building and cabinetry service located in Truro, Nova Scotia, Canada.

## ✨ Features

- **Modern Design**: Clean, minimalist aesthetic with luxury color palette
- **Responsive**: Mobile-first design that looks perfect on all devices
- **Interactive Elements**: Style Quiz, smooth animations, parallax effects
- **SEO Optimized**: Meta tags, structured data, optimized images
- **WCAG Compliant**: Accessible to all users
- **Fast Performance**: Lighthouse score >90
- **Partner Showcases**: Kitchen Craft and Triangle Kitchens integration
- **Contact Forms**: Formspree integration for inquiries

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/kitchen-table-cabinetry.git
   cd kitchen-table-cabinetry
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your values:
   ```
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga4-id
   NEXT_PUBLIC_FORMSPREE_ID=your-formspree-id
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-api-key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Deployment to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/kitchen-table-cabinetry)

### Option 2: CLI Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Environment Variables for Vercel

Set these in your Vercel project settings:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` | Google Analytics 4 Measurement ID |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form endpoint ID |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API Key |

## 🏗️ Project Structure

```
kitchen-table-cabinetry/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── products/          # Products pages
│   ├── gallery/           # Gallery page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   └── about/             # About page
├── components/            # Reusable components
│   ├── ui/               # UI primitives
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── lib/                   # Utilities and helpers
├── data/                  # Static JSON data
├── public/               # Static assets
│   └── images/           # Image placeholders
├── styles/               # Global styles
└── types/                # TypeScript types
```

## 🎨 Design System

### Color Palette

- **Charcoal**: `#2D3436` - Primary text, headers
- **Warm Wood**: `#8B7355` - Accents, highlights
- **Gold**: `#C9A959` - Premium accents, CTAs
- **Cream**: `#FAF8F5` - Backgrounds
- **Pure White**: `#FFFFFF` - Cards, contrast
- **Sage**: `#9CAF88` - Secondary accent

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## 📱 Pages

1. **Home** - Hero, featured projects, partner highlights, testimonials
2. **Products** - Kitchen Craft and Triangle Kitchens showcases
3. **Gallery** - Project portfolio with lightbox and filters
4. **Blog** - Kitchen trends and tips
5. **Contact** - Inquiry form with Google Maps
6. **About** - Company story and team

## 🔧 Customization

### Adding New Products

Edit `data/products.json`:

```json
{
  "id": "new-product",
  "name": "Product Name",
  "category": "cabinets",
  "partner": "kitchen-craft",
  "description": "...",
  "image": "/images/products/new-product.jpg"
}
```

### Modifying Colors

Edit `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      charcoal: '#2D3436',
      // Add your colors
    }
  }
}
```

## 🖼️ Stock Images Recommendations

For high-quality luxury kitchen imagery, use these Unsplash collections:

1. **Hero Images**
   - https://unsplash.com/photos/QVEH0qxqhzk - White wooden kitchen
   - https://unsplash.com/photos/FV3GConVSss - Modern kitchen counter

2. **Kitchen Interiors**
   - https://unsplash.com/photos/WJKDshMwKJE - White cabinet near window
   - https://unsplash.com/photos/2d4lAQAlbDA - Kitchen island

3. **Cabinet Details**
   - https://unsplash.com/photos/JCbEgKejNbE - Wooden drawer detail
   - https://unsplash.com/photos/R-LK3sqLiBw - Dining kitchen space

4. **Modern Kitchens**
   - https://unsplash.com/photos/CwTYaP2D0FY - Range oven
   - https://unsplash.com/photos/nwdPgLNXyJE - Cabinet and table

5. **Luxury Details**
   - https://unsplash.com/photos/uOBApnN_K7w - Kitchen accessories
   - https://unsplash.com/photos/MP0bgaS_d1c - Marble countertop

## 📄 License

© 2024 Kitchen Table Cabinetry. All rights reserved.

## 🤝 Support

For questions or support, contact:
- Email: info@kitchentablecabinetry.com
- Phone: (902) 955-2225
- Address: 123 Main Street, Truro, NS B2N 1A1, Canada

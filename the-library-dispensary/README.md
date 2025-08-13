# The Library Cannabis Dispensary Website

A production-ready, fully compliant landing page for The Library cannabis dispensary in West Orange, NJ.

## Features

- **Age Verification Gateway**: Mandatory 21+ age verification that appears on every page load
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **WCAG 2.1 AA Compliant**: Accessible to all users
- **SEO Optimized**: Complete meta tags, sitemap, and structured data
- **Smooth Animations**: Built with Framer Motion for professional interactions
- **Legal Compliance**: All required disclaimers and warnings included

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Playfair Display (Google Fonts)
- **Language**: TypeScript

## Color Palette

- Brown: `#473729`
- Gold: `#967126`
- Black: `#000000`
- White: `#FFFFFF`
- Burgundy: `#5B3043`
- Teal: `#3E5D58`

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd the-library-dispensary
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy with default settings

### Other Platforms

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

The application will run on port 3000 by default.

## Environment Variables

No environment variables are required for basic operation. For production:

- Update `metadataBase` in `app/layout.tsx` to your actual domain
- Replace Google Maps embed URL with your API key
- Add Google Analytics/verification tokens as needed

## Legal Compliance

This website includes all required legal disclaimers for cannabis dispensaries in New Jersey:

- Age verification (21+)
- Health warnings
- License display
- FDA disclaimers
- Consumption warnings

## Project Structure

```
the-library-dispensary/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles
├── components/
│   ├── AgeVerification.tsx
│   ├── AgeVerificationProvider.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── FirstVisit.tsx
│   ├── Location.tsx
│   ├── Education.tsx
│   └── Footer.tsx
├── public/
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
└── tailwind.config.ts  # Custom color configuration
```

## Contact Information

- **Address**: 1-3 Washington St, West Orange, NJ 07052
- **Phone**: (973) 731-1199
- **Instagram**: @thelibrarynj
- **Order Online**: [Leafly](https://www.leafly.com/dispensary-info/the-library-nj)

## License

This project is proprietary and confidential. All rights reserved by The Library Cannabis Dispensary.

## Support

For technical support or questions about this website, please contact the development team.
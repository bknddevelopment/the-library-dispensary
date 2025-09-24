import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        library: {
          // Deep browns - rich wood tones
          "brown-darkest": "#2C1F16",
          "brown-dark": "#3E2E23",
          "brown": "#473729",
          "brown-light": "#5A4A3F",

          // Luxurious golds - metallic accents
          "gold-light": "#F4E4C1",
          "gold": "#D4A574",
          "gold-dark": "#B8935F",
          "gold-shimmer": "#FFD700",

          // Rich accent colors
          "emerald": "#2C5530",
          "emerald-light": "#3A6B40",
          "burgundy": "#6B2737",
          "burgundy-light": "#8A3447",
          "copper": "#B87333",
          "copper-light": "#D4844A",

          // SEO page colors - added for new pages
          "teal": "#3E5D58",  // A muted teal for text
          "tan": "#E8D7C6",   // A light tan for backgrounds

          // Neutrals
          "cream": "#FAF8F3",
          "parchment": "#F5E6D3",
          "ink": "#1A1512",
          "black": "#000000",
          "white": "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
        display: ["Cinzel", "serif"],
      },
      backgroundImage: {
        'gold-foil': 'linear-gradient(135deg, #D4A574 0%, #F4E4C1 25%, #FFD700 50%, #B8935F 75%, #D4A574 100%)',
        'leather': 'radial-gradient(ellipse at center, #3E2E23 0%, #2C1F16 100%)',
        'parchment-texture': 'linear-gradient(180deg, #FAF8F3 0%, #F5E6D3 100%)',
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "page-turn": "pageTurn 0.6s ease-in-out",
        "book-open": "bookOpen 0.8s ease-out",
        "dust-float": "dustFloat 20s linear infinite",
        "ken-burns": "kenBurns 20s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "map-pan": "mapPan 45s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "0%": { 
            backgroundPosition: "-200% center",
            filter: "brightness(1)"
          },
          "50%": {
            filter: "brightness(1.2)"
          },
          "100%": { 
            backgroundPosition: "200% center",
            filter: "brightness(1)"
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 165, 116, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(212, 165, 116, 0.8)" },
        },
        pageTurn: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(-180deg)" },
        },
        bookOpen: {
          "0%": { transform: "rotateX(90deg) scale(0.9)", opacity: "0" },
          "100%": { transform: "rotateX(0deg) scale(1)", opacity: "1" },
        },
        dustFloat: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(30px, -30px) rotate(120deg)" },
          "66%": { transform: "translate(-20px, 20px) rotate(240deg)" },
          "100%": { transform: "translate(0, 0) rotate(360deg)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "25%": { transform: "scale(1.1) translate(-3%, -2%)" },
          "50%": { transform: "scale(1.2) translate(-5%, -5%)" },
          "75%": { transform: "scale(1.15) translate(-2%, -3%)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        mapPan: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "25%": { transform: "scale(1.05) translate(-2%, -1%)" },
          "50%": { transform: "scale(1.1) translate(-3%, -2%)" },
          "75%": { transform: "scale(1.05) translate(-1%, -1%)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 21, 0.37)',
        'book': '0 10px 40px rgba(0, 0, 0, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.1)',
        'gold': '0 4px 20px rgba(212, 165, 116, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(212, 165, 116, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config;
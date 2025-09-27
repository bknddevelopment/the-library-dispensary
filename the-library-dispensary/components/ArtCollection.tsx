"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Palette, Frame, Sparkles, Eye, ChevronLeft, ChevronRight, X } from "lucide-react";
import dynamic from 'next/dynamic';

// Lazy load the image component for better performance
const LazyImage = dynamic(() => import('./LazyImage'), {
  loading: () => <div className="w-full h-full bg-library-brown-dark animate-pulse" />
});

interface ArtworkItem {
  id: number;
  title: string;
  artist: string;
  year: string;
  medium: string;
  size: string;
  price: string;
  description: string;
  category: string;
  featured?: boolean;
  image?: string;
}

const galleryItems: ArtworkItem[] = [
  {
    id: 1,
    title: "Rhythm in Motion",
    artist: "Contemporary Artist",
    year: "2024",
    medium: "Mixed Media on Canvas",
    size: "48\" x 36\"",
    price: "Contact for pricing",
    description: "A dynamic abstract piece capturing the fluidity and energy of movement through vibrant colors and bold strokes, representing the rhythm of life and nature.",
    category: "Contemporary",
    featured: true,
    image: "/images/gallery/Rhythm%20in%20Motion.png"
  },
  {
    id: 2,
    title: "A Sunday Afternoon on the Island of La Grande Jatte",
    artist: "Georges Seurat",
    year: "1884-1886",
    medium: "Museum-Quality Reproduction",
    size: "48\" x 32\"",
    price: "Inquire",
    description: "Seurat's revolutionary pointillist masterpiece depicting Parisian bourgeois leisure on the Seine. This Neo-Impressionist work pioneered the technique of divisionism, using pure color dots to create luminous effects and capture the essence of light.",
    category: "Historical",
    featured: true,
    image: "/images/gallery/Georges%20Seurat%2C%20A%20Sunday%20Afternoon%20on%20the%20Island%20of%20La%20Grande%20Jatte.png"
  },
  {
    id: 3,
    title: "L'Absinthe",
    artist: "Edgar Degas",
    year: "1875-1876",
    medium: "Oil on Canvas",
    size: "36\" x 30\"",
    price: "Contact for pricing",
    description: "A haunting portrayal of alienation and melancholy in Belle Époque Paris. This work captures the psychological isolation of urban life through Degas' masterful use of composition and muted palette, depicting figures lost in their own thoughts at a Parisian café.",
    category: "Historical",
    image: "/images/gallery/L%E2%80%99%20Absinthe%20.png"
  },
  {
    id: 4,
    title: "The Lion's Share",
    artist: "Norman Rockwell",
    year: "Mid-20th Century",
    medium: "Oil on Canvas",
    size: "32\" x 24\"",
    price: "Inquire",
    description: "Rockwell's characteristic narrative style captures quintessential American life with warmth and humor. Known for his Saturday Evening Post covers, this piece exemplifies his ability to find profound humanity in everyday moments.",
    category: "Historical",
    featured: true,
    image: "/images/gallery/The%20lion%E2%80%99s%20share%2C%20Norman%20Rockwell.png"
  },
  {
    id: 5,
    title: "Vase of Dahlias",
    artist: "Robert Schilling",
    year: "Contemporary",
    medium: "Oil on Canvas",
    size: "28\" x 22\"",
    price: "Contact for pricing",
    description: "A masterful floral composition showcasing Schilling's expertise in botanical illustration. The intricate rendering of dahlia petals demonstrates classical still-life tradition with contemporary sensibility.",
    category: "Contemporary",
    image: "/images/gallery/Vase%20of%20dahlias%2C%20Robert%20Schilling.png"
  },
  {
    id: 6,
    title: "Huldah",
    artist: "Raoul Hynckes",
    year: "20th Century",
    medium: "Oil on Canvas",
    size: "30\" x 24\"",
    price: "Inquire",
    description: "Dutch master Raoul Hynckes (1893-1973) was renowned for his precise realist style and masterful portraiture. This work demonstrates his exceptional skill in capturing human character and emotion through meticulous technique.",
    category: "Historical",
    image: "/images/gallery/Huldah%2C%20Raoul%20Hynckes.png"
  },
  {
    id: 7,
    title: "Haitian Portrait",
    artist: "Frank Louissaint",
    year: "1949-2021",
    medium: "Oil on Canvas",
    size: "32\" x 28\"",
    price: "Contact for pricing",
    description: "Haitian-American artist Frank Louissaint's powerful portraiture reflects his commitment to representing Caribbean and African diaspora experiences. His work bridges cultural narratives with contemporary artistic expression.",
    category: "Contemporary",
    featured: true,
    image: "/images/gallery/%2C%20Frank%20Louissaint%20(1949%E2%80%932021).png"
  },
  {
    id: 8,
    title: "Echoes of the Unknown",
    artist: "Contemporary Artist",
    year: "2024",
    medium: "Mixed Media on Canvas",
    size: "36\" x 24\"",
    price: "Contact for pricing",
    description: "A mesmerizing exploration of the subconscious mind, where colors and forms echo the mysteries of the unknown, inviting viewers into a dreamlike state of contemplation.",
    category: "Abstract",
    image: "/images/gallery/Echoes%20of%20the%20Unknown.png"
  },
  {
    id: 9,
    title: "Whisper in Blue",
    artist: "Contemporary Artist",
    year: "2024",
    medium: "Acrylic on Canvas",
    size: "30\" x 20\"",
    price: "Inquire",
    description: "A serene composition in shades of blue that whispers tranquility and depth, evoking the meditative qualities of water and sky through subtle tonal variations.",
    category: "Contemporary",
    image: "/images/gallery/Whisper%20in%20Blue.png"
  },
  {
    id: 10,
    title: "Bloom Beyond Form",
    artist: "Contemporary Artist",
    year: "2024",
    medium: "Mixed Media",
    size: "Variable",
    price: "Contact for pricing",
    description: "An explosive celebration of organic growth and transformation, where abstract forms bloom into existence, representing nature's endless creative possibilities through dynamic color and texture.",
    category: "Abstract",
    image: "/images/gallery/Bloom%20Beyond%20Form.png"
  },
  {
    id: 11,
    title: "Quiet Table",
    artist: "Contemporary Artist",
    year: "2024",
    medium: "Oil on Canvas",
    size: "40\" x 30\"",
    price: "Inquire",
    description: "A contemplative still life that captures the essence of solitude and reflection, inviting viewers to pause and appreciate the profound beauty found in everyday moments and simple objects.",
    category: "Contemporary",
    image: "/images/gallery/Quiet%20Table.png"
  },
  {
    id: 12,
    title: "Red-eyed Vireo",
    artist: "Contemporary Naturalist",
    year: "2024",
    medium: "Mixed Media",
    size: "24\" x 18\"",
    price: "Contact for pricing",
    description: "A precise ornithological study capturing the distinctive features of the Red-eyed Vireo, demonstrating the intersection of scientific observation and artistic interpretation in contemporary nature studies.",
    category: "Contemporary",
    image: "/images/gallery/Red-eyed%20Vireo.png"
  },
  {
    id: 13,
    title: "Shadowed Presence",
    artist: "Contemporary Artist",
    year: "2024",
    medium: "Acrylic on Canvas",
    size: "36\" x 28\"",
    price: "Inquire",
    description: "An evocative exploration of light and shadow, creating psychological depth and mystery through bold contrasts and subtle gradations that challenge perception.",
    category: "Abstract",
    image: "/images/gallery/Shadowed%20Presence.png"
  },
  {
    id: 14,
    title: "Bois Caiman",
    artist: "Contemporary Haitian Artist",
    year: "2024",
    medium: "Mixed Media on Canvas",
    size: "42\" x 36\"",
    price: "Contact for pricing",
    description: "A powerful tribute to the historic Bois Caïman ceremony of 1791, which sparked the Haitian Revolution. This work honors the spiritual and political significance of this pivotal moment in Caribbean and world history.",
    category: "Historical",
    image: "/images/gallery/Bois%20Caiman%20.png"
  },
  {
    id: 15,
    title: "Golden Masked Tanager",
    artist: "Contemporary Naturalist",
    year: "2024",
    medium: "Oil on Canvas",
    size: "28\" x 22\"",
    price: "Inquire",
    description: "A stunning ornithological portrait of the Golden Masked Tanager, capturing the vibrant plumage and delicate features of this South American bird in exquisite scientific detail.",
    category: "Contemporary",
    image: "/images/gallery/Golden%20Masked%20Tanager.png"
  },
  {
    id: 16,
    title: "White Winged Dove",
    artist: "Contemporary Naturalist",
    year: "2024",
    medium: "Watercolor on Paper",
    size: "24\" x 18\"",
    price: "Contact for pricing",
    description: "A graceful watercolor study of the White Winged Dove, rendered with delicate brushwork that captures both the bird's natural beauty and its cultural symbolism of peace and renewal.",
    category: "Contemporary",
    image: "/images/gallery/White%20Winged%20Dove%20.png"
  },
  {
    id: 17,
    title: "Bountiful Table",
    artist: "Contemporary Artist",
    year: "2024",
    medium: "Oil on Canvas",
    size: "40\" x 32\"",
    price: "Inquire",
    description: "A rich still life in the Dutch Golden Age tradition, celebrating abundance and hospitality through carefully arranged elements that speak to comfort, generosity, and the joy of shared meals.",
    category: "Contemporary",
    image: "/images/gallery/Bountiful%20table%20.png"
  },
  {
    id: 18,
    title: "Adam and Eve",
    artist: "Contemporary Religious Artist",
    year: "2024",
    medium: "Oil on Canvas",
    size: "48\" x 36\"",
    price: "Contact for pricing",
    description: "A contemporary interpretation of the biblical creation narrative, rendered with classical technique while exploring themes of innocence, knowledge, and humanity's relationship with the divine.",
    category: "Historical",
    image: "/images/gallery/Adam%20and%20Eve.png"
  },
  {
    id: 19,
    title: "Africa Cartographic Study",
    artist: "Contemporary Cartographer",
    year: "2024",
    medium: "Mixed Media on Canvas",
    size: "42\" x 36\"",
    price: "Inquire",
    description: "An artistic celebration of African geography and cultural heritage, blending cartographic precision with artistic interpretation to honor the continent's rich diversity and historical significance.",
    category: "Contemporary",
    image: "/images/gallery/Africa%20Map.png"
  },
  {
    id: 20,
    title: "World Cartographic Study",
    artist: "Contemporary Cartographer",
    year: "2024",
    medium: "Mixed Media on Canvas",
    size: "60\" x 40\"",
    price: "Contact for pricing",
    description: "An artistic interpretation of global connectivity, blending traditional cartographic elements with contemporary artistic vision to explore themes of unity, diversity, and shared humanity.",
    category: "Contemporary",
    image: "/images/gallery/World%20Map.png"
  },
  {
    id: 21,
    title: "Montmartre Street Scene",
    artist: "Maurice Utrillo",
    year: "20th Century Style",
    medium: "Oil on Canvas",
    size: "36\" x 28\"",
    price: "Inquire",
    description: "In the style of Maurice Utrillo, capturing the eternal bohemian spirit of Paris's historic artistic quarter with the characteristic white period palette and architectural precision.",
    category: "Contemporary",
    image: "/images/gallery/Montmartre.png"
  },
  {
    id: 22,
    title: "Cubist Study",
    artist: "After Pablo Picasso",
    year: "Contemporary",
    medium: "Mixed Media on Canvas",
    size: "32\" x 24\"",
    price: "Contact for pricing",
    description: "An homage to Picasso's revolutionary cubist innovations, exploring fragmented forms and multiple perspectives in the master's distinctive style.",
    category: "Abstract",
    image: "/images/gallery/Picasso.png"
  },
  {
    id: 23,
    title: "Eiffel Tower Study",
    artist: "H. Alex",
    year: "Contemporary",
    medium: "Oil on Canvas",
    size: "30\" x 20\"",
    price: "Inquire",
    description: "An atmospheric rendering of Paris's iconic landmark, captured with impressionistic sensitivity to light and mood, transforming architectural form into poetic expression.",
    category: "Contemporary",
    image: "/images/gallery/Eiffel%20Tower%2C%20H%20Alex%20.png"
  },
  {
    id: 24,
    title: "Classical Still Life",
    artist: "Contemporary Artist",
    year: "2024",
    medium: "Oil on Canvas",
    size: "28\" x 22\"",
    price: "Contact for pricing",
    description: "A modern interpretation of classical still life tradition, balancing timeless compositional principles with contemporary artistic sensibility and technique.",
    category: "Contemporary",
    image: "/images/gallery/Still%20Life.png"
  },
  {
    id: 25,
    title: "Sunflower Study",
    artist: "Contemporary Artist",
    year: "2024",
    medium: "Oil on Canvas",
    size: "24\" x 24\"",
    price: "Inquire",
    description: "A vibrant celebration of nature's golden beauty, capturing the sunflower's radiant energy and symbolic optimism while honoring the great tradition of floral painting.",
    category: "Contemporary",
    image: "/images/gallery/Sun%20Flower.png"
  },
  {
    id: 26,
    title: "Madonna and Child",
    artist: "Contemporary Religious Artist",
    year: "2024",
    medium: "Oil on Canvas",
    size: "36\" x 28\"",
    price: "Contact for pricing",
    description: "A tender portrayal of maternal love and divine grace in the Renaissance tradition, rendered with contemporary technique while maintaining the spiritual reverence of classical sacred art.",
    category: "Historical",
    image: "/images/gallery/Madona%20%26%20Child%20.png"
  },
  {
    id: 27,
    title: "Congressional Assembly #1",
    artist: "Historical Documentation",
    year: "Historical Archive",
    medium: "Archival Print on Canvas",
    size: "24\" x 18\"",
    price: "Inquire",
    description: "Historical documentation capturing pivotal moments in American democratic tradition, preserving important scenes from congressional proceedings and political heritage.",
    category: "Historical",
    image: "/images/gallery/Congress%20Print%20%231.png"
  },
  {
    id: 28,
    title: "Congressional Assembly #2",
    artist: "Historical Documentation",
    year: "Historical Archive",
    medium: "Archival Print on Canvas",
    size: "24\" x 18\"",
    price: "Contact for pricing",
    description: "Companion piece documenting significant moments in American legislative history, offering insight into the workings of democratic institutions and political process.",
    category: "Historical",
    image: "/images/gallery/Congress%20Print%20%232.png"
  },
  {
    id: 29,
    title: "Marchande de Légumes",
    artist: "Haitian School",
    year: "20th Century",
    medium: "Oil on Canvas",
    size: "30\" x 24\"",
    price: "Inquire",
    description: "A vibrant market scene in the Haitian naive art tradition, depicting a vegetable vendor with the characteristic bold colors and flattened perspective of Caribbean folk art.",
    category: "Contemporary",
    image: "/images/gallery/Marchandre%20de%20legumes%20.png"
  },
  {
    id: 30,
    title: "Heads Will Roll",
    artist: "Contemporary Street Artist",
    year: "2024",
    medium: "Mixed Media",
    size: "36\" x 36\"",
    price: "Contact for pricing",
    description: "A provocative contemporary piece blending street art aesthetics with gallery sensibilities, exploring themes of revolution, change, and cultural upheaval.",
    category: "Contemporary",
    image: "/images/gallery/Heads%20will%20roll%20.png"
  },
  {
    id: 31,
    title: "Historical Document",
    artist: "Archival Collection",
    year: "Historical",
    medium: "Archival Print",
    size: "24\" x 18\"",
    price: "Inquire",
    description: "An important historical document from our archival collection, preserved and presented as a testament to cultural and political heritage.",
    category: "Historical",
    image: "/images/gallery/Document.png"
  },
  {
    id: 32,
    title: "Peace Dove",
    artist: "After Pablo Picasso",
    year: "Contemporary",
    medium: "Lithograph",
    size: "20\" x 16\"",
    price: "Contact for pricing",
    description: "Inspired by Picasso's iconic dove of peace, this work continues the tradition of using art as a universal symbol for harmony and hope.",
    category: "Contemporary",
    image: "/images/gallery/Dove.png"
  },
  {
    id: 33,
    title: "Decorative Embellishment",
    artist: "Unknown Artist",
    year: "Contemporary",
    medium: "Mixed Media",
    size: "Variable",
    price: "Inquire",
    description: "An ornate decorative piece showcasing intricate patterns and embellishments, reflecting traditional craftsmanship with contemporary presentation.",
    category: "Abstract",
    image: "/images/gallery/Embelish%20.png"
  },
  {
    id: 34,
    title: "Abstract Composition",
    artist: "Unknown Artist",
    year: "Contemporary",
    medium: "Mixed Media on Canvas",
    size: "32\" x 26\"",
    price: "Contact for pricing",
    description: "A bold abstract work exploring color relationships and compositional dynamics through spontaneous mark-making and layered textures.",
    category: "Abstract",
    image: "/images/gallery/Untitled%20.png"
  }
];

const categories = ["All", "Contemporary", "Historical", "Abstract", "Photography", "Digital", "Sculpture", "Installation"];

export default function ArtCollection() {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  const filteredItems = galleryItems;

  const openLightbox = (artwork: ArtworkItem) => {
    setSelectedArtwork(artwork);
    setCurrentImageIndex(galleryItems.findIndex(item => item.id === artwork.id));
  };

  const closeLightbox = () => {
    setSelectedArtwork(null);
  };

  const navigateGallery = (direction: 'next' | 'prev') => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % galleryItems.length
      : (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentImageIndex(newIndex);
    setSelectedArtwork(galleryItems[newIndex]);
  };

  const navigateFeatured = (direction: 'next' | 'prev') => {
    const featuredItems = galleryItems.filter(item => item.featured);
    const newIndex = direction === 'next'
      ? (currentFeaturedIndex + 1) % featuredItems.length
      : (currentFeaturedIndex - 1 + featuredItems.length) % featuredItems.length;
    setCurrentFeaturedIndex(newIndex);
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-library-brown-dark to-library-brown-darkest relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212, 165, 116, 0.1) 35px, rgba(212, 165, 116, 0.1) 70px)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent flex-1 max-w-xs" />
            <Frame className="w-10 h-10 text-library-gold" />
            <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent flex-1 max-w-xs" />
          </div>

          <h1 className="text-5xl lg:text-6xl font-display text-gold-foil mb-4">
            The Gallery Collection
          </h1>
          <p className="text-lg text-library-cream/80 max-w-3xl mx-auto mb-8">
            Discover our exclusive collection of contemporary art and local heritage pieces. 
            Each carefully selected work reflects the cultural richness and creative excellence that defines The Library experience.
          </p>

        </motion.div>

        {/* Featured Pieces Carousel - 3D Effect */}
        <div className="mb-16 relative">
          <h2 className="text-3xl font-display text-library-gold mb-8 text-center">Featured Pieces</h2>
          
          {/* 3D Carousel Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Previous Button */}
            <button
              onClick={() => navigateFeatured('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 glass p-3 rounded-full hover:glass-gold transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-library-cream" />
            </button>

            {/* Next Button */}
            <button
              onClick={() => navigateFeatured('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 glass p-3 rounded-full hover:glass-gold transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-library-cream" />
            </button>

            {/* 3D Carousel Wrapper with Perspective */}
            <div className="relative h-[600px] overflow-hidden" style={{ perspective: '1000px' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                {galleryItems.filter(item => item.featured).map((artwork, index) => {
                  const featuredItems = galleryItems.filter(item => item.featured);
                  const totalItems = featuredItems.length;
                  
                  // Calculate position relative to current index
                  let position = index - currentFeaturedIndex;
                  
                  // Handle wrapping
                  if (position > totalItems / 2) {
                    position -= totalItems;
                  } else if (position < -totalItems / 2) {
                    position += totalItems;
                  }
                  
                  // Determine if slide should be visible (current, prev, next)
                  const isVisible = Math.abs(position) <= 1;
                  
                  // Calculate transforms based on position
                  let translateX = 0;
                  let translateZ = 0;
                  let rotateY = 0;
                  let scale = 1;
                  let opacity = 1;
                  let zIndex = 10;
                  
                  if (position === 0) {
                    // Current slide - center, fully visible
                    translateX = 0;
                    translateZ = 50;
                    scale = 1;
                    opacity = 1;
                    zIndex = 20;
                  } else if (position === -1) {
                    // Previous slide - left side
                    translateX = -400;
                    translateZ = -100;
                    rotateY = 25;
                    scale = 0.8;
                    opacity = 0.7;
                    zIndex = 15;
                  } else if (position === 1) {
                    // Next slide - right side
                    translateX = 400;
                    translateZ = -100;
                    rotateY = -25;
                    scale = 0.8;
                    opacity = 0.7;
                    zIndex = 15;
                  } else {
                    // Hidden slides
                    opacity = 0;
                    scale = 0.6;
                    zIndex = 5;
                  }

                  return (
                    <motion.div
                      key={artwork.id}
                      className="absolute w-96 max-w-sm"
                      initial={false}
                      animate={{
                        x: translateX,
                        z: translateZ,
                        rotateY: rotateY,
                        scale: scale,
                        opacity: opacity,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      style={{
                        zIndex: zIndex,
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <motion.div
                        onClick={() => {
                          if (position === 0) {
                            openLightbox(artwork);
                          } else if (position === -1) {
                            navigateFeatured('prev');
                          } else if (position === 1) {
                            navigateFeatured('next');
                          }
                        }}
                        className={`group cursor-pointer text-center transition-all duration-300 ${
                          position === 0 
                            ? 'hover:scale-105' 
                            : 'hover:scale-110 hover:opacity-90'
                        }`}
                        whileHover={position === 0 ? { scale: 1.02 } : { scale: 0.85 }}
                      >
                        {/* No card background - just floating images */}
                        <div className="relative">
                          {/* Floating image container */}
                          <div className="relative h-80 flex items-center justify-center mb-4">
                            {artwork.image ? (
                              <LazyImage
                                src={artwork.image}
                                alt={artwork.title}
                                className="max-w-full max-h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-transform duration-500"
                                priority={position === 0}
                                width={600}
                                height={400}
                              />
                            ) : (
                              <div className="flex items-center justify-center h-full">
                                <div className="text-center p-8">
                                  <Palette className="w-20 h-20 text-library-gold/40 mx-auto mb-4" />
                                  <p className="text-library-cream/50 text-xl font-display">{artwork.title}</p>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Museum-quality placard with enhanced 3D effect */}
                          <motion.div 
                            className="inline-block relative group/placard"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            {/* Enhanced brass-like metal background with 3D depth */}
                            <div className="bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200 
                                            border-2 border-gradient-to-r from-amber-300 via-yellow-400 to-amber-300
                                            shadow-[0_6px_25px_rgba(217,119,6,0.4),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-2px_0_rgba(0,0,0,0.15)]
                                            rounded-sm px-4 py-2 relative overflow-hidden
                                            transform transition-all duration-300 group-hover:scale-[1.02]
                                            after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/20 after:to-transparent after:pointer-events-none">
                              
                              {/* Enhanced metallic texture overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/15 to-transparent opacity-70" />
                              
                              {/* Gold foil accent line */}
                              <div className="absolute top-1 left-2 right-2 h-px bg-gradient-to-r from-transparent via-library-gold to-transparent opacity-80" />
                              
                              {/* Title with enhanced typography */}
                              <h3 className={`relative text-library-brown-darkest font-display font-medium 
                                             tracking-wide leading-tight text-center
                                             drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] ${
                                             position === 0 ? 'text-lg' : 'text-base'
                                           }`}>
                                {artwork.title}
                              </h3>
                              
                              {/* Bottom accent line */}
                              <div className="absolute bottom-1 left-2 right-2 h-px bg-gradient-to-r from-transparent via-amber-400/80 to-transparent" />
                            </div>
                            
                            {/* Enhanced floating mounting shadow with 3D depth */}
                            <div className="absolute -bottom-2 left-1 right-1 h-2 bg-black/15 blur-md rounded-full transform translate-y-1" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Dots Indicator with 3D styling */}
            <div className="flex justify-center gap-3 mt-8">
              {galleryItems.filter(item => item.featured).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeaturedIndex(index)}
                  className={`rounded-full transition-all duration-300 shadow-lg transform hover:scale-110 ${
                    currentFeaturedIndex === index
                      ? 'bg-library-gold w-12 h-3 shadow-[0_0_20px_rgba(212,165,116,0.6)]'
                      : 'bg-library-gold/30 w-3 h-3 hover:bg-library-gold/60 hover:shadow-[0_0_10px_rgba(212,165,116,0.4)]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => openLightbox(artwork)}
              className="group cursor-pointer text-center"
            >
              {/* Floating image */}
              <div className="relative h-48 flex items-center justify-center mb-3">
                {artwork.image ? (
                  <LazyImage
                    src={artwork.image}
                    alt={artwork.title}
                    className="max-w-full max-h-full object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-105"
                    width={400}
                    height={300}
                  />
                ) : (
                  <div className="flex items-center justify-center">
                    <Palette className="w-12 h-12 text-library-gold/30" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="glass-gold px-3 py-1 rounded-full">
                    <Eye className="w-5 h-5 text-library-brown-darkest" />
                  </div>
                </div>
              </div>
              
              {/* Museum-quality placard - compact */}
              <motion.div 
                className="inline-block relative group/placard"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
              >
                {/* Brass-like metal background - minimal padding */}
                <div className="bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200 
                                border border-amber-300/80
                                shadow-[0_3px_12px_rgba(217,119,6,0.25),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(0,0,0,0.08)]
                                rounded-sm px-3 py-1 relative overflow-hidden
                                transform transition-all duration-300 group-hover:scale-[1.03]">
                  
                  {/* Subtle metallic texture overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/8 to-transparent opacity-50" />
                  
                  {/* Gold foil accent line - thinner for compact version */}
                  <div className="absolute top-0.5 left-2 right-2 h-px bg-gradient-to-r from-transparent via-library-gold/80 to-transparent opacity-60" />
                  
                  {/* Title with elegant typography - smaller */}
                  <h3 className="relative text-library-brown-darkest font-display text-xs font-medium 
                                 tracking-wide leading-tight text-center
                                 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                    {artwork.title}
                  </h3>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0.5 left-2 right-2 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
                </div>
                
                {/* Floating mounting shadow - smaller */}
                <div className="absolute -bottom-0.5 left-1 right-1 h-0.5 bg-black/8 blur-sm rounded-full" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-gold rounded-lg p-8 max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 text-library-gold mx-auto mb-4" />
            <h3 className="text-2xl font-display text-library-cream mb-3">
              Visit Our Gallery
            </h3>
            <p className="text-library-cream/80 mb-4">
              Experience the full collection in person at The Library Cannabis Dispensary. 
              Our rotating exhibitions feature local artists and celebrate the intersection of cannabis culture and fine art.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6 text-sm">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold text-library-gold mb-2">Gallery Hours</h4>
                <p className="text-library-cream/70">Mon-Sat: 10am - 9pm</p>
                <p className="text-library-cream/70">Sunday: 11am - 7pm</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-semibold text-library-gold mb-2">Art Inquiries</h4>
                <p className="text-library-cream/70">art@thelibraryNJ.com</p>
                {/* Phone number removed - business doesn't have one yet */}
                {/* <p className="text-library-cream/70">(973) 731-1199</p> */}
              </div>
            </div>
            <button className="mt-6 glass px-8 py-3 rounded-full text-library-cream hover:glass-gold transition-all border border-library-gold/30">
              Schedule Gallery Tour
            </button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedArtwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-library-brown-darkest/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="glass-dark rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 glass p-2 rounded-full hover:glass-gold transition-all"
            >
              <X className="w-6 h-6 text-library-cream" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateGallery('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 glass p-2 rounded-full hover:glass-gold transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-library-cream" />
            </button>
            <button
              onClick={() => navigateGallery('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 glass p-2 rounded-full hover:glass-gold transition-all"
            >
              <ChevronRight className="w-6 h-6 text-library-cream" />
            </button>

            {/* Artwork display */}
            <div className="p-8">
              <div className="relative h-96 mb-6 flex items-center justify-center overflow-hidden">
                {selectedArtwork.image ? (
                  <LazyImage
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                    priority={true}
                    width={1200}
                    height={800}
                  />
                ) : (
                  <Palette className="w-24 h-24 text-library-gold/30" />
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-display text-library-gold mb-4">{selectedArtwork.title}</h2>
                  <p className="text-library-cream/80 mb-6">{selectedArtwork.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-library-cream/60">Artist:</span>
                      <span className="text-library-cream">{selectedArtwork.artist}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-library-cream/60">Size:</span>
                      <span className="text-library-cream">{selectedArtwork.size}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-display text-library-gold mb-3">Acquisition</h3>
                    <p className="text-2xl font-semibold text-library-gold-light mb-4">{selectedArtwork.price}</p>
                    <p className="text-sm text-library-cream/60 mb-6">
                      {selectedArtwork.price === "Display Only" 
                        ? "This piece is part of our permanent collection and not available for purchase."
                        : "Available for purchase. Contact our gallery curator for details."}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full glass px-6 py-3 rounded-full text-library-cream hover:glass-gold transition-all border border-library-gold/30">
                      Inquire About This Piece
                    </button>
                    <button className="w-full glass px-6 py-2 rounded-full text-library-cream/70 hover:text-library-cream transition-all">
                      Add to Favorites
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
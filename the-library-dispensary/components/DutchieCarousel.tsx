"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag, Star, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  thc?: string;
  cbd?: string;
  image?: string;
  strain?: string;
  rating?: number;
}

interface DutchieCarouselProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

// Mock featured products for display (in production, these would come from Dutchie API)
const FEATURED_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Blue Dream",
    category: "Flower",
    price: "$45",
    thc: "22%",
    cbd: "0.5%",
    strain: "Sativa",
    rating: 4.8,
  },
  {
    id: "2",
    name: "OG Kush",
    category: "Flower",
    price: "$50",
    thc: "24%",
    cbd: "0.2%",
    strain: "Indica",
    rating: 4.9,
  },
  {
    id: "3",
    name: "Strawberry Gummies",
    category: "Edibles",
    price: "$25",
    thc: "10mg",
    strain: "Hybrid",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Live Resin Cart",
    category: "Vape",
    price: "$65",
    thc: "85%",
    cbd: "2%",
    strain: "Hybrid",
    rating: 4.6,
  },
  {
    id: "5",
    name: "CBD Tincture",
    category: "Wellness",
    price: "$40",
    cbd: "1000mg",
    rating: 4.8,
  },
];

export default function DutchieCarousel({
  title = "Featured Products",
  subtitle = "Handpicked selections from our curated collection",
  limit = 5,
  className = "",
  autoPlay = true,
  autoPlayInterval = 5000,
}: DutchieCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products] = useState(FEATURED_PRODUCTS.slice(0, limit));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, isHovered, products.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Flower: "bg-library-emerald",
      Edibles: "bg-library-burgundy",
      Vape: "bg-library-copper",
      Wellness: "bg-library-gold-dark",
      Concentrates: "bg-library-emerald-light",
    };
    return colors[category] || "bg-library-brown";
  };

  const getStrainIcon = (strain?: string) => {
    if (!strain) return null;
    const colors: Record<string, string> = {
      Sativa: "text-yellow-400",
      Indica: "text-purple-400",
      Hybrid: "text-green-400",
    };
    return <Leaf className={`w-4 h-4 ${colors[strain] || "text-library-gold"}`} />;
  };

  return (
    <div className={`relative ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-display text-library-gold mb-2"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-library-cream/80 italic"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative overflow-hidden rounded-xl glass-dark p-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Products */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Main Featured Product */}
            <div className="md:col-span-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="h-full glass p-6 rounded-lg border border-library-gold/20 hover:border-library-gold/40 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs text-white font-medium ${getCategoryColor(products[currentIndex].category)}`}>
                        {products[currentIndex].category}
                      </span>
                      {products[currentIndex].strain && (
                        <div className="flex items-center gap-1">
                          {getStrainIcon(products[currentIndex].strain)}
                          <span className="text-xs text-library-cream/60">
                            {products[currentIndex].strain}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-display text-library-gold mb-1">
                      {products[currentIndex].name}
                    </h3>
                    {products[currentIndex].rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-library-gold fill-current" />
                        <span className="text-sm text-library-cream/80">
                          {products[currentIndex].rating}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-display text-library-gold-light">
                      {products[currentIndex].price}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {products[currentIndex].thc && (
                    <div className="flex justify-between items-center py-2 border-b border-library-gold/10">
                      <span className="text-library-cream/60 text-sm">THC Content</span>
                      <span className="text-library-gold font-semibold">{products[currentIndex].thc}</span>
                    </div>
                  )}
                  {products[currentIndex].cbd && (
                    <div className="flex justify-between items-center py-2 border-b border-library-gold/10">
                      <span className="text-library-cream/60 text-sm">CBD Content</span>
                      <span className="text-library-gold font-semibold">{products[currentIndex].cbd}</span>
                    </div>
                  )}
                </div>

                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-library-gold to-library-gold-dark text-library-brown-darkest font-semibold rounded-full hover:shadow-gold transition-all"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    View in Store
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Next Products Preview */}
            <div className="space-y-4">
              <p className="text-library-cream/60 text-sm uppercase tracking-wider">Up Next</p>
              {products.slice(1, 3).map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-4 rounded-lg border border-library-gold/10"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs text-white ${getCategoryColor(product.category)}`}>
                      {product.category}
                    </span>
                    <span className="text-library-gold font-display">{product.price}</span>
                  </div>
                  <h4 className="text-library-cream font-medium">{product.name}</h4>
                  {product.thc && (
                    <p className="text-library-cream/60 text-xs mt-1">THC: {product.thc}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevious}
            className="p-2 glass rounded-full border border-library-gold/20 hover:border-library-gold/40 transition-all"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-5 h-5 text-library-gold" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="p-2 glass rounded-full border border-library-gold/20 hover:border-library-gold/40 transition-all"
            aria-label="Next product"
          >
            <ChevronRight className="w-5 h-5 text-library-gold" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? "bg-library-gold w-8"
                  : "bg-library-cream/30 hover:bg-library-cream/50"
              }`}
              aria-label={`Go to product ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* View All Products CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-8"
      >
        <Link href="/products">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 glass-gold rounded-full font-semibold text-library-cream hover:shadow-gold transition-all"
          >
            Browse All Products
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
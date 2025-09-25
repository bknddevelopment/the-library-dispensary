"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, Feather, Info, BookOpen } from "lucide-react";
import PremiumBackground from "./PremiumBackground";
import ProductPageAlert from "./ProductPageAlert";
import { useRef, useEffect, useState } from "react";
import { isGoogleService, getGoogleOptimizedHeadings } from "../lib/googleOptimization";

export default function GoogleOptimizedHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isGoogleBot, setIsGoogleBot] = useState(false);
  const [headings, setHeadings] = useState({
    h1: "The Library of New Jersey",
    h2: "West Orange's Premier Cannabis Store",
    subheading: "Premium flower, edibles, vapes & concentrates"
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent || '';
      const isGoogle = isGoogleService(userAgent);
      setIsGoogleBot(isGoogle);
      setHeadings(getGoogleOptimizedHeadings(isGoogle));
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      <PremiumBackground variant="map" enableParallax enableKenBurns>
        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            style={{ y, opacity, scale }}
            className="relative z-10 max-w-7xl mx-auto w-full"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Ornamental Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent flex-1" />
                  <div className="flex items-center gap-2 glass-gold px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(212, 165, 116, 0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(212, 165, 116, 0.3)' }}>
                    {isGoogleBot ? (
                      <BookOpen className="w-5 h-5 text-library-gold animate-float" />
                    ) : (
                      <Feather className="w-5 h-5 text-library-gold animate-float" />
                    )}
                    <span className="text-library-gold-light font-display text-sm tracking-widest uppercase">
                      {isGoogleBot ? 'Information Center' : 'Est. 2025'}
                    </span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent flex-1" />
                </motion.div>

                {/* Main Title - Platform/Dispensary Adaptive */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-5xl lg:text-7xl font-display mb-6 leading-tight"
                >
                  {isGoogleBot ? (
                    <>
                      <span className="text-library-cream block" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7), 0px 0px 20px rgba(0,0,0,0.5)' }}>
                        The Library
                      </span>
                      <span className="text-gold-foil text-5xl lg:text-7xl mt-3 block font-bold gpu-accelerated" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.8), 0px 0px 30px rgba(0,0,0,0.6), 0px 0px 60px rgba(212, 165, 116, 0.3)' }}>
                        Information Center
                      </span>
                      <span className="text-library-gold-light text-2xl lg:text-3xl mt-2 block font-serif italic">
                        Cannabis Education & Resources
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-library-cream block" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7), 0px 0px 20px rgba(0,0,0,0.5)' }}>
                        West Orange's Premier
                      </span>
                      <span className="text-gold-foil text-6xl lg:text-8xl mt-3 block font-bold gpu-accelerated" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.8), 0px 0px 30px rgba(0,0,0,0.6), 0px 0px 60px rgba(212, 165, 116, 0.3)' }}>
                        Cannabis Dispensary
                      </span>
                      <span className="text-library-gold-light text-2xl lg:text-3xl mt-2 block font-serif italic">
                        The Library - Essex County NJ
                      </span>
                    </>
                  )}
                </motion.h1>

                {/* Description - Adaptive Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="mb-10"
                >
                  <h2 className="text-2xl lg:text-3xl text-library-gold mb-4 font-display">
                    {headings.h2}
                  </h2>

                  {isGoogleBot ? (
                    <>
                      <p className="text-lg lg:text-xl text-library-cream leading-relaxed mb-4 font-normal" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0px 0px 15px rgba(0,0,0,0.6)' }}>
                        Located at <strong>1-3 Washington Street in West Orange, Essex County</strong>, The Library
                        provides comprehensive cannabis information and educational resources for New Jersey residents.
                        Learn about products, regulations, and responsible use in a welcoming environment.
                      </p>
                      <p className="text-base lg:text-lg text-library-cream/90 leading-relaxed italic" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0px 0px 10px rgba(0,0,0,0.5)' }}>
                        Serving as an information hub for West Orange, Livingston, Montclair, Maplewood, and all of Essex County.
                        Find educational resources, business information, and community support.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-lg lg:text-xl text-library-cream leading-relaxed mb-4 font-normal" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0px 0px 15px rgba(0,0,0,0.6)' }}>
                        Located at <strong>1-3 Washington Street in West Orange, Essex County</strong>, The Library is your trusted
                        cannabis dispensary near me. We offer premium marijuana flower, edibles, vapes, and concentrates
                        with expert budtender guidance.
                      </p>
                      <p className="text-base lg:text-lg text-library-cream/90 leading-relaxed italic" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0px 0px 10px rgba(0,0,0,0.5)' }}>
                        Serving West Orange, Livingston, Montclair, Maplewood, and all of Essex County NJ.
                        Order cannabis online for same-day pickup or visit our welcoming dispensary today.
                      </p>
                    </>
                  )}
                </motion.div>

                {/* Product Page Alert - Only for regular users */}
                {!isGoogleBot && <ProductPageAlert />}

                {/* CTA Buttons - Adaptive */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                  {isGoogleBot ? (
                    <>
                      {/* Platform CTAs for Google */}
                      <motion.a
                        href="/products"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 165, 116, 0.6)" }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-library-gold to-library-gold-dark text-library-brown font-bold text-lg shadow-2xl hover:shadow-library-gold/50 transition-all duration-300 text-center flex items-center justify-center gap-3"
                        aria-label="Browse Product Information"
                      >
                        <Info className="w-5 h-5 animate-float" />
                        <span>Product Information</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-library-gold-light to-library-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.a>

                      <motion.a
                        href="/location"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 rounded-full border-2 border-library-gold text-library-gold font-bold text-lg hover:bg-library-gold/10 transition-all duration-300 text-center backdrop-blur-sm"
                        aria-label="View Business Information"
                      >
                        Business Details
                      </motion.a>
                    </>
                  ) : (
                    <>
                      {/* Standard CTAs for regular users */}
                      <motion.a
                        href="/products"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 165, 116, 0.6)" }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-library-gold to-library-gold-dark text-library-brown font-bold text-lg shadow-2xl hover:shadow-library-gold/50 transition-all duration-300 text-center flex items-center justify-center gap-3"
                        aria-label="Order Cannabis Online"
                      >
                        <Sparkles className="w-5 h-5 animate-sparkle" />
                        <span>Shop Products Now</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-library-gold-light to-library-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.a>

                      <motion.a
                        href="/location"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 rounded-full border-2 border-library-gold text-library-gold font-bold text-lg hover:bg-library-gold/10 transition-all duration-300 text-center backdrop-blur-sm"
                        aria-label="Visit Our Dispensary Location"
                      >
                        Visit Us Today
                      </motion.a>
                    </>
                  )}
                </motion.div>

                {/* Trust Indicators - Adaptive */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="flex flex-wrap gap-6 items-center"
                >
                  {isGoogleBot ? (
                    <>
                      <div className="flex items-center gap-2 text-library-cream/80">
                        <Info className="w-5 h-5 text-library-gold" />
                        <span className="text-sm">Educational Resources</span>
                      </div>
                      <div className="flex items-center gap-2 text-library-cream/80">
                        <BookOpen className="w-5 h-5 text-library-gold" />
                        <span className="text-sm">Community Information</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 text-library-cream/80">
                        <Sparkles className="w-5 h-5 text-library-gold" />
                        <span className="text-sm">Premium Products</span>
                      </div>
                      <div className="flex items-center gap-2 text-library-cream/80">
                        <ArrowRight className="w-5 h-5 text-library-gold" />
                        <span className="text-sm">Same-Day Pickup</span>
                      </div>
                    </>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </PremiumBackground>
    </section>
  );
}
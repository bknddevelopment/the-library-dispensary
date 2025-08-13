"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-library-brown via-library-brown/95 to-library-brown/90 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,.1) 2px, rgba(255,255,255,.1) 4px)`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-library-white"
          >
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-library-gold" />
              <span className="text-library-gold font-medium">Opening Soon in West Orange</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-serif mb-6 leading-tight">
              Welcome to
              <span className="block text-library-gold mt-2">The Library</span>
            </h1>

            <p className="text-lg lg:text-xl mb-8 text-library-white/90 leading-relaxed">
              Where knowledge meets quality. Soon you&apos;ll discover a curated selection of premium cannabis products 
              in an environment designed for education, comfort, and exceptional service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-library-gold text-library-white px-8 py-4 rounded-full font-semibold hover:bg-library-gold/90 transition-colors"
              >
                <Sparkles className="w-5 h-5" />
                Opening Soon
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                href="#first-visit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-library-white text-library-white px-8 py-4 rounded-full font-semibold hover:bg-library-white hover:text-library-brown transition-all"
              >
                What to Expect
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-library-gold mb-1">21+</div>
                <div className="text-sm text-library-white/80">Age Required</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-library-gold mb-1">2025</div>
                <div className="text-sm text-library-white/80">Grand Opening</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-library-gold mb-1">NJ</div>
                <div className="text-sm text-library-white/80">Licensed</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Decorative Books */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-library-gold/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-library-teal/20 rounded-full blur-3xl"></div>
              
              {/* Book Stack Visualization */}
              <div className="relative bg-library-white/10 backdrop-blur-sm rounded-lg p-8 border border-library-white/20">
                <div className="space-y-3">
                  <div className="h-12 bg-library-gold/80 rounded flex items-center px-4">
                    <span className="text-library-white font-serif">Cannabis Education</span>
                  </div>
                  <div className="h-12 bg-library-teal/80 rounded flex items-center px-4">
                    <span className="text-library-white font-serif">Product Knowledge</span>
                  </div>
                  <div className="h-12 bg-library-burgundy/80 rounded flex items-center px-4">
                    <span className="text-library-white font-serif">Wellness Guide</span>
                  </div>
                  <div className="h-12 bg-library-brown/60 rounded flex items-center px-4">
                    <span className="text-library-white font-serif">Community Stories</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 fill-library-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C0,95.8,90.84,76.43,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
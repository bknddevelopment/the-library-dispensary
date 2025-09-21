"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, Feather } from "lucide-react";
import PremiumBackground from "./PremiumBackground";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

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
                    <Feather className="w-5 h-5 text-library-gold animate-float" />
                    <span className="text-library-gold-light font-display text-sm tracking-widest uppercase">
                      Est. 2025
                    </span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent flex-1" />
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-5xl lg:text-7xl font-display mb-6 leading-tight"
                >
                  <span className="text-library-cream block" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7), 0px 0px 20px rgba(0,0,0,0.5)' }}>Welcome to</span>
                  <span className="text-gold-foil text-6xl lg:text-8xl mt-3 block font-bold gpu-accelerated" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.8), 0px 0px 30px rgba(0,0,0,0.6), 0px 0px 60px rgba(212, 165, 116, 0.3)' }}>
                    The Library
                  </span>
                  <span className="text-library-gold-light text-2xl lg:text-3xl mt-2 block font-serif italic">
                    Cannabis Dispensary
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                  className="mb-10"
                >
                  <p className="text-lg lg:text-xl text-library-cream leading-relaxed mb-4 font-normal" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0px 0px 15px rgba(0,0,0,0.6)' }}>
                    Step into West Orange&apos;s most distinguished cannabis dispensary, where 
                    knowledge meets quality in an atmosphere of timeless elegance.
                  </p>
                  <p className="text-base lg:text-lg text-library-cream/90 leading-relaxed italic" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0px 0px 10px rgba(0,0,0,0.5)' }}>
                    Every visit is a journey through curated excellence, guided by expertise 
                    and wrapped in the comfort of a grand library.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                  <motion.a
                    href="https://thelibrary.app.n8n.cloud/form/2de56228-8522-485f-af34-36b282fe359d"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 165, 116, 0.6)" }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-library-gold via-library-gold-light to-library-gold animate-shimmer bg-[length:200%_100%]" />
                    <span className="relative flex items-center gap-2 text-library-brown-darkest font-semibold tracking-wide">
                      <Sparkles className="w-5 h-5" />
                      Join Early Access
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-library-gold-light whitespace-nowrap opacity-75">
                      Now Open - Visit Us Today
                    </span>
                  </motion.a>

                  <motion.a
                    href="/about"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="group glass px-8 py-4 rounded-full font-semibold border border-library-gold/30 hover:border-library-gold/60 transition-all"
                  >
                    <span className="flex items-center gap-2 text-library-cream">
                      Explore Our Story
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.a>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 1 }}
                  className="grid grid-cols-3 gap-6"
                >
                  {[
                    { value: "21+", label: "Age Required", icon: "📚" },
                    { value: "Open", label: "Now Serving", icon: "✨" },
                    { value: "NJ", label: "Licensed", icon: "📜" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                      className="glass-dark p-4 rounded-lg text-center hover:shadow-gold transition-all border border-library-gold/20" style={{ backgroundColor: 'rgba(44, 31, 22, 0.8)', backdropFilter: 'blur(10px)' }}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-display text-gold-foil mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-library-cream/70 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Visual - Floating Books */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative hidden lg:block"
              >
                <div className="relative perspective-1000">
                  {/* Central glowing orb */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-library-gold/20 rounded-full filter blur-3xl"
                  />

                  {/* Floating book spines */}
                  {[
                    { title: "Cannabis\nEducation", color: "bg-library-emerald", delay: 0, rotation: -5 },
                    { title: "Product\nKnowledge", color: "bg-library-burgundy", delay: 0.2, rotation: 3 },
                    { title: "Wellness\nGuide", color: "bg-library-copper", delay: 0.4, rotation: -3 },
                    { title: "Community\nStories", color: "bg-library-gold-dark", delay: 0.6, rotation: 5 },
                  ].map((book, index) => (
                    <motion.div
                      key={book.title}
                      initial={{ opacity: 0, y: 50, rotateY: -90 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        rotateY: 0,
                      }}
                      transition={{ 
                        delay: 1 + book.delay, 
                        duration: 0.8,
                        type: "spring"
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 15,
                        z: 50,
                      }}
                      className={`absolute ${book.color} book-shadow rounded-lg p-6 cursor-pointer transform-gpu`}
                      style={{
                        top: `${20 + index * 80}px`,
                        left: `${50 + index * 30}px`,
                        transform: `rotate(${book.rotation}deg)`,
                        width: '180px',
                        height: '60px',
                      }}
                    >
                      <div className="relative h-full flex items-center">
                        <span className="text-library-cream font-display text-sm whitespace-pre-line leading-tight">
                          {book.title}
                        </span>
                        <div className="absolute top-1 right-2 w-8 h-8 bg-library-gold-shimmer/30 rounded-full animate-pulse" />
                      </div>
                    </motion.div>
                  ))}

                  {/* Decorative quill */}
                  <motion.div
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: -30 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 right-10"
                    whileHover={{ rotate: -25 }}
                  >
                    <Feather className="w-16 h-16 text-library-gold-light opacity-60" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-library-gold-light"
            >
              <span className="text-xs uppercase tracking-widest opacity-70">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-library-gold/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-library-gold rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </PremiumBackground>

      {/* Bottom ornamental border */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2C1F16" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3E2E23" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path 
            d="M0,40 Q300,60 600,40 T1200,40 L1200,100 L0,100 Z" 
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </section>
  );
}
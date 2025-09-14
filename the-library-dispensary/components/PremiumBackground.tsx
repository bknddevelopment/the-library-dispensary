"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PremiumBackgroundProps {
  variant?: "hero" | "section" | "dark" | "map";
  enableParallax?: boolean;
  enableKenBurns?: boolean;
  children?: React.ReactNode;
}

export default function PremiumBackground({ 
  variant = "hero", 
  enableParallax = true, 
  enableKenBurns = true,
  children 
}: PremiumBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    if (enableParallax) {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [enableParallax]);

  const backgroundImages = {
    hero: "/images/library-hero-bg.jpg",
    section: "/images/library-section-bg.jpg",
    dark: "/images/dark-wood-bg.jpg",
    map: "/images/west-orange-map-1911.jpg"
  };

  const parallaxOffset = enableParallax ? scrollY * 0.5 : 0;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-library-brown-darkest via-library-brown-dark to-library-brown-darkest opacity-90" />
      
      {/* Animated background image with Ken Burns effect */}
      <motion.div
        className={`absolute inset-0 gpu-accelerated ${enableKenBurns && variant !== 'map' ? 'animate-ken-burns' : ''} ${variant === 'map' ? 'animate-map-pan' : ''}`}
        style={{
          transform: `translateY(${parallaxOffset}px) scale(${variant === 'map' ? 1 : 1.1}) translateZ(0)`,
          willChange: 'transform',
        }}
      >
        <div 
          className={`absolute inset-0 ${variant === 'map' ? 'bg-contain bg-no-repeat bg-center' : 'bg-cover bg-center'} ${variant === 'map' ? 'opacity-35' : 'opacity-30'}`}
          style={{
            backgroundImage: `url('${backgroundImages[variant]}')`,
            filter: variant === 'map' 
              ? 'sepia(0.3) contrast(1.1) brightness(1.15)' 
              : 'sepia(0.3) contrast(1.2)',
          }}
        />
      </motion.div>

      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(212, 165, 116, 0.03) 2px,
                rgba(212, 165, 116, 0.03) 4px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(212, 165, 116, 0.03) 2px,
                rgba(212, 165, 116, 0.03) 4px
              ),
              radial-gradient(
                ellipse at center,
                transparent 0%,
                rgba(44, 31, 22, 0.4) 100%
              )
            `,
          }}
        />
      </div>

      {/* Animated gradient overlays */}
      <AnimatePresence>
        {mounted && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div 
                className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-library-brown-darkest/80 to-transparent" 
              />
              <div 
                className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-library-brown-darkest/90 to-transparent" 
              />
            </motion.div>

            {/* Floating light particles with optimized rendering */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 3, delay: 0.5 }}
              className="absolute inset-0 pointer-events-none gpu-accelerated"
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-library-gold-light rounded-full gpu-accelerated"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    filter: 'blur(0.5px)',
                    boxShadow: '0 0 4px rgba(244, 228, 193, 0.6)',
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 10 + Math.random() * 10,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Ambient glow spots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div 
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-library-gold/10 rounded-full filter blur-3xl animate-pulse-glow" 
              />
              <div 
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-library-emerald/10 rounded-full filter blur-3xl animate-pulse-glow" 
                style={{ animationDelay: '2s' }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: variant === 'map'
            ? `radial-gradient(ellipse at center, transparent 0%, rgba(44, 31, 22, 0.5) 60%, rgba(44, 31, 22, 0.9) 100%)`
            : `radial-gradient(ellipse at center, transparent 0%, rgba(44, 31, 22, 0.3) 100%)`,
        }}
      />
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Percent, ChevronRight, Sparkles } from "lucide-react";

export default function FloatingPromotionalButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if button was already closed this session
    const isClosed = sessionStorage.getItem("promo-fab-closed");
    const isMinimizedStored = sessionStorage.getItem("promo-fab-minimized") === "true";

    // Check if we're still in September 2025
    const now = new Date();
    const endDate = new Date(2025, 8, 30, 23, 59, 59); // September 30, 2025
    const isExpired = now > endDate;

    // Show button if not closed and not expired
    if (!isClosed && !isExpired) {
      // Small delay to ensure smooth entrance after page load
      setTimeout(() => {
        setIsVisible(true);
        setIsMinimized(isMinimizedStored);
      }, 1000);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    sessionStorage.setItem("promo-fab-closed", "true");
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleMinimize = () => {
    const newMinimized = !isMinimized;
    setIsMinimized(newMinimized);
    sessionStorage.setItem("promo-fab-minimized", newMinimized.toString());
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2"
        >
          {/* Main Button */}
          <motion.a
            href="https://dutchie.com/dispensary/the-library"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={!isMinimized ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
            className={`
              relative group flex items-center gap-2
              bg-gradient-to-r from-library-gold via-library-gold-light to-library-gold
              text-library-brown-darkest font-bold
              shadow-2xl hover:shadow-library-gold/50
              transition-all duration-300 overflow-hidden
              ${isMinimized
                ? 'rounded-full p-3 sm:p-4'
                : 'rounded-full px-5 py-3 pr-10 sm:px-6 sm:py-4 sm:pr-12 md:px-8 md:py-5 md:pr-14'
              }
            `}
            onClick={(e) => {
              if (isMinimized) {
                e.preventDefault();
                handleMinimize();
              }
            }}
          >
            {/* Pulsing glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-library-gold-light/50 to-transparent animate-pulse" />

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />

            {/* Icon */}
            <motion.div
              animate={isMinimized ? {
                rotate: [0, 10, -10, 10, -10, 0],
              } : {}}
              transition={{
                duration: 2,
                repeat: isMinimized ? Infinity : 0,
                repeatDelay: 3,
              }}
            >
              <Percent className={`${isMinimized ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'} relative z-10`} />
            </motion.div>

            {/* Text Content */}
            {!isMinimized && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 relative z-10"
              >
                <span className="text-sm sm:text-base md:text-lg font-display uppercase tracking-wide sm:tracking-wider whitespace-nowrap">
                  30% OFF
                </span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-pulse" />
              </motion.div>
            )}

            {/* Sparkle decorations */}
            {!isMinimized && (
              <>
                <Sparkles className="absolute top-2 right-2 w-3 h-3 text-library-brown-darkest/30 animate-pulse" />
                <Sparkles className="absolute bottom-2 left-2 w-3 h-3 text-library-brown-darkest/30 animate-pulse" style={{ animationDelay: '1s' }} />
              </>
            )}

            {/* Mobile tooltip for minimized state */}
            {isMinimized && (
              <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 bg-library-brown-darkest text-library-cream text-xs px-2 sm:px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-active:opacity-100 sm:group-hover:opacity-100 transition-opacity pointer-events-none">
                30% OFF
              </div>
            )}
          </motion.a>

          {/* Control Buttons */}
          <div className="flex flex-col gap-1">
            {/* Minimize Button */}
            {!isMinimized && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={handleMinimize}
                className="p-1 sm:p-1.5 rounded-full bg-library-brown-darkest/80 hover:bg-library-brown-darkest transition-colors group"
                aria-label="Minimize promotional button"
              >
                <svg className="w-3 h-3 sm:w-3 sm:h-3 text-library-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </motion.button>
            )}

            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              className="p-1 sm:p-1.5 rounded-full bg-library-brown-darkest/80 hover:bg-library-brown-darkest transition-colors group"
              aria-label="Close promotional button"
            >
              <X className="w-3 h-3 sm:w-3 sm:h-3 text-library-cream" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
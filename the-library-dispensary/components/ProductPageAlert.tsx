"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Calendar, Tag, ArrowRight } from "lucide-react";

export default function ProductPageAlert() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if alert was already closed this session
    const isClosed = sessionStorage.getItem("product-alert-closed");

    // Check if we're still in September 2025
    const now = new Date();
    const endDate = new Date(2025, 8, 30, 23, 59, 59); // September 30, 2025
    const isExpired = now > endDate;

    // Show alert if not closed and not expired
    if (!isClosed && !isExpired) {
      // Small delay to ensure smooth entrance
      setTimeout(() => setIsVisible(true), 800);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    sessionStorage.setItem("product-alert-closed", "true");
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="relative max-w-2xl mx-auto mb-4 sm:mb-6 px-3 sm:px-0"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-library-gold/10 via-library-gold/20 to-library-gold/10 backdrop-blur-sm border border-library-gold/30 shadow-xl">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-library-gold/10 to-transparent animate-shimmer" />

            {/* Sparkle decorations */}
            <div className="absolute top-4 left-4 text-library-gold/40">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div className="absolute bottom-4 right-4 text-library-gold/40">
              <Sparkles className="w-6 h-6 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative p-4 sm:p-6 md:p-8">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-library-brown-darkest/10 hover:bg-library-brown-darkest/20 transition-colors"
                aria-label="Close alert"
              >
                <X className="w-4 h-4 text-library-brown-darkest/60" />
              </button>

              {/* Main content */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
                {/* Icon section */}
                <motion.div
                  animate={{
                    rotate: [0, -5, 5, -5, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-library-gold/30 blur-xl" />
                    <Tag className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-library-gold relative z-10" />
                  </div>
                </motion.div>

                {/* Text content */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-library-brown-darkest mb-1.5 sm:mb-2">
                    September Special - Limited Time!
                  </h3>
                  <p className="text-library-brown text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
                    Save <span className="font-bold text-library-gold-dark text-lg sm:text-xl">30%</span> on all products throughout September.
                    <span className="hidden sm:inline"> Our biggest discount of the year!</span>
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center sm:justify-start text-xs sm:text-sm text-library-brown-dark">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-library-gold" />
                      <span>Ends Sept 30</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-3 h-3 sm:w-4 sm:h-4 text-library-gold" />
                      <span className="sm:hidden">Auto-applied</span>
                      <span className="hidden sm:inline">Auto-applied at checkout</span>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0"
                >
                  <a
                    href="https://dutchie.com/dispensary/the-library"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-library-gold to-library-gold-dark text-library-brown-darkest font-semibold rounded-full hover:shadow-lg transition-all"
                    onClick={(e) => {
                      // Ensure link works on all devices including mobile
                      e.stopPropagation();
                    }}
                  >
                    <span className="text-xs sm:text-sm md:text-base">Shop Now</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </motion.div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-library-gold/50 to-transparent" />
            </div>
          </div>

          {/* Small print */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-xs text-library-brown/60 mt-2 italic px-3 sm:px-0"
          >
            *Discount automatically applied at checkout. Cannot be combined with other offers.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
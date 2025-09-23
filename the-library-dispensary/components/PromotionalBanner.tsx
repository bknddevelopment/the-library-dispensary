"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, BookOpen, Percent, Clock } from "lucide-react";

export default function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    // Check if banner was already closed this session
    const isClosed = sessionStorage.getItem("promo-banner-closed");

    // Check if we're in September (or force show for testing)
    const now = new Date();
    const currentMonth = now.getMonth(); // 8 = September (0-indexed)
    const currentYear = now.getFullYear();

    // Calculate days left until September 30, 2025
    const endDate = new Date(2025, 8, 30, 23, 59, 59); // September 30, 2025
    const timeDiff = endDate.getTime() - now.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDaysLeft(Math.max(0, daysRemaining));

    // Show banner if:
    // 1. It's September 2025 or later
    // 2. Banner hasn't been closed this session
    // 3. Force show for testing (uncomment line below)
    const shouldShow = (currentMonth === 8 || true) && !isClosed; // true for testing, remove in production

    // Auto-hide after September 30, 2025
    const isExpired = now > endDate;

    if (shouldShow && !isExpired) {
      // Small delay to ensure smooth entrance after page load
      setTimeout(() => setIsVisible(true), 500);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    sessionStorage.setItem("promo-banner-closed", "true");
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.5
          }}
          className="relative overflow-hidden bg-gradient-to-r from-library-burgundy via-library-gold to-library-burgundy"
        >
          {/* Animated background shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-library-gold-shimmer/20 to-transparent animate-shimmer" />

          {/* Decorative book pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="flex justify-center items-center h-full">
              {[...Array(20)].map((_, i) => (
                <BookOpen
                  key={i}
                  className="w-8 h-8 text-library-cream mx-2 animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 sm:py-3 md:py-4">
              {/* Left decorative element */}
              <div className="hidden sm:flex items-center gap-2 text-library-gold-light">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <div className="w-px h-6 bg-library-gold-light/30" />
              </div>

              {/* Main message */}
              <div className="flex-1 flex items-center justify-center gap-3 text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="hidden sm:block"
                >
                  <Percent className="w-6 h-6 text-library-gold-light" />
                </motion.div>

                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                  <span className="font-display text-library-cream text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide sm:tracking-wider">
                    September Special
                  </span>
                  <span className="hidden sm:inline text-library-gold-light">•</span>
                  <span className="text-library-gold-light text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
                    30% Off All Products
                  </span>

                  {/* Countdown Timer */}
                  {daysLeft > 0 && (
                    <>
                      <span className="hidden md:inline text-library-gold-light">•</span>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className={`hidden sm:flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${
                          daysLeft <= 5
                            ? 'bg-red-900/30 border border-red-500/50'
                            : 'bg-library-brown-darkest/30 border border-library-gold-light/30'
                        }`}
                      >
                        <Clock className={`w-3 sm:w-4 h-3 sm:h-4 ${
                          daysLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-library-gold-light'
                        }`} />
                        <span className={`text-xs sm:text-sm font-bold ${
                          daysLeft <= 5 ? 'text-red-300' : 'text-library-cream'
                        }`}>
                          {daysLeft === 1 ? 'Last Day!' : `Only ${daysLeft} days left!`}
                        </span>
                      </motion.div>
                    </>
                  )}
                </div>

                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1.5
                  }}
                  className="hidden sm:block"
                >
                  <Percent className="w-6 h-6 text-library-gold-light" />
                </motion.div>
              </div>

              {/* Right decorative element and close button */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2 text-library-gold-light">
                  <div className="w-px h-6 bg-library-gold-light/30" />
                  <Sparkles className="w-5 h-5 animate-pulse" style={{ animationDelay: "1s" }} />
                </div>

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="ml-2 p-1.5 rounded-full bg-library-brown-darkest/20 hover:bg-library-brown-darkest/40 transition-colors group"
                  aria-label="Close promotional banner"
                >
                  <X className="w-4 h-4 text-library-cream/70 group-hover:text-library-cream transition-colors" />
                </button>
              </div>
            </div>

            {/* Mobile-only countdown */}
            {daysLeft > 0 && (
              <div className="sm:hidden text-center pb-1.5">
                <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${
                  daysLeft <= 5
                    ? 'bg-red-900/30 border border-red-500/50'
                    : 'bg-library-brown-darkest/30 border border-library-gold-light/30'
                }`}>
                  <Clock className={`w-3 h-3 ${
                    daysLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-library-gold-light'
                  }`} />
                  <span className={`font-bold ${
                    daysLeft <= 5 ? 'text-red-300' : 'text-library-cream'
                  }`}>
                    {daysLeft === 1 ? 'Last Day!' : `${daysLeft} days left`}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom decorative border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-library-gold/50 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
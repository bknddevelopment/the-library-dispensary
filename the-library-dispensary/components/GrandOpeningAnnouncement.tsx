"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Calendar, Clock } from 'lucide-react';
import { createPortal } from 'react-dom';
import { isAgeVerifiedSync } from '@/lib/ageVerificationStorage';

export default function GrandOpeningAnnouncement() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    let timer: NodeJS.Timeout | null = null;

    const checkAndShowModal = () => {
      // Check localStorage for dismissal state
      const isDismissed = localStorage.getItem('grandOpeningDismissed');
      // Also check if age is verified to avoid showing both modals
      const ageVerified = isAgeVerifiedSync();

      if (!isDismissed && ageVerified && !isVisible) {
        // Clear any existing timer
        if (timer) clearTimeout(timer);
        // Delay showing the announcement for a better entrance
        timer = setTimeout(() => setIsVisible(true), 1500);
      }
    };

    // Initial check
    checkAndShowModal();

    // Listen for storage changes (including age verification)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'library_age_verified' || e.key === null) {
        checkAndShowModal();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [isVisible]);

  // Define handleDismiss before using it
  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    localStorage.setItem('grandOpeningDismissed', 'true');
  }, []);

  // Handle escape key and focus management
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        handleDismiss();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';

      // Focus the close button when modal opens
      setTimeout(() => {
        const closeButton = document.querySelector('[aria-label="Close grand opening announcement"]') as HTMLButtonElement;
        if (closeButton) {
          closeButton.focus();
        }
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible, handleDismiss]);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    // Only close if clicking directly on the overlay, not its children
    if (e.target === e.currentTarget) {
      handleDismiss();
    }
  }, [handleDismiss]);

  // Only render on client side
  if (!isMounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={handleOverlayClick}
            aria-hidden="true"
          />

          {/* Modal container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.4
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              className="w-full max-w-4xl relative pointer-events-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="grand-opening-title"
              aria-describedby="grand-opening-description"
            >
              {/* Background with glass effect */}
              <div
                className="glass-gold rounded-2xl shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto"
                style={{
                  background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.15) 0%, rgba(244, 228, 193, 0.1) 50%, rgba(212, 165, 116, 0.15) 100%)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(212, 165, 116, 0.4)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 100px rgba(212, 165, 116, 0.25), inset 0 0 30px rgba(212, 165, 116, 0.05)'
                }}
              >
                {/* Shimmer overlay */}
                <motion.div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(244, 228, 193, 0.7) 50%, transparent 60%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: isHovered ? ['200% 0', '-200% 0'] : '200% 0',
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: isHovered ? Infinity : 0,
                  }}
                />

                {/* Close button */}
                <button
                  onClick={handleDismiss}
                  className="absolute top-4 right-4 p-2.5 rounded-full glass transition-all duration-300 hover:bg-library-gold/20 group z-10"
                  style={{
                    backgroundColor: 'rgba(44, 31, 22, 0.7)',
                    border: '1px solid rgba(212, 165, 116, 0.4)'
                  }}
                  aria-label="Close grand opening announcement"
                >
                  <X className="w-6 h-6 text-library-gold-light group-hover:text-library-gold transition-colors" />
                </button>

                <div className="p-8 md:p-10 text-center relative">
                  {/* Decorative sparkles */}
                  <motion.div
                    className="absolute top-4 left-8"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Sparkles className="w-6 h-6 text-library-gold opacity-60" />
                  </motion.div>

                  <motion.div
                    className="absolute top-4 right-16"
                    animate={{
                      rotate: [0, -360],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Sparkles className="w-5 h-5 text-library-gold-light opacity-50" />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-4 left-12"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-library-gold opacity-40" />
                  </motion.div>

                  {/* Main content */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    {/* Title with ornamental divider */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent flex-1 max-w-[100px]" />
                      <motion.h2
                        id="grand-opening-title"
                        className="font-display text-2xl md:text-3xl lg:text-4xl tracking-wide uppercase"
                        animate={{
                          textShadow: isHovered
                            ? '0 0 30px rgba(212, 165, 116, 0.8), 0 0 60px rgba(212, 165, 116, 0.4)'
                            : '0 0 20px rgba(212, 165, 116, 0.5)',
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-gold-foil gpu-accelerated font-bold">
                          Now Open
                        </span>
                      </motion.h2>
                      <div className="h-px bg-gradient-to-r from-transparent via-library-gold to-transparent flex-1 max-w-[100px]" />
                    </div>

                    {/* Date and time */}
                    <motion.div
                      id="grand-opening-description"
                      className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2 rounded-full glass-gold"
                          style={{
                            backgroundColor: 'rgba(212, 165, 116, 0.2)',
                            border: '1px solid rgba(212, 165, 116, 0.3)'
                          }}
                        >
                          <Calendar className="w-5 h-5 text-library-gold" />
                        </div>
                        <div className="text-left">
                          <p className="text-library-gold-light text-sm font-medium uppercase tracking-wider">Opened</p>
                          <p
                            className="font-serif text-xl text-library-cream"
                            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
                          >
                            September 21st
                          </p>
                        </div>
                      </div>

                      {/* Decorative separator */}
                      <motion.div
                        className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-library-gold to-transparent opacity-50"
                        animate={{
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      <div className="flex items-center gap-3">
                        <div
                          className="p-2 rounded-full glass-gold"
                          style={{
                            backgroundColor: 'rgba(212, 165, 116, 0.2)',
                            border: '1px solid rgba(212, 165, 116, 0.3)'
                          }}
                        >
                          <Clock className="w-5 h-5 text-library-gold" />
                        </div>
                        <div className="text-left">
                          <p className="text-library-gold-light text-sm font-medium uppercase tracking-wider">Hours Today</p>
                          <p
                            className="font-serif text-xl text-library-cream"
                            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
                          >
                            See Below
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Subtle pulse animation for the entire content */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{
                      boxShadow: [
                        'inset 0 0 20px rgba(212, 165, 116, 0)',
                        'inset 0 0 20px rgba(212, 165, 116, 0.3)',
                        'inset 0 0 20px rgba(212, 165, 116, 0)',
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  // Use portal to render modal at document root
  return createPortal(modalContent, document.body);
}
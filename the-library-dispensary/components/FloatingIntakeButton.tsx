"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Calendar } from "lucide-react";

export default function FloatingIntakeButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after 25% scroll or 5 seconds
      const scrollPercentage = (window.scrollY / document.body.scrollHeight) * 100;
      if (scrollPercentage > 25) {
        setIsVisible(true);
      }
    };

    // Show after 5 seconds regardless of scroll
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isMinimized ? (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        >
          {/* Minimize button */}
          <motion.button
            onClick={() => setIsMinimized(true)}
            className="w-8 h-8 rounded-full glass-dark flex items-center justify-center hover:bg-library-gold/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-4 h-4 text-library-gold-light" />
          </motion.button>

          {/* Main floating button */}
          <motion.a
            href="https://thelibrary.app.n8n.cloud/form/2de56228-8522-485f-af34-36b282fe359d"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Pulsing background glow */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-library-gold/40 rounded-full blur-xl"
            />
            
            {/* Button container */}
            <div className="relative overflow-hidden rounded-full shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-library-gold via-library-gold-light to-library-gold animate-shimmer bg-[length:200%_100%]" />
              
              <div className="relative px-6 py-4 flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="w-5 h-5 text-library-brown-darkest" />
                </motion.div>
                
                <div className="flex flex-col items-start">
                  <span className="text-library-brown-darkest font-bold text-sm">
                    Join Early Access
                  </span>
                  <span className="text-library-brown/70 text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Sept 15 Opening
                  </span>
                </div>
              </div>
            </div>

            {/* Tooltip on hover */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-full mb-2 right-0 glass-gold px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none"
            >
              <span className="text-library-cream text-xs">
                Reserve your spot for exclusive early access
              </span>
              <div className="absolute bottom-0 right-6 translate-y-1/2 w-2 h-2 bg-library-gold rotate-45" />
            </motion.div>
          </motion.a>
        </motion.div>
      ) : (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsMinimized(false)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full overflow-hidden shadow-2xl group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-library-gold via-library-gold-light to-library-gold animate-shimmer bg-[length:200%_100%]" />
          <div className="relative w-full h-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-library-brown-darkest" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
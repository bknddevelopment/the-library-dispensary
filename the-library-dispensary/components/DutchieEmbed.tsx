"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, AlertCircle, ExternalLink } from "lucide-react";

interface DutchieEmbedProps {
  retailerId: string;
  productId?: string;
  className?: string;
  height?: string;
  enableSEO?: boolean;
  fullPage?: boolean;
}

export default function DutchieEmbed({
  retailerId,
  productId, // eslint-disable-line @typescript-eslint/no-unused-vars -- Kept for future product-specific navigation
  className = "",
  height,
  enableSEO = true,
  fullPage = false,
}: DutchieEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const loadTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // CRITICAL FIX: Detect cart modal interactions and adjust iframe positioning
  useEffect(() => {
    if (!iframeRef.current) return;

    const handleCartInteraction = () => {
      // When user interacts with iframe, assume they might open cart
      setCartModalOpen(true);

      // Force iframe to expand for modal
      if (iframeRef.current && !isMobile) {
        iframeRef.current.style.position = 'fixed';
        iframeRef.current.style.top = '0';
        iframeRef.current.style.left = '0';
        iframeRef.current.style.width = '100vw';
        iframeRef.current.style.height = '100vh';
        iframeRef.current.style.zIndex = '2147483647';
        document.body.style.overflow = 'hidden';
      }

      // Auto-close after 10 seconds if no further interaction
      setTimeout(() => {
        resetIframePosition();
      }, 10000);
    };

    const resetIframePosition = () => {
      setCartModalOpen(false);
      if (iframeRef.current && !isMobile) {
        iframeRef.current.style.position = 'relative';
        iframeRef.current.style.top = '0';
        iframeRef.current.style.left = '0';
        iframeRef.current.style.width = '100%';
        iframeRef.current.style.height = fullPage ? '100%' : (height || '6000px');
        iframeRef.current.style.zIndex = '99999';
        document.body.style.overflow = '';
      }
    };

    // Listen for clicks on the iframe
    const handleIframeClick = () => {
      // Detect if cart might be opening
      if (!cartModalOpen) {
        handleCartInteraction();
      }
    };

    // Add click listener to detect cart button clicks
    const iframe = iframeRef.current;
    iframe.addEventListener('mouseenter', handleIframeClick);
    iframe.addEventListener('click', handleIframeClick);

    // Listen for escape key to close modal
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && cartModalOpen) {
        resetIframePosition();
      }
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      iframe.removeEventListener('mouseenter', handleIframeClick);
      iframe.removeEventListener('click', handleIframeClick);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [cartModalOpen, isMobile, fullPage, height]);

  // Removed auto-scroll adjustment to prevent interference with modal display
  // The modal visibility is now handled entirely through CSS z-index stacking

  // Handle iframe load events
  useEffect(() => {
    if (!iframeRef.current) return;

    const handleLoad = () => {
      setIsLoading(false);
      setHasError(false);
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
    };

    const handleError = () => {
      setIsLoading(false);
      setHasError(true);

      // Report to monitoring service (if available)
      if (typeof window !== 'undefined' && (window as unknown as { Sentry?: { captureMessage: (message: string, options: object) => void } }).Sentry) {
        (window as unknown as { Sentry: { captureMessage: (message: string, options: object) => void } }).Sentry.captureMessage('Dutchie iframe failed to load', {
          level: 'error',
          tags: {
            component: 'DutchieEmbed',
            retailerId
          }
        });
      }

      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
    };

    const iframe = iframeRef.current;
    iframe.addEventListener('load', handleLoad);
    iframe.addEventListener('error', handleError);

    // Set a timeout for slow loading
    loadTimeoutRef.current = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        setHasError(true);
      }
    }, 20000); // 20 second timeout

    return () => {
      iframe.removeEventListener('load', handleLoad);
      iframe.removeEventListener('error', handleError);
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [retailerId]);

  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);

    // Force iframe reload by updating src
    if (iframeRef.current) {
      const currentSrc = iframeRef.current.src;
      iframeRef.current.src = '';
      setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.src = currentSrc;
        }
      }, 100);
    }
  };

  // Responsive height for mobile devices
  // For full page mode, calculate actual available height
  const calculateHeight = () => {
    if (fullPage) {
      // For full page mode, use calc to subtract header and footer heights
      // Header is approximately 160px (top bar + book spines) and footer is approximately 300px
      return isMobile ? "calc(100vh - 120px)" : "calc(100vh - 160px)";
    }
    return isMobile ? "90vh" : "90vh";
  };

  const responsiveHeight = calculateHeight();
  const iframeHeight = fullPage ? "200vh" : (height || (isMobile ? "2000px" : "6000px")); // Use 200vh for fullPage to ensure content doesn't get cut off

  // Calculate offset to ensure modal visibility
  // Keep iframe at top position - no negative offset needed
  const iframeTopOffset = "0"; // Keep at top, let container height handle visibility

  // Dutchie embedded menu URL
  const dutchieEmbedUrl = `https://dutchie.com/embedded-menu/${retailerId}`;

  // Fallback URL for Dutchie kiosk
  const dutchieFallbackUrl = `https://dutchie.com/kiosks/${retailerId}`;

  return (
    <div
      id="dutchie-embed-wrapper"
      className={`relative ${className} ${fullPage ? 'h-full' : ''}`}
      style={{
        height: fullPage ? responsiveHeight : 'auto',
        minHeight: fullPage ? responsiveHeight : responsiveHeight
      }}
    >
      {/* Loading State */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center z-20 glass-dark rounded-lg"
            style={{ minHeight: responsiveHeight }}
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <Loader2 className="w-12 h-12 text-library-gold" />
              </motion.div>
              <p className="text-library-gold-light font-display text-lg uppercase tracking-wider">
                Loading Products
              </p>
              <p className="text-library-cream/60 text-sm mt-2 italic">
                Curating our finest selections for you...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error State */}
      <AnimatePresence>
        {hasError && !isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 flex items-center justify-center z-20 glass-dark rounded-lg"
            style={{ minHeight: responsiveHeight }}
          >
            <div className="text-center p-8 max-w-md">
              <AlertCircle className="w-12 h-12 text-library-gold mx-auto mb-4" />
              <h3 className="text-library-gold font-display text-xl uppercase tracking-wider mb-2">
                Unable to Load Menu
              </h3>
              <p className="text-library-cream/80 mb-6">
                Our embedded menu is temporarily unavailable. You can still browse and order through our full website.
              </p>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRetry}
                  className="w-full px-6 py-3 bg-gradient-to-r from-library-gold to-library-gold-dark text-library-brown-darkest font-semibold rounded-full hover:shadow-gold transition-all"
                >
                  Try Again
                </motion.button>
                <a
                  href={dutchieFallbackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 glass border border-library-gold/30 text-library-cream rounded-full hover:glass-gold transition-all"
                >
                  <span>Browse Full Menu</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="tel:973-731-1199"
                  className="block w-full px-6 py-3 glass border border-library-gold/30 text-library-cream rounded-full hover:glass-gold transition-all"
                >
                  Call Us: (973) 731-1199
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dutchie Iframe Embed - Full Page Mode */}
      <div
        ref={containerRef}
        className={`relative w-full dutchie-iframe-container ${!isMobile ? 'desktop-modal-fix' : ''} ${fullPage ? 'fullpage-embed' : ''} ${cartModalOpen ? 'cart-modal-active' : ''}`}
        style={{
          height: fullPage ? '100%' : responsiveHeight,
          minHeight: fullPage ? '100%' : "600px",
          maxHeight: fullPage ? '100%' : "90vh",
          // CRITICAL FIX: Set overflow to visible to prevent modal clipping
          overflow: 'visible',
          WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
          position: 'relative',
          borderRadius: fullPage ? '0' : '0.5rem',
          scrollBehavior: 'smooth',
          paddingTop: fullPage ? '0' : (isMobile ? '0' : '0'), // Removed padding that might interfere
          // High z-index for modal visibility
          zIndex: 99999,
        }}
      >
        <iframe
          ref={iframeRef}
          src={dutchieEmbedUrl}
          title="Dutchie Cannabis Menu"
          className="w-full dutchie-iframe"
          data-cart-open={cartModalOpen}
          style={{
            height: fullPage ? '100%' : iframeHeight,
            minHeight: fullPage ? '100%' : iframeHeight,
            border: 'none',
            backgroundColor: '#fafafa',
            position: 'relative', // Changed to relative for both modes
            top: 0, // Reset top position
            left: 0,
            width: '100%',
            // CRITICAL FIX: Maximum z-index for modal visibility
            zIndex: 2147483647,
            // Ensure iframe is not clipped
            clipPath: 'none',
            filter: 'none',
            transform: 'none',
          }}
          loading="lazy"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
          allow="payment; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          aria-label="Cannabis product menu powered by Dutchie"
          scrolling="yes" // CRITICAL FIX: Always allow scrolling for modal visibility
        />
      </div>

      {/* SEO Fallback Content */}
      {enableSEO && (
        <div className="sr-only">
          <h2>Cannabis Products Available at The Library of New Jersey</h2>
          <p>
            Browse our curated selection of premium cannabis products including flowers,
            pre-rolls, edibles, concentrates, vapes, and accessories. Located in
            West Orange, NJ, The Library of New Jersey offers carefully selected products
            from trusted brands, with expert guidance to help you find the perfect
            match for your needs.
          </p>
          <ul>
            <li>Premium Cannabis Flower - Indoor, Outdoor, and Greenhouse varieties</li>
            <li>Pre-Rolled Joints - Singles and multi-packs</li>
            <li>Edibles - Gummies, chocolates, baked goods, and beverages</li>
            <li>Concentrates - Wax, shatter, live resin, and rosin</li>
            <li>Vape Cartridges - Distillate, live resin, and full spectrum</li>
            <li>CBD Products - Tinctures, topicals, and wellness items</li>
            <li>Accessories - Grinders, papers, pipes, and storage</li>
          </ul>
          <p>
            Shop online for pickup or delivery. New Jersey medical marijuana card required.
            21+ for recreational purchases where available.
          </p>
        </div>
      )}
    </div>
  );
}
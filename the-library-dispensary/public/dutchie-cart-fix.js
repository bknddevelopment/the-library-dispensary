/**
 * Dutchie Cart Modal Fix Script
 * Critical fix for cart modal showing blank on right side
 * This script monitors for cart interactions and ensures the modal is fully visible
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCartFix);
  } else {
    initCartFix();
  }

  function initCartFix() {
    console.log('[Dutchie Cart Fix] Initializing cart modal visibility fix');

    // Find all Dutchie iframes
    const iframes = document.querySelectorAll('iframe[src*="dutchie.com"]');

    if (iframes.length === 0) {
      // If no iframes found yet, wait and retry
      setTimeout(initCartFix, 1000);
      return;
    }

    iframes.forEach(iframe => {
      // Monitor iframe for interactions
      let cartModalTimeout;
      let isCartOpen = false;

      // Function to expand iframe for cart modal
      function expandForCart() {
        if (isCartOpen) return;

        console.log('[Dutchie Cart Fix] Expanding iframe for cart modal');
        isCartOpen = true;

        // Save original styles
        const originalStyles = {
          position: iframe.style.position,
          top: iframe.style.top,
          left: iframe.style.left,
          width: iframe.style.width,
          height: iframe.style.height,
          zIndex: iframe.style.zIndex,
          transform: iframe.style.transform
        };

        // Apply fixed positioning for full modal visibility
        iframe.style.cssText = `
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: 2147483647 !important;
          transform: none !important;
          margin: 0 !important;
          max-width: none !important;
          overflow: visible !important;
        `;

        // Add class to container if it exists
        const container = iframe.closest('.dutchie-iframe-container');
        if (container) {
          container.classList.add('cart-modal-active');
        }

        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';

        // Auto-reset after 15 seconds (typical cart interaction time)
        cartModalTimeout = setTimeout(() => {
          resetIframe(originalStyles);
        }, 15000);
      }

      // Function to reset iframe position
      function resetIframe(originalStyles) {
        if (!isCartOpen) return;

        console.log('[Dutchie Cart Fix] Resetting iframe position');
        isCartOpen = false;

        // Restore original styles
        Object.keys(originalStyles).forEach(key => {
          iframe.style[key] = originalStyles[key] || '';
        });

        // Remove active class
        const container = iframe.closest('.dutchie-iframe-container');
        if (container) {
          container.classList.remove('cart-modal-active');
        }

        // Restore body scroll
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';

        clearTimeout(cartModalTimeout);
      }

      // Detect potential cart button clicks
      iframe.addEventListener('load', () => {
        console.log('[Dutchie Cart Fix] Iframe loaded, setting up interaction monitoring');

        // Try to access iframe content (may be blocked by CORS)
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

          // Look for cart buttons
          const cartButtons = iframeDoc.querySelectorAll('[data-testid*="cart"], [aria-label*="cart"], .cart-button, button[class*="cart"]');

          cartButtons.forEach(button => {
            button.addEventListener('click', expandForCart);
          });
        } catch (e) {
          // CORS prevents access, use alternative detection
          console.log('[Dutchie Cart Fix] Cannot access iframe content (CORS), using hover detection');
        }
      });

      // Fallback: Detect when user hovers over right side (where cart button typically is)
      iframe.addEventListener('mousemove', (e) => {
        const rect = iframe.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const rightEdgeThreshold = rect.width * 0.85; // Right 15% of iframe

        if (x > rightEdgeThreshold && !isCartOpen) {
          // User is hovering near right edge where cart button usually is
          expandForCart();
        }
      });

      // Listen for clicks on iframe
      iframe.addEventListener('mousedown', () => {
        if (!isCartOpen) {
          expandForCart();
        }
      });

      // Listen for escape key to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isCartOpen) {
          resetIframe({});
        }
      });

      // Monitor for visibility changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            // Check if iframe is being hidden and reset if needed
            if (iframe.style.display === 'none' && isCartOpen) {
              resetIframe({});
            }
          }
        });
      });

      observer.observe(iframe, { attributes: true });
    });

    // Also apply general fixes to ensure proper stacking
    const style = document.createElement('style');
    style.textContent = `
      /* Runtime cart modal fixes */
      iframe[src*="dutchie.com"] {
        position: relative !important;
        z-index: 99999 !important;
      }

      .dutchie-iframe-container {
        overflow: visible !important;
        z-index: 99999 !important;
      }

      /* Ensure parent containers don't clip */
      div:has(iframe[src*="dutchie.com"]) {
        overflow: visible !important;
      }
    `;
    document.head.appendChild(style);
  }
})();
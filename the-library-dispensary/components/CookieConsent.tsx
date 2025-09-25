"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield, X, Check, Settings } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  timestamp: number;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    timestamp: 0,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const storedConsent = localStorage.getItem("cookie-consent");

    if (!storedConsent) {
      // Show banner after a slight delay to not overwhelm on page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // Parse stored preferences and apply them
      try {
        const parsed: CookiePreferences = JSON.parse(storedConsent);
        setPreferences(parsed);
        applyCookiePreferences(parsed);
      } catch (error) {
        console.error("Error parsing cookie preferences:", error);
        // If there's an error, show the banner again
        setIsVisible(true);
      }
    }
  }, []);

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Apply preferences to various tracking services
    if (typeof window !== "undefined") {
      // Set a global variable that tracking scripts can check
      (window as any).cookieConsent = {
        necessary: prefs.necessary,
        analytics: prefs.analytics,
      };

      // Dispatch custom event for other scripts to listen to
      window.dispatchEvent(
        new CustomEvent("cookieConsentUpdated", {
          detail: prefs,
        })
      );

      // Example: Disable Google Analytics if not consented
      if (!prefs.analytics && typeof (window as any).gtag !== "undefined") {
        (window as any).gtag("consent", "update", {
          analytics_storage: "denied",
        });
      } else if (prefs.analytics && typeof (window as any).gtag !== "undefined") {
        (window as any).gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
    }
  };

  const handleAcceptAll = () => {
    const newPreferences: CookiePreferences = {
      necessary: true,
      analytics: true,
      timestamp: Date.now(),
    };

    savePreferences(newPreferences);
  };

  const handleAcceptNecessary = () => {
    const newPreferences: CookiePreferences = {
      necessary: true,
      analytics: false,
      timestamp: Date.now(),
    };

    savePreferences(newPreferences);
  };

  const handleSaveSettings = () => {
    const newPreferences: CookiePreferences = {
      ...preferences,
      timestamp: Date.now(),
    };

    savePreferences(newPreferences);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    // Save to localStorage
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));

    // Apply the preferences
    applyCookiePreferences(prefs);

    // Close the banner with animation
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setShowSettings(false);
    }, 300);
  };

  const toggleAnalytics = () => {
    setPreferences(prev => ({
      ...prev,
      analytics: !prev.analytics,
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isClosing && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            duration: 0.5
          }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 pointer-events-none"
        >
          <div className="max-w-7xl mx-auto pointer-events-auto">
            <div className="bg-library-brown-dark/95 backdrop-blur-md rounded-xl shadow-2xl border border-library-gold/20 overflow-hidden">
              {/* Decorative gold accent line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-library-gold to-transparent" />

              <div className="p-6 sm:p-8">
                {!showSettings ? (
                  // Main consent view
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-library-gold/10 rounded-full flex items-center justify-center">
                          <Cookie className="w-6 h-6 text-library-gold" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-display font-bold text-library-cream mb-2">
                          Cookie Preferences
                        </h3>
                        <p className="text-sm sm:text-base text-library-cream/80 leading-relaxed">
                          We use cookies to enhance your browsing experience and analyze site traffic.
                          By clicking "Accept All", you consent to our use of cookies. You can also
                          customize your preferences or decline non-essential cookies.
                        </p>

                        <button
                          onClick={() => setShowSettings(!showSettings)}
                          className="mt-3 text-sm text-library-gold hover:text-library-gold-light underline transition-colors inline-flex items-center gap-1"
                        >
                          <Settings className="w-4 h-4" />
                          Manage Preferences
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          setIsClosing(true);
                          setTimeout(() => setIsVisible(false), 300);
                        }}
                        className="flex-shrink-0 p-2 rounded-full hover:bg-library-brown/50 transition-colors group"
                        aria-label="Close cookie consent"
                      >
                        <X className="w-5 h-5 text-library-cream/50 group-hover:text-library-cream/80 transition-colors" />
                      </button>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-end">
                      <button
                        onClick={handleAcceptNecessary}
                        className="px-6 py-2.5 rounded-lg border border-library-gold/30 text-library-cream hover:bg-library-brown/50 transition-all duration-200 font-medium"
                      >
                        Necessary Only
                      </button>
                      <button
                        onClick={handleAcceptAll}
                        className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-medium transition-all duration-200 shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
                      >
                        <Check className="w-4 h-4" />
                        Accept All
                      </button>
                    </div>
                  </div>
                ) : (
                  // Settings view
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg sm:text-xl font-display font-bold text-library-cream flex items-center gap-2">
                        <Shield className="w-5 h-5 text-library-gold" />
                        Cookie Settings
                      </h3>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="text-sm text-library-gold hover:text-library-gold-light transition-colors"
                      >
                        ← Back
                      </button>
                    </div>

                    <div className="space-y-4">
                      {/* Necessary cookies - always enabled */}
                      <div className="p-4 bg-library-brown/30 rounded-lg border border-library-gold/10">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-library-cream mb-1">
                              Necessary Cookies
                            </h4>
                            <p className="text-sm text-library-cream/70">
                              Required for the website to function properly. These cannot be disabled.
                            </p>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            <div className="w-12 h-6 bg-green-500/30 rounded-full relative cursor-not-allowed">
                              <div className="absolute right-1 top-1 w-4 h-4 bg-green-500 rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Analytics cookies - optional */}
                      <div className="p-4 bg-library-brown/30 rounded-lg border border-library-gold/10">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-library-cream mb-1">
                              Analytics Cookies
                            </h4>
                            <p className="text-sm text-library-cream/70">
                              Help us understand how visitors interact with our website to improve user experience.
                            </p>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            <button
                              onClick={toggleAnalytics}
                              className={`w-12 h-6 rounded-full transition-colors relative ${
                                preferences.analytics ? 'bg-green-500/30' : 'bg-library-brown-darkest/50'
                              }`}
                            >
                              <motion.div
                                animate={{ x: preferences.analytics ? 20 : 2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`absolute top-1 w-4 h-4 rounded-full ${
                                  preferences.analytics ? 'bg-green-500' : 'bg-library-cream/50'
                                }`}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Save settings button */}
                    <div className="flex justify-between items-center pt-4 border-t border-library-gold/10">
                      <a
                        href="/privacy"
                        className="text-sm text-library-gold hover:text-library-gold-light underline transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>
                      <button
                        onClick={handleSaveSettings}
                        className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-medium transition-all duration-200 shadow-lg shadow-green-500/20"
                      >
                        Save Preferences
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CCPA/GDPR compliance notice */}
            <div className="mt-2 text-center">
              <p className="text-xs text-library-cream/40">
                This site is GDPR and CCPA compliant. Your privacy choices are respected.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
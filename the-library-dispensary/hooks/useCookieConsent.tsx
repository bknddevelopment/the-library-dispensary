import { useState, useEffect } from "react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  timestamp: number;
}

interface UseCookieConsentReturn {
  hasConsented: boolean;
  preferences: CookiePreferences | null;
  updateConsent: (preferences: CookiePreferences) => void;
  revokeConsent: () => void;
}

/**
 * Hook to check and manage cookie consent status
 * @returns Object with consent status and management functions
 */
export function useCookieConsent(): UseCookieConsentReturn {
  const [hasConsented, setHasConsented] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    // Check localStorage for existing consent
    const checkConsent = () => {
      const stored = localStorage.getItem("cookie-consent");
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as CookiePreferences;
          setPreferences(parsed);
          setHasConsented(true);
        } catch (error) {
          console.error("Error parsing cookie consent:", error);
          setHasConsented(false);
        }
      } else {
        setHasConsented(false);
      }
    };

    checkConsent();

    // Listen for cookie consent updates
    const handleConsentUpdate = (event: CustomEvent) => {
      setPreferences(event.detail as CookiePreferences);
      setHasConsented(true);
    };

    window.addEventListener(
      "cookieConsentUpdated",
      handleConsentUpdate as EventListener
    );

    return () => {
      window.removeEventListener(
        "cookieConsentUpdated",
        handleConsentUpdate as EventListener
      );
    };
  }, []);

  const updateConsent = (newPreferences: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(newPreferences));
    setPreferences(newPreferences);
    setHasConsented(true);

    // Dispatch event for other components
    window.dispatchEvent(
      new CustomEvent("cookieConsentUpdated", {
        detail: newPreferences,
      })
    );
  };

  const revokeConsent = () => {
    localStorage.removeItem("cookie-consent");
    setPreferences(null);
    setHasConsented(false);

    // Reset any tracking
    if (typeof (window as any).gtag !== "undefined") {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }

    // Reload to show consent banner again
    window.location.reload();
  };

  return {
    hasConsented,
    preferences,
    updateConsent,
    revokeConsent,
  };
}
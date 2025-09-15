/**
 * useAgeVerification Hook
 * Provides age verification state and methods to components
 * Handles mobile-specific quirks and provides debug information
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  isAgeVerified,
  isAgeVerifiedSync,
  saveAgeVerification,
  clearAgeVerification,
  getStorageInfo
} from '@/lib/ageVerificationStorage';

interface UseAgeVerificationReturn {
  isVerified: boolean;
  isLoading: boolean;
  verify: () => void;
  reset: () => void;
  storageInfo: ReturnType<typeof getStorageInfo> | null;
}

export function useAgeVerification(): UseAgeVerificationReturn {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [storageInfo, setStorageInfo] = useState<ReturnType<typeof getStorageInfo> | null>(null);
  const checkInProgress = useRef(false);

  // Check verification status on mount and handle mobile-specific behaviors
  useEffect(() => {
    const checkVerification = async () => {
      // Prevent concurrent checks
      if (checkInProgress.current) return;
      checkInProgress.current = true;

      try {
        // First do a quick sync check for immediate feedback
        const syncVerified = isAgeVerifiedSync();
        if (syncVerified) {
          setIsVerified(true);
          setIsLoading(false);
        }

        // Then do a comprehensive async check
        const verified = await isAgeVerified();
        setIsVerified(verified);

        // Get storage info for debugging
        if (typeof window !== 'undefined') {
          const info = getStorageInfo();
          setStorageInfo(info);

          // Log mobile-specific info in development
          if (window.location.hostname === 'localhost') {
            console.log('Storage Info:', info);
          }

          // Mobile-specific optimizations
          if (info.isMobile) {
            // iOS specific handling
            if (info.isIOS && !verified) {
              // iOS sometimes needs multiple attempts
              setTimeout(async () => {
                const recheckVerified = await isAgeVerified();
                if (recheckVerified !== verified) {
                  setIsVerified(recheckVerified);
                }
              }, 200);
            }

            // Android WebView specific handling
            if (info.isAndroid && info.storageRestricted) {
              console.warn('Storage restricted on Android. Age verification may not persist.');
            }
          }
        }
      } catch (error) {
        console.error('Error checking age verification:', error);
        setIsVerified(false);
      } finally {
        setIsLoading(false);
        checkInProgress.current = false;
      }
    };

    checkVerification();

    // Listen for storage events (when verification happens in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'library_age_verified' || e.key === null) {
        checkVerification();
      }
    };

    // Listen for BroadcastChannel messages
    let channel: BroadcastChannel | null = null;
    if (typeof window !== 'undefined' && window.BroadcastChannel) {
      try {
        channel = new BroadcastChannel('age_verification');
        channel.onmessage = (event) => {
          if (event.data?.verified) {
            setIsVerified(true);
          }
        };
      } catch (e) {
        // BroadcastChannel not available
      }
    }

    // Listen for visibility change (when returning to tab/app)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkVerification();
      }
    };

    // Add event listeners
    window.addEventListener('storage', handleStorageChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Mobile-specific: Listen for pageshow event (back/forward cache)
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        checkVerification();
      }
    };
    window.addEventListener('pageshow', handlePageShow);

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pageshow', handlePageShow);
      if (channel) {
        channel.close();
      }
    };
  }, []);

  // Verify age and save to storage
  const verify = useCallback(async () => {
    try {
      // Set verified immediately for better UX
      setIsVerified(true);

      // Save to storage asynchronously
      await saveAgeVerification();

      // Update storage info
      if (typeof window !== 'undefined') {
        setStorageInfo(getStorageInfo());
      }
    } catch (error) {
      console.error('Error saving age verification:', error);
      // Still keep verified in memory even if storage fails
      // User shouldn't have to re-verify in the same session
    }
  }, []);

  // Reset verification (for testing or logout)
  const reset = useCallback(async () => {
    try {
      await clearAgeVerification();
      setIsVerified(false);

      // Update storage info
      if (typeof window !== 'undefined') {
        setStorageInfo(getStorageInfo());
      }
    } catch (error) {
      console.error('Error clearing age verification:', error);
      setIsVerified(false);
    }
  }, []);

  return {
    isVerified,
    isLoading,
    verify,
    reset,
    storageInfo
  };
}
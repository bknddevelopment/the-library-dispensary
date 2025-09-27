import { useEffect, useState } from "react";
import AgeVerification from "./AgeVerification";
import { useAgeVerification } from "@/hooks/useAgeVerification";

interface AgeVerificationProviderProps {
  children: React.ReactNode;
  debugMode?: boolean;
}

export default function AgeVerificationProvider({
  children,
  debugMode = false
}: AgeVerificationProviderProps) {
  const { isVerified, isLoading, verify, storageInfo } = useAgeVerification();
  const [showDebug, setShowDebug] = useState(false);

  // Enable debug mode in development or when explicitly enabled
  useEffect(() => {
    const isDev = process.env.NODE_ENV === 'development';
    const hasDebugParam = typeof window !== 'undefined' &&
      new URLSearchParams(window.location.search).has('debug');

    setShowDebug(debugMode || isDev || hasDebugParam);

    if ((isDev || hasDebugParam) && storageInfo) {
      console.log('🔍 Age Verification Storage Info:', {
        ...storageInfo,
        timestamp: new Date().toISOString(),
      });
    }
  }, [debugMode, storageInfo]);

  const handleVerification = async () => {
    await verify();
  };

  // Show loading state while checking verification status
  if (isLoading) {
    return (
      <div className="min-h-screen bg-library-brown flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-library-gold"></div>
          <div className="text-library-gold text-center">
            <p className="text-lg">Checking verification status...</p>
            {storageInfo?.isMobile && (
              <p className="text-sm mt-2 opacity-75">
                {storageInfo.isIOS ? 'iOS' : storageInfo.isAndroid ? 'Android' : 'Mobile'} detected
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Show age verification gate if not verified
  if (!isVerified) {
    return (
      <>
        <AgeVerification onVerified={handleVerification} />

        {/* Debug Panel */}
        {showDebug && storageInfo && (
          <div className="fixed bottom-4 left-4 bg-black/90 text-white p-4 rounded-lg text-xs max-w-sm z-[70]">
            <h3 className="font-bold mb-2">🔍 Storage Debug Info</h3>
            <div className="space-y-1">
              <p>Device: {storageInfo.isMobile ? (storageInfo.isIOS ? '📱 iOS' : storageInfo.isAndroid ? '🤖 Android' : '📱 Mobile') : '💻 Desktop'}</p>
              <p>LocalStorage: {storageInfo.localStorageAvailable ? '✅' : '❌'}</p>
              <p>SessionStorage: {storageInfo.sessionStorageAvailable ? '✅' : '❌'}</p>
              <p>IndexedDB: {storageInfo.indexedDBAvailable ? '✅' : '❌'}</p>
              <p>Memory Fallback: {storageInfo.usingMemoryFallback ? '⚠️ Yes' : '✅ No'}</p>
              <p>Storage Restricted: {storageInfo.storageRestricted ? '⚠️ Yes' : '✅ No'}</p>
              <p>Verified: {storageInfo.isVerified ? '✅' : '❌'}</p>
            </div>
            <button
              onClick={() => setShowDebug(false)}
              className="mt-2 text-xs underline opacity-75 hover:opacity-100"
            >
              Hide Debug
            </button>
          </div>
        )}

        {/* Warning for storage issues */}
        {storageInfo?.storageRestricted && (
          <div className="fixed top-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-yellow-50 border border-yellow-200 rounded-lg p-3 shadow-lg z-[60]">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-yellow-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div className="flex-1">
                <p className="text-sm text-yellow-800 font-medium">Storage Limited</p>
                <p className="text-xs text-yellow-700 mt-1">
                  {storageInfo.isIOS ?
                    'Private browsing mode detected. You may need to verify your age again on your next visit.' :
                    'Storage is restricted. Your verification may not persist.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // User is verified - show the application
  return <>{children}</>;
}
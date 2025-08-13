"use client";

import { useState, useEffect } from "react";
import AgeVerification from "./AgeVerification";

export default function AgeVerificationProvider({ children }: { children: React.ReactNode }) {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // No cookie storage per requirements - always show verification
    setIsLoading(false);
  }, []);

  const handleVerification = () => {
    setIsVerified(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-library-brown flex items-center justify-center">
        <div className="text-library-gold">Loading...</div>
      </div>
    );
  }

  if (!isVerified) {
    return <AgeVerification onVerified={handleVerification} />;
  }

  return <>{children}</>;
}
"use client";

import { useState, useEffect } from "react";
import { Calendar, AlertCircle, Shield } from "lucide-react";

interface AgeVerificationProps {
  onVerified: () => void;
}

export default function AgeVerification({ onVerified }: AgeVerificationProps) {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsChecking(true);

    // Validate input
    const birthMonth = parseInt(month);
    const birthDay = parseInt(day);
    const birthYear = parseInt(year);

    if (!birthMonth || !birthDay || !birthYear) {
      setError("Please enter a valid date of birth");
      setIsChecking(false);
      return;
    }

    if (birthMonth < 1 || birthMonth > 12) {
      setError("Please enter a valid month (1-12)");
      setIsChecking(false);
      return;
    }

    if (birthDay < 1 || birthDay > 31) {
      setError("Please enter a valid day (1-31)");
      setIsChecking(false);
      return;
    }

    const currentYear = new Date().getFullYear();
    if (birthYear < 1900 || birthYear > currentYear) {
      setError("Please enter a valid year");
      setIsChecking(false);
      return;
    }

    // Calculate age
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    // Verify age
    setTimeout(() => {
      if (age >= 21) {
        onVerified();
      } else {
        setError("You must be 21 or older to enter this site");
      }
      setIsChecking(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 bg-library-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-library-brown text-library-white p-6">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-library-gold" />
          </div>
          <h1 className="text-2xl font-serif text-center mb-2">Age Verification Required</h1>
          <p className="text-center text-library-white/90 text-sm">
            You must be 21 years or older to enter this site
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-library-teal" />
          </div>
          
          <p className="text-center text-library-black mb-6">
            Please enter your date of birth to continue
          </p>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label htmlFor="month" className="block text-xs text-library-black/70 mb-1">
                Month
              </label>
              <input
                type="number"
                id="month"
                min="1"
                max="12"
                placeholder="MM"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full px-3 py-2 border border-library-brown/20 rounded focus:outline-none focus:ring-2 focus:ring-library-gold"
                required
              />
            </div>
            <div>
              <label htmlFor="day" className="block text-xs text-library-black/70 mb-1">
                Day
              </label>
              <input
                type="number"
                id="day"
                min="1"
                max="31"
                placeholder="DD"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full px-3 py-2 border border-library-brown/20 rounded focus:outline-none focus:ring-2 focus:ring-library-gold"
                required
              />
            </div>
            <div>
              <label htmlFor="year" className="block text-xs text-library-black/70 mb-1">
                Year
              </label>
              <input
                type="number"
                id="year"
                min="1900"
                max={new Date().getFullYear()}
                placeholder="YYYY"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-3 py-2 border border-library-brown/20 rounded focus:outline-none focus:ring-2 focus:ring-library-gold"
                required
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-library-burgundy/10 border border-library-burgundy/20 rounded text-library-burgundy text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isChecking}
            className="w-full bg-library-gold text-library-white font-semibold py-3 rounded hover:bg-library-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isChecking ? "Verifying..." : "Enter Site"}
          </button>

          <div className="mt-6 p-4 bg-library-teal/10 border border-library-teal/20 rounded">
            <p className="text-xs text-library-teal leading-relaxed">
              <strong>Legal Notice:</strong> This website is intended for adults 21 years of age and older or qualified patients. 
              Cannabis products have not been analyzed or approved by the FDA. 
              There is limited information on the side effects of using cannabis products.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
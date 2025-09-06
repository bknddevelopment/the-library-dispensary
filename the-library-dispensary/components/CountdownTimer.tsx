"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles } from "lucide-react";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const targetDate = new Date("2025-09-15T10:00:00"); // Week of September 15th begins
    
    const calculateTimeLeft = () => {
      const now = new Date();
      
      if (now >= targetDate) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      const days = differenceInDays(targetDate, now);
      const hours = differenceInHours(targetDate, now) % 24;
      const minutes = differenceInMinutes(targetDate, now) % 60;
      const seconds = differenceInSeconds(targetDate, now) % 60;
      
      return { days, hours, minutes, seconds };
    };
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-library-gold/10 via-library-gold/5 to-library-gold/10 rounded-2xl p-8 backdrop-blur-sm border border-library-gold/20"
    >
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-library-gold animate-pulse" />
          <h3 className="text-2xl font-serif text-library-brown">Grand Opening Celebration</h3>
          <Sparkles className="w-5 h-5 text-library-gold animate-pulse" />
        </div>
        <p className="text-library-brown/80 flex items-center justify-center gap-2">
          <Calendar className="w-4 h-4" />
          Week of September 15th, 2025
          <Clock className="w-4 h-4" />
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative"
          >
            <div className="bg-library-white rounded-lg p-4 text-center shadow-lg border border-library-gold/10">
              <motion.div 
                key={unit.value}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-library-gold mb-1"
              >
                {unit.value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-xs md:text-sm text-library-brown/70 uppercase tracking-wider">
                {unit.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-library-brown/80 text-sm md:text-base">
          Join us during our opening week as we welcome the West Orange community!
        </p>
        <p className="text-library-gold font-semibold mt-2">
          Everyone is welcome to celebrate with us
        </p>
      </div>
    </motion.div>
  );
}
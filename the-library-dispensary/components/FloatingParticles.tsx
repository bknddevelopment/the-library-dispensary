"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Generate dust particles
    const dustParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    
    setParticles(dustParticles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Dust particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full gpu-accelerated"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, rgba(212, 165, 116, ${particle.opacity}) 0%, transparent 70%)`,
            filter: 'blur(0.3px)',
            willChange: 'transform, opacity',
          }}
          animate={{
            x: [0, 50, -30, 70, 0],
            y: [0, -80, -120, -60, 0],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity * 0.5, particle.opacity * 1.2, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating golden specs */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`spec-${i}`}
          className="absolute w-1 h-1 bg-library-gold-shimmer rounded-full gpu-accelerated"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 8px rgba(255, 215, 0, 0.9)',
            filter: 'blur(0.2px)',
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [-20, -100, -20],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            delay: Math.random() * 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ambient light rays */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {[...Array(3)].map((_, i) => (
          <motion.line
            key={`ray-${i}`}
            x1={`${20 + i * 30}%`}
            y1="0%"
            x2={`${30 + i * 30}%`}
            y2="100%"
            stroke="url(#goldGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              delay: i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F4E4C1" stopOpacity="0" />
          <stop offset="50%" stopColor="#D4A574" stopOpacity="1" />
          <stop offset="100%" stopColor="#F4E4C1" stopOpacity="0" />
        </linearGradient>
      </svg>
    </div>
  );
}
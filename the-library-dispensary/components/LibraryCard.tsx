"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, BookOpen, CheckCircle } from "lucide-react";
import { ReactNode } from "react";

interface LibraryCardProps {
  title: string;
  category?: string;
  description: string;
  details?: string[];
  cardNumber?: string;
  issuedDate?: string;
  icon?: ReactNode;
  delay?: number;
  featured?: boolean;
}

export default function LibraryCard({
  title,
  category = "DISPENSARY SERVICE",
  description,
  details = [],
  cardNumber = "TLD-2025-" + Math.floor(Math.random() * 9999).toString().padStart(4, '0'),
  issuedDate = "EST. 2025",
  icon,
  delay = 0,
  featured = false
}: LibraryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      whileHover={{ 
        y: -10, 
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3, type: "spring", stiffness: 300 }
      }}
      className="relative group gpu-accelerated"
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      {/* Card Container */}
      <div className={`
        relative paper-texture rounded-lg overflow-hidden
        ${featured ? 'ring-2 ring-library-gold shadow-gold' : 'shadow-book'}
        transform-gpu transition-all duration-500
        hover:shadow-2xl
      `}>
        {/* Library card header with perforations */}
        <div className="relative bg-gradient-to-r from-library-burgundy to-library-burgundy-light p-4">
          {/* Perforation dots */}
          <div className="absolute top-0 left-0 right-0 flex justify-between px-4">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-library-cream rounded-full -mt-1" />
            ))}
          </div>
          
          <div className="flex justify-between items-start mt-2">
            <div>
              <p className="text-library-cream/70 text-xs font-display uppercase tracking-widest">
                {category}
              </p>
              <h3 className="text-library-cream text-xl font-display font-bold mt-1">
                {title}
              </h3>
            </div>
            {icon && (
              <div className="text-library-gold-light opacity-80">
                {icon}
              </div>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="bg-library-cream p-6">
          {/* Stamp and card number */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full border-2 border-library-burgundy/30 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-library-burgundy/50" />
              </div>
              <div>
                <p className="text-xs text-library-brown/60 font-mono">CARD NO.</p>
                <p className="text-sm font-bold text-library-brown font-mono">{cardNumber}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-library-brown/60 uppercase">{issuedDate}</p>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-4">
            <p className="text-library-brown-dark leading-relaxed">
              {description}
            </p>

            {/* Details list with checkmarks */}
            {details.length > 0 && (
              <div className="border-t border-library-brown/10 pt-4 space-y-2">
                {details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.1 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-library-emerald mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-library-brown-dark">{detail}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom stamps and dates */}
          <div className="mt-6 pt-4 border-t-2 border-dashed border-library-brown/20">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <div className="flex items-center gap-1 text-library-brown/40">
                  <Calendar className="w-3 h-3" />
                  <span className="text-xs uppercase">Valid 2025</span>
                </div>
                <div className="flex items-center gap-1 text-library-brown/40">
                  <Clock className="w-3 h-3" />
                  <span className="text-xs uppercase">Daily Service</span>
                </div>
              </div>
              
              {/* Library stamp effect with animation */}
              <motion.div 
                className="relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 rounded-full border-2 border-library-burgundy/20 flex items-center justify-center transform rotate-12 opacity-50 hover:opacity-70 transition-opacity">
                  <span className="text-[8px] text-library-burgundy/60 font-bold text-center leading-tight">
                    THE<br/>LIBRARY<br/>NJ
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Aged paper effect overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-4 left-4 w-20 h-20 bg-library-brown/20 rounded-full filter blur-2xl" />
          <div className="absolute bottom-4 right-4 w-16 h-16 bg-library-gold/20 rounded-full filter blur-2xl" />
        </div>

        {/* Hover glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-library-gold/5 to-transparent" />
        </motion.div>
      </div>

      {/* Featured badge */}
      {featured && (
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: -12 }}
          transition={{ delay: delay + 0.3, type: "spring" }}
          className="absolute -top-3 -right-3 z-10"
        >
          <div className="bg-library-gold text-library-brown-darkest px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            FEATURED
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
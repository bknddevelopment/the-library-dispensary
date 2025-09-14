"use client";

import React, { useRef, useState, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";
import PremiumBackground from "./PremiumBackground";
import { 
  ChevronLeft, 
  ChevronRight, 
  Menu,
  X,
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  MapPin,
  Phone,
  Star,
  Zap,
  Leaf,
  Award
} from "lucide-react";

// Page component with forwardRef for react-pageflip
const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
  ({ children, className = "" }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`page-content ${className}`}
        style={{
          boxShadow: 'inset 0 0 30px rgba(0,0,0,0.1), inset 0 0 5px rgba(0,0,0,0.2)',
        }}
      >
        {children}
      </div>
    );
  }
);

Page.displayName = "Page";

export default function EducationFlipbookHTML() {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showTOC, setShowTOC] = useState(false);

  const magazineContent = [
    {
      id: "cover",
      type: "cover",
      content: (
        <div className="relative w-full h-full overflow-hidden">
          {/* Background Image Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-library-brown via-library-brown-dark to-library-brown-darkest" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Magazine Header */}
          <div className="absolute top-6 left-0 right-0 flex justify-between items-start px-8">
            <div>
              <p className="text-library-gold text-xs tracking-[0.3em] uppercase mb-1">Issue #1</p>
              <p className="text-library-cream/60 text-xs">2025 Edition</p>
            </div>
            <div className="text-right">
              <p className="text-library-gold text-xs tracking-[0.3em] uppercase mb-1">Premium</p>
              <p className="text-library-cream/60 text-xs">Cannabis Guide</p>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-8">
            <div className="mb-6">
              <div className="w-40 h-40 flex items-center justify-center mx-auto">
                <img 
                  src="/the-library-logo.png" 
                  alt="The Library" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <h1 className="text-4xl font-display text-library-gold mb-3 tracking-wider">ELEVATE</h1>
            <div className="w-32 h-0.5 bg-library-gold mb-3" />
            <p className="text-library-cream text-sm tracking-[0.2em] uppercase mb-8">Your Cannabis Journey</p>
            
            {/* Cover Lines */}
            <div className="space-y-2 text-center">
              <p className="text-library-cream/80 text-xs font-bold tracking-wider">INSIDE THIS ISSUE</p>
              <p className="text-library-cream/60 text-xs">Cannabinoid Science • Strain Guide</p>
              <p className="text-library-cream/60 text-xs">Wellness Tips • Local Laws</p>
              <p className="text-library-cream/60 text-xs">Product Spotlights • And More</p>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm px-8 py-4">
            <p className="text-library-cream/50 text-xs text-center">West Orange's Premier Cannabis Destination</p>
          </div>
        </div>
      )
    },
    {
      id: "contents",
      type: "contents",
      content: (
        <div className="relative w-full h-full bg-gradient-to-br from-library-cream to-white">
          {/* Magazine Style Header */}
          <div className="bg-library-brown px-8 py-6">
            <h2 className="text-2xl font-display text-library-gold mb-1">Contents</h2>
            <p className="text-library-cream/60 text-xs tracking-wider uppercase">What's Inside</p>
          </div>
          
          <div className="p-8 space-y-6">
            {/* Featured Articles */}
            <div>
              <h3 className="text-xs font-bold text-library-brown/50 tracking-[0.2em] uppercase mb-3">Features</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="text-2xl font-display text-library-gold">03</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-library-brown group-hover:text-library-gold transition-colors">The Science of Cannabis</h4>
                    <p className="text-xs text-library-black/60">Understanding cannabinoids and their effects on your body</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="text-2xl font-display text-library-teal">05</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-library-brown group-hover:text-library-teal transition-colors">Find Your Perfect Strain</h4>
                    <p className="text-xs text-library-black/60">Navigate indica, sativa, and hybrid varieties like a pro</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="text-2xl font-display text-library-burgundy">07</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-library-brown group-hover:text-library-burgundy transition-colors">Consumption Methods</h4>
                    <p className="text-xs text-library-black/60">From flower to edibles: choosing your experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Departments */}
            <div>
              <h3 className="text-xs font-bold text-library-brown/50 tracking-[0.2em] uppercase mb-3">Departments</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="border-l-2 border-library-gold/30 pl-3">
                  <p className="text-xs font-bold text-library-brown">Wellness Focus</p>
                  <p className="text-xs text-library-black/50">Page 09</p>
                </div>
                <div className="border-l-2 border-library-teal/30 pl-3">
                  <p className="text-xs font-bold text-library-brown">Safety First</p>
                  <p className="text-xs text-library-black/50">Page 11</p>
                </div>
                <div className="border-l-2 border-library-burgundy/30 pl-3">
                  <p className="text-xs font-bold text-library-brown">Know the Law</p>
                  <p className="text-xs text-library-black/50">Page 13</p>
                </div>
                <div className="border-l-2 border-library-gold/30 pl-3">
                  <p className="text-xs font-bold text-library-brown">Visit Us</p>
                  <p className="text-xs text-library-black/50">Page 15</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Design Element */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-library-gold/10 rounded-lg p-4 text-center">
              <p className="text-xs text-library-brown/70 italic">"Elevating experiences, one visit at a time"</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "cannabinoids-spread-left",
      type: "feature",
      content: (
        <div className="relative w-full h-full bg-white overflow-hidden">
          {/* Large Feature Number */}
          <div className="absolute top-8 left-8 text-8xl font-display text-library-gold/10">01</div>
          
          {/* Article Header */}
          <div className="relative px-8 pt-16 pb-6">
            <p className="text-xs text-library-gold font-bold tracking-[0.2em] uppercase mb-2">The Science</p>
            <h1 className="text-3xl font-display text-library-brown leading-tight">
              Cannabinoid<br/>Revolution
            </h1>
          </div>
          
          {/* Feature Image Area */}
          <div className="px-8 mb-6">
            <div className="relative h-32 bg-gradient-to-br from-library-gold/20 to-library-gold/5 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-20">🧬</div>
              </div>
              <div className="absolute bottom-2 left-3">
                <p className="text-xs text-library-brown/70 font-bold">100+ Compounds</p>
                <p className="text-xs text-library-brown/50">Discovered & counting</p>
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="px-8 pb-8">
            <p className="text-xs text-library-black/80 leading-relaxed mb-4">
              <span className="text-2xl font-display text-library-gold float-left mr-2 leading-none">T</span>he cannabis plant is nature's pharmacy, containing over 100 different cannabinoids that interact with our body's endocannabinoid system in fascinating ways.
            </p>
            
            <p className="text-xs text-library-black/70 leading-relaxed mb-3">
              From THC and CBD to emerging compounds like CBG, CBN, and CBC, each cannabinoid offers unique properties for mood, pain, inflammation and sleep.
            </p>
            
            {/* Pull Quote */}
            <div className="border-l-4 border-library-gold pl-3 my-3">
              <p className="text-xs font-bold text-library-brown italic">
                "Understanding cannabinoids is key to personalizing your experience"
              </p>
            </div>
          </div>
          
          {/* Page Number */}
          <div className="absolute bottom-4 left-8">
            <p className="text-xs text-library-brown/30">03</p>
          </div>
        </div>
      )
    },
    {
      id: "cannabinoids-spread-right",
      type: "feature",
      content: (
        <div className="relative w-full h-full bg-gradient-to-br from-white to-library-cream/30">
          <div className="p-8 h-full flex flex-col">
            {/* Section Header */}
            <div className="mb-6">
              <h3 className="text-base font-display text-library-brown mb-2">Know Your Cannabinoids</h3>
              <div className="w-16 h-0.5 bg-library-gold"></div>
            </div>
            
            {/* Cannabinoid Cards Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white rounded-lg p-3 shadow-sm border border-library-gold/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-library-gold" />
                  <h4 className="font-bold text-xs text-library-brown">THC</h4>
                </div>
                <p className="text-xs text-library-black/60 leading-tight">
                  Psychoactive • Euphoria<br/>
                  Pain Relief • Appetite
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm border border-library-teal/20">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-4 h-4 text-library-teal" />
                  <h4 className="font-bold text-xs text-library-brown">CBD</h4>
                </div>
                <p className="text-xs text-library-black/60 leading-tight">
                  Non-Psychoactive • Calm<br/>
                  Anti-Inflammatory • Focus
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm border border-library-burgundy/20">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-library-burgundy" />
                  <h4 className="font-bold text-xs text-library-brown">CBG</h4>
                </div>
                <p className="text-xs text-library-black/60 leading-tight">
                  Energy • Clarity<br/>
                  Neuroprotective
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm border border-library-gold/20">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-library-gold" />
                  <h4 className="font-bold text-xs text-library-brown">CBN</h4>
                </div>
                <p className="text-xs text-library-black/60 leading-tight">
                  Sedative • Sleep<br/>
                  Relaxation
                </p>
              </div>
            </div>
            
            {/* The Entourage Effect Box */}
            <div className="bg-gradient-to-r from-library-gold/10 to-library-teal/10 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-xs text-library-brown mb-2">The Entourage Effect</h4>
              <p className="text-xs text-library-black/70 leading-tight">
                When cannabinoids and terpenes work together, they create synergistic effects that enhance benefits.
              </p>
            </div>
            
            {/* Pro Tip */}
            <div className="mt-auto bg-library-brown text-library-cream rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-library-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold mb-1">Pro Tip</p>
                  <p className="text-xs opacity-80">
                    Ask our budtenders about specific cannabinoid profiles to match your wellness goals.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Page Number */}
            <div className="text-right mt-3">
              <p className="text-xs text-library-brown/30">04</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "strains-spread-left",
      type: "feature",
      content: (
        <div className="relative w-full h-full bg-gradient-to-br from-library-teal/5 to-white overflow-hidden">
          {/* Large Feature Number */}
          <div className="absolute top-8 right-8 text-8xl font-display text-library-teal/10">02</div>
          
          <div className="p-8 h-full flex flex-col">
            {/* Article Header */}
            <div className="mb-6">
              <p className="text-xs text-library-teal font-bold tracking-[0.2em] uppercase mb-2">Strain Guide</p>
              <h1 className="text-3xl font-display text-library-brown leading-tight mb-3">
                Find Your<br/>Perfect Match
              </h1>
              <div className="w-20 h-0.5 bg-library-teal"></div>
            </div>
            
            {/* Visual Comparison */}
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {/* Indica Card */}
                <div className="bg-gradient-to-b from-library-teal/20 to-library-teal/5 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-2">🌙</div>
                  <h4 className="font-bold text-xs text-library-brown mb-1">INDICA</h4>
                  <p className="text-xs text-library-black/60 leading-tight">
                    Body High<br/>
                    Relaxation<br/>
                    Evening
                  </p>
                </div>
                
                {/* Hybrid Card */}
                <div className="bg-gradient-to-b from-library-gold/20 to-library-gold/5 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-2">⚖️</div>
                  <h4 className="font-bold text-xs text-library-brown mb-1">HYBRID</h4>
                  <p className="text-xs text-library-black/60 leading-tight">
                    Balanced<br/>
                    Versatile<br/>
                    Anytime
                  </p>
                </div>
                
                {/* Sativa Card */}
                <div className="bg-gradient-to-b from-library-burgundy/20 to-library-burgundy/5 rounded-lg p-3 text-center">
                  <div className="text-2xl mb-2">☀️</div>
                  <h4 className="font-bold text-xs text-library-brown mb-1">SATIVA</h4>
                  <p className="text-xs text-library-black/60 leading-tight">
                    Head High<br/>
                    Energy<br/>
                    Daytime
                  </p>
                </div>
              </div>
              
              {/* Article Text */}
              <div className="bg-white/80 rounded-lg p-4">
                <p className="text-xs text-library-black/80 leading-relaxed mb-3">
                  <span className="text-xl font-display text-library-teal float-left mr-2 leading-none">W</span>hile modern science shows effects depend more on terpene profiles than traditional classifications, these categories remain helpful guides.
                </p>
                
                <p className="text-xs text-library-black/70 leading-relaxed">
                  Today's cultivators have created thousands of unique strains with distinct flavors and effects.
                </p>
              </div>
            </div>
            
            {/* Page Number */}
            <div className="mt-auto">
              <p className="text-xs text-library-brown/30">05</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "strains-spread-right",
      type: "feature",
      content: (
        <div className="relative w-full h-full bg-white">
          <div className="p-8 h-full flex flex-col">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-base font-display text-library-brown mb-2">Terpene Profiles</h3>
              <p className="text-xs text-library-black/60">The secret behind strain effects</p>
            </div>
            
            {/* Terpene Grid */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-3 bg-gradient-to-r from-library-gold/5 to-transparent p-2 rounded">
                <div className="w-8 h-8 bg-library-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-xs">🍋</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-library-brown">Limonene</p>
                  <p className="text-xs text-library-black/60">Uplifting • Citrus • Anti-anxiety</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-gradient-to-r from-library-teal/5 to-transparent p-2 rounded">
                <div className="w-8 h-8 bg-library-teal/20 rounded-full flex items-center justify-center">
                  <span className="text-xs">🌲</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-library-brown">Pinene</p>
                  <p className="text-xs text-library-black/60">Focus • Pine • Memory</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-gradient-to-r from-library-burgundy/5 to-transparent p-2 rounded">
                <div className="w-8 h-8 bg-library-burgundy/20 rounded-full flex items-center justify-center">
                  <span className="text-xs">💜</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-library-brown">Linalool</p>
                  <p className="text-xs text-library-black/60">Calming • Lavender • Sleep</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-gradient-to-r from-library-gold/5 to-transparent p-2 rounded">
                <div className="w-8 h-8 bg-library-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-xs">🥭</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-library-brown">Myrcene</p>
                  <p className="text-xs text-library-black/60">Sedating • Mango • Relaxation</p>
                </div>
              </div>
            </div>
            
            {/* Spotlight Box */}
            <div className="bg-gradient-to-br from-library-teal/10 to-library-gold/10 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-xs text-library-brown mb-2">Staff Picks This Month</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-xs font-bold text-library-brown">Blue Dream</p>
                  <p className="text-xs text-library-teal">Hybrid</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-bold text-library-brown">OG Kush</p>
                  <p className="text-xs text-library-gold">Indica</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-bold text-library-brown">Jack Herer</p>
                  <p className="text-xs text-library-burgundy">Sativa</p>
                </div>
              </div>
            </div>
            
            {/* Quote */}
            <div className="mt-auto border-t border-library-gold/20 pt-3">
              <p className="text-xs text-library-brown/70 italic text-center">
                "It's not just indica vs sativa anymore - it's about finding your unique chemistry match"
              </p>
            </div>
            
            {/* Page Number */}
            <div className="text-right mt-2">
              <p className="text-xs text-library-brown/30">06</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "consumption-spread-left",
      type: "feature",
      content: (
        <div className="relative w-full h-full bg-gradient-to-br from-library-burgundy/5 to-white">
          {/* Large Feature Number */}
          <div className="absolute top-8 left-8 text-8xl font-display text-library-burgundy/10">03</div>
          
          <div className="relative p-8 h-full flex flex-col">
            {/* Header */}
            <div className="mb-6 pt-8">
              <p className="text-xs text-library-burgundy font-bold tracking-[0.2em] uppercase mb-2">Methods</p>
              <h1 className="text-3xl font-display text-library-brown leading-tight mb-3">
                Choose Your<br/>Adventure
              </h1>
              <div className="w-20 h-0.5 bg-library-burgundy"></div>
            </div>
            
            {/* Consumption Timeline */}
            <div className="flex-1">
              <h3 className="text-xs font-bold text-library-brown mb-3">Onset & Duration Guide</h3>
              
              <div className="space-y-3">
                {/* Inhalation */}
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">💨</span>
                      <h4 className="font-bold text-xs text-library-brown">Inhalation</h4>
                    </div>
                    <p className="text-xs text-library-burgundy font-bold">5-10 min</p>
                  </div>
                  <div className="relative h-2 bg-library-cream rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-library-burgundy to-library-burgundy/50 rounded-full"></div>
                  </div>
                  <p className="text-xs text-library-black/60 mt-1">Duration: 1-3 hours</p>
                </div>
                
                {/* Sublingual */}
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">💧</span>
                      <h4 className="font-bold text-xs text-library-brown">Sublingual</h4>
                    </div>
                    <p className="text-xs text-library-teal font-bold">15-45 min</p>
                  </div>
                  <div className="relative h-2 bg-library-cream rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-library-teal to-library-teal/50 rounded-full"></div>
                  </div>
                  <p className="text-xs text-library-black/60 mt-1">Duration: 2-4 hours</p>
                </div>
                
                {/* Edibles */}
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🍪</span>
                      <h4 className="font-bold text-xs text-library-brown">Edibles</h4>
                    </div>
                    <p className="text-xs text-library-gold font-bold">30-120 min</p>
                  </div>
                  <div className="relative h-2 bg-library-cream rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-3/4 bg-gradient-to-r from-library-gold to-library-gold/50 rounded-full"></div>
                  </div>
                  <p className="text-xs text-library-black/60 mt-1">Duration: 4-8 hours</p>
                </div>
              </div>
              
              {/* Warning Box */}
              <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-xs text-library-brown font-bold mb-1">⚠️ Golden Rule</p>
                <p className="text-xs text-library-brown/70">Start low and go slow, especially with edibles!</p>
              </div>
            </div>
            
            {/* Page Number */}
            <div className="mt-auto">
              <p className="text-xs text-library-brown/30">07</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "consumption-spread-right",
      type: "feature",
      content: (
        <div className="relative w-full h-full bg-white">
          <div className="p-8 h-full flex flex-col">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-base font-display text-library-brown mb-2">Product Spotlight</h3>
              <div className="w-16 h-0.5 bg-library-gold"></div>
            </div>
            
            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="border border-library-gold/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🌸</div>
                <h4 className="font-bold text-xs text-library-brown mb-1">Premium Flower</h4>
                <p className="text-xs text-library-black/60">Hand-selected buds</p>
                <p className="text-xs text-library-gold font-bold mt-2">Classic Choice</p>
              </div>
              
              <div className="border border-library-teal/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🔋</div>
                <h4 className="font-bold text-xs text-library-brown mb-1">Vape Cartridges</h4>
                <p className="text-xs text-library-black/60">Discrete & potent</p>
                <p className="text-xs text-library-teal font-bold mt-2">On-the-Go</p>
              </div>
              
              <div className="border border-library-burgundy/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🍫</div>
                <h4 className="font-bold text-xs text-library-brown mb-1">Gourmet Edibles</h4>
                <p className="text-xs text-library-black/60">Precise dosing</p>
                <p className="text-xs text-library-burgundy font-bold mt-2">Long-Lasting</p>
              </div>
              
              <div className="border border-library-gold/20 rounded-lg p-3 text-center">
                <div className="text-2xl mb-2">🧴</div>
                <h4 className="font-bold text-xs text-library-brown mb-1">Topicals</h4>
                <p className="text-xs text-library-black/60">Targeted relief</p>
                <p className="text-xs text-library-gold font-bold mt-2">No High</p>
              </div>
            </div>
            
            {/* New Arrivals */}
            <div className="bg-gradient-to-r from-library-gold/10 to-library-teal/10 rounded-lg p-3 mb-4">
              <h4 className="font-bold text-xs text-library-brown mb-2">🆕 New This Month</h4>
              <ul className="space-y-1">
                <li className="text-xs text-library-black/70">• Live Resin Concentrates</li>
                <li className="text-xs text-library-black/70">• Nano-Enhanced Beverages</li>
                <li className="text-xs text-library-black/70">• Full-Spectrum Tinctures</li>
              </ul>
            </div>
            
            {/* Expert Advice */}
            <div className="mt-auto bg-library-brown text-library-cream rounded-lg p-3">
              <p className="text-xs font-bold mb-1">Ask Our Budtenders</p>
              <p className="text-xs opacity-80">We'll help you find the perfect consumption method for your lifestyle and goals.</p>
            </div>
            
            {/* Page Number */}
            <div className="text-right mt-3">
              <p className="text-xs text-library-brown/30">08</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "wellness-spread",
      type: "department",
      content: (
        <div className="relative w-full h-full bg-gradient-to-br from-library-gold/5 via-white to-library-teal/5">
          <div className="p-8 h-full flex flex-col">
            {/* Department Header */}
            <div className="border-b-2 border-library-gold pb-3 mb-6">
              <p className="text-xs text-library-gold font-bold tracking-[0.2em] uppercase">Wellness</p>
              <h2 className="text-2xl font-display text-library-brown">Cannabis & Health</h2>
            </div>
            
            {/* Wellness Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-library-gold/20 to-library-gold/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="font-bold text-xs text-library-brown mb-1">Mental Wellness</h4>
                <p className="text-xs text-library-black/60">Anxiety • Stress • Mood</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-library-teal/20 to-library-teal/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">💪</span>
                </div>
                <h4 className="font-bold text-xs text-library-brown mb-1">Physical Relief</h4>
                <p className="text-xs text-library-black/60">Pain • Inflammation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-library-burgundy/20 to-library-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">😴</span>
                </div>
                <h4 className="font-bold text-xs text-library-brown mb-1">Better Sleep</h4>
                <p className="text-xs text-library-black/60">Insomnia • Rest</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-library-gold/20 to-library-gold/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h4 className="font-bold text-xs text-library-brown mb-1">Appetite</h4>
                <p className="text-xs text-library-black/60">Stimulation • Nausea</p>
              </div>
            </div>
            
            {/* Wellness Tips */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-bold text-xs text-library-brown mb-3">Personalized Wellness Plans</h3>
              <p className="text-xs text-library-black/70 leading-tight mb-3">
                Every person's endocannabinoid system is unique. We take a personalized approach to cannabis wellness.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-library-gold/20 flex-shrink-0 mt-0.5"></div>
                  <p className="text-xs text-library-black/70">Track your experiences with different products</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-library-teal/20 flex-shrink-0 mt-0.5"></div>
                  <p className="text-xs text-library-black/70">Start with micro-doses to find your sweet spot</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-library-burgundy/20 flex-shrink-0 mt-0.5"></div>
                  <p className="text-xs text-library-black/70">Consider time of day and activity level</p>
                </div>
              </div>
            </div>
            
            {/* Page Numbers */}
            <div className="mt-auto flex justify-between">
              <p className="text-xs text-library-brown/30">09</p>
              <p className="text-xs text-library-brown/30">10</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "safety-spread",
      type: "department",
      content: (
        <div className="relative w-full h-full bg-gradient-to-br from-library-teal/5 to-white">
          <div className="p-8 h-full flex flex-col">
            {/* Department Header */}
            <div className="border-b-2 border-library-teal pb-3 mb-6">
              <p className="text-xs text-library-teal font-bold tracking-[0.2em] uppercase">Safety</p>
              <h2 className="text-2xl font-display text-library-brown">Responsible Use</h2>
            </div>
            
            {/* Safety Guidelines */}
            <div className="space-y-3 mb-4">
              <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-library-teal">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-library-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-library-brown mb-1">Start Low, Go Slow</h4>
                    <p className="text-xs text-library-black/70">Begin with minimal doses, especially with edibles.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-library-gold">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-library-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-library-brown mb-1">Safe Storage</h4>
                    <p className="text-xs text-library-black/70">Keep products locked away from children and pets.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-library-burgundy">
                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-library-burgundy flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs text-library-brown mb-1">Never Drive Impaired</h4>
                    <p className="text-xs text-library-black/70">Plan safe transportation before consuming.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Emergency Info */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="text-xs font-bold text-red-800 mb-1">If You've Had Too Much:</p>
              <ul className="space-y-1">
                <li className="text-xs text-red-700">• Stay calm - effects will pass</li>
                <li className="text-xs text-red-700">• Find a safe, comfortable space</li>
                <li className="text-xs text-red-700">• Stay hydrated with water</li>
                <li className="text-xs text-red-700">• Call a friend if needed</li>
              </ul>
            </div>
            
            {/* Tolerance Tips */}
            <div className="mt-auto bg-library-cream rounded-lg p-3">
              <p className="text-xs font-bold text-library-brown mb-1">Building Tolerance?</p>
              <p className="text-xs text-library-black/70">Take regular tolerance breaks to reset your system and maintain effectiveness.</p>
            </div>
            
            {/* Page Numbers */}
            <div className="flex justify-between mt-3">
              <p className="text-xs text-library-brown/30">11</p>
              <p className="text-xs text-library-brown/30">12</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "legal-spread",
      type: "department",
      content: (
        <div className="relative w-full h-full bg-gradient-to-br from-library-burgundy/5 to-white">
          <div className="p-8 h-full flex flex-col">
            {/* Department Header */}
            <div className="border-b-2 border-library-burgundy pb-3 mb-6">
              <p className="text-xs text-library-burgundy font-bold tracking-[0.2em] uppercase">Legal</p>
              <h2 className="text-2xl font-display text-library-brown">Know NJ Law</h2>
            </div>
            
            {/* Legal Requirements Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gradient-to-br from-library-burgundy/10 to-library-burgundy/5 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-library-burgundy/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-library-brown">21+</span>
                  </div>
                  <h4 className="font-bold text-xs text-library-brown">Age Limit</h4>
                </div>
                <p className="text-xs text-library-black/70">Valid ID required</p>
              </div>
              
              <div className="bg-gradient-to-br from-library-gold/10 to-library-gold/5 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-library-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-xs">⚖️</span>
                  </div>
                  <h4 className="font-bold text-xs text-library-brown">Purchase</h4>
                </div>
                <p className="text-xs text-library-black/70">1 oz limit/day</p>
              </div>
              
              <div className="bg-gradient-to-br from-library-teal/10 to-library-teal/5 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-library-teal/20 rounded-full flex items-center justify-center">
                    <span className="text-xs">🏠</span>
                  </div>
                  <h4 className="font-bold text-xs text-library-brown">Use</h4>
                </div>
                <p className="text-xs text-library-black/70">Private property only</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-50 rounded-lg p-3 border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-xs">🚗</span>
                  </div>
                  <h4 className="font-bold text-xs text-library-brown">Driving</h4>
                </div>
                <p className="text-xs text-red-700">Zero tolerance</p>
              </div>
            </div>
            
            {/* Important Notes */}
            <div className="bg-library-cream rounded-lg p-3 mb-4">
              <h4 className="font-bold text-xs text-library-brown mb-2">Important to Know:</h4>
              <ul className="space-y-1">
                <li className="text-xs text-library-black/70">• No home cultivation for recreational users</li>
                <li className="text-xs text-library-black/70">• Cannot cross state lines with products</li>
                <li className="text-xs text-library-black/70">• No consumption in vehicles</li>
                <li className="text-xs text-library-black/70">• Workplace policies may apply</li>
              </ul>
            </div>
            
            {/* Update Notice */}
            <div className="mt-auto bg-library-brown text-library-cream rounded-lg p-3">
              <p className="text-xs">
                <span className="font-bold">Stay Updated:</span> Laws change. Visit nj.gov/cannabis for current regulations.
              </p>
            </div>
            
            {/* Page Numbers */}
            <div className="flex justify-between mt-3">
              <p className="text-xs text-library-brown/30">13</p>
              <p className="text-xs text-library-brown/30">14</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "visit-us",
      type: "back",
      content: (
        <div className="relative w-full h-full bg-gradient-to-br from-library-brown to-library-brown-dark">
          <div className="p-8 h-full flex flex-col text-library-cream">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-display text-library-gold mb-2">Visit The Library</h2>
              <p className="text-xs tracking-[0.2em] uppercase opacity-70">Your Local Cannabis Destination</p>
            </div>
            
            {/* Location Info */}
            <div className="bg-black/20 rounded-lg p-4 mb-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-library-gold" />
                  <div>
                    <p className="text-xs font-bold">Location</p>
                    <p className="text-xs opacity-80">1-3 Washington St<br/>West Orange, NJ</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-library-gold" />
                  <div>
                    <p className="text-xs font-bold">Hours</p>
                    <p className="text-xs opacity-80">Mon-Sat: 10am-9pm<br/>Sunday: 11am-7pm</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-library-gold" />
                  <div>
                    <p className="text-xs font-bold">Contact</p>
                    <p className="text-xs opacity-80">(973) 731-1199<br/>info@thelibraryNJ.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* What to Expect */}
            <div className="bg-library-gold/20 rounded-lg p-4 mb-4">
              <h3 className="text-sm font-bold text-library-gold mb-2">First Visit?</h3>
              <ul className="space-y-1">
                <li className="text-xs opacity-80">✓ Bring valid ID (21+)</li>
                <li className="text-xs opacity-80">✓ Cash & debit accepted</li>
                <li className="text-xs opacity-80">✓ Free parking available</li>
                <li className="text-xs opacity-80">✓ Expert staff to guide you</li>
              </ul>
            </div>
            
            {/* Loyalty Program */}
            <div className="mt-auto text-center">
              <div className="bg-library-gold text-library-brown rounded-lg p-3">
                <p className="text-xs font-bold mb-1">Join Our Loyalty Program</p>
                <p className="text-xs">Earn points on every purchase • Exclusive deals • Birthday rewards</p>
              </div>
            </div>
            
            {/* Page Number */}
            <div className="text-center mt-3">
              <p className="text-xs opacity-50">15</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "back-cover",
      type: "cover",
      content: (
        <div className="relative w-full h-full bg-gradient-to-br from-library-brown-darkest to-library-brown-dark flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <img 
                src="/the-library-logo.png" 
                alt="The Library" 
                className="w-full h-full object-contain opacity-40"
              />
            </div>
            <p className="text-library-cream/50 text-xs tracking-[0.2em] uppercase mb-2">
              The Library
            </p>
            <p className="text-library-cream/30 text-xs">
              © 2025 • West Orange, NJ
            </p>
            <div className="mt-8">
              <p className="text-library-gold/50 text-xs italic">
                "Knowledge is power"
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  const nextPage = () => {
    bookRef.current?.pageFlip()?.flipNext();
  };

  const prevPage = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  const goToPage = (pageNum: number) => {
    bookRef.current?.pageFlip()?.turnToPage(pageNum);
    setShowTOC(false);
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <PremiumBackground variant="section" enableParallax={false}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-display text-library-gold mb-4">
            Cannabis Magazine
          </h2>
          <p className="text-lg text-library-cream/80">
            Your premium guide to cannabis culture and education
          </p>
        </motion.div>

        {/* Book Container */}
        <div className="relative flex justify-center items-center min-h-[600px]">
          {/* Navigation Controls */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`absolute -left-16 z-20 p-3 rounded-full transition-all transform hover:scale-110 ${
              currentPage === 0 
                ? 'bg-library-cream/50 text-library-gold/50 cursor-not-allowed' 
                : 'bg-library-cream shadow-lg hover:shadow-xl text-library-brown'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage >= magazineContent.length - 1}
            className={`absolute -right-16 z-20 p-3 rounded-full transition-all transform hover:scale-110 ${
              currentPage >= magazineContent.length - 1
                ? 'bg-library-cream/50 text-library-gold/50 cursor-not-allowed' 
                : 'bg-library-cream shadow-lg hover:shadow-xl text-library-brown'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Table of Contents Button */}
          <button
            onClick={() => setShowTOC(!showTOC)}
            className="absolute top-0 right-0 z-20 p-2 rounded-lg bg-library-cream shadow-lg hover:shadow-xl text-library-brown transition-all"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Flip Book */}
          <div className="book-container" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }}>
            <HTMLFlipBook
              ref={bookRef}
              width={450}
              height={600}
              size="fixed"
              minWidth={300}
              maxWidth={500}
              minHeight={400}
              maxHeight={700}
              maxShadowOpacity={0.4}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={onFlip}
              className="demo-book"
              startPage={0}
              drawShadow={true}
              flippingTime={1000}
              usePortrait={false}
              startZIndex={0}
              autoSize={false}
              clickEventForward={true}
              swipeDistance={50}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {magazineContent.map((page) => (
                <Page key={page.id} className={page.type === 'cover' ? 'page-cover' : ''}>
                  {page.content}
                </Page>
              ))}
            </HTMLFlipBook>
          </div>
        </div>

        {/* Page Indicator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-library-cream/90 rounded-full shadow-md">
            <span className="text-library-brown/70 text-sm">Page</span>
            <span className="text-library-brown font-semibold">{currentPage + 1}</span>
            <span className="text-library-brown/70 text-sm">of</span>
            <span className="text-library-brown font-semibold">{magazineContent.length}</span>
          </div>
        </div>

        {/* Quick Navigation TOC */}
        {showTOC && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-12 right-0 z-30 bg-library-cream p-6 rounded-xl shadow-2xl min-w-[300px]"
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-library-gold/20">
              <h3 className="text-base font-display text-library-brown">Quick Navigation</h3>
              <button
                onClick={() => setShowTOC(false)}
                className="p-1 hover:bg-library-gold/10 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-library-brown/60" />
              </button>
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => goToPage(0)} className="text-left w-full px-3 py-2 hover:bg-library-gold/5 rounded-lg transition-colors">
                  <span className="text-library-brown text-sm">Cover</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToPage(1)} className="text-left w-full px-3 py-2 hover:bg-library-gold/5 rounded-lg transition-colors">
                  <span className="text-library-brown text-sm">Contents</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToPage(2)} className="text-left w-full px-3 py-2 hover:bg-library-gold/5 rounded-lg transition-colors">
                  <span className="text-library-brown text-sm">Cannabinoid Science</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToPage(4)} className="text-left w-full px-3 py-2 hover:bg-library-gold/5 rounded-lg transition-colors">
                  <span className="text-library-brown text-sm">Strain Guide</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToPage(6)} className="text-left w-full px-3 py-2 hover:bg-library-gold/5 rounded-lg transition-colors">
                  <span className="text-library-brown text-sm">Consumption Methods</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToPage(8)} className="text-left w-full px-3 py-2 hover:bg-library-gold/5 rounded-lg transition-colors">
                  <span className="text-library-brown text-sm">Wellness</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToPage(9)} className="text-left w-full px-3 py-2 hover:bg-library-gold/5 rounded-lg transition-colors">
                  <span className="text-library-brown text-sm">Safety</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToPage(10)} className="text-left w-full px-3 py-2 hover:bg-library-gold/5 rounded-lg transition-colors">
                  <span className="text-library-brown text-sm">NJ Laws</span>
                </button>
              </li>
              <li>
                <button onClick={() => goToPage(11)} className="text-left w-full px-3 py-2 hover:bg-library-gold/5 rounded-lg transition-colors">
                  <span className="text-library-brown text-sm">Visit Us</span>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
        </div>
      </PremiumBackground>

      {/* Custom Styles */}
      <style jsx global>{`
        .demo-book {
          margin: 0 auto;
          border-radius: 4px;
        }
        
        .page-content {
          background: white;
          width: 100%;
          height: 100%;
        }
        
        .stf__item {
          background: white !important;
        }
        
        @media (max-width: 768px) {
          .book-container {
            transform: scale(0.8);
          }
        }
      `}</style>
    </section>
  );
}
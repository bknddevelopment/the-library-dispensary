"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import { Menu, X, MapPin, Phone, Instagram, Calendar, PartyPopper } from "lucide-react";
import { getAssetPath } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#first-visit", label: "First Visit" },
    { href: "#location", label: "Location" },
    { href: "#education", label: "Education" },
  ];

  return (
    <>
      {/* Grand Opening Announcement Banner */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-library-gold via-library-gold/90 to-library-gold text-library-white overflow-hidden"
      >
        <div className="py-3 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
            <PartyPopper className="w-5 h-5 animate-pulse" />
            <span className="text-sm md:text-base font-semibold">
              GRAND OPENING - WEEK OF SEPTEMBER 15TH, 2025
            </span>
            <Calendar className="w-5 h-5" />
            <span className="hidden md:inline text-sm">
              | Join us for a week of celebration and community!
            </span>
            <PartyPopper className="w-5 h-5 animate-pulse" />
          </div>
        </div>
      </motion.div>

      {/* Top Bar */}
      <div className="bg-library-brown text-library-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-library-gold font-semibold">For inquiries:</span>
              <a href="tel:973-731-1199" className="flex items-center gap-1 hover:text-library-gold transition-colors">
                <Phone className="w-3 h-3" />
                <span>(973) 731-1199</span>
              </a>
            </div>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>1-3 Washington St, West Orange, NJ</span>
            </span>
          </div>
          <a
            href="https://instagram.com/thelibrarynj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-library-gold transition-colors"
          >
            <Instagram className="w-3 h-3" />
            <span>@thelibrarynj</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 bg-library-white transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src={getAssetPath("/the-library-logo.png")}
                alt="The Library Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-library-brown hover:text-library-gold transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://thelibrary.app.n8n.cloud/form/2de56228-8522-485f-af34-36b282fe359d"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-library-gold text-library-white px-6 py-2 rounded-full hover:bg-library-gold/90 transition-colors font-semibold"
              >
                Get Store Updates
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-library-brown hover:text-library-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-library-white border-t border-library-brown/10">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-library-brown hover:text-library-gold transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://thelibrary.app.n8n.cloud/form/2de56228-8522-485f-af34-36b282fe359d"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-library-gold text-library-white px-6 py-3 rounded-full hover:bg-library-gold/90 transition-colors font-semibold text-center"
              >
                Get Store Updates
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
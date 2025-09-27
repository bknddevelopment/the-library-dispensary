"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Phone, Instagram, Feather, BookOpen, Sparkles } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

interface BookSpine {
  id: string;
  label: string;
  href: string;
  color: string;
  width: number;
  author?: string;
}

export default function BookSpineNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);
  const pathname = usePathname();

  // Determine active section based on current pathname
  const activeSection = pathname === '/' ? null : pathname.substring(1);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bookSpines: BookSpine[] = [
    {
      id: "products",
      label: "Products",
      href: "/products",
      color: "bg-library-gold",
      width: 75,
      author: "Shop Online"
    },
    {
      id: "about",
      label: "About",
      href: "/about",
      color: "bg-library-emerald",
      width: 60,
      author: "Our Story"
    },
    {
      id: "services",
      label: "Services",
      href: "/services",
      color: "bg-library-burgundy",
      width: 70,
      author: "What We Offer"
    },
    {
      id: "first-visit",
      label: "First Visit",
      href: "/first-visit",
      color: "bg-library-copper",
      width: 80,
      author: "Getting Started"
    },
    {
      id: "location",
      label: "Location",
      href: "/location",
      color: "bg-library-gold-dark",
      width: 65,
      author: "Find Us"
    },
    {
      id: "education",
      label: "Education",
      href: "/education",
      color: "bg-library-emerald-light",
      width: 75,
      author: "Learn More"
    },
    {
      id: "art-collection",
      label: "Art",
      href: "/art-collection",
      color: "bg-library-burgundy-light",
      width: 60,
      author: "Gallery"
    },
  ];

  return (
    <>
      {/* Premium Top Bar */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-library-brown-darkest via-library-brown-dark to-library-brown-darkest text-library-cream py-2 px-3 sm:px-4 border-b border-library-gold/20"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-6">
            {/* Phone number removed - business doesn't have one yet */}
            {/* <div className="flex items-center gap-1 sm:gap-2">
              <Phone className="w-3 h-3 text-library-gold" />
              <span className="hidden sm:inline text-library-gold-light font-display text-xs uppercase tracking-wider">For Inquiries:</span>
              <a href="tel:973-731-1199" className="text-library-cream hover:text-library-gold transition-colors">
                (973) 731-1199
              </a>
            </div> */}
            <span className="hidden sm:flex items-center gap-2">
              <MapPin className="w-3 h-3 text-library-gold" />
              <span className="text-library-cream/80">1-3 Washington St, West Orange, NJ</span>
            </span>
          </div>
          <a
            href="https://instagram.com/thelibrarynj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-2 text-library-cream hover:text-library-gold transition-colors"
          >
            <Instagram className="w-3 h-3" />
            <span className="hidden sm:inline">@thelibrarynj</span>
            <span className="sm:hidden">IG</span>
          </a>
        </div>
      </motion.div>

      {/* Main Premium Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "glass-dark shadow-2xl backdrop-blur-xl" 
            : "bg-library-brown-darkest/95 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            {/* Animated Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-library-gold/20 rounded-full blur-xl group-hover:bg-library-gold/30 transition-colors" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getAssetPath("/the-library-logo.png")}
                  alt="The Library Cannabis Dispensary"
                  className="h-16 sm:h-20 w-auto object-contain relative z-10"
                />
                <Feather className="absolute -top-2 -right-2 w-6 h-6 text-library-gold opacity-0 group-hover:opacity-100 transition-opacity rotate-12" />
              </motion.div>
            </Link>

            {/* Desktop Book Spine Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-end gap-0 mr-8">
                {bookSpines.map((book) => (
                  <Link
                    key={book.id}
                    href={book.href}
                    className="relative group"
                    onMouseEnter={() => setHoveredBook(book.id)}
                    onMouseLeave={() => setHoveredBook(null)}
                    style={{ perspective: "1000px" }}
                  >
                    <motion.div
                      whileHover={{ 
                        y: -10,
                        rotateZ: -2,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      className={`
                        ${book.color} 
                        ${activeSection === book.id ? 'ring-2 ring-library-gold shadow-gold transform scale-105' : ''}
                        relative h-24 rounded-t-sm shadow-book transform-gpu transition-all duration-300
                        hover:shadow-2xl hover:brightness-110 gpu-accelerated
                      `}
                      style={{ 
                        width: `${book.width}px`,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Book spine design */}
                      <div className="absolute inset-0 p-2 flex flex-col justify-between overflow-hidden">
                        {/* Gold foil accents with shimmer */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-library-gold-shimmer to-transparent opacity-60 animate-shimmer" style={{ animationDuration: '4s' }} />
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-library-gold-shimmer to-transparent opacity-60 animate-shimmer" style={{ animationDuration: '4s', animationDelay: '2s' }} />
                        
                        {/* Title */}
                        <div className="text-library-cream font-display text-[11px] uppercase tracking-wide transform rotate-0 text-center font-semibold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                          {book.label}
                        </div>
                        
                        {/* Decorative element */}
                        <div className="flex justify-center my-1">
                          <div className="w-6 h-6 border border-library-gold/30 rounded-full flex items-center justify-center">
                            <BookOpen className="w-3 h-3 text-library-gold-light" />
                          </div>
                        </div>
                        
                        {/* Author */}
                        <div className="text-library-cream/70 text-[10px] text-center italic font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.4)' }}>
                          {book.author}
                        </div>
                      </div>

                      {/* Hover tooltip */}
                      <AnimatePresence>
                        {hoveredBook === book.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute -top-12 left-1/2 -translate-x-1/2 glass-gold px-3 py-1 rounded-full whitespace-nowrap"
                          >
                            <span className="text-library-cream text-xs font-medium">
                              {book.label}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Premium CTA Button */}
              <motion.a
                href="https://thelibrary.app.n8n.cloud/form/2de56228-8522-485f-af34-36b282fe359d"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 165, 116, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="relative group overflow-hidden rounded-full inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-library-gold via-library-gold-light to-library-gold animate-shimmer bg-[length:200%_100%]" />
                <span className="relative flex items-center gap-2 px-8 py-3 text-library-brown-darkest font-semibold">
                  <Sparkles className="w-4 h-4" />
                  Join Early Access
                </span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-library-gold hover:text-library-gold-light transition-colors p-2 glass rounded-lg"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass-dark border-t border-library-gold/20 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {bookSpines.map((book, index) => (
                  <motion.a
                    key={book.id}
                    href={book.href}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className={`
                      block py-3 px-4 rounded-lg text-library-cream hover:text-library-gold 
                      transition-all font-display text-sm uppercase tracking-wider
                      ${activeSection === book.id ? 'glass-gold' : 'hover:glass'}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span>{book.label}</span>
                      <span className="text-xs italic opacity-60">{book.author}</span>
                    </div>
                  </motion.a>
                ))}
                <motion.a
                  href="https://thelibrary.app.n8n.cloud/form/2de56228-8522-485f-af34-36b282fe359d"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="block w-full relative overflow-hidden rounded-full mt-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-library-gold via-library-gold-light to-library-gold animate-shimmer bg-[length:200%_100%]" />
                  <span className="relative flex items-center justify-center gap-2 px-6 py-3 text-library-brown-darkest font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Join Early Access
                  </span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
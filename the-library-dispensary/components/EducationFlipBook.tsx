"use client";

import React, { useRef, useCallback, useState, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  X,
  Menu,
  Beaker, 
  Sprout, 
  Brain, 
  Heart, 
  Shield,
  Sparkles,
  Cannabis
} from "lucide-react";

// Define page component with forwardRef for react-pageflip
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

interface BookPageProps {
  title: string;
  subtitle?: string;
  icon: React.ElementType;
  iconColor: string;
  content: string[];
  description: string;
  pageNumber: number;
  isLeftPage?: boolean;
  image?: string;
}

const BookPage = forwardRef<HTMLDivElement, BookPageProps>(
  ({ title, subtitle, icon: Icon, iconColor, content, description, pageNumber, isLeftPage, image }, ref) => {
    return (
      <Page ref={ref} className="book-page">
        <div className="relative w-full h-full bg-white">
          {isLeftPage ? (
            // Left page - Full image with overlay text
            <div className="relative w-full h-full">
              {image ? (
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-library-teal/10 to-library-gold/10 flex items-center justify-center">
                  <Icon className="w-48 h-48 text-library-gold/20" />
                </div>
              )}
              
              {/* Text overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-12 pb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-8 h-8 text-white/90" />
                  <div className="h-px flex-1 bg-white/30" />
                </div>
                <h2 className="text-4xl font-display text-white mb-2">{title}</h2>
                {subtitle && <p className="text-lg text-white/80 italic">{subtitle}</p>}
              </div>
              
              {/* Page number */}
              <div className="absolute bottom-4 left-8 text-white/50 text-sm font-serif">
                {pageNumber}
              </div>
            </div>
          ) : (
            // Right page - Text content with elegant typography
            <div className="relative w-full h-full p-12 flex flex-col">
              {/* Decorative header */}
              <div className="text-center mb-8">
                <div className="inline-block">
                  <Icon className={`w-12 h-12 ${iconColor} mb-3 mx-auto opacity-60`} />
                  <div className="flex items-center gap-3">
                    <div className="h-px w-16 bg-library-gold/30" />
                    <span className="text-library-gold/60 text-xs uppercase tracking-widest font-serif">Chapter {Math.ceil(pageNumber / 2)}</span>
                    <div className="h-px w-16 bg-library-gold/30" />
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1">
                {/* Opening paragraph with drop cap */}
                <p className="text-library-black/80 leading-relaxed mb-6 text-justify first-letter:float-left first-letter:text-6xl first-letter:font-display first-letter:text-library-gold first-letter:mr-2 first-letter:mt-1 first-letter:leading-none">
                  {description}
                </p>

                {/* Key points */}
                <div className="space-y-4">
                  {content.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-library-gold mt-1">•</span>
                      <p className="text-library-black/70 text-sm leading-relaxed text-justify">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Continue reading note */}
                {content.length > 3 && (
                  <p className="text-library-gold/60 text-xs italic mt-6 text-center">
                    ...continued in our consultation
                  </p>
                )}
              </div>

              {/* Footer quote */}
              <div className="mt-auto pt-6 border-t border-library-gold/10">
                <p className="text-xs text-library-black/40 italic text-center">
                  "Knowledge is the foundation of a mindful cannabis journey"
                </p>
              </div>

              {/* Page number */}
              <div className="absolute bottom-4 right-8 text-library-black/30 text-sm font-serif">
                {pageNumber}
              </div>
            </div>
          )}
        </div>
      </Page>
    );
  }
);

BookPage.displayName = "BookPage";

// Book Cover Component
const BookCover = forwardRef<HTMLDivElement, { isBack?: boolean }>(
  ({ isBack = false }, ref) => {
    return (
      <Page ref={ref} className="book-cover">
        <div className="relative w-full h-full bg-gradient-to-br from-library-brown via-library-brown-dark to-library-brown-darkest">
          {/* Leather texture effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full" style={{
              backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px),
                              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)`,
            }} />
          </div>

          {/* Embossed border */}
          <div className="absolute inset-6 border-2 border-library-gold/30" />
          <div className="absolute inset-8 border border-library-gold/20" />

          {!isBack ? (
            // Front cover
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-12">
              {/* Logo/Icon */}
              <div className="mb-8">
                <div className="w-24 h-24 rounded-full bg-library-gold/10 flex items-center justify-center backdrop-blur-sm">
                  <Cannabis className="w-12 h-12 text-library-gold" />
                </div>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl font-display text-library-cream mb-2 text-center tracking-wide">
                The Library
              </h1>
              <div className="w-24 h-0.5 bg-library-gold mb-4" />
              <h2 className="text-2xl font-serif text-library-gold mb-12 tracking-widest uppercase">
                Education Guide
              </h2>
              
              {/* Year */}
              <div className="mt-auto">
                <p className="text-library-cream/40 text-sm tracking-widest">2024</p>
              </div>
            </div>
          ) : (
            // Back cover
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-12">
              <Cannabis className="w-8 h-8 text-library-gold/30 mb-4" />
              <p className="text-library-cream/50 text-xs text-center">
                © 2024 The Library Cannabis Dispensary<br />
                West Orange, New Jersey
              </p>
            </div>
          )}
        </div>
      </Page>
    );
  }
);

BookCover.displayName = "BookCover";

export default function EducationFlipBook() {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [showTOC, setShowTOC] = useState(false);

  const educationTopics = [
    {
      icon: Beaker,
      title: "Understanding Cannabinoids",
      subtitle: "The Science Behind Cannabis",
      description: "Cannabis contains over 100 different cannabinoids, each with unique properties and potential benefits. Understanding these compounds is key to making informed choices about your cannabis journey.",
      iconColor: "text-library-gold",
      image: "/images/gallery/cannabis-science.jpg",
      content: [
        "THC (Tetrahydrocannabinol): The primary psychoactive compound responsible for the 'high' sensation.",
        "CBD (Cannabidiol): Non-psychoactive compound known for its calming effects and anti-inflammatory properties.",
        "The Entourage Effect: How cannabinoids work together synergistically to enhance therapeutic benefits."
      ]
    },
    {
      icon: Sprout,
      title: "Indica vs Sativa vs Hybrid",
      subtitle: "Choosing Your Experience",
      description: "While the traditional indica/sativa classification is evolving with our understanding of cannabis genetics, these categories still provide useful guidance for predicting effects.",
      iconColor: "text-library-teal",
      image: "/images/gallery/cannabis-strains.jpg",
      content: [
        "Indica Strains: Typically associated with relaxing, body-focused effects ideal for evening use.",
        "Sativa Strains: Often provide uplifting, cerebral effects suitable for daytime use.",
        "Hybrid Varieties: Balanced strains offering customized effects combining the best of both worlds."
      ]
    },
    {
      icon: Brain,
      title: "Consumption Methods",
      subtitle: "Finding Your Preferred Path",
      description: "The way you consume cannabis significantly impacts your experience, from onset time to duration of effects. Each method offers unique advantages.",
      iconColor: "text-library-burgundy",
      image: "/images/gallery/consumption-methods.jpg",
      content: [
        "Inhalation Methods: Smoking and vaping provide rapid onset (5-10 minutes) with effects lasting 1-3 hours.",
        "Edibles: Longer onset (30-120 minutes) but extended duration (4-8 hours), ideal for sustained relief.",
        "Tinctures & Oils: Sublingual absorption offers moderate onset (15-45 minutes) with good bioavailability."
      ]
    },
    {
      icon: Heart,
      title: "Cannabis for Wellness",
      subtitle: "Supporting Your Health Journey",
      description: "Cannabis has been used medicinally for thousands of years, and modern research continues to uncover its therapeutic potential.",
      iconColor: "text-library-gold",
      image: "/images/gallery/wellness.jpg",
      content: [
        "Pain Management: How cannabis can help with chronic pain, inflammation, and muscle recovery.",
        "Mental Wellness: Potential benefits for anxiety, depression, and stress management.",
        "Sleep Support: Using cannabis to improve sleep quality and address insomnia."
      ]
    },
    {
      icon: Shield,
      title: "Safe & Responsible Use",
      subtitle: "Best Practices for Cannabis Consumers",
      description: "Responsible cannabis use ensures a positive experience while minimizing potential risks. Understanding proper storage, dosing, and consumption guidelines is essential.",
      iconColor: "text-library-teal",
      image: "/images/gallery/safety.jpg",
      content: [
        "Start Low, Go Slow: Begin with minimal doses and gradually increase to find your optimal level.",
        "Proper Storage: Keep products in cool, dark places away from children and pets.",
        "Impairment Awareness: Never drive or operate machinery under the influence of cannabis."
      ]
    },
    {
      icon: BookOpen,
      title: "New Jersey Cannabis Laws",
      subtitle: "Know Your Rights & Responsibilities",
      description: "New Jersey's cannabis laws provide a framework for legal adult use while maintaining important safety regulations.",
      iconColor: "text-library-burgundy",
      image: "/images/gallery/nj-laws.jpg",
      content: [
        "Age Requirements: Must be 21 or older for recreational use; valid ID required for all purchases.",
        "Purchase Limits: Adults can buy up to 1 ounce of flower or equivalent in other forms per day.",
        "Consumption Locations: Private property only; public consumption remains prohibited."
      ]
    }
  ];

  const onFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

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
    <section id="education-book" className="relative min-h-screen py-20 bg-gradient-to-br from-library-cream via-white to-library-cream/50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-display text-library-brown mb-4">
            Education Hub
          </h2>
          <p className="text-lg text-library-black/60">
            Explore our comprehensive cannabis education guide
          </p>
        </motion.div>

        {/* Book Container */}
        <div className="relative flex justify-center items-center min-h-[600px]">
          {/* Navigation Controls - Outside the book */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`absolute -left-16 z-20 p-3 rounded-full transition-all transform hover:scale-110 ${
              currentPage === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-white shadow-lg hover:shadow-xl text-library-brown'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage >= totalPages - 1}
            className={`absolute -right-16 z-20 p-3 rounded-full transition-all transform hover:scale-110 ${
              currentPage >= totalPages - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-white shadow-lg hover:shadow-xl text-library-brown'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Table of Contents Button */}
          <button
            onClick={() => setShowTOC(!showTOC)}
            className="absolute top-0 right-0 z-20 p-2 rounded-lg bg-white shadow-lg hover:shadow-xl text-library-brown transition-all"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Flip Book with shadow */}
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
              onChangeState={(e: any) => setTotalPages(e.data.pageCount)}
              className="demo-book"
              style={{}}
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
              useMouseEvents={true}
            >
              {/* Front Cover */}
              <BookCover />
              
              {/* Book Pages - Each topic gets a spread */}
              {educationTopics.map((topic, index) => (
                <React.Fragment key={topic.title}>
                  <BookPage
                    title={topic.title}
                    subtitle={topic.subtitle}
                    icon={topic.icon}
                    iconColor={topic.iconColor}
                    content={topic.content}
                    description={topic.description}
                    image={topic.image}
                    pageNumber={index * 2 + 1}
                    isLeftPage={true}
                  />
                  <BookPage
                    title={topic.title}
                    icon={topic.icon}
                    iconColor={topic.iconColor}
                    content={topic.content}
                    description={topic.description}
                    pageNumber={index * 2 + 2}
                    isLeftPage={false}
                  />
                </React.Fragment>
              ))}
              
              {/* Back Cover */}
              <BookCover isBack={true} />
            </HTMLFlipBook>
          </div>
        </div>

        {/* Page Indicator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full shadow-md">
            <span className="text-library-brown/60 text-sm">Page</span>
            <span className="text-library-brown font-semibold">{currentPage + 1}</span>
            <span className="text-library-brown/60 text-sm">of</span>
            <span className="text-library-brown font-semibold">{totalPages || 1}</span>
          </div>
        </div>

        {/* Table of Contents Overlay */}
        <AnimatePresence>
          {showTOC && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-12 right-0 z-30 bg-white p-6 rounded-xl shadow-2xl min-w-[300px]"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-library-gold/20">
                <h3 className="text-lg font-display text-library-brown">Table of Contents</h3>
                <button
                  onClick={() => setShowTOC(false)}
                  className="p-1 hover:bg-library-gold/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-library-brown/60" />
                </button>
              </div>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => goToPage(0)}
                    className="text-left w-full px-3 py-2 hover:bg-library-gold/5 rounded-lg transition-colors"
                  >
                    <span className="text-library-brown/60 text-sm">Cover</span>
                  </button>
                </li>
                {educationTopics.map((topic, index) => (
                  <li key={topic.title}>
                    <button
                      onClick={() => goToPage(index * 2 + 1)}
                      className="text-left w-full px-3 py-2 hover:bg-library-gold/5 rounded-lg transition-colors flex items-center gap-3"
                    >
                      <topic.icon className="w-4 h-4 text-library-gold flex-shrink-0" />
                      <span className="text-library-brown text-sm flex-1">{topic.title}</span>
                      <span className="text-library-brown/40 text-xs">
                        {index * 2 + 1}-{index * 2 + 2}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

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
        
        .book-cover {
          box-shadow: 
            inset 0 0 30px rgba(0, 0, 0, 0.1),
            inset -2px 0 10px rgba(0, 0, 0, 0.2);
        }
        
        .stf__item {
          background: white !important;
        }
        
        .stf__wrapper {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
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
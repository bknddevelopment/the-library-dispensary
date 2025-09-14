"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut,
  Download,
  FileText,
  Loader2,
  Maximize2
} from "lucide-react";

/**
 * PDFFlipbook Component
 * A premium PDF viewer with realistic page-flip effects for The Library Cannabis Dispensary
 * Uses pdfjs-dist for rendering and page-flip for the 3D turn effect
 */

// Dynamically load PDF.js to avoid SSR issues
const loadPdfJs = async () => {
  const pdfjsLib = await import("pdfjs-dist");
  // Set worker source directly as a string path
  // @ts-expect-error
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;
  return pdfjsLib;
};

// Dynamically load PageFlip library
const loadPageFlip = async () => {
  const mod = await import("page-flip");
  return mod.PageFlip;
};

interface PDFFlipbookProps {
  pdfUrl: string;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
  showDownload?: boolean;
  className?: string;
}

export default function PDFFlipbook({
  pdfUrl,
  title = "Education Guide",
  description = "Explore our comprehensive cannabis education materials",
  width = 500,
  height = 700,
  showDownload = true,
  className = "",
}: PDFFlipbookProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const flipRef = useRef<any>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState<number>(1);
  const [, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | undefined;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        // Load libraries
        const [pdfjsLib, PageFlip] = await Promise.all([
          loadPdfJs(),
          loadPageFlip()
        ]);

        // Load PDF document
        // @ts-expect-error
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        
        if (!mounted) return;
        setNumPages(pdf.numPages);

        // Render PDF pages to canvases
        const pages: HTMLCanvasElement[] = [];
        const targetScale = window.devicePixelRatio * 1.5; // High quality rendering

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: targetScale });
          
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          
          if (!ctx) continue;
          
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          
          await page.render({
            canvasContext: ctx,
            viewport: viewport
          }).promise;
          
          pages.push(canvas);
        }

        if (!mounted || !containerRef.current) return;

        // Build DOM structure for PageFlip
        const wrapper = document.createElement("div");
        wrapper.className = "flipbook-wrapper";
        
        const book = document.createElement("div");
        book.className = "flipbook-container";
        wrapper.appendChild(book);

        // Create cover page
        const coverPage = document.createElement("div");
        coverPage.className = "page page-cover";
        coverPage.innerHTML = `
          <div class="cover-content">
            <div class="cover-logo">
              <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h1 class="cover-title">The Library</h1>
            <div class="cover-divider"></div>
            <h2 class="cover-subtitle">${title}</h2>
            <p class="cover-year">2024</p>
          </div>
        `;
        book.appendChild(coverPage);

        // Add PDF pages
        for (const canvas of pages) {
          const pageEl = document.createElement("div");
          pageEl.className = "page page-content";
          
          const img = document.createElement("img");
          img.src = canvas.toDataURL("image/png");
          img.alt = "Page";
          img.className = "page-image";
          
          pageEl.appendChild(img);
          book.appendChild(pageEl);
        }

        // Add back cover
        const backCover = document.createElement("div");
        backCover.className = "page page-cover page-back";
        backCover.innerHTML = `
          <div class="cover-content">
            <p class="back-text">© 2024 The Library Cannabis Dispensary</p>
            <p class="back-text">West Orange, New Jersey</p>
          </div>
        `;
        book.appendChild(backCover);

        // Clear container and add new content
        const host = containerRef.current;
        host.innerHTML = "";
        host.appendChild(wrapper);

        // Initialize PageFlip
        // @ts-expect-error
        const flip = new PageFlip(book, {
          width: width,
          height: height,
          size: "stretch",
          minWidth: 300,
          maxWidth: 1000,
          minHeight: 400,
          maxHeight: 1200,
          showCover: true,
          maxShadowOpacity: 0.5,
          drawShadow: true,
          mobileScrollSupport: true,
          usePortrait: true,
          autoSize: true,
          startZIndex: 10,
          flippingTime: 1000,
          startPage: 0,
          swipeDistance: 50,
          showPageCorners: true,
          clickEventForward: false,
          disableFlipByClick: false
        });

        flipRef.current = flip;
        flip.loadFromHTML(document.querySelectorAll(".flipbook-container .page"));

        // Event listeners
        flip.on("flip", (e: { data: number }) => {
          setCurrentPage(e.data);
        });

        // Keyboard navigation
        const onKeyDown = (e: KeyboardEvent) => {
          if (e.key === "ArrowRight") flip.flipNext();
          if (e.key === "ArrowLeft") flip.flipPrev();
          if (e.key === "Home") flip.turnToPage(0);
          if (e.key === "End") flip.turnToPage(numPages + 1);
        };
        window.addEventListener("keydown", onKeyDown);

        cleanup = () => {
          window.removeEventListener("keydown", onKeyDown);
          try {
            flip.destroy();
          } catch (err) {
            console.error("Error destroying flip instance:", err);
          }
        };

        setLoading(false);
      } catch (err) {
        console.error("PDF Flipbook Error:", err);
        setError(err?.message || "Failed to load PDF");
        setLoading(false);
      }
    })();

    return () => {
      mounted = false;
      if (cleanup) cleanup();
    };
  }, [pdfUrl, width, height, title, numPages]);

  const handlePrevPage = () => {
    if (flipRef.current) {
      flipRef.current.flipPrev();
    }
  };

  const handleNextPage = () => {
    if (flipRef.current) {
      flipRef.current.flipNext();
    }
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <section className={`relative min-h-screen py-20 bg-gradient-to-br from-library-cream via-white to-library-cream/50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-library-gold" />
            <h2 className="text-4xl lg:text-5xl font-display text-library-brown">
              {title}
            </h2>
          </div>
          <p className="text-lg text-library-black/60 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Controls Bar */}
        <div className="flex items-center justify-between mb-6 bg-white rounded-xl p-4 shadow-md">
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="p-2 hover:bg-library-gold/10 rounded-lg transition-colors"
              title="Zoom out"
            >
              <ZoomOut className="w-5 h-5 text-library-brown" />
            </button>
            <span className="text-sm text-library-brown/60 min-w-[60px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-2 hover:bg-library-gold/10 rounded-lg transition-colors"
              title="Zoom in"
            >
              <ZoomIn className="w-5 h-5 text-library-brown" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-library-brown/60">
              Page {currentPage + 1} of {numPages + 2}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleFullscreen}
              className="p-2 hover:bg-library-gold/10 rounded-lg transition-colors"
              title="Fullscreen"
            >
              <Maximize2 className="w-5 h-5 text-library-brown" />
            </button>
            {showDownload && (
              <a
                href={pdfUrl}
                download
                className="p-2 hover:bg-library-gold/10 rounded-lg transition-colors"
                title="Download PDF"
              >
                <Download className="w-5 h-5 text-library-brown" />
              </a>
            )}
          </div>
        </div>

        {/* Flipbook Container */}
        <div className="relative flex justify-center items-center">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className={`absolute -left-16 z-20 p-3 rounded-full transition-all transform hover:scale-110 ${
              currentPage === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white shadow-lg hover:shadow-xl text-library-brown"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextPage}
            disabled={currentPage >= numPages + 1}
            className={`absolute -right-16 z-20 p-3 rounded-full transition-all transform hover:scale-110 ${
              currentPage >= numPages + 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white shadow-lg hover:shadow-xl text-library-brown"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Flipbook */}
          <div
            ref={containerRef}
            className="flipbook-main-container"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease",
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.2))",
              minHeight: height * scale,
            }}
          >
            {loading && (
              <div className="flex flex-col items-center justify-center h-[600px] bg-white rounded-lg shadow-lg">
                <Loader2 className="w-12 h-12 text-library-gold animate-spin mb-4" />
                <p className="text-library-brown/60">Loading education materials...</p>
              </div>
            )}
            {error && (
              <div className="flex flex-col items-center justify-center h-[400px] bg-white rounded-lg shadow-lg p-8">
                <FileText className="w-12 h-12 text-red-500 mb-4" />
                <p className="text-red-600 text-center">{error}</p>
                <p className="text-sm text-library-brown/60 mt-2">
                  Please try refreshing the page or contact support.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center">
          <p className="text-sm text-library-brown/50">
            <span className="font-semibold">Tips:</span> Use arrow keys to navigate • 
            Drag pages to flip • Pinch to zoom on mobile
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .flipbook-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .flipbook-container {
          width: 100%;
          height: 100%;
        }

        .page {
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.05);
        }

        .page-cover {
          background: linear-gradient(135deg, #3B2414 0%, #1F1107 100%);
          color: #D4A574;
          padding: 3rem;
        }

        .page-back {
          background: linear-gradient(135deg, #1F1107 0%, #3B2414 100%);
        }

        .cover-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
        }

        .cover-logo {
          color: #D4A574;
          margin-bottom: 2rem;
        }

        .cover-title {
          font-size: 3rem;
          font-weight: 300;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          font-family: 'Cinzel', serif;
        }

        .cover-divider {
          width: 80px;
          height: 2px;
          background: #D4A574;
          margin: 1.5rem 0;
        }

        .cover-subtitle {
          font-size: 1.5rem;
          font-weight: 400;
          letter-spacing: 0.05em;
          margin-bottom: auto;
        }

        .cover-year {
          font-size: 0.875rem;
          opacity: 0.6;
          letter-spacing: 0.2em;
        }

        .back-text {
          font-size: 0.75rem;
          opacity: 0.5;
          margin: 0.5rem 0;
        }

        .page-content {
          padding: 1rem;
          overflow: hidden;
        }

        .page-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .stf__wrapper {
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        }

        .stf__block {
          background: white !important;
        }

        .stf__item {
          background: white !important;
        }

        @media (max-width: 768px) {
          .flipbook-main-container {
            transform: scale(0.7) !important;
          }
        }
      `}</style>
    </section>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  srcSet?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
}

/**
 * Performance-optimized image component with lazy loading
 * Uses Intersection Observer for viewport detection
 * Supports WebP with JPG fallback
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes,
  srcSet,
  placeholder = 'blur',
  blurDataURL,
  onLoad
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized image paths
  const getOptimizedSrc = (originalSrc: string) => {
    const basePath = originalSrc.substring(0, originalSrc.lastIndexOf('.'));
    const webpSrc = `${basePath}.webp`;
    const jpgSrc = `${basePath}.jpg`;

    // Check if optimized versions exist
    if (originalSrc.includes('/gallery/')) {
      return {
        webp: originalSrc.replace('/gallery/', '/gallery-optimized/').replace(/\.[^.]+$/, '.webp'),
        jpg: originalSrc.replace('/gallery/', '/gallery-optimized/').replace(/\.[^.]+$/, '.jpg'),
        fallback: originalSrc
      };
    }

    if (originalSrc.includes('/public/') || originalSrc.startsWith('/')) {
      const optimizedPath = originalSrc.includes('/optimized/')
        ? originalSrc
        : originalSrc.replace(/^\//, '/optimized/');

      return {
        webp: optimizedPath.replace(/\.[^.]+$/, '.webp'),
        jpg: optimizedPath.replace(/\.[^.]+$/, '.jpg'),
        fallback: originalSrc
      };
    }

    return {
      webp: webpSrc,
      jpg: jpgSrc,
      fallback: originalSrc
    };
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.01
      }
    );

    observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority]);

  // Load image when in view
  useEffect(() => {
    if (isInView && src) {
      const { webp, jpg, fallback } = getOptimizedSrc(src);

      // Try WebP first
      const testWebP = new Image();
      testWebP.onload = () => setCurrentSrc(webp);
      testWebP.onerror = () => {
        // Fallback to JPG
        const testJpg = new Image();
        testJpg.onload = () => setCurrentSrc(jpg);
        testJpg.onerror = () => setCurrentSrc(fallback);
        testJpg.src = jpg;
      };
      testWebP.src = webp;
    }
  }, [isInView, src]);

  // Generate responsive srcSet
  const generateSrcSet = () => {
    if (srcSet) return srcSet;
    if (!currentSrc || !currentSrc.includes('.webp')) return undefined;

    const basePath = currentSrc.replace('.webp', '');
    return `
      ${basePath}-320w.webp 320w,
      ${basePath}-640w.webp 640w,
      ${basePath}-1024w.webp 1024w,
      ${currentSrc} 1920w
    `.trim();
  };

  // Default sizes for responsive images
  const defaultSizes = sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  // Blur placeholder
  const getPlaceholder = () => {
    if (placeholder === 'empty') return '';
    if (blurDataURL) return blurDataURL;

    // Tiny transparent image as placeholder
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3Crect width="1" height="1" fill="%23333333" fill-opacity="0.1"/%3E%3C/svg%3E';
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        backgroundColor: '#1a1a1a'
      }}
    >
      {/* Blur placeholder */}
      {!isLoaded && placeholder === 'blur' && (
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-lg scale-110"
          style={{
            backgroundImage: `url(${getPlaceholder()})`,
            backgroundColor: '#2a2a2a'
          }}
        />
      )}

      {/* Main image */}
      {isInView && currentSrc && (
        <motion.img
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          sizes={defaultSizes}
          srcSet={generateSrcSet()}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`w-full h-full object-cover ${isLoaded ? '' : 'opacity-0'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onLoad={() => {
            setIsLoaded(true);
            onLoad?.();
          }}
          onError={(e) => {
            console.error(`Failed to load image: ${currentSrc}`);
            // Try fallback
            const target = e.target as HTMLImageElement;
            if (target.src !== src) {
              target.src = src;
            }
          }}
        />
      )}

      {/* Loading skeleton */}
      {isInView && !isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
      )}
    </div>
  );
}
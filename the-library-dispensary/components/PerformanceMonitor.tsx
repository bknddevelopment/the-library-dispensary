import { useEffect } from 'react';

/**
 * Performance Monitoring Component
 * Tracks Core Web Vitals and reports to analytics
 */
export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and on client side
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return;
    }

    const reportWebVital = (metric: any) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vital] ${metric.name}:`, metric.value.toFixed(2), 'ms');
      }

      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          metric_name: metric.name,
          metric_value: metric.value,
          metric_delta: metric.delta,
          metric_id: metric.id,
          non_interaction: true,
        });
      }

      // Add performance marks for debugging
      if (window.performance && window.performance.mark) {
        window.performance.mark(`web-vital-${metric.name}-${metric.value}`);
      }
    };

    // Dynamic import for web-vitals to reduce initial bundle
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS(reportWebVital);
      onFID(reportWebVital);
      onFCP(reportWebVital);
      onLCP(reportWebVital);
      onTTFB(reportWebVital);
      onINP(reportWebVital);
    });

    // Monitor resource loading
    const observeResources = () => {
      if (!window.PerformanceObserver) return;

      try {
        // Monitor long tasks (blocking main thread)
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              console.warn(`[Performance] Long task detected:`, {
                duration: entry.duration.toFixed(2) + 'ms',
                startTime: entry.startTime.toFixed(2) + 'ms'
              });
            }
          }
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });

        // Monitor resource timing
        const resourceObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.duration > 1000) {
              console.warn(`[Performance] Slow resource:`, {
                name: resourceEntry.name,
                duration: resourceEntry.duration.toFixed(2) + 'ms',
                type: resourceEntry.initiatorType
              });
            }
          }
        });
        resourceObserver.observe({ entryTypes: ['resource'] });

        // Monitor layout shifts
        const layoutShiftObserver = new PerformanceObserver((list) => {
          let totalShift = 0;
          for (const entry of list.getEntries()) {
            const layoutEntry = entry as any;
            if (!layoutEntry.hadRecentInput) {
              totalShift += layoutEntry.value;
            }
          }
          if (totalShift > 0.1) {
            console.warn(`[Performance] Layout shift detected:`, totalShift.toFixed(3));
          }
        });
        layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.error('Failed to setup performance observers:', error);
      }
    };

    // Start monitoring after page load
    if (document.readyState === 'complete') {
      observeResources();
    } else {
      window.addEventListener('load', observeResources);
    }

    // Log initial page load metrics
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
            'TCP Connection': navigation.connectEnd - navigation.connectStart,
            'Request Time': navigation.responseStart - navigation.requestStart,
            'Response Time': navigation.responseEnd - navigation.responseStart,
            'DOM Processing': navigation.domComplete - navigation.domInteractive,
            'Load Complete': navigation.loadEventEnd - navigation.loadEventStart,
            'Total Time': navigation.loadEventEnd - navigation.fetchStart
          };

          console.log('[Performance] Page Load Metrics:', metrics);

          // Send critical metric to GA
          if ((window as any).gtag && metrics['Total Time'] > 3000) {
            (window as any).gtag('event', 'slow_page_load', {
              value: Math.round(metrics['Total Time']),
              page_path: window.location.pathname,
              non_interaction: true
            });
          }
        }
      }, 0);
    });

    // Cleanup
    return () => {
      // Observers are automatically garbage collected
    };
  }, []);

  return null; // This component doesn't render anything
}
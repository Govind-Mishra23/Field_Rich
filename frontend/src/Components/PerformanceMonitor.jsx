import { useEffect, useState } from 'react';

/**
 * Performance monitoring component for Field Rich website
 * Tracks Core Web Vitals and performance metrics
 */
export const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    // Only run in production for performance monitoring
    if (process.env.NODE_ENV !== 'production') return;

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      }

      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }

      // First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fid = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      }
    };

    // Track page load performance
    const trackPageLoad = () => {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
          setMetrics(prev => ({
            ...prev,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            totalLoadTime: navigation.loadEventEnd - navigation.fetchStart
          }));
        }
      });
    };

    // Track image loading performance
    const trackImagePerformance = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        img.addEventListener('load', () => {
          const loadTime = performance.now();
          setMetrics(prev => ({
            ...prev,
            imagesLoaded: (prev.imagesLoaded || 0) + 1,
            lastImageLoadTime: loadTime
          }));
        });
      });
    };

    // Initialize tracking
    trackWebVitals();
    trackPageLoad();
    trackImagePerformance();

    // Cleanup
    return () => {
      // Cleanup observers if needed
    };
  }, []);

  // Only show in development or when metrics are available
  if (process.env.NODE_ENV === 'production' && Object.keys(metrics).length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Metrics</div>
      {Object.entries(metrics).map(([key, value]) => (
        <div key={key} className="flex justify-between gap-4">
          <span className="text-gray-300">{key}:</span>
          <span className="text-green-400">
            {typeof value === 'number' ? `${value.toFixed(2)}ms` : value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PerformanceMonitor;

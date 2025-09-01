import { useEffect } from 'react';

/**
 * Lightweight scroll-to-top hook that runs only once per page load
 * Optimized for e-commerce websites with multiple product pages
 * Uses requestAnimationFrame for better performance
 */
export const useScrollToTop = () => {
  useEffect(() => {
    // Use requestAnimationFrame for better performance and smooth scrolling
    const scrollToTop = () => {
      requestAnimationFrame(() => {
        // Use 'instant' behavior for immediate scroll without animation
        // This prevents performance issues on slower devices
        window.scrollTo({ 
          top: 0, 
          behavior: 'instant' 
        });
      });
    };
    
    // Execute immediately
    scrollToTop();
    
    // No cleanup needed - this runs only once per page load
    // Empty dependency array ensures it doesn't re-run unnecessarily
  }, []); // Empty dependency array = runs only once
};

export default useScrollToTop;

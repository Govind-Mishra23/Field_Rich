/**
 * Performance optimization utilities for Field Rich website
 * Provides consistent, fast animations across all components
 */

// Fast animation presets for consistent performance
export const fastAnimations = {
  // Quick entrance animations
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, type: 'tween' }
  },
  
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3, type: 'tween' }
  },
  
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3, type: 'tween' }
  },
  
  // Snappy hover effects
  hoverLift: {
    whileHover: { y: -3 },
    transition: { type: 'tween', duration: 0.15 }
  },
  
  hoverScale: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'tween', duration: 0.15 }
  },
  
  // Fast image transitions
  imageTransition: {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
    transition: { duration: 0.2, type: 'tween' }
  }
};

// Performance-optimized transition presets
export const transitions = {
  fast: { duration: 0.2, type: 'tween' },
  medium: { duration: 0.3, type: 'tween' },
  slow: { duration: 0.4, type: 'tween' }
};

// Optimized hover effects
export const hoverEffects = {
  subtle: { y: -2, scale: 1.01 },
  medium: { y: -3, scale: 1.02 },
  strong: { y: -5, scale: 1.03 }
};

// Image loading optimization
export const imageOptimization = {
  // Preload images for faster display
  preloadImages: (imageUrls) => {
    if (!Array.isArray(imageUrls)) return;
    
    imageUrls.forEach(url => {
      if (url) {
        const img = new Image();
        img.src = url;
      }
    });
  },
  
  // Lazy loading with intersection observer
  lazyLoad: (element, callback) => {
    if (!element) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(element);
  }
};

// Animation performance helpers
export const animationHelpers = {
  // Reduce motion for users who prefer it
  prefersReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },
  
  // Get optimized duration based on user preference
  getOptimizedDuration: (defaultDuration) => {
    return animationHelpers.prefersReducedMotion() ? 0 : defaultDuration;
  },
  
  // Stagger animations with minimal delay
  getStaggerDelay: (index, baseDelay = 0.02) => {
    return animationHelpers.prefersReducedMotion() ? 0 : index * baseDelay;
  }
};

export default {
  fastAnimations,
  transitions,
  hoverEffects,
  imageOptimization,
  animationHelpers
};

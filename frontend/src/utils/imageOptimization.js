// Image optimization and lazy loading utilities for Hero Section

/**
 * Preloads images for better performance in hero carousel
 * @param {Array} imageSources - Array of image URLs to preload
 * @returns {Promise} Promise that resolves when all images are loaded
 */
export const preloadImages = (imageSources) => {
  return Promise.all(
    imageSources.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    })
  );
};

/**
 * Creates optimized image element with fallback
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {Object} options - Additional options for image optimization
 * @returns {HTMLImageElement} Optimized image element
 */
export const createOptimizedImage = (src, alt, options = {}) => {
  const img = new Image();
  
  // Set loading strategy
  img.loading = options.loading || 'eager';
  img.decoding = options.decoding || 'async';
  
  // Add optimization attributes
  img.style.imageRendering = 'crisp-edges';
  img.style.backfaceVisibility = 'hidden';
  img.style.transform = 'translateZ(0)';
  
  img.src = src;
  img.alt = alt;
  
  return img;
};

/**
 * Intersection Observer for lazy loading images
 * @param {Array} imageElements - Array of image elements to observe
 * @param {Object} options - Intersection Observer options
 */
export const setupLazyLoading = (imageElements, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '100px',
    threshold: 0.1,
    ...options
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('loading');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      }
    });
  }, defaultOptions);

  imageElements.forEach((img) => observer.observe(img));
  
  return observer;
};

/**
 * Gets optimal image dimensions based on viewport
 * @param {number} originalWidth - Original image width
 * @param {number} originalHeight - Original image height
 * @param {number} maxWidth - Maximum allowed width
 * @param {number} maxHeight - Maximum allowed height
 * @returns {Object} Optimized dimensions
 */
export const getOptimalDimensions = (originalWidth, originalHeight, maxWidth, maxHeight) => {
  const aspectRatio = originalWidth / originalHeight;
  
  let width = originalWidth;
  let height = originalHeight;
  
  // Scale down if width exceeds maximum
  if (width > maxWidth) {
    width = maxWidth;
    height = width / aspectRatio;
  }
  
  // Scale down if height exceeds maximum
  if (height > maxHeight) {
    height = maxHeight;
    width = height * aspectRatio;
  }
  
  return {
    width: Math.round(width),
    height: Math.round(height),
    aspectRatio
  };
};

/**
 * Responsive image sizes based on breakpoints
 * @param {string} imagePath - Base image path
 * @param {Object} sizes - Object with breakpoint sizes
 * @returns {string} Responsive srcset string
 */
export const generateResponsiveSrcSet = (imagePath, sizes = {}) => {
  const defaultSizes = {
    mobile: '480w',
    tablet: '768w',
    desktop: '1200w',
    large: '1920w',
    ...sizes
  };
  
  return Object.entries(defaultSizes)
    .map(([breakpoint, size]) => `${imagePath}?w=${size.replace('w', '')} ${size}`)
    .join(', ');
};

/**
 * Image blur-up effect for smooth loading
 * @param {HTMLImageElement} img - Image element
 * @param {string} lowQualitySrc - Low quality image source for placeholder
 */
export const setupBlurUpEffect = (img, lowQualitySrc) => {
  // Create low quality placeholder
  const placeholder = new Image();
  placeholder.className = 'absolute inset-0 filter blur-sm scale-110 transition-opacity duration-500';
  placeholder.src = lowQualitySrc;
  
  // Insert placeholder before main image
  img.parentNode.insertBefore(placeholder, img);
  
  // Add loading class to main image
  img.className += ' opacity-0 transition-opacity duration-500';
  
  // When main image loads, fade out placeholder
  img.onload = () => {
    img.classList.remove('opacity-0');
    setTimeout(() => {
      placeholder.style.opacity = '0';
      setTimeout(() => {
        if (placeholder.parentNode) {
          placeholder.parentNode.removeChild(placeholder);
        }
      }, 500);
    }, 100);
  };
};

/**
 * Performance monitoring for image loading
 * @param {Array} images - Array of image sources
 * @returns {Object} Performance metrics
 */
export const monitorImagePerformance = (images) => {
  const startTime = performance.now();
  let loadedCount = 0;
  const totalImages = images.length;
  
  return new Promise((resolve) => {
    images.forEach((src, index) => {
      const img = new Image();
      const imageStartTime = performance.now();
      
      img.onload = () => {
        loadedCount++;
        const imageLoadTime = performance.now() - imageStartTime;
        
        if (loadedCount === totalImages) {
          const totalLoadTime = performance.now() - startTime;
          resolve({
            totalLoadTime: totalLoadTime.toFixed(2),
            averageLoadTime: (totalLoadTime / totalImages).toFixed(2),
            imagesLoaded: loadedCount,
            totalImages
          });
        }
      };
      
      img.onerror = () => {
        loadedCount++;
        
        if (loadedCount === totalImages) {
          const totalLoadTime = performance.now() - startTime;
          resolve({
            totalLoadTime: totalLoadTime.toFixed(2),
            averageLoadTime: (totalLoadTime / totalImages).toFixed(2),
            imagesLoaded: loadedCount,
            totalImages,
            hasErrors: true
          });
        }
      };
      
      img.src = src;
    });
  });
};

/**
 * Checks if WebP format is supported by the browser
 * @returns {Promise<boolean>} Promise that resolves to true if WebP is supported
 */
export const checkWebPSupport = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Creates a responsive image element with multiple formats
 * @param {Object} config - Configuration object
 * @returns {HTMLPictureElement} Picture element with sources
 */
export const createResponsiveImage = (config) => {
  const { src, alt, webpSrc, sizes, className = '' } = config;
  
  const picture = document.createElement('picture');
  
  // Add WebP source if available
  if (webpSrc) {
    const webpSource = document.createElement('source');
    webpSource.srcset = webpSrc;
    webpSource.type = 'image/webp';
    if (sizes) webpSource.sizes = sizes;
    picture.appendChild(webpSource);
  }
  
  // Add fallback image
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.className = className;
  if (sizes) img.sizes = sizes;
  
  // Add optimization attributes
  img.loading = 'lazy';
  img.decoding = 'async';
  img.style.imageRendering = 'crisp-edges';
  
  picture.appendChild(img);
  
  return picture;
};

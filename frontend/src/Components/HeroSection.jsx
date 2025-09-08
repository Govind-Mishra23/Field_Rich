import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import banner1 from "../assets/Banners/1.png";
import banner2 from "../assets/Banners/2.png";
import banner3 from "../assets/Banners/3.png";
import { preloadImages } from "../utils/imageOptimization";

export const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const banners = [
    {
      src: banner1,
      alt: "Premium Spices",
      title: "Premium Spices Collection",
    },
    {
      src: banner2,
      alt: "Natural Ingredients",
      title: "100% Natural & Pure",
    },
    {
      src: banner3,
      alt: "Authentic Taste",
      title: "Authentic Indian Flavors",
    },
  ];

  // Preload all images for smooth transitions
  useEffect(() => {
    const imageSources = banners.map((banner) => banner.src);
    preloadImages(imageSources)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.warn("Some images failed to preload:", error);
        setImagesLoaded(true); // Continue anyway
      });
  }, []);

  useEffect(() => {
    if (!isPlaying || !imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length, isPlaying, imagesLoaded]);

  const goToSlide = (index) => {
    setCurrentBanner(index);
  };

  return (
    <section className="w-full bg-gradient-to-r from-amber-50 via-red-50 to-orange-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Main Content Container */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              >
                Discover the
                <span className="text-red-700 block">Finest Spices</span>
                for Your Kitchen
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed max-w-md"
              >
                Experience authentic flavors with our premium collection of
                spices, sourced directly from the finest farms across India.
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Shop Our Collection
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                100% Natural
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Premium Quality
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Authentic Taste
              </div>
            </motion.div>
          </div>

          {/* Right Image Carousel */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-gray-100 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Image Container with Crossfade */}
              <div className="relative h-80 md:h-96">
                {/* Render all images but show only the current one */}
                {banners.map((banner, index) => (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      opacity: currentBanner === index ? 1 : 0,
                      zIndex: currentBanner === index ? 2 : 1,
                    }}
                    transition={{
                      opacity: { duration: 0.8, ease: "easeInOut" },
                      zIndex: { duration: 0 },
                    }}
                    className="absolute inset-0"
                  >
                    <img
                      src={banner.src}
                      alt={banner.alt}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />

                    {/* Image Overlay with Title - Only show for current image */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: currentBanner === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg">
                          {banner.title}
                        </h3>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Loading state for smooth initial load */}
                {!imagesLoaded && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-gray-500 text-sm">Loading...</div>
                  </div>
                )}
              </div>

              {/* Simple Navigation Dots */}
              <div className="absolute bottom-4 right-4 z-10">
                <div className="flex gap-2">
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentBanner === index
                          ? "bg-white w-6"
                          : "bg-white/60 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-amber-200 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-red-200 rounded-full opacity-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

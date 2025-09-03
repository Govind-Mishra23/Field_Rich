import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { products, rawPowderImages } from "../data/products";

export const RawSpiceShowcase = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Map products to their corresponding raw images
  const getRawImageForProduct = (productName) => {
    const imageMap = {
      "Dhaniya Powder": rawPowderImages.dhaniyapowder,
      "Whole Pepper": rawPowderImages.wholepepper,
      "Turmeric Powder": rawPowderImages.turmericpowder,
      "Chilly Powder": rawPowderImages.chillypowder,
      "Jeera Powder": rawPowderImages.jeerapowder,
      "Garam Masala": rawPowderImages.garammasala,
      "Pepper Powder": rawPowderImages.pepperpowder,
    };
    return imageMap[productName]; // Return the raw image if found, undefined if not found
  };

  // Calculate grid positions responsive for different screen sizes
  const getGridPosition = (index, isMobile, isTablet) => {
    if (isMobile) {
      // Mobile: Single column layout
      const finalX = 0;
      const finalY = (index - 2.5) * 200; // Vertical spacing
      return { x: finalX, y: finalY };
    } else if (isTablet) {
      // Tablet: 2x3 layout
      const row = Math.floor(index / 2);
      const col = index % 2;
      const finalX = (col - 0.5) * 250; // 250px spacing for tablets
      const finalY = (row - 1) * 250;
      return { x: finalX, y: finalY };
    } else {
      // Desktop: 3x2 layout
      const row = Math.floor(index / 3);
      const col = index % 3;
      const finalX = (col - 1) * 320; // 320px spacing between columns
      const finalY = (row - 0.5) * 320; // 320px spacing between rows
      return { x: finalX, y: finalY };
    }
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Premium Raw Spices
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience the authentic beauty and quality of our handpicked raw
            spices, sourced directly from nature's finest
          </p>
        </motion.div>

        {isMobile ? (
          // Mobile masonry (Pinterest-like) layout
          <div className="w-full">
            <div className="columns-2 gap-4 [column-fill:_balance]">{/* Masonry using CSS columns */}
              {products.slice(0, 6).map((product, index) => {
                const rawImages = [
                  rawPowderImages.dhaniyapowder,
                  rawPowderImages.wholepepper,
                  rawPowderImages.turmericpowder,
                  rawPowderImages.chillypowder,
                  rawPowderImages.jeerapowder,
                  rawPowderImages.garammasala,
                ];
                const rawImage = rawImages[index];

                // Vary card heights to achieve the Pinterest feel
                const heightPattern = [260, 200, 240, 300, 220, 280];
                const cardHeight = heightPattern[index % heightPattern.length];

                return (
                  <motion.article
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="mb-4 break-inside-avoid rounded-3xl shadow-[0_6px_24px_-10px_rgba(0,0,0,0.25)] overflow-hidden bg-white/70 backdrop-blur [border:1px_solid_rgba(255,255,255,0.6)]"
                  >
                    <div className="relative">
                      <img
                        src={rawImage || product.imgUrl}
                        alt={`Raw ${product.name}`}
                        className="w-full object-cover"
                        style={{ height: `${cardHeight}px` }}
                        onError={(e) => {
                          e.target.src = product.imgUrl;
                        }}
                      />
                      {/* Soft top gradient + badge + action */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10"></div>
                      <div className="absolute top-2 left-2 flex items-center gap-2">
                        <span className="pointer-events-none select-none text-[10px] font-semibold tracking-wide uppercase rounded-full px-2 py-1 text-white bg-black/40 backdrop-blur">Raw</span>
                      </div>
                      <button
                        type="button"
                        aria-label="Save"
                        className="absolute top-2 right-2 rounded-full bg-white/80 text-gray-800 shadow-md p-2 active:scale-95 transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M11.645 20.91l-.007-.003-.022-.01a15.247 15.247 0 01-.383-.178 25.18 25.18 0 01-4.244-2.716C4.688 16.107 2.25 13.462 2.25 9.75 2.25 7.126 4.374 5 7 5c1.6 0 3.058.698 4.045 1.804C12.03 5.698 13.49 5 15.09 5c2.626 0 4.75 2.126 4.75 4.75 0 3.712-2.438 6.356-4.739 8.253a25.18 25.18 0 01-4.244 2.716 15.247 15.247 0 01-.383.178l-.022.01-.007.003-.003.001a.75.75 0 01-.586 0l-.003-.001z"/>
                        </svg>
                      </button>
                    </div>
                    {/* Caption */}
                    <div className="px-3 pt-2 pb-3">
                      <h3 className="text-[13px] font-semibold text-gray-800">Raw {product.name}</h3>
                      <p className="text-[11px] text-gray-500">Premium quality • {product.category}</p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        ) : (
          <div
            className={`relative flex items-center justify-center ${
              isTablet ? "h-[900px]" : "h-[700px]"
            }`}
          >
            {/* Stacked cards container */}
            <div className="relative w-full h-full">
              {products.slice(0, 6).map((product, index) => {
                const gridPos = getGridPosition(index, false, isTablet);
                const rawImages = [
                  rawPowderImages.dhaniyapowder,
                  rawPowderImages.wholepepper,
                  rawPowderImages.turmericpowder,
                  rawPowderImages.chillypowder,
                  rawPowderImages.jeerapowder,
                  rawPowderImages.garammasala,
                ];
                const rawImage = rawImages[index];
                return (
                  <motion.div
                    key={product.name}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{ x: 0, y: 0, scale: 0.8, rotate: 0, zIndex: 6 - index }}
                    whileInView={{ x: gridPos.x, y: gridPos.y, scale: 1, rotate: 0, zIndex: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.03, ease: "easeOut" }}
                    onAnimationComplete={() => {
                      if (index === 5) setHasAnimated(true);
                    }}
                  >
                    <motion.div
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl cursor-pointer"
                      style={{ width: isTablet ? "220px" : "280px", height: isTablet ? "220px" : "280px" }}
                      whileHover={{ y: -3, scale: 1.01, rotateY: 1, rotateX: 1 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                      <div className="w-full h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"></div>
                        <img
                          src={rawImage || product.imgUrl}
                          alt={`Raw ${product.name}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = product.imgUrl;
                          }}
                        />
                      </div>
                      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out`}>
                        <div className="text-white">
                          <span className="inline-block bg-orange-500 text-white font-semibold px-2 py-1 rounded-full mb-2 text-xs">Raw {product.category}</span>
                          <h3 className="font-bold mb-1 text-lg">Raw {product.name}</h3>
                          <p className="text-orange-200 text-sm">Premium Quality</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-2xl blur-sm"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Animation trigger indicator */}
            <motion.div
              className={`absolute left-1/2 transform -translate-x-1/2 text-center text-gray-500 bottom-4 text-sm`}
              initial={{ opacity: 1 }}
              animate={{ opacity: hasAnimated ? 0 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className={`bg-orange-400 rounded-full animate-pulse w-2 h-2`}></div>
                <span>Scroll to reveal</span>
                <div className={`bg-orange-400 rounded-full animate-pulse w-2 h-2`}></div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

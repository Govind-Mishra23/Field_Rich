import { motion } from 'framer-motion';
import { useState } from 'react';
import { products } from '../data/products';

export const RawSpiceShowcase = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Calculate grid positions for 3x2 layout (6 products)
  const getGridPosition = (index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    
    // Calculate final positions in a 3x2 grid
    const finalX = (col - 1) * 320; // 320px spacing between columns
    const finalY = (row - 0.5) * 320; // 320px spacing between rows
    
    return { x: finalX, y: finalY };
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Premium Raw Spices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the authentic beauty and quality of our handpicked raw
            spices, sourced directly from nature's finest
          </p>
        </motion.div>

        <div className="relative h-[700px] flex items-center justify-center">
          {/* Stacked cards container */}
          <div className="relative w-full h-full">
            {products.slice(0, 6).map((product, index) => {
              const gridPos = getGridPosition(index);
              
              return (
                <motion.div
                  key={product.name}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    scale: 0.8, 
                    rotate: 0,
                    zIndex: 6 - index 
                  }}
                  whileInView={{
                    x: gridPos.x,
                    y: gridPos.y,
                    scale: 1,
                    rotate: 0,
                    zIndex: 1
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: "easeOut"
                  }}
                  onAnimationComplete={() => {
                    if (index === 5) {
                      setHasAnimated(true);
                    }
                  }}
                >
                  <motion.div
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl cursor-pointer"
                    style={{ width: '280px', height: '280px' }}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.02,
                      rotateY: 2,
                      rotateX: 2
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onAnimationComplete={() => {
                      if (index === 5 && !hasAnimated) {
                        setHasAnimated(true);
                      }
                    }}
                  >
                    {/* Card background with image */}
                    <div className="w-full h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"></div>
                      
                      {product.imgUrl ? (
                        <img
                          src={product.imgUrl}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                          <div className="text-8xl">{product.image}</div>
                        </div>
                      )}
                    </div>

                    {/* Hover overlay - Hidden by default, shows on hover */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out"
                    >
                      <div className="text-white">
                        <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full mb-2">
                          {product.category}
                        </span>
                        <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                        <p className="text-sm text-orange-200">Premium Quality</p>
                      </div>
                    </div>

                    {/* Subtle glow effect */}
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
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-gray-500 text-sm"
            initial={{ opacity: 1 }}
            animate={{ opacity: hasAnimated ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span>Scroll to reveal</span>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

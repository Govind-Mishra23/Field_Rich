"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  useSpring,
} from "framer-motion";
import { useState, useRef } from "react";
import { products } from "../data/products";

// Speed control (higher = slower)
const SPEED_DIVISOR = 450;
// Fixed image height
const IMG_HEIGHT = 150;

// Wrap utility for infinite scroll
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const Products = () => {
  const [isPaused, setIsPaused] = useState(false);

  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);
  const directionFactor = useRef(1);

  const infiniteProducts = [...products, ...products, ...products];

  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      const moveBy = directionFactor.current * (delta / SPEED_DIVISOR);
      baseX.set(baseX.get() + moveBy);
    }
  });

  const ProductCard = ({ product, index }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), {
      stiffness: 400,
      damping: 40,
    });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), {
      stiffness: 400,
      damping: 40,
    });
    const scale = useSpring(1, { stiffness: 400, damping: 40 });

    const handleMouseMove = (event) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(event.clientX - centerX);
      mouseY.set(event.clientY - centerY);
    };

    return (
      <motion.div
        key={`${product.name}-${index}`}
        ref={cardRef}
        className="relative flex-shrink-0 px-2 sm:px-3"
        style={{
          width: "calc(100vw / 3.5)", // ✅ smaller card
          maxWidth: 280,
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          transformPerspective: 1200,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ✅ Card root with overflow-hidden so radius never cuts */}
        <div
          className="w-full h-full rounded-2xl shadow-lg relative flex flex-col overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, #F8F0E3 0%, #F0E6D2 30%, #E8DCC6 70%, #DDD2B8 100%)",
            border: "2px solid #CD853F",
            boxShadow:
              "0 20px 40px rgba(139, 69, 19, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
            minHeight: 320,
          }}
        >
          {/* Image Header with Shine Effect */}
          <motion.div
            className="relative w-full overflow-hidden rounded-t-2xl"
            style={{ height: IMG_HEIGHT, transform: "translateZ(50px)" }}
            whileHover="hover"
          >
            <motion.img
              src={product.imgUrl}
              alt={product.name}
              className="w-full h-full object-cover object-center select-none rounded-t-2xl"
              draggable={false}
            />

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 rounded-t-2xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 80%)",
                transform: "translateX(-100%)",
              }}
              variants={{ hover: { transform: "translateX(100%)" } }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Title */}
          <h3
            className="text-lg sm:text-xl font-bold mt-4 px-4 text-center leading-tight"
            style={{ color: "#8B4513" }}
          >
            {product.name}
          </h3>

          {/* Description */}
          <p
            className="text-xs sm:text-sm px-4 mt-1 text-center"
            style={{ color: "#7B4A2A" }}
          >
            {product.description}
          </p>

          <div className="flex-1" />

          {/* Category Tag */}
          <div className="mt-3 mb-4 flex justify-center">
            <span
              className="inline-block text-xs font-bold px-3 py-1 rounded-full"
              style={{
                background: "linear-gradient(135deg, #DEB887 0%, #D2B48C 100%)",
                color: "#5C3314",
                border: "1px solid #CD853F",
              }}
            >
              {product.category}
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="products"
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#FFF5EF" }}
    >
      <div className="max-w-[100vw] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: "#8B4513" }}
          >
            Our Product Range
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: "#A0522D" }}
          >
            From signature blends to regional specialties, discover the
            authentic flavors that make every dish extraordinary.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-stretch"
            style={{ x, willChange: "transform" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {infiniteProducts.map((product, index) => (
              <ProductCard
                key={`${product.name}-${index}`}
                product={product}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useEffect, memo } from "react";

// Memoized ProductCard component for better performance
const ProductCard = memo(({ product }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 overflow-hidden"
  >
    <Link
      to={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
      className="block"
    >
      {/* Product Image */}
      <div className="h-64 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center overflow-hidden">
        {product.imgUrl ? (
          <img
            src={product.imgUrl}
            alt={`${product.name} - Premium Indian Spice`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
            onLoad={(e) => {
              e.target.style.opacity = "1";
            }}
            style={{ opacity: 0 }}
          />
        ) : (
          <div className="text-8xl text-orange-300">
            {product.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
      </div>
    </Link>
  </motion.div>
));

ProductCard.displayName = "ProductCard";

export const ProductsPage = () => {
  useScrollToTop();

  // Preload images for faster display
  useEffect(() => {
    products.forEach((product) => {
      if (product.imgUrl) {
        const img = new Image();
        img.src = product.imgUrl;
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Products</span>
          </nav>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Our Product Range
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium collection of authentic Indian spices,
              carefully sourced and processed to bring nature's finest flavors
              to your kitchen
            </p>
          </motion.div>

          {/* Back to Home */}
          <div className="text-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Loading skeleton for better perceived performance */}
            {products.length === 0 && (
              <>
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden animate-pulse"
                  >
                    <div className="h-64 bg-gradient-to-br from-amber-100 to-orange-100"></div>
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-orange-100 rounded w-1/3"></div>
                      <div className="h-6 bg-gray-100 rounded"></div>
                      <div className="h-4 bg-gray-100 rounded"></div>
                      <div className="h-10 bg-orange-100 rounded"></div>
                    </div>
                  </div>
                ))}
              </>
            )}
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

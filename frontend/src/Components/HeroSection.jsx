import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => (
  <section className="hero-responsive relative overflow-hidden">
    {/* Background Pattern - Responsive positioning */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-48 h-48 md:top-20 md:left-20 md:w-72 md:h-72 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 md:bottom-20 md:right-20 md:w-96 md:h-96 bg-gradient-to-br from-red-400 to-orange-600 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full blur-3xl"></div>
    </div>
    
    <div className="relative z-10 text-center container-responsive">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Responsive typography */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight px-4">
          Harvested From{" "}
          <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
            Nature's Best!
          </span>
        </h1>
        
        {/* Responsive description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4">
          Authentic, 100% natural, preservative-free spice blends that bring the
          authentic taste of India to your kitchen
        </p>
        
        {/* Responsive button */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="px-4"
        >
          <Link
            to="/products"
            className="btn-responsive inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover-responsive"
          >
            <span className="text-sm md:text-base lg:text-lg">View Products</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

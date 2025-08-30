import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "../data/products";

export const ProductRangePreview = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From signature blends to regional specialties, discover the authentic
            flavors that make every dish extraordinary
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.slice(0, 6).map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
              className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-6 shadow transition-all duration-300 border border-orange-200"
            >
              <div className="text-6xl mb-4 text-center">
                {product.imgUrl ? (
                  <img
                    src={product.imgUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-8xl">{product.image}</div>
                )}
              </div>
              <div className="text-center">
                <span className="inline-block bg-orange-200 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* View Details Link */}
                <Link
                  to={`/products/${product.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Leaf,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useState, useEffect } from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  // Use the lightweight scroll-to-top hook
  useScrollToTop();

  useEffect(() => {
    const productId = id.replace(/-/g, " ");
    const foundProduct = products.find(
      (p) => p.name.toLowerCase() === productId.toLowerCase()
    );
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate("/products");
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <p className="text-gray-500 text-lg">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* HEADER */}
      <section className="pt-24 pb-6 px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="pb-20 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* IMAGE GALLERY */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, type: 'tween' }}
          className="flex flex-col items-center"
        >
          <div className="relative w-full h-[450px] bg-white p-6 rounded-2xl shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={product.images?.[activeImage] || product.imgUrl}
                alt={product.name}
                className="w-full h-full object-cover rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, type: 'tween' }}
              />
            </AnimatePresence>

            {/* Left/Right Buttons */}
            {product.images && product.images.length >= 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImage(
                      (prev) =>
                        (prev - 1 + product.images.length) %
                        product.images.length
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-orange-100"
                >
                  <ChevronLeft className="w-5 h-5 text-orange-600" />
                </button>
                <button
                  onClick={() =>
                    setActiveImage((prev) => (prev + 1) % product.images.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-orange-100"
                >
                  <ChevronRight className="w-5 h-5 text-orange-600" />
                </button>
              </>
            )}
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-2 mt-4">
            {product.images?.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  i === activeImage ? "border-orange-600" : "border-transparent"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* PRODUCT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, type: 'tween' }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {product.description}
          </p>

          {/* Features */}
          <div className="grid gap-3">
            {[
              { icon: Leaf, text: "100% Natural & Organic" },
              { icon: Award, text: "Premium Quality" },
              { icon: Users, text: "Traditional Processing" },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <f.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{f.text}</span>
              </div>
            ))}
          </div>

          {/* Animated Info Tabs */}
          <div>
            <div className="flex gap-4 border-b pb-2">
              {["overview", "benefits", "details"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-1 font-semibold capitalize ${
                    activeTab === tab
                      ? "text-orange-600 border-b-2 border-orange-600"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-gray-700">
                      Origin: <strong>India</strong> <br />
                      No Preservatives • Handpicked • Authentic.
                    </p>
                  </motion.div>
                )}

                {activeTab === "benefits" && (
                  <motion.ul
                    key="benefits"
                    className="space-y-2 text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <li className="flex gap-2 items-start">
                      <Star className="w-4 h-4 text-amber-500" /> Boosts flavor
                      & aroma
                    </li>
                    <li className="flex gap-2 items-start">
                      <Star className="w-4 h-4 text-amber-500" /> Rich in
                      antioxidants & nutrients
                    </li>
                    <li className="flex gap-2 items-start">
                      <Star className="w-4 h-4 text-amber-500" /> Perfect for
                      Indian cuisines
                    </li>
                  </motion.ul>
                )}

                {activeTab === "details" && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-700"
                  >
                    <p>
                      Category: <strong>{product.category}</strong>
                    </p>
                    <p>
                      Processing: <strong>Traditional methods</strong>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex gap-4 pt-4">
            <Link
              to="/products"
              className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg shadow hover:shadow-xl transition"
            >
              View All Products
            </Link>
            <a
              href={`mailto:contact@fieldrichindia.com?subject=Inquiry about ${product.name}`}
              className="flex-1 border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

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
import {
  getPacketImagesByImageUrl,
  getAvailableSizesByImageUrl,
  hasRealImagesForSize,
} from "../utils/imageLoader";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeImages, setSizeImages] = useState([]);

  // Use the lightweight scroll-to-top hook
  useScrollToTop();

  useEffect(() => {
    const productId = id.replace(/-/g, " ");
    const foundProduct = products.find(
      (p) => p.name.toLowerCase() === productId.toLowerCase()
    );
    if (foundProduct) {
      setProduct(foundProduct);
      const sizes = getAvailableSizesByImageUrl(
        foundProduct?.images?.[0] || foundProduct?.imgUrl
      );
      if (sizes && sizes.length > 0) {
        // Always start with 100g if available, otherwise first available size
        setSelectedSize(sizes.includes("100g") ? "100g" : sizes[0]);
      } else {
        setSelectedSize(null);
      }
    } else {
      navigate("/products");
    }
  }, [id, navigate]);

  // When size or product changes, update image set
  useEffect(() => {
    if (!product) return;
    const imagesBySize = getPacketImagesByImageUrl(
      product?.images?.[0] || product?.imgUrl
    );
    if (selectedSize && imagesBySize[selectedSize]) {
      const { front, back } = imagesBySize[selectedSize];
      setSizeImages([front, back].filter(Boolean));
      setActiveImage(0);
    } else {
      // fallback to static images defined in product data
      setSizeImages(product.images || [product.imgUrl]);
      setActiveImage(0);
    }
  }, [product, selectedSize]);

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
          transition={{ duration: 0.4, type: "tween" }}
          className="flex flex-col items-center"
        >
          <div className="relative w-full h-[450px] bg-white p-6 rounded-2xl shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={sizeImages?.[activeImage] || product.imgUrl}
                alt={`${product.name} - Image ${activeImage + 1}`}
                className="w-full h-full object-contain rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, type: "tween" }}
                style={{
                  maxHeight: "400px",
                  maxWidth: "100%",
                }}
              />
            </AnimatePresence>

            {/* Image Counter */}
            {sizeImages && sizeImages.length > 1 && (
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {activeImage + 1} / {sizeImages.length}
              </div>
            )}

            {/* Left/Right Buttons */}
            {sizeImages && sizeImages.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImage(
                      (prev) =>
                        (prev - 1 + sizeImages.length) % sizeImages.length
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-orange-100 transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-orange-600" />
                </button>
                <button
                  onClick={() =>
                    setActiveImage((prev) => (prev + 1) % sizeImages.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-orange-100 transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-orange-600" />
                </button>
              </>
            )}
          </div>

          {/* THUMBNAILS */}
          {sizeImages && sizeImages.length > 1 && (
            <div className="flex gap-3 mt-6 overflow-x-auto pb-2 w-full justify-center">
              {sizeImages.map((img, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-3 transition-all duration-200 ${
                    i === activeImage
                      ? "border-orange-600 shadow-lg ring-2 ring-orange-200"
                      : "border-gray-200 hover:border-orange-400"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          )}

          {/* Image Labels */}
          {sizeImages && sizeImages.length > 0 && (
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-600">
                {selectedSize && sizeImages.length >= 2
                  ? activeImage === 0
                    ? `Front (${selectedSize})`
                    : `Back (${selectedSize})`
                  : activeImage === 0
                  ? "Package Front"
                  : activeImage === 1
                  ? "Package Back"
                  : "Product"}
              </p>
            </div>
          )}
        </motion.div>

        {/* PRODUCT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, type: "tween" }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          {/* Size Selector */}
          {(() => {
            const sizesRaw =
              getAvailableSizesByImageUrl(
                product?.images?.[0] || product?.imgUrl
              ) || [];
            const sizes = [...sizesRaw].sort((a, b) => (a === "100g" ? -1 : 1)); // 100g first
            if (sizes.length === 0) return null;

            const has500gRealImages = hasRealImagesForSize(
              product?.images?.[0] || product?.imgUrl,
              "500g"
            );

            return (
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-semibold text-gray-700">
                    Package Size:
                  </span>
                  <div className="flex items-center gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-200 ${
                          selectedSize === size
                            ? "bg-orange-600 text-white border-orange-600 shadow-md"
                            : "border-orange-300 text-orange-700 hover:bg-orange-50 hover:border-orange-400"
                        }`}
                      >
                        <div className="text-center">
                          <div className="font-semibold">{size}</div>
                          {size === "500g" && !has500gRealImages && (
                            <div className="text-xs opacity-75 mt-1">
                              (Preview)
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
                {!has500gRealImages && selectedSize === "500g" && (
                  <div className="text-sm text-amber-600 bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-600">ℹ️</span>
                      <span>
                        500g package images coming soon - currently showing 100g
                        package for reference
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
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
                    <div className="text-gray-700 space-y-3">
                      <p className="leading-relaxed">{product.overview}</p>
                      <div className="bg-amber-50 p-4 rounded-lg mt-4">
                        <span className="text-sm font-semibold text-amber-800">
                          Processing:
                        </span>
                        <p className="text-amber-700">{product.processing}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "benefits" && (
                  <motion.ul
                    key="benefits"
                    className="space-y-3 text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {product.benefits?.map((benefit, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <Star className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}

                {activeTab === "details" && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-700 space-y-4"
                  >
                    <div className="grid gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Product Information
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Category:</span>
                            <span className="font-medium">
                              {product.category}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Ingredients:</span>
                            <span className="font-medium text-right">
                              {product.details?.ingredients}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Shelf Life:</span>
                            <span className="font-medium">
                              {product.details?.shelfLife}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">
                          Storage & Care
                        </h4>
                        <p className="text-blue-700 text-sm">
                          {product.details?.storage}
                        </p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">
                          Quality Assurance
                        </h4>
                        <p className="text-green-700 text-sm">
                          {product.details?.certifications}
                        </p>
                      </div>
                    </div>
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

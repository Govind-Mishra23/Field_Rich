import { motion } from 'framer-motion';
import { ArrowLeft, Star, Leaf, Award, Users } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useState, useEffect } from 'react';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find product by ID (converted from URL slug)
    const productId = id.replace(/-/g, ' ');
    const foundProduct = products.find(p => 
      p.name.toLowerCase() === productId.toLowerCase()
    );
    
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Redirect to products page if product not found
      navigate('/products');
    }
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌿</div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-orange-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">{product.name}</span>
          </nav>
          
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Products</span>
            </button>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
                <div className="h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center overflow-hidden">
                  {product.imgUrl ? (
                    <img
                      src={product.imgUrl}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-9xl">{product.image}</div>
                  )}
                </div>
                
                {/* Product Badge */}
                <div className="mt-6 text-center">
                  <span className="inline-block bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Product Title & Description */}
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Product Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Key Features</h3>
                <div className="grid gap-3">
                  {[
                    { icon: Leaf, text: '100% Natural & Organic' },
                    { icon: Award, text: 'Premium Quality' },
                    { icon: Users, text: 'Traditional Processing' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Product Details</h3>
                <div className="bg-white rounded-xl p-6 border border-orange-100">
                  <div className="grid gap-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium text-gray-800">{product.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Origin:</span>
                      <span className="font-medium text-gray-800">India</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processing:</span>
                      <span className="font-medium text-gray-800">Traditional Methods</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Preservatives:</span>
                      <span className="font-medium text-gray-800">None</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage & Benefits */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Usage & Benefits</h3>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Enhances flavor and aroma of dishes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Rich in natural antioxidants and nutrients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Perfect for traditional Indian cooking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>No artificial additives or preservatives</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/products"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <span>View All Products</span>
                </Link>
                <a
                  href="mailto:contact@fieldrichindia.com?subject=Inquiry about ${product.name}"
                  className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300"
                >
                  <span>Contact Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

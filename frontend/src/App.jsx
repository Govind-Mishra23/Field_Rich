"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Leaf, Award, Users, ArrowRight, CheckCircle } from "lucide-react"
import "./App.css"
import LoadingScreen from "./Components/loading-screen"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const products = [
    {
      name: "Garam Masala",
      description: "Traditional blend of warming spices",
      image: "🌶️",
      category: "Signature Blend",
    },
    {
      name: "Chaat Masala",
      description: "Tangy and flavorful street food spice",
      image: "🍃",
      category: "Signature Blend",
    },
    {
      name: "Turmeric Powder",
      description: "Pure and potent golden spice",
      image: "🟡",
      category: "Regional Specialty",
    },
    {
      name: "Chilly Powder",
      description: "Perfect heat for every dish",
      image: "🔴",
      category: "Regional Specialty",
    },
    {
      name: "Sambar Masala",
      description: "Authentic South Indian blend",
      image: "🌿",
      category: "Regional Specialty",
    },
    {
      name: "Custom Blend",
      description: "Personalized for your needs",
      image: "✨",
      category: "Custom Blend",
    },
  ]

  const advantages = [
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Authenticity",
      description: "Focus on authentic taste and quality",
    },
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: "Sustainable Practices",
      description: "Farm-to-table supply chain and eco-friendly practices",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Brand Story",
      description: "Rooted in tradition, our story resonates with consumers",
    },
  ]

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">FR</span>
              </div>
              <span className="text-2xl font-bold text-red-800">FIELD RICH</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">
                Home
              </a>
              <a href="#products" className="text-gray-700 hover:text-red-600 transition-colors">
                Products
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-6xl font-bold text-red-800 mb-6">FIELD RICH</h1>
              <p className="text-2xl text-gray-700 mb-8 italic">"Harvested From Nature's Best!"</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover the authentic taste of India with our premium spice blends. From traditional recipes to custom
                creations, we bring nature's finest flavors to your kitchen.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌿</div>
                    <div className="text-red-800 font-bold text-xl">NATURE'S FINEST</div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">⭐</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From signature blends to regional specialties, discover the authentic flavors that make every dish
              extraordinary.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200"
              >
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <div className="text-center">
                  <span className="inline-block bg-orange-200 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose FIELD RICH?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality, authenticity, and sustainable practices sets us apart in the spice industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Business Owner</h3>
            <p className="text-xl text-gray-600 mb-2">Shailendra Singh</p>
            <p className="text-gray-500">
              Leading FIELD RICH with passion and dedication to bring you the finest spices from nature's bounty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to experience the authentic taste of FIELD RICH? Contact us directly to learn more about our
              products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <Mail className="w-6 h-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <a
                    href="mailto:contact@fieldrichindia.com"
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    contact@fieldrichindia.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <Phone className="w-6 h-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+91 [Your Phone Number]</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                <MapPin className="w-6 h-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">India</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Direct Connection</h3>
              <p className="text-gray-600 mb-6">
                We believe in building direct relationships with our customers. Contact us to discuss your spice
                requirements, custom blends, or any questions about our products.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Personal consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Custom blend creation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Quality assurance</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-800 to-orange-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-800 font-bold text-xl">FR</span>
              </div>
              <span className="text-3xl font-bold">FIELD RICH</span>
            </div>
            <p className="text-xl mb-6 italic">"Harvested From Nature's Best!"</p>
            <p className="text-orange-200 mb-8">
              Bringing authentic Indian spices to your table with love and tradition.
            </p>
            <div className="border-t border-orange-600 pt-6">
              <p className="text-orange-200">© 2024 FIELD RICH. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App

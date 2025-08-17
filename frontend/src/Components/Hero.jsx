import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Leaf, Award, Users, ArrowRight, CheckCircle } from "lucide-react"

export const Hero = () =>{
    return(
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
    )
}
import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";

export const AboutUsSection = () => (
  <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-red-50">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Field Rich
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            We are passionate about bringing the authentic taste of India to
            your kitchen. Our spices are carefully sourced from the finest farms
            and processed using traditional methods to preserve their natural
            flavor and health benefits.
          </p>
          <div className="space-y-4">
            {[
              "Direct sourcing from organic farms",
              "Traditional processing methods",
              "No artificial preservatives",
              "Authentic Indian recipes",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="w-80 h-80 mx-auto bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
            <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-inner">
              <div className="text-center">
                <div className="text-6xl mb-4">🌿</div>
                <div className="text-red-800 font-bold text-xl">
                  NATURE'S FINEST
                </div>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
          >
            <Star className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

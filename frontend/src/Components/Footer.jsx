import { motion } from "framer-motion"
export const Footer = () => {
  return (
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
              <p className="text-orange-200">© 2025 FIELD RICH. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </footer>
  );
}
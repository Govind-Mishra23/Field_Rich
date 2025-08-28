import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-800 via-orange-800 to-red-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-800 font-bold text-xl">FR</span>
              </div>
              <span className="text-3xl font-bold">FIELD RICH</span>
            </div>
            <p className="text-xl mb-4 italic">"Harvested From Nature's Best!"</p>
            <p className="text-orange-200 leading-relaxed">
              Bringing authentic Indian spices to your table with love and tradition. 
              Our commitment to quality ensures every spice tells a story of nature's finest offerings.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a 
                href="mailto:contact@fieldrichindia.com"
                className="flex items-center gap-3 text-orange-200 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@fieldrichindia.com</span>
              </a>
              <div className="flex items-center gap-3 text-orange-200">
                <Phone className="w-4 h-4" />
                <span>+91 97406 22985</span>
              </div>
              <div className="flex items-center gap-3 text-orange-200">
                <MapPin className="w-4 h-4" />
                <span>No.227 , Rajya Post Office , Gulzarganj, Dist. Jaunpur, Uttar Pradesh - 222135</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-orange-600 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-orange-600 pt-8 text-center"
        >
          <p className="text-orange-200">
            © 2025 FIELD RICH. All rights reserved. | Premium Indian Spices
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
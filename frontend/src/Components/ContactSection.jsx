import {motion} from "framer-motion"
import { Phone, Mail, MapPin, Leaf, Award, Users, ArrowRight, CheckCircle } from "lucide-react"
export const ContactSection = () => {
  return (
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
  )
}
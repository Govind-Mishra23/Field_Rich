import {motion} from "framer-motion"
import { Phone, Mail, MapPin, Leaf, Award, Users, ArrowRight, CheckCircle } from "lucide-react"

export const About = () =>{
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
    return(
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
    )
}
import { motion } from "framer-motion";
import { Leaf, Award, Users } from "lucide-react";

export const SolutionSection = () => (
  <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Solution</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Field Rich brings you pure, authentic spices directly from nature,
          preserving their original flavor and health benefits
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Leaf,
            title: "100% Natural",
            desc: "No artificial preservatives or additives",
          },
          {
            icon: Award,
            title: "Premium Quality",
            desc: "Handpicked and carefully processed",
          },
          {
            icon: Users,
            title: "Traditional Methods",
            desc: "Preserving authentic Indian recipes",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-2xl bg-white shadow-lg border border-amber-100"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-6">
              <item.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

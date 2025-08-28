import { motion } from "framer-motion";

export const ProblemSection = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">The Problem</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Most commercial spices contain artificial preservatives, fillers, and
          lose their authentic flavor during processing
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: "🚫",
            title: "Artificial Preservatives",
            desc: "Harmful chemicals that affect health",
          },
          {
            icon: "🌾",
            title: "Fillers & Additives",
            desc: "Unnecessary ingredients that dilute flavor",
          },
          {
            icon: "📦",
            title: "Mass Processing",
            desc: "Loss of authentic taste and aroma",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

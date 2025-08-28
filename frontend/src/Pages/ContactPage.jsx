import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      value: "+91 9740622985",
      subtitle: "Available 9 AM - 6 PM IST",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email Address",
      value: "contact@fieldrichindia.com",
      subtitle: "We reply within 24 hours",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Office Address",
      value:
        "No.227 , Rajya Post Office , Gulzarganj, Dist. Jaunpur, Uttar Pradesh - 222135",
      subtitle: "Main Distribution Center",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Saturday",
      subtitle: "9:00 AM - 6:00 PM IST",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "from-blue-600 to-blue-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Contact</span>
          </nav>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to experience the authentic taste of Field Rich spices? We'd
              love to hear from you!
            </p>
          </motion.div>

          {/* Back to Home */}
          <div className="text-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 text-center group"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${info.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-medium text-gray-700 mb-1">
                  {info.value}
                </p>
                <p className="text-sm text-gray-500">{info.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300">
                    <option>Select a subject</option>
                    <option>Product Inquiry</option>
                    <option>Bulk Order</option>
                    <option>Partnership</option>
                    <option>General Question</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Send Message
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Section */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Location
                </h3>

                <div className="w-full h-64 rounded-lg overflow-hidden mb-4 relative">
                  {/* Clickable Map */}
                  <a
                    href="https://www.google.com/maps?q=25.7465,82.7015"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14386.837946637152!2d82.7015!3d25.7465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399025af1a57c3cd%3A0x2f5e8b314f2d34f9!2sGulzarganj%2C%20Jaunpur%2C%20Uttar%20Pradesh%20222135!5e0!3m2!1sen!2sin!4v1692541234567!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0, pointerEvents: "none" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </a>
                </div>

                {/* View on Google Maps Button with Motion */}
                <div className="text-center mt-4">
                  <motion.a
                    href="https://www.google.com/maps?q=25.7465,82.7015"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5" />
                    View on Google Maps
                  </motion.a>
                </div>

                <p className="text-gray-600 text-center mt-6">
                  <strong>Field Rich Spices</strong>
                  <br />
                  No.227 , Rajya Post Office , Gulzarganj, Dist. Jaunpur, Uttar
                  Pradesh - 222135
                  <br />
                  Main Distribution Center
                </p>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Call Us</p>
                      <p className="text-gray-600">+91 97406 22985</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email Us</p>
                      <p className="text-gray-600">
                        contact@fieldrichindia.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media & Additional Info */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow us on social media for the latest updates, recipes, and
              spice tips
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                <a
                  href={social.href}
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${social.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl`}
                >
                  <social.icon className="w-10 h-10 text-white" />
                </a>
                <h3 className="text-lg font-semibold text-gray-800">
                  {social.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our products and services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What makes Field Rich spices different from others?",
                answer:
                  "Our spices are 100% natural, preservative-free, and sourced directly from organic farms across India. We use traditional processing methods to preserve authentic flavor and health benefits.",
              },
              {
                question: "Do you ship internationally?",
                answer:
                  "Currently, we ship within India. We're working on expanding our international shipping capabilities. Contact us for bulk orders and special arrangements.",
              },
              {
                question: "How long does shipping take?",
                answer:
                  "Standard shipping within India takes 3-5 business days. Express shipping is available for 1-2 business days delivery.",
              },
              {
                question: "Can I customize spice blends?",
                answer:
                  "Yes! We offer custom spice blends tailored to your specific needs. Contact us to discuss your requirements and we'll create the perfect blend for you.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-100 to-red-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the authentic taste of Field Rich spices in your
              kitchen today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Browse Products</span>
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
              <a
                href="mailto:contact@fieldrichindia.com"
                className="inline-flex items-center gap-3 border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                <span>Email Us</span>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

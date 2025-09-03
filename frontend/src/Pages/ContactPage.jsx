import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Truck,
  Package,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";

export const ContactPage = () => {
  // Use the lightweight scroll-to-top hook
  useScrollToTop();

  const handleEmailClick = (email) => {
    const subject = "Inquiry about Field Rich Spices";
    const body =
      "Hello,\n\nI'm interested in your spices and would like to know more about your products.\n\nBest regards,\n[Your Name]";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    if (
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.location.href = mailtoLink;
    } else {
      try {
        window.location.href = mailtoLink;
        setTimeout(() => {
          const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
            subject
          )}&body=${encodeURIComponent(body)}`;
          window.open(gmailLink, "_blank");
        }, 1000);
      } catch (error) {
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        window.open(gmailLink, "_blank");
      }
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      value: "+91 9740622985",
      subtitle: "Available 9 AM - 6 PM IST",
      color: "from-blue-500 to-blue-600",
      action: "tel:+919740622985",
      actionText: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Address",
      value: "contact@fieldrichindia.com",
      subtitle: "We reply within 24 hours",
      color: "from-green-500 to-green-600",
      action: null,
      actionText: "Email Now",
    },
    {
      icon: MapPin,
      title: "Office Address",
      value:
        "No.227 , Raiya Post Office , Gulzarganj, Dist. Jaunpur, Uttar Pradesh - 222135",
      subtitle: "Main Distribution Center",
      color: "from-orange-500 to-orange-600",
      action: "https://www.google.com/maps?q=25.7465,82.7015",
      actionText: "View on Maps",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Saturday",
      subtitle: "9:00 AM - 6:00 PM IST",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const businessFeatures = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping across India",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Package,
      title: "Bulk Orders",
      description: "Special pricing for wholesale and bulk purchases",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Dedicated support team for all your queries",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "100% natural and preservative-free products",
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
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Contact</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, type: 'tween' }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 border border-orange-100 text-center group"
              >
                {/* Animate only the icon on hover */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${info.color} rounded-full mb-6 transition-transform duration-300 mx-auto`}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-lg font-medium text-gray-700 mb-1">
                  {info.value}
                </p>
                <p className="text-sm text-gray-500 mb-4">{info.subtitle}</p>
                {info.action ? (
                  <motion.a
                    href={info.action}
                    target={info.action.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      info.action.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${info.color} text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300`}
                  >
                    {info.actionText}
                  </motion.a>
                ) : info.title === "Email Address" ? (
                  <motion.button
                    onClick={() => handleEmailClick(info.value)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${info.color} text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300`}
                  >
                    {info.actionText}
                  </motion.button>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Features & Map Section */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Business Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Field Rich?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {businessFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl hover:bg-orange-50 transition-colors duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} rounded-full mb-3 transition-transform duration-300 mx-auto`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-4">
                <motion.a
                  href="tel:+919740622985"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </motion.a>
                <motion.button
                  onClick={() => handleEmailClick("contact@fieldrichindia.com")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </motion.button>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Location
                </h3>
                <div className="w-full h-64 rounded-lg overflow-hidden mb-4 relative">
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
                  No.227 , Raiya Post Office , Gulzarganj, Dist. Jaunpur, Uttar
                  Pradesh - 222135
                  <br />
                  Main Distribution Center
                </p>
              </div>
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
                      <a
                        href="tel:+919740622985"
                        className="text-gray-600 hover:text-orange-600 transition-colors"
                      >
                        +91 97406 22985
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email Us</p>
                      <button
                        onClick={() =>
                          handleEmailClick("contact@fieldrichindia.com")
                        }
                        className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
                      >
                        contact@fieldrichindia.com
                      </button>
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
                className="text-center group"
              >
                <motion.a
                  href={social.href}
                  whileHover={{ scale: 1.15 }}
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${social.color} rounded-full mb-4 transition-transform duration-300 shadow-lg hover:shadow-xl`}
                >
                  <social.icon className="w-10 h-10 text-white" />
                </motion.a>
                <h3 className="text-lg font-semibold text-gray-800">
                  {social.label}
                </h3>
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
              <button
                onClick={() => handleEmailClick("contact@fieldrichindia.com")}
                className="inline-flex items-center gap-3 border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                <span>Email Us</span>
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

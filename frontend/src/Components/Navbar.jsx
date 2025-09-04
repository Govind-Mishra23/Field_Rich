import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Removed ShoppingCart import
import fieldRichLogo from "../assets/Field Rich_Logo_v2.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop All", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  // Set the active path based on location for the animated indicator
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActivePath("/");
    } else {
      const foundLink = navLinks.find(
        (link) => currentPath.startsWith(link.path) && link.path !== "/"
      );
      setActivePath(foundLink ? foundLink.path : "/");
    }
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Removed body scroll lock to avoid page content being hidden on mobile
  useEffect(() => {}, [isMobileMenuOpen]);

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="fixed top-0 w-full bg-gradient-to-r from-amber-50 via-red-50 to-orange-50 backdrop-blur-sm z-50 overflow-visible"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{
        duration: 15,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
      style={{ backgroundSize: "200% 100%" }} // Make gradient larger than the nav for movement
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14 lg:h-16">
          {/* Logo & Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
          >
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
              <img
                src={fieldRichLogo}
                alt="Field Rich Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 object-contain"
              />
              <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-red-800 tracking-wider font-serif">
                <span className="hidden sm:inline">FIELD RICH</span>
                <span className="sm:hidden">FIELD RICH</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 relative">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                className="relative group"
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  to={link.path}
                  className={`relative text-base lg:text-lg xl:text-xl font-medium py-1 px-2 z-10 block transition-colors duration-300 ${
                    activePath === link.path
                      ? "text-red-700"
                      : "text-stone-700 hover:text-red-700"
                  }`}
                >
                  {link.name}
                </Link>
                {/* Active Indicator */}
                {activePath === link.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] sm:h-[3px] bg-red-700 rounded-full z-0"
                    initial={{ rotate: -10 }} // Starts tilted up
                    animate={{ rotate: 0 }} // Animates to flat (0 degrees)
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                {/* Hover Effect */}
                <motion.span
                  className="absolute inset-0 bg-red-100 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ originX: 0.5 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.9 }}
              className="text-stone-700 hover:text-red-700 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="sm:w-7 sm:h-7" />
              ) : (
                <Menu size={24} className="sm:w-7 sm:h-7" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (mobile) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute left-0 right-0 top-full bg-amber-50/95 backdrop-blur-md flex flex-col items-start justify-start gap-4 sm:gap-6 py-4 px-6 shadow-lg border-t border-amber-100 max-h-[calc(100dvh-4rem)] overflow-y-auto z-[60]"
            role="dialog"
            aria-modal="true"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.05 + index * 0.06 },
                }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full"
              >
                <Link
                  to={link.path}
                  className={`block w-full text-lg sm:text-xl font-semibold py-3 ${
                    activePath === link.path
                      ? "text-red-700"
                      : "text-stone-800 hover:text-red-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

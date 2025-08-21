import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">FR</span>
              </div>
              <span className="text-2xl font-bold text-red-800">FIELD RICH</span>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex space-x-8"
          >
            <Link 
              to="/" 
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors ${
                isActive('/products') 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${
                isActive('/contact') 
                  ? 'text-orange-600 font-semibold' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
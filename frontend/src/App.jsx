import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Footer } from './Components/Footer';
import { HomePage } from './Pages/HomePage';
import { ProductsPage } from './Pages/ProductsPage';
import { ProductDetailPage } from './Pages/ProductDetailPage';
import { ContactPage } from './Pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

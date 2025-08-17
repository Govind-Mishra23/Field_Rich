"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Leaf, Award, Users, ArrowRight, CheckCircle } from "lucide-react"
import "./App.css"
import LoadingScreen from "./Components/loading-screen"
import {Footer} from "./Components/Footer"
import { ContactSection } from "./Components/ContactSection"
import {Products} from "./Components/Products"
import { About } from "./Components/About"
import { Hero } from "./Components/Hero"
import Navbar from "./Components/Navbar"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const handleLoadingComplete = () => {
    setIsLoading(false)
  }
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Products Section */}
      <Products/>
      {/* About Section */}
      <About />
      {/* Contact Section */}
      <ContactSection />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

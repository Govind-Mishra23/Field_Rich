"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const LoadingScreen = ({ onLoadingComplete }) => {
  const [currentText, setCurrentText] = useState("")
  const [showTagline, setShowTagline] = useState(false)
  const [showLogo, setShowLogo] = useState(false)

  const brandText = "FIELD RICH"
  const tagline = "Harvested From Nature's Best"

  const spiceParticles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    color: ["#DC2626", "#F59E0B", "#059669", "#B45309", "#EF4444", "#F97316", "#10B981", "#D97706"][i % 8],
    size: Math.random() * 3 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    delay: Math.random() * 0.5,
  }))

  useEffect(() => {
    const completionTimer = setTimeout(() => {
      onLoadingComplete()
    }, 3000)

    setTimeout(() => setShowLogo(true), 100)

    setTimeout(() => {
      let textIndex = 0
      const textInterval = setInterval(() => {
        if (textIndex <= brandText.length) {
          setCurrentText(brandText.slice(0, textIndex))
          textIndex++
        } else {
          clearInterval(textInterval)
          setTimeout(() => setShowTagline(true), 200)
        }
      }, 80) // Reduced from 200ms to 80ms per character
    }, 300) // Start at 300ms instead of 1500ms

    return () => {
      clearTimeout(completionTimer)
    }
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 0.98,
        }}
        transition={{
          duration: 0.5, // Reduced transition duration
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
        style={{ backgroundColor: "#FFF5EF" }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(180,83,9,0.08)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.06)_0%,transparent_50%)]" />
        </div>

        {spiceParticles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              opacity: 0,
              scale: 0,
              x: `${particle.initialX}vw`,
              y: `${particle.initialY}vh`,
            }}
            animate={{
              opacity: [0, 0.6, 0.4, 0],
              scale: [0, 1, 0.9, 0],
              x: [`${particle.initialX}vw`, `${(particle.initialX + 10) % 100}vw`],
              y: [`${particle.initialY}vh`, `${(particle.initialY + 15) % 100}vh`],
              rotate: [0, 180],
            }}
            transition={{
              duration: 3, // Reduced from 15+ seconds to 3 seconds
              delay: particle.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute rounded-full shadow-lg"
            style={{
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}30`,
            }}
          />
        ))}

        {/* Main content container */}
        <div className="relative z-10 text-center max-w-lg mx-auto px-8">
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8, // Reduced duration for faster appearance
                  ease: [0.175, 0.885, 0.32, 1.275],
                }}
                className="mb-12 relative" // Reduced margin
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 6, // Reduced from 30 seconds to 6 seconds
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-32 h-32 mx-auto" // Reduced size
                >
                  <div className="w-full h-full border-2 border-amber-600/40 rounded-full" />
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2, // Reduced duration
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative w-28 h-28 mx-auto bg-gradient-to-br from-amber-100 via-amber-200 to-amber-300 rounded-full flex items-center justify-center border-4 border-amber-600/60 shadow-xl" // Reduced size
                >
                  <div className="relative">
                    {/* Enhanced Mortar Bowl */}
                    <div className="w-14 h-10 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 rounded-b-full relative border-2 border-amber-700/30 shadow-inner">
                      {/* Fresh leaves to be crushed */}
                      <motion.div
                        animate={{
                          scale: [1, 0.8, 0.6, 0.4],
                          opacity: [0.9, 0.7, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="absolute bottom-3 left-2 w-3 h-2 bg-green-500 rounded-full transform rotate-12"
                        style={{
                          clipPath: "polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%)",
                        }}
                      />
                      <motion.div
                        animate={{
                          scale: [1, 0.7, 0.5, 0.3],
                          opacity: [0.8, 0.6, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 3,
                          delay: 0.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="absolute bottom-3 right-2 w-2 h-2 bg-green-600 rounded-full transform -rotate-12"
                        style={{
                          clipPath: "polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%)",
                        }}
                      />
                      <motion.div
                        animate={{
                          scale: [1, 0.6, 0.4, 0.2],
                          opacity: [0.7, 0.5, 0.3, 0.1],
                        }}
                        transition={{
                          duration: 3,
                          delay: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-green-400 rounded-full"
                        style={{
                          clipPath: "polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%)",
                        }}
                      />

                      {/* Spice powder with grinding effect */}
                      <motion.div
                        animate={{
                          scale: [0.4, 0.6, 0.8, 1],
                          opacity: [0.3, 0.5, 0.7, 0.9],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-600 rounded-full shadow-lg"
                      />
                    </div>

                    {/* Enhanced Pestle with realistic left-to-right crushing motion */}
                    <motion.div
                      animate={{
                        x: [-6, -3, 0, 3, 6, 3, 0, -3, -6],
                        y: [0, -1, -2, -1, 0, -1, -2, -1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                    >
                      {/* Pestle handle */}
                      <div className="w-2 h-8 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 rounded-full shadow-lg border border-amber-800/20" />
                      {/* Pestle head with crushing effect */}
                      <motion.div
                        animate={{
                          scaleY: [1, 1.1, 1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="w-4 h-3 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full mx-auto -mt-1 shadow-md border border-amber-700/30"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }} // Faster appearance
            className="mb-6" // Reduced margin
          >
            <h1 className="text-3xl md:text-4xl font-bold text-amber-900 tracking-wider font-serif">
              {currentText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.06, // Faster text reveal
                    duration: 0.4, // Reduced duration
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="inline-block"
                  style={{
                    textShadow: "0 2px 4px rgba(180, 83, 9, 0.3)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <AnimatePresence>
            {showTagline && (
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6, // Faster tagline appearance
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-lg text-amber-700 italic mb-8 font-light tracking-wide" // Reduced margin
                style={{
                  textShadow: "0 1px 2px rgba(180, 83, 9, 0.2)",
                }}
              >
                {tagline}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen

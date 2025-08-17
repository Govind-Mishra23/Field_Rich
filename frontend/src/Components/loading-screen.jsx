"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [showTagline, setShowTagline] = useState(false)
  const [showLogo, setShowLogo] = useState(false)

  const brandText = "FIELD RICH"
  const tagline = "Harvested From Nature's Best"

  const spiceParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    color: [
      "#DC2626",
      "#F59E0B",
      "#059669",
      "#B45309",
      "#EF4444",
      "#F97316",
      "#10B981",
      "#D97706",
      "#991B1B",
      "#EA580C",
      "#047857",
      "#92400E",
    ][i % 12],
    size: Math.random() * 4 + 2,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    delay: Math.random() * 2,
  }))

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => onLoadingComplete(), 800)
          return 100
        }
        return prev + 1.5
      })
    }, 60)

    setTimeout(() => setShowLogo(true), 300)

    setTimeout(() => {
      let textIndex = 0
      const textInterval = setInterval(() => {
        if (textIndex <= brandText.length) {
          setCurrentText(brandText.slice(0, textIndex))
          textIndex++
        } else {
          clearInterval(textInterval)
          setTimeout(() => setShowTagline(true), 500)
        }
      }, 100)
    }, 1200)

    return () => {
      clearInterval(progressInterval)
    }
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)",
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="fixed inset-0 bg-gradient-to-br from-amber-950 via-orange-900 to-red-950 flex items-center justify-center z-50 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.1)_0%,transparent_50%)]" />
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"
          />
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
              opacity: [0, 0.8, 0.6, 0.9, 0],
              scale: [0, 1, 1.2, 0.8, 0],
              x: [
                `${particle.initialX}vw`,
                `${(particle.initialX + 20) % 100}vw`,
                `${(particle.initialX + 40) % 100}vw`,
                `${(particle.initialX + 60) % 100}vw`,
              ],
              y: [
                `${particle.initialY}vh`,
                `${(particle.initialY + 15) % 100}vh`,
                `${(particle.initialY + 30) % 100}vh`,
                `${(particle.initialY + 45) % 100}vh`,
              ],
              rotate: [0, 180, 360, 540],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              delay: particle.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute rounded-full shadow-lg"
            style={{
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`,
            }}
          />
        ))}

        {/* Main content container */}
        <div className="relative z-10 text-center max-w-md mx-auto px-8">
          <AnimatePresence>
            {showLogo && (
              <motion.div
                initial={{ scale: 0, rotate: -90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.175, 0.885, 0.32, 1.275],
                }}
                className="mb-12 relative"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-32 h-32 mx-auto"
                >
                  <div className="w-full h-full border-2 border-amber-400/30 rounded-full" />
                  <div className="absolute top-2 left-2 right-2 bottom-2 border border-orange-400/20 rounded-full" />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-32 h-32 mx-auto"
                >
                  <div className="absolute top-4 left-4 right-4 bottom-4 border border-red-400/20 rounded-full" />
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 20px rgba(245, 158, 11, 0.3)",
                      "0 0 40px rgba(245, 158, 11, 0.6)",
                      "0 0 20px rgba(245, 158, 11, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative w-24 h-24 mx-auto bg-gradient-to-br from-amber-600 via-orange-700 to-red-800 rounded-full flex items-center justify-center border-4 border-amber-500/50"
                >
                  <div className="relative">
                    {/* Mortar */}
                    <div className="w-8 h-6 bg-gradient-to-b from-amber-300 to-amber-600 rounded-b-full relative">
                      {/* Spice powder */}
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                      />
                    </div>

                    {/* Pestle */}
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        y: [0, -1, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                    >
                      <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-amber-700 rounded-full" />
                      <div className="w-3 h-3 bg-amber-500 rounded-full mx-auto -mt-1" />
                    </motion.div>
                  </div>

                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [-2, -8, -2],
                        x: [0, Math.sin(i) * 3, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeOut",
                      }}
                      className="absolute w-0.5 h-0.5 bg-orange-300 rounded-full"
                      style={{
                        left: `${45 + Math.cos(i * 45) * 8}%`,
                        top: "60%",
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider font-serif">
              {currentText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 1.5 + index * 0.08,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="inline-block"
                  style={{
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(245, 158, 11, 0.3)",
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
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-lg md:text-xl text-amber-200 italic mb-10 font-light tracking-wide"
                style={{
                  textShadow: "0 0 20px rgba(245, 158, 11, 0.4)",
                }}
              >
                {tagline}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="w-full max-w-sm mx-auto"
          >
            <div className="relative">
              {/* Progress bar container */}
              <div className="w-full h-1 bg-gradient-to-r from-amber-900/40 via-orange-900/40 to-red-900/40 rounded-full overflow-hidden backdrop-blur-sm border border-amber-700/20">
                {/* Progress fill */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 relative shadow-lg"
                  style={{
                    boxShadow: "0 0 10px rgba(245, 158, 11, 0.6)",
                  }}
                >
                  <motion.div
                    animate={{ x: [-100, 400] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 blur-sm"
                  />
                </motion.div>
              </div>

              {/* Progress percentage */}
              <motion.div
                animate={{
                  opacity: [0.8, 1, 0.8],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="text-center mt-6"
              >
                <span className="text-amber-200 text-xl font-semibold tracking-wider">{progress}%</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="flex justify-center space-x-3 mt-8"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-lg"
                style={{
                  boxShadow: "0 0 8px rgba(245, 158, 11, 0.6)",
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen

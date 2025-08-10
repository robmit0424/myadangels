"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { 
  Sparkles,
  Mail,
  Code2
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Floating Elements Component
const FloatingElements = () => {
  // Generate stable positions using index-based calculations
  const elements = [...Array(20)].map((_, i) => ({
    duration: 10 + (i % 10),
    delay: (i % 5),
    left: `${(i * 17) % 100}%`,
    top: `${(i * 23) % 100}%`,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-pink-400/20 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
          }}
          style={{
            left: el.left,
            top: el.top,
          }}
        />
      ))}
    </div>
  )
}

export default function ComingSoonPage() {
  const [showDevMode, setShowDevMode] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Check if running on localhost
    if (typeof window !== 'undefined') {
      const isLocalhost = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1' ||
                         window.location.hostname === '[::1]'
      setShowDevMode(isLocalhost)
    }
  }, [])

  useEffect(() => {
    // Set video playback rate to 100%
    if (videoRef.current) {
      const video = videoRef.current
      video.playbackRate = 1.0
    }
  }, [])

  useEffect(() => {
    // Set target launch date (example: 3 months from now)
    const launchDate = new Date()
    launchDate.setMonth(launchDate.getMonth() + 3)
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = launchDate.getTime() - now
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-white relative overflow-hidden flex items-center justify-center py-4 sm:py-6">
      {/* Mountains Background - Video with Image Fallback */}
      <div className="absolute inset-0 opacity-85">
        {/* Primary fallback image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/mountains.jpeg')",
            filter: 'brightness(0.8)',
            transform: 'scale(1.05)',
            transformOrigin: 'center center'
          }}
        />
        
        {/* Video overlay - will hide on error */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'brightness(0.8)'
          }}
          onError={(e) => {
            console.error('Video failed to load, using image fallback')
            e.currentTarget.style.display = 'none'
          }}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
        >
          <source src="/MountainsZoom.mp4" type="video/mp4" />
        </video>
      </div>
      <FloatingElements />
      
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-2xl sm:blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              left: `${i * 30 + 10}%`,
              top: `${i * 25 + 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
      
        

          {/* Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-orbitron mb-2 sm:mb-3 md:mb-4 text-white leading-tight px-1 sm:px-2 md:px-0 max-w-full drop-shadow-2xl"
          >
            AdAngels<span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl align-super">™</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base italic sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/95 mb-4 sm:mb-6 lg:mb-8 font-roboto px-4 drop-shadow-xl"
          >
            Where Marketing is Magic and Production is Play
          </motion.p>          
        </div>
      </div>

      {/* Footer - Bottom Right Corner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 right-4 sm:right-6 md:right-8 lg:right-12 text-right"
      >
        <div className="backdrop-blur-md bg-white/10 rounded-lg px-4 py-3 border border-white/20 shadow-xl">
          <a 
            href="mailto:info@myadangels.com" 
            className="text-xs sm:text-sm md:text-base font-semibold text-pink-300 hover:text-pink-200 transition-all duration-300 inline-flex items-center gap-1 group mb-1"
          >
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
            info@myadangels.com
          </a>
          <p className="text-xs sm:text-sm md:text-base font-medium text-white/90">&copy; 2024 Ad Angels™. All rights reserved.</p>
        </div>
      </motion.div>

      {/* Dev Mode Button - Only visible on localhost */}
      {showDevMode && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="fixed top-4 left-4 z-50"
        >
          <Button
            onClick={() => window.location.href = '/dev-panel'}
            className="bg-gray-900 hover:bg-gray-800 text-white font-mono text-xs px-3 py-2 rounded-md shadow-lg flex items-center gap-2 border border-gray-700"
          >
            <Code2 className="w-4 h-4" />
            Dev Mode
          </Button>
        </motion.div>
      )}
    </div>
  )
}
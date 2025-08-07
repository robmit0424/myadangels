"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { 
  Sparkles,
  Mail,
  ArrowRight,
  Code2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import toast, { Toaster } from 'react-hot-toast'

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
  const [email, setEmail] = useState("")
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
    // Set video playback rate to 100% and add error handling
    if (videoRef.current) {
      const video = videoRef.current
      video.playbackRate = 1.0
      
      // Add event listeners for debugging
      video.addEventListener('loadstart', () => console.log('Video loading started'))
      video.addEventListener('canplay', () => console.log('Video can start playing'))
      video.addEventListener('error', (e) => console.error('Video error:', e))
      video.addEventListener('stalled', () => console.log('Video stalled'))
      
      return () => {
        video.removeEventListener('loadstart', () => {})
        video.removeEventListener('canplay', () => {})
        video.removeEventListener('error', () => {})
        video.removeEventListener('stalled', () => {})
      }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast.success('Thank you for joining our waitlist!', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#ffffff',
          color: '#ec4899',
          border: '1px solid rgba(236, 72, 153, 0.3)',
        },
      })
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-white relative overflow-hidden flex items-center justify-center py-4 sm:py-6">
      {/* Mountains Video Background */}
      <div className="absolute inset-0 opacity-85">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(0.8)',
            transform: 'scale(1.05)',
            transformOrigin: 'center center'
          }}
          onError={(e) => {
            console.error('Video failed to load, falling back to image')
            // Hide video and show fallback
            e.currentTarget.style.display = 'none'
          }}
        >
          <source src="/mountainszoom.mp4" type="video/mp4" />
          <source src="/mountainszoom.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Fallback image - always present but behind video */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/mountains.jpeg')",
            filter: 'brightness(0.8)',
            transform: 'scale(1.05)',
            transformOrigin: 'center center',
            zIndex: -1
          }}
        />
      </div>
      <Toaster />
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
          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto font-roboto leading-relaxed px-4 drop-shadow-lg"
          >
            We're building the future of work — a 3D virtual workspace where freelancers 
            earn digital coins through engaging gameplay. Where play is production.
          </motion.p>


          {/* Email Signup */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-md mx-auto px-4"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/80 backdrop-blur-xl border border-pink-200 text-pink-800 placeholder:text-pink-400 rounded-lg sm:rounded-xl focus:border-pink-400/70 focus:outline-none focus:ring-2 focus:ring-pink-400/30 font-roboto text-sm sm:text-base transition-all duration-200"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-orbitron shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group text-sm sm:text-base whitespace-nowrap hover:scale-[1.02] active:scale-95"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            
          </motion.div>

        
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-0 right-0 text-center text-white/80 font-roboto px-4 drop-shadow-lg"
      >
        <p className="text-xs sm:text-sm md:text-base font-medium">&copy; 2025 Ad Angels™. All rights reserved.</p>
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
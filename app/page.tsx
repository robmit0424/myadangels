"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
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
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-6 sm:mb-8"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mx-auto mb-3 sm:mb-4 md:mb-6 relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl"
              />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/adAngelsLogo.jpg"
                  alt="Ad Angels Logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-orbitron mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent leading-tight px-1 sm:px-2 md:px-0 max-w-full"
          >
            Ad Angels<span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl align-super">™</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-pink-800/90 mb-4 sm:mb-6 lg:mb-8 font-roboto px-4"
          >
            Where marketing is magic, and magic is play
          </motion.p>
          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-pink-700/80 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto font-roboto leading-relaxed px-4"
          >
            We're building the future of work — a 3D virtual workspace where freelancers 
            earn digital coins through engaging gameplay. Where play is production.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto px-4"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-white/80 backdrop-blur-xl border border-pink-200 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold font-orbitron bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-pink-600/70 mt-1 sm:mt-2 font-roboto capitalize">
                    {unit}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

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
            <p className="text-xs sm:text-sm text-pink-600/70 mt-3 sm:mt-4 font-roboto text-center">
              Be the first to know when we launch. No spam, we promise.
            </p>
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 pb-16 sm:pb-20 md:pb-24 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto px-4"
          >
            {[
              { icon: Sparkles, text: "Gamified Workspace" },
              { icon: Mail, text: "Token Rewards" },
              { icon: ArrowRight, text: "AI Copilots" }
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-xl border border-pink-200 rounded-lg sm:rounded-xl p-4 sm:p-5 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:bg-white/70 transition-all duration-300 min-h-[60px] sm:min-h-[80px]"
              >
                <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 flex-shrink-0" />
                <span className="text-pink-700 font-roboto text-sm sm:text-base font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-0 right-0 text-center text-pink-600/70 font-roboto px-4"
      >
        <p className="text-xs sm:text-sm md:text-base">&copy; 2025 Ad Angels™. All rights reserved.</p>
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
"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { 
  Sparkles,
  Mail,
  ArrowRight
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
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

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
          background: '#1f2937',
          color: '#fff',
          border: '1px solid rgba(236, 72, 153, 0.3)',
        },
      })
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800 relative overflow-hidden flex items-center justify-center">
      <Toaster />
      <FloatingElements />
      
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-3xl"
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 relative">
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
            className="text-6xl md:text-8xl font-bold font-orbitron mb-4 bg-gradient-to-r from-pink-400 via-neutral-300 to-pink-500 bg-clip-text text-transparent"
          >
            Ad Angels<span className="text-2xl md:text-3xl align-super">™</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-white/80 mb-8 font-roboto"
          >
            Something Amazing is Coming
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto font-roboto leading-relaxed"
          >
            We're building the future of work — a 3D virtual workspace where freelancers 
            earn digital coins through engaging gameplay. Where play is production.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-4 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-4 md:p-6">
                  <div className="text-3xl md:text-5xl font-bold font-orbitron bg-gradient-to-r from-pink-400 to-neutral-300 bg-clip-text text-transparent">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base text-white/60 mt-2 font-roboto capitalize">
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
            className="max-w-md mx-auto"
          >
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-black/20 backdrop-blur-xl border border-white/10 text-white placeholder:text-white/40 rounded-xl focus:border-pink-400/50 focus:outline-none focus:ring-2 focus:ring-pink-400/20 font-roboto"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-black font-semibold px-8 py-4 rounded-xl font-orbitron shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            <p className="text-sm text-white/40 mt-4 font-roboto">
              Be the first to know when we launch. No spam, we promise.
            </p>
          </motion.div>

          {/* Features Preview */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Sparkles, text: "Gamified Workspace" },
              { icon: Mail, text: "Token Rewards" },
              { icon: ArrowRight, text: "AI Copilots" }
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-black/10 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex items-center justify-center gap-3"
              >
                <feature.icon className="w-5 h-5 text-pink-400" />
                <span className="text-white/70 font-roboto">{feature.text}</span>
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
        className="absolute bottom-8 left-0 right-0 text-center text-white/40 font-roboto"
      >
        <p>&copy; 2025 Ad Angels™. All rights reserved.</p>
      </motion.div>
    </div>
  )
}
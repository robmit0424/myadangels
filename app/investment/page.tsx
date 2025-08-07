"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import toast, { Toaster } from 'react-hot-toast'
import { Timeline } from "@/components/ui/timeline"
import { 
  DollarSign, 
  Calendar, 
  FileText, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3,
  Rocket,
  Mail,
  Phone,
  ArrowLeft,
  Gamepad2,
  Download,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Coins,
  Menu,
  X
} from "lucide-react"

export default function InvestmentPage() {
  const heroRef = useRef(null)
  const tableRef = useRef(null)
  const heroInView = useInView(heroRef, { once: false, amount: 0.1 })
  const tableInView = useInView(tableRef, { once: false, amount: 0.1 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const handleWaitlistClick = () => {
    toast.error('Waitlist currently unavailable', {
      duration: 3000,
      position: 'top-center',
      style: {
        background: '#ffffff',
        color: '#ec4899',
        border: '1px solid rgba(236, 72, 153, 0.3)',
      },
    })
  }

  const timelineData = [
    {
      title: "MVP Launch",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-pink-500/10 to-white/10 p-4 sm:p-6 rounded-xl border border-pink-500/20 backdrop-blur-sm">
            <h4 className="text-xl sm:text-2xl font-bold text-pink-800 font-orbitron mb-4 flex items-center">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-pink-400" />
              Core Platform Development
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-center text-pink-700/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span className="font-roboto">Quest system architecture</span>
                </div>
                <div className="flex items-center text-pink-700/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span className="font-roboto">Token wallet integration</span>
                </div>
                <div className="flex items-center text-pink-700/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span className="font-roboto">Multiplayer workspace</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-pink-700/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span className="font-roboto">3D environment basics</span>
                </div>
                <div className="flex items-center text-pink-700/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span className="font-roboto">User authentication</span>
                </div>
                <div className="flex items-center text-pink-700/90">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span className="font-roboto">Basic AI copilots</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-500/20 text-purple-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-roboto font-medium text-xs sm:text-sm inline-block">
              Target: Month 3-4
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Beta Release",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-4 sm:p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
            <h4 className="text-xl sm:text-2xl font-bold text-pink-800 font-orbitron mb-4 flex items-center">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-cyan-400" />
              Community Onboarding
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <h5 className="text-base sm:text-lg font-bold text-cyan-400 font-orbitron mb-3">Creator Features</h5>
                <div className="space-y-2">
                  <div className="flex items-center text-pink-700/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                    <span className="font-roboto text-sm sm:text-base">Content creator onboarding</span>
                  </div>
                  <div className="flex items-center text-pink-700/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                    <span className="font-roboto text-sm sm:text-base">Campaign creation tools</span>
                  </div>
                  <div className="flex items-center text-pink-700/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                    <span className="font-roboto text-sm sm:text-base">Performance analytics</span>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-base sm:text-lg font-bold text-cyan-400 font-orbitron mb-3">Early Adopters</h5>
                <div className="space-y-2">
                  <div className="flex items-center text-pink-700/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                    <span className="font-roboto text-sm sm:text-base">Limited beta access</span>
                  </div>
                  <div className="flex items-center text-pink-700/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                    <span className="font-roboto text-sm sm:text-base">Feedback collection system</span>
                  </div>
                  <div className="flex items-center text-pink-700/90">
                    <ArrowRight className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" />
                    <span className="font-roboto text-sm sm:text-base">Community building</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-purple-500/20 text-purple-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-roboto font-medium text-xs sm:text-sm inline-block">
              Target: Month 6
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Monetization",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-6 rounded-xl border border-green-500/20 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-pink-800 font-orbitron mb-4 flex items-center">
              <Coins className="w-6 h-6 mr-3 text-green-400" />
              Token Economy Launch
            </h4>
            <div className="space-y-4 mb-6">
              <div className="bg-green-500/10 p-4 rounded-lg">
                <h5 className="text-lg font-bold text-green-400 font-orbitron mb-2">Token-to-Cash System</h5>
                <p className="text-pink-700/80 font-roboto">
                                     Full implementation of AdAngel<span className="text-xs align-super">™</span> Coins redemption for real USD, enabling freelancers to monetize their gameplay achievements.
                </p>
              </div>
              <div className="bg-green-500/10 p-3 sm:p-4 rounded-lg">
                <h5 className="text-base sm:text-lg font-bold text-green-400 font-orbitron mb-2">Revenue Streams</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-pink-700/80 font-roboto text-sm sm:text-base">• Platform transaction fees</div>
                  <div className="text-pink-700/80 font-roboto text-sm sm:text-base">• Premium workspace features</div>
                  <div className="text-pink-700/80 font-roboto text-sm sm:text-base">• Advanced AI copilot access</div>
                  <div className="text-pink-700/80 font-roboto text-sm sm:text-base">• Enterprise team licenses</div>
                </div>
              </div>
            </div>
            <div className="bg-purple-500/20 text-purple-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-roboto font-medium text-xs sm:text-sm inline-block">
              Target: Month 8
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Partnerships",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-white/10 to-pink-600/10 p-4 sm:p-6 rounded-xl border border-white/20 backdrop-blur-sm">
            <h4 className="text-xl sm:text-2xl font-bold text-pink-800 font-orbitron mb-4 flex items-center">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-purple-400" />
              Strategic Integrations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <Card className="bg-white/5 border-white/10 p-3 sm:p-4">
                <h5 className="text-base sm:text-lg font-bold text-purple-400 font-orbitron mb-3">Meta Integration</h5>
                <div className="space-y-2 text-pink-700/80 font-roboto text-sm sm:text-base">
                  <div>• Facebook Ads API integration</div>
                  <div>• Instagram campaign management</div>
                  <div>• Cross-platform analytics</div>
                  <div>• Automated campaign optimization</div>
                </div>
              </Card>
              <Card className="bg-white/5 border-white/10 p-3 sm:p-4">
                <h5 className="text-base sm:text-lg font-bold text-purple-400 font-orbitron mb-3">TikTok Partnership</h5>
                <div className="space-y-2 text-pink-700/80 font-roboto text-sm sm:text-base">
                  <div>• TikTok for Business API</div>
                  <div>• Creator marketplace access</div>
                  <div>• Viral content optimization</div>
                  <div>• Performance tracking tools</div>
                </div>
              </Card>
            </div>
            <div className="bg-purple-500/20 text-purple-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-roboto font-medium text-xs sm:text-sm inline-block">
              Target: Month 10-12
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Scale & Traction",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 p-4 sm:p-6 rounded-xl border border-orange-500/20 backdrop-blur-sm">
            <h4 className="text-xl sm:text-2xl font-bold text-pink-800 font-orbitron mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-orange-400" />
              Growth Milestones
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-orange-500/10 p-3 sm:p-4 rounded-lg">
                  <h5 className="text-xl sm:text-2xl font-bold text-orange-400 font-orbitron">10,000+</h5>
                  <p className="text-pink-700/80 font-roboto text-sm sm:text-base">Active freelancers in the ecosystem</p>
                </div>
                <div className="bg-orange-500/10 p-3 sm:p-4 rounded-lg">
                  <h5 className="text-xl sm:text-2xl font-bold text-orange-400 font-orbitron">$250K</h5>
                  <p className="text-pink-700/80 font-roboto text-sm sm:text-base">Gross Merchandise Value (GMV)</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-orange-500/10 p-3 sm:p-4 rounded-lg">
                  <h5 className="text-xl sm:text-2xl font-bold text-orange-400 font-orbitron">500+</h5>
                  <p className="text-pink-700/80 font-roboto text-sm sm:text-base">Active advertising campaigns</p>
                </div>
                <div className="bg-orange-500/10 p-3 sm:p-4 rounded-lg">
                  <h5 className="text-xl sm:text-2xl font-bold text-orange-400 font-orbitron">25%</h5>
                  <p className="text-pink-700/80 font-roboto text-sm sm:text-base">Month-over-month growth rate</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-500/20 text-purple-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-roboto font-medium text-xs sm:text-sm inline-block">
              Target: Month 18
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Series A Ready",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-pink-500/10 to-white/10 p-6 rounded-xl border border-pink-500/20 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-pink-800 font-orbitron mb-4 flex items-center">
              <Sparkles className="w-6 h-6 mr-3 text-pink-400" />
              Investment Readiness
            </h4>
            <div className="space-y-4 mb-6">
              <div className="bg-pink-500/10 p-3 sm:p-4 rounded-lg">
                <h5 className="text-base sm:text-lg font-bold text-pink-400 font-orbitron mb-2">Market Validation</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-pink-700/80 font-roboto text-sm sm:text-base">
                  <div>• Proven product-market fit</div>
                  <div>• Strong user retention metrics</div>
                  <div>• Sustainable revenue growth</div>
                  <div>• Ecosystem network effects</div>
                </div>
              </div>
              <div className="bg-pink-500/10 p-3 sm:p-4 rounded-lg">
                <h5 className="text-base sm:text-lg font-bold text-pink-400 font-orbitron mb-2">Ecosystem Data</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-pink-700/80 font-roboto text-sm sm:text-base">
                  <div>• Comprehensive analytics platform</div>
                  <div>• AI-driven insights engine</div>
                  <div>• Predictive performance models</div>
                  <div>• Enterprise-ready infrastructure</div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-purple-500/20 text-purple-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-roboto font-medium text-xs sm:text-sm">
                Target: Month 20-24
              </div>
              <div className="bg-green-500/20 text-green-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-roboto font-medium text-xs sm:text-sm">
                Series A: $25-40M
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-white">
      <Toaster />
      {/* Header */}
      <motion.header 
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-50 bg-white/90 backdrop-blur-xl border-b border-pink-200"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => window.location.href = '/'}
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="/adAngelsLogo.jpg"
                  alt="Ad Angels Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold font-orbitron bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">Ad Angels<span className="text-xs align-super">™</span></span>
            </motion.div>
            {/* Desktop Navigation */}
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden sm:flex items-center space-x-4"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50 font-orbitron">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <a href="/">Home</a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236, 72, 153, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 font-orbitron shadow-lg hover:shadow-pink-500/25 transition-all duration-300 text-pink-800"
                  onClick={handleWaitlistClick}
                >
                  Join Waitlist
                </Button>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="sm:hidden"
            >
              <Button
                variant="outline"
                size="icon"
                className="border-pink-300 text-pink-700 hover:bg-pink-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden bg-white/90 backdrop-blur-xl border-b border-pink-200"
          >
            <div className="px-4 py-4 space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start border-pink-300 text-pink-700 hover:bg-pink-50 font-orbitron"
                onClick={() => {
                  window.location.href = '/'
                  setMobileMenuOpen(false)
                }}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 font-orbitron text-pink-800"
                onClick={() => {
                  handleWaitlistClick()
                  setMobileMenuOpen(false)
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Enhanced Hero Section with Timeline */}
      <section ref={heroRef} className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 animated-gradient"></div>
          {/* Floating Orbs */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 8 + i * 1.5,
                repeat: Infinity,
                delay: i * 0.7,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
          {/* Particle Trail Effect */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-green-400/40 rounded-full"
              animate={{
                x: [0, 200, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10 px-4">
          {/* Enhanced Badge */}
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.8 }}
            animate={heroInView ? { y: 0, opacity: 1, scale: 1 } : { y: 30, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: heroInView ? 0.2 : 0 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-block mb-8"
            >
              <Badge className="bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20 font-orbitron backdrop-blur-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 3, 
                    delay: 1.5, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  className="inline-block"
                >
                  <DollarSign className="w-5 h-5 mr-3" />
                </motion.div>
                <span className="relative z-10">Angel Investment Opportunity</span>
              </Badge>
            </motion.div>
          </motion.div>

          {/* Epic Title with Text Effects */}
          <motion.div 
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={heroInView ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, delay: heroInView ? 0.4 : 0 }}
            className="relative mb-8"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-orbitron mb-4 sm:mb-6 relative leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient Text */}
              <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent">
                Join The 
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-800 via-pink-700 to-pink-600 bg-clip-text text-transparent">
                Game
              </span>
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-3xl"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </motion.h1>
          </motion.div>

          {/* Enhanced Description */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: heroInView ? 0.6 : 0 }}
            className="relative mb-12"
          >
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-pink-800/90 max-w-4xl mx-auto font-roboto leading-relaxed relative z-10 px-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              We're seeking <span className="text-pink-600 font-bold">angel round investment</span> to validate our MVP, build our founding team, and establish initial market traction. Your investment will help us <span className="bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent font-semibold">transform the future of work</span>.
            </motion.p>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl blur-xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Premium CTA Buttons */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: heroInView ? 0.8 : 0 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 rounded-xl blur-xl opacity-70 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <Button 
                className="relative bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-pink-800 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-orbitron shadow-2xl transition-all duration-300 overflow-hidden group"
                onClick={handleWaitlistClick}
              >
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Join Waitlist</span>
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative group"
            >
              <Button variant="outline" className="relative border-2 border-white/30 text-pink-800 hover:bg-white/10 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-orbitron backdrop-blur-sm transition-all duration-300 overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/5 to-green-500/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 relative z-10" />
                <span className="relative z-10">Download Pitch Deck</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Development Timeline */}
        <Timeline data={timelineData} />
      </section>

      {/* Use of Funds */}
      <section ref={tableRef} className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={tableInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              animate={tableInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: tableInView ? 0.2 : 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-4 text-pink-800"
            >
              Use of Funds
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={tableInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: tableInView ? 0.4 : 0 }}
              className="text-lg sm:text-xl text-pink-700/80 font-roboto px-4"
            >
              Strategic allocation of angel round investment
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={tableInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: tableInView ? 0.6 : 0 }}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-pink-200 p-8 mb-8 shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto -mx-2 sm:mx-0">
                  <table className="w-full min-w-[640px]">
                    <thead>
                      <motion.tr 
                        initial={{ opacity: 0 }}
                        animate={tableInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="border-b border-pink-200/50"
                      >
                        <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-pink-700/70 font-roboto text-xs sm:text-sm uppercase tracking-wide">Category</th>
                        <th className="text-center py-3 sm:py-4 px-3 sm:px-6 text-pink-700/70 font-roboto text-xs sm:text-sm uppercase tracking-wide">% of Raise</th>
                        <th className="text-center py-3 sm:py-4 px-3 sm:px-6 text-pink-700/70 font-roboto text-xs sm:text-sm uppercase tracking-wide">Amount</th>
                        <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-pink-700/70 font-roboto text-xs sm:text-sm uppercase tracking-wide">Purpose</th>
                      </motion.tr>
                    </thead>
                    <tbody>
                      {[
                        { 
                          category: "MVP Development", 
                          percentage: "50%", 
                          amount: "50%", 
                          purpose: "Core 3D workspace, basic gamification features, user authentication" 
                        },
                        { 
                          category: "Team Building", 
                          percentage: "30%", 
                          amount: "30%", 
                          purpose: "CTO, lead developers, UX/UI designer, initial team foundation" 
                        },
                        { 
                          category: "Market Validation", 
                          percentage: "15%", 
                          amount: "15%", 
                          purpose: "Beta testing, user research, early marketing, community building" 
                        },
                        { 
                          category: "Operations", 
                          percentage: "5%", 
                          amount: "5%", 
                          purpose: "Legal setup, basic infrastructure, tools, regulatory compliance" 
                        }
                      ].map((item, index) => (
                        <motion.tr 
                          key={index} 
                          initial={{ x: -50, opacity: 0 }}
                          animate={tableInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 1.0 + index * 0.1,
                            ease: "easeOut"
                          }}
                          whileHover={{ 
                            backgroundColor: "rgba(236, 72, 153, 0.05)",
                            transition: { duration: 0.2 }
                          }}
                          className="border-b border-pink-200/30 last:border-0"
                        >
                          <td className="py-4 sm:py-6 px-3 sm:px-6">
                            <div className="text-pink-800 font-orbitron font-medium text-sm sm:text-base md:text-lg">{item.category}</div>
                          </td>
                          <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={tableInView ? { scale: 1 } : { scale: 0 }}
                              transition={{ 
                                duration: 0.4, 
                                delay: 1.2 + index * 0.1,
                                type: "spring",
                                stiffness: 200
                              }}
                              className="text-pink-600 font-bold text-lg sm:text-xl"
                            >
                              {item.percentage}
                            </motion.div>
                          </td>
                          <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                            <div className="text-pink-800 font-bold text-lg sm:text-xl">{item.amount}</div>
                          </td>
                          <td className="py-4 sm:py-6 px-3 sm:px-6">
                            <div className="text-pink-700/80 font-roboto text-sm sm:text-base">{item.purpose}</div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Angel Round Runway Plan */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-pink-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-4 text-pink-800 px-4">
              Initial Team & Milestones
            </h2>
            <p className="text-lg sm:text-xl text-pink-700/80 font-roboto px-4">
              8-month runway to MVP and seed round preparation
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-pink-200 p-8 mb-8 shadow-lg">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px]">
                  <thead>
                    <tr className="border-b border-pink-200/50">
                      <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-pink-800/60 font-roboto text-xs sm:text-sm uppercase tracking-wide">Timeline</th>
                      <th className="text-center py-3 sm:py-4 px-3 sm:px-6 text-pink-800/60 font-roboto text-xs sm:text-sm uppercase tracking-wide">Team Size</th>
                      <th className="text-center py-3 sm:py-4 px-3 sm:px-6 text-pink-800/60 font-roboto text-xs sm:text-sm uppercase tracking-wide">Staff Costs (Monthly)</th>
                      <th className="text-left py-3 sm:py-4 px-3 sm:px-6 text-pink-800/60 font-roboto text-xs sm:text-sm uppercase tracking-wide">Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { 
                        timeline: "Months 1-3", 
                        teamSize: "3 founders", 
                        burnRate: "~$15K", 
                        runway: "Founders building MVP with minimal salaries" 
                      },
                      { 
                        timeline: "Months 4-6", 
                        teamSize: "5-6 team", 
                        burnRate: "~$35K", 
                        runway: "CTO + 2 developers, UX designer" 
                      },
                      { 
                        timeline: "Months 7-8", 
                        teamSize: "6-7 team", 
                        burnRate: "~$45K", 
                        runway: "Prepare for seed round with key hires" 
                      }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-pink-200/30 last:border-0 hover:bg-pink-50/50 transition-colors">
                        <td className="py-4 sm:py-6 px-3 sm:px-6">
                          <div className="text-pink-800 font-orbitron font-medium text-sm sm:text-base md:text-lg">{item.timeline}</div>
                        </td>
                        <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                          <div className="text-purple-400 font-medium text-sm sm:text-base md:text-lg">{item.teamSize}</div>
                        </td>
                        <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                          <div className="text-orange-400 font-bold text-sm sm:text-base md:text-lg">{item.burnRate}</div>
                        </td>
                        <td className="py-4 sm:py-6 px-3 sm:px-6">
                          <div className="text-pink-700/80 font-roboto text-sm sm:text-base">{item.runway}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          {/* Key Hiring Priorities */}
          <Card className="bg-white/80 border-pink-200 backdrop-blur-sm p-8 shadow-lg">
            <CardContent className="p-0">
              <h3 className="text-xl sm:text-2xl font-bold font-orbitron mb-6 text-pink-800 text-center">
                Key Angel Round Hires
              </h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-purple-400 font-orbitron mb-4">Technical Team</h4>
                  <div className="space-y-3 text-pink-700/80 font-roboto">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      <span>CTO / Technical Co-founder</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      <span>Senior Full-Stack Developer</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      <span>Frontend/3D Specialist</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-purple-400 font-orbitron mb-4">Product & Design</h4>
                  <div className="space-y-3 text-pink-700/80 font-roboto">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      <span>UX/UI Design Lead</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      <span>Product Marketing Specialist</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                      <span>Community Manager</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-pink-200/50 text-center">
                <div className="text-base sm:text-lg font-orbitron text-pink-800 mb-2">
                  <strong>Focus: MVP Development & Market Validation</strong>
                </div>
                <p className="text-pink-800/60 font-roboto text-sm sm:text-base">
                  8-month runway to achieve product-market fit and prepare for seed round
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-orbitron mb-6 text-pink-800 px-4">
            Ready to Transform Work?
          </h2>
          <p className="text-lg sm:text-xl text-pink-700/80 mb-8 sm:mb-10 md:mb-12 font-roboto leading-relaxed px-4">
            Join us as an angel investor and help us make work feel like play. Let's build the future together!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12 px-4">
            <Card className="bg-white/80 backdrop-blur-sm border-pink-200 p-8 shadow-lg">
              <CardContent className="text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-pink-400" />
                <h3 className="text-lg sm:text-xl font-orbitron text-pink-800 mb-4">Join the Waitlist</h3>
                <p className="text-pink-700/80 font-roboto mb-6">
                  Be the first to know when Ad Angels<span className="text-xs align-super">™</span> launches
                </p>
                <Button 
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 w-full font-orbitron text-white"
                  onClick={handleWaitlistClick}
                >
                  Join Waitlist
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-pink-200 p-8 shadow-lg">
              <CardContent className="text-center">
                <FileText className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-lg sm:text-xl font-orbitron text-pink-800 mb-4">Request Demo</h3>
                <p className="text-pink-700/80 font-roboto mb-6">
                  Get early access to our platform and detailed materials
                </p>
                <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50 w-full font-orbitron">
                  Request Demo
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-pink-700/70 px-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Mail className="w-5 h-5" />
              <span className="font-roboto text-sm sm:text-base">info@adangels.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
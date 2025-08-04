"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import toast, { Toaster } from 'react-hot-toast'
import { 
  Play, 
  Rocket, 
  Gamepad2, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  Users, 
  Coins, 
  Globe, 
  CheckCircle, 
  X, 
 
  Mail, 
  Zap,
  Brain,
  Heart,
  BarChart3,
  Target,
  Shield,
  Lightbulb,
  DollarSign,
  Calendar,
  FileText,
  Menu
} from "lucide-react"

// Floating Elements Component (Aceternity UI style)
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
                      className="absolute w-2 h-2 bg-pink-400/20 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

// Spotlight Effect Component (Aceternity UI style)
const SpotlightEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-96 h-96 bg-gradient-radial from-pink-500/10 via-neutral-400/5 to-transparent rounded-full blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />
    </div>
  )
}

// Enhanced Card Component (Aceternity UI style)
const EnhancedCard = ({ children, className = "", ...props }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-neutral-500/5"
        animate={{
          background: isHovered 
            ? "linear-gradient(45deg, rgba(249, 128, 168, 0.1), rgba(204, 204, 204, 0.1))"
            : "linear-gradient(45deg, rgba(249, 128, 168, 0.05), rgba(204, 204, 204, 0.05))"
        }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  );
};

// Enhanced Button Component (Aceternity UI style)
type ButtonVariant = "primary" | "outline" | "secondary";

interface EnhancedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  [key: string]: any;
}

const EnhancedButton = ({ children, className = "", variant = "primary", ...props }: EnhancedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-black",
    outline: "border border-white/20 text-white hover:bg-white/10 bg-white/5",
    secondary: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
  };

  return (
    <motion.button
      className={`relative overflow-hidden rounded-xl px-8 py-4 font-orbitron font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.6 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      />
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-400/50 to-pink-500/50 blur-xl"
          animate={{
            opacity: isHovered ? 0.8 : 0.4,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
};



export default function AdAngelsLandingPage() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.1 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const handleWaitlistClick = () => {
    toast.error('Waitlist currently unavailable', {
      duration: 3000,
      position: 'top-center',
      style: {
        background: '#1f2937',
        color: '#fff',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      },
    })
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800 relative overflow-hidden">
      <Toaster />
      <SpotlightEffect />
      <FloatingElements />
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 z-50"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 bg-gradient-to-r from-pink-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold font-orbitron bg-gradient-to-r from-pink-400 to-neutral-300 bg-clip-text text-transparent">
              Ad Angels<span className="text-xs align-super">™</span>
            </span>
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center space-x-6"
          >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="ghost" 
                  className="text-white/70 hover:text-pink-400 font-orbitron hover:bg-white/5 transition-all duration-200"
                onClick={() => window.location.href = '/investment'}
              >
                Investment
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
                className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 font-orbitron shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                onClick={handleWaitlistClick}
              >
                Join Waitlist
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:hidden"
          >
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-pink-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </motion.div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
                <Button
                  variant="ghost"
                  className="w-full text-left justify-start text-white/70 hover:text-pink-400 font-orbitron hover:bg-white/5"
                  onClick={() => {
                  window.location.href = '/investment';
                    setMobileMenuOpen(false);
                  }}
                >
                Investment
                </Button>
              <div className="pt-4 border-t border-white/10">
                <Button 
                  className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 font-orbitron"
                  onClick={() => {
                    handleWaitlistClick();
                    setMobileMenuOpen(false);
                  }}
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Enhanced Animated background elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 opacity-30"
        >
          <div className="w-full h-full bg-gradient-to-br from-pink-500/5 to-purple-600/5"></div>
          <div className="absolute inset-0 animated-gradient opacity-10"></div>
        </motion.div>
        
        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto text-center max-w-7xl relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Badge className="mb-8 bg-pink-500/10 text-pink-400 border-pink-500/20 hover:bg-pink-500/20 font-orbitron backdrop-blur-sm">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
              >
                <Gamepad2 className="w-4 h-4 mr-2" />
              </motion.div>
              Where Work Feels Like Play
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold font-orbitron mb-8 bg-gradient-to-r from-pink-400 via-neutral-300 to-pink-500 bg-clip-text text-transparent leading-tight"
          >
              Ad Angels<span className="text-2xl md:text-3xl lg:text-4xl align-super">™</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-6 text-white/90 leading-tight"
          >
            3D Virtual Workspace<br />
            <span className="bg-gradient-to-r from-pink-400 to-neutral-300 bg-clip-text text-transparent">
              Transforming Work into Play
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed font-roboto"
          >
            The gamified platform where freelancers earn digital coins through engaging gameplay. 
                          AdAngel<span className="text-sm align-super">™</span> coins are redeemable for real dollars and premium in-game services.
          </motion.p>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <EnhancedButton 
              variant="primary" 
              className="text-xl px-10 py-7 shadow-2xl"
            >
              <Play className="w-6 h-6 mr-3" />
              Request Demo
            </EnhancedButton>
            <EnhancedButton 
              variant="outline" 
              className="text-xl px-10 py-7 backdrop-blur-sm"
            >
              <Rocket className="w-6 h-6 mr-3" />
              Join the Waitlist
            </EnhancedButton>
          </motion.div>
          
          <motion.div 
            id="demo" 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="relative max-w-5xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 2.4 }}
              className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-neutral-600/20 rounded-3xl blur-3xl"
            ></motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="relative bg-gradient-to-r from-pink-500/10 to-neutral-600/10 p-2 rounded-3xl backdrop-blur-sm border border-white/10"
            >
              <div className="bg-black/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-neutral-600/20 rounded-xl flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <motion.div
                      animate={{ 
                        rotateY: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                    >
                      <Globe className="w-24 h-24 text-pink-400 mx-auto mb-4" />
                    </motion.div>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3 }}
                      className="text-white/60 font-orbitron text-lg"
                    >
                      3D Virtual Workspace Preview
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Market Stats Section */}
      <section 
        ref={statsRef}
        className="py-20 px-6 bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm"
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={statsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              animate={statsInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-pink-400 to-neutral-300 bg-clip-text text-transparent"
            >
              A Sky-High Market Opportunity
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={statsInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-roboto leading-relaxed"
            >
              The global ad and virtual workspace markets are booming. Digital ad spend, remote work, and immersive collaboration are reshaping the future.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { value: "$1.1T", label: "Global Ad Market (2025)", icon: Globe, description: "GroupM projects $1.1T in global ad revenue by 2025.", gradient: "from-pink-400 to-pink-500" },
              { value: "$780B", label: "2023 Ad Spend", icon: TrendingUp, description: "$780B in 2023, projected to reach $1.5T by 2030 (CAGR: 13.9%).", gradient: "from-neutral-500 to-neutral-400" },
              { value: "32.6M", label: "Remote Workers (US)", icon: Users, description: "22% of the US workforce now works remotely.", gradient: "from-neutral-400 to-neutral-500" },
              { value: "$750B+", label: "Digital Ad Spend (2025)", icon: Coins, description: ">75% of all global media spend will be digital.", gradient: "from-neutral-500 to-neutral-600" },
              { value: "$800B+", label: "Digital Ad Spend (2026)", icon: Coins, description: "Forecasted to exceed $800B by 2026.", gradient: "from-neutral-500 to-neutral-600" },
              { value: "91%", label: "Remote Work Preference", icon: CheckCircle, description: "91% of workers prefer fully or mostly remote work.", gradient: "from-neutral-500 to-pink-500" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                animate={statsInView ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + i * 0.1,
                  ease: "easeOut"
                }}
              >
                <EnhancedCard className="bg-white/5 border-white/10 backdrop-blur-sm group h-full">
                  <Card className="bg-transparent border-0 h-full">
                    <CardContent className="p-8 text-center relative z-10">
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 relative`}
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 360,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <stat.icon className="w-8 h-8 text-white" />
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      </motion.div>
                      <motion.div 
                        className="text-3xl md:text-4xl font-bold font-orbitron mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                        initial={{ scale: 0 }}
                        animate={statsInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.8 + i * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-xl font-medium text-white/90 font-orbitron mb-3">{stat.label}</div>
                      <div className="text-sm text-white/60 font-roboto leading-relaxed">{stat.description}</div>
                    </CardContent>
                  </Card>
                </EnhancedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-slate-900 to-black">
        <div className="container mx-auto max-w-7xl">
          {/* Problem Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              The Problem: Marketing Workspaces Are Broken
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-roboto leading-relaxed">
              Modern digital marketers are drowning in a chaotic patchwork of tools, platforms, and manual processes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-500/20 backdrop-blur-sm hover:bg-red-900/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <X className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-400 font-orbitron mb-4">Fragmented Tooling</h3>
                <p className="text-white/70 font-roboto text-lg leading-relaxed">
                  Marketers juggle dozens of apps that don't integrate well — wasting hours switching contexts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 border-orange-500/20 backdrop-blur-sm hover:bg-orange-900/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-orange-400 font-orbitron mb-4">Disconnected Workflows</h3>
                <p className="text-white/70 font-roboto text-lg leading-relaxed">
                  Work happens across email threads, spreadsheets, and outdated UIs — not in one unified space.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border-yellow-500/20 backdrop-blur-sm hover:bg-yellow-900/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 font-orbitron mb-4">Low ROI on Expertise</h3>
                <p className="text-white/70 font-roboto text-lg leading-relaxed">
                  Without standardized baselines or feedback loops, even top talent can't prove their impact.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Solution Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-pink-400 to-neutral-300 bg-clip-text text-transparent">
              Ad Angels<span className="text-base md:text-xl align-super">™</span>: A Radical Reimagining
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-roboto leading-relaxed">
              We believe work should feel like play — intuitive, productive, and rewarding. Ad Angels<span className="text-sm align-super">™</span> replaces legacy tools with a 3D game-like workspace.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-orbitron mb-3 text-white">Immersive Collaboration</h3>
                  <p className="text-white/70 font-roboto text-lg leading-relaxed">
                    Work together in beautiful 3D environments that make remote collaboration feel natural and engaging.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Coins className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-orbitron mb-3 text-white">Token Rewards</h3>
                  <p className="text-white/70 font-roboto text-lg leading-relaxed">
                    Earn AdAngel<span className="text-xs align-super">™</span> Coins for completing tasks, redeemable for cash or premium services.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-orbitron mb-3 text-white">AI Copilots</h3>
                  <p className="text-white/70 font-roboto text-lg leading-relaxed">
                    Intelligent assistants guide you through complex marketing workflows with personalized recommendations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-neutral-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-pink-500/10 to-neutral-600/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-neutral-600/20 rounded-2xl flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <Globe className="w-32 h-32 text-pink-400 mx-auto mb-6 animate-pulse" />
                    <p className="text-white/80 font-orbitron text-xl">3D Workspace Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Psychology Section */}
      <section id="features" className="py-20 px-6 bg-gradient-to-br from-neutral-800/50 to-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-pink-400 to-neutral-400 bg-clip-text text-transparent">
              Game Psychology in AdAngels<span className="text-base md:text-xl align-super">™</span> Design
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto font-roboto leading-relaxed">
              We use motivational, emotional, and cognitive science to make work feel like play
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Motivational Theory", description: "We design for autonomy, competence, and relatedness to maximize engagement and motivation.", gradient: "from-pink-400 to-pink-500" },
              { icon: Heart, title: "Emotional Design", description: "Narrative, character, and gameplay evoke emotions that deepen player investment.", gradient: "from-red-500 to-pink-500" },
              { icon: Brain, title: "Cognitive Psychology", description: "We balance cognitive load, attention, and memory for intuitive, challenging gameplay.", gradient: "from-neutral-500 to-neutral-400" },
              { icon: BarChart3, title: "Behavioral Economics", description: "We use sunk cost fallacy and artificial scarcity to influence player decisions and resource management.", gradient: "from-neutral-600 to-neutral-500" },
              { icon: Users, title: "Social Psychology", description: "We foster social interaction and community by understanding group dynamics and social behaviors.", gradient: "from-pink-500 to-pink-400" },
              { icon: Shield, title: "Achievement Systems", description: "Reward systems and progression mechanics that maintain long-term engagement and motivation.", gradient: "from-neutral-500 to-neutral-600" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <EnhancedCard className="bg-white/5 border-white/10 backdrop-blur-sm group h-full">
                  <Card className="bg-transparent border-0 h-full">
                    <CardContent className="p-8 relative z-10">
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6 relative`}
                        whileHover={{ 
                          scale: 1.15, 
                          rotate: 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                        />
                      </motion.div>
                      <h3 className="text-xl font-bold font-orbitron mb-4 text-white">{item.title}</h3>
                      <p className="text-white/70 font-roboto leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </EnhancedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Economy Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-neutral-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              AdAngel<span className="text-base md:text-xl align-super">™</span> Token Economy
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-roboto leading-relaxed">
              AdAngel<span className="text-sm align-super">™</span> Coins power a closed-loop, utility-first economy within the platform. Advertisers purchase tokens to fund campaigns; freelancers complete quests and earn tokens as rewards.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Coins className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-orbitron mb-3 text-white">Real work = real value</h3>
                  <ul className="space-y-2 text-white/70 font-roboto text-lg">
                    <li>• Demand is driven by advertiser budgets</li>
                    <li>• Supply is earned through verified, performance-based contributions</li>
                    <li>• Token utility is tied directly to platform services — not hype</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-neutral-600 to-neutral-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-orbitron mb-3 text-white">Key Features</h3>
                  <ul className="space-y-2 text-white/70 font-roboto text-lg">
                    <li>• Earn tokens for completing quests</li>
                    <li>• Redeem tokens for cash or premium services</li>
                    <li>• Closed-loop, utility-first economy</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>
              <Card className="relative bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Coins className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold font-orbitron mb-4 text-white">Token Flow</h4>
                    <div className="space-y-4 text-white/70 font-roboto">
                      <div className="flex justify-between items-center">
                        <span>Advertisers Fund</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Freelancers Earn</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Tokens Redeemed</span>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section id="team" className="py-20 px-6 bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-orbitron mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
              Meet the Founders
            </motion.h2>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-white/70 font-roboto mb-8"
            >
              The visionary team behind Ad Angels<span className="text-sm align-super">™</span>
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
                {
                  id: 1,
                  name: "Trevor Cangelosi",
                  designation: "Co-Founder & CEO",
                image: "/Trevor.jpg",
                  gradient: "from-pink-400 to-pink-500",
                  description: "Visionary leadership with legal expertise",
                quote: "Former attorney with 20+ years of experience and law firm founder, now channeling a passion for playful productivity into visionary leadership.",
                skills: ["Legal Strategy", "Business Development", "Leadership"]
                },
                {
                  id: 2,
                  name: "Molley-Kate Grubbs",
                  designation: "Co-Founder & CMO",
                image: "/Molley.jpg",
                  gradient: "from-cyan-500 to-blue-600",
                  description: "Strategic marketing across digital ecosystem",
                quote: "Strategic marketing leader with a deep command of brand, growth and performance across the digital ecosystem.",
                skills: ["Digital Marketing", "Brand Strategy", "Growth Hacking"]
                },
                {
                  id: 3,
                  name: "Robby Mitchell",
                  designation: "Co-Founder & CAO",
                image: "/Robby.jpg",
                  gradient: "from-green-500 to-emerald-600",
                  description: "Technical depth meets entrepreneurial experience",
                quote: "Seasoned developer and AI specialist with a unique blend of technical depth and entrepreneurial experience.",
                skills: ["AI Development", "Full Stack", "Technical Architecture"]
              }
            ].map((founder, index) => (
              <motion.div
                key={founder.id}
                initial={{ y: 50, opacity: 0, rotateY: -15 }}
                whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="group perspective-1000"
              >
                <motion.div
                  whileHover={{ 
                    rotateY: 5,
                    scale: 1.05,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                  className="relative preserve-3d"
                >
                  {/* Glowing backdrop */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${founder.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  
                  {/* Main card */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group-hover:border-white/20 transition-all duration-300">
                    {/* Card content */}
                    <div className="p-8">
                      {/* Header with photo */}
                      <div className="text-center mb-6">
                        <motion.div 
                          className="relative w-32 h-32 mx-auto mb-6"
                          whileHover={{ 
                            scale: 1.1,
                            transition: { duration: 0.3 }
                          }}
                        >
                          {/* Photo frame with gradient border */}
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${founder.gradient} p-1`}>
                            <div className="w-full h-full rounded-full overflow-hidden bg-black">
                              <Image
                                src={founder.image}
                                alt={founder.name}
                                width={128}
                                height={128}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                priority
                              />
                            </div>
                          </div>
                          
                          {/* Rotating gradient ring */}
                          <motion.div
                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${founder.gradient} blur-md opacity-50`}
                            animate={{
                              rotate: [0, 360],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "linear",
                              delay: index * 1,
                            }}
                          />
                        </motion.div>
                        
                        <motion.h3 
                          className="text-2xl font-bold text-white font-orbitron mb-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        >
                          {founder.name}
                        </motion.h3>
                        
                        <motion.p 
                          className={`text-lg font-medium font-orbitron mb-3 bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        >
                          {founder.designation}
                        </motion.p>
                        
                        <motion.p 
                          className="text-white/60 text-sm font-roboto mb-4"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        >
                          {founder.description}
                        </motion.p>
                      </div>
                      
                      {/* Skills */}
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      >
                        <div className="flex flex-wrap gap-2 justify-center">
                          {founder.skills.map((skill, i) => (
                            <span 
                              key={i}
                              className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${founder.gradient} bg-opacity-20 text-white/80 border border-white/10`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                      
                      {/* Quote */}
                      <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      >
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-4"></div>
                        <p className="text-white/70 text-sm font-roboto leading-relaxed italic text-center">
                          "{founder.quote}"
                        </p>
                      </motion.div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-3xl`}
                    />
                  </div>
          </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-600 via-blue-600 to-neutral-800">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-6 text-white">
              Join Our Mission: The Investment Ask
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-roboto leading-relaxed">
              We're seeking $5M in late-seed funding to accelerate product development, expand our team, and launch bold marketing campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { category: "Product Dev", percentage: "40%", amount: "$2,000,000", description: "Platform, backend, token logic, AI copilots" },
              { category: "Hiring", percentage: "30%", amount: "$1,500,000", description: "Game devs, smart contracts, growth & ops" },
              { category: "Marketing", percentage: "20%", amount: "$1,000,000", description: "Campaigns, onboarding, PR, community" },
              { category: "Ops/Admin", percentage: "10%", amount: "$500,000", description: "Legal, platform fees, finance, security" },
            ].map((item, i) => (
              <Card key={i} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-white font-orbitron mb-2">{item.category}</h4>
                  <div className="text-2xl font-bold text-white font-orbitron mb-1">{item.percentage}</div>
                  <div className="text-lg text-white/90 font-orbitron mb-3">{item.amount}</div>
                  <p className="text-sm text-white/70 font-roboto">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-xl px-12 py-8 font-orbitron shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
            <TrendingUp className="w-6 h-6 mr-3" />
            Investment Opportunities
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-neutral-800/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-8 bg-green-500/10 text-green-400 border-green-500/20 hover:bg-green-500/20 font-orbitron backdrop-blur-sm">
              <DollarSign className="w-4 h-4 mr-2" />
              Investment Opportunity
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold font-orbitron mb-6 text-white">
              Join The Game
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto font-roboto leading-relaxed">
              We're seeking $5M in late-seed funding to accelerate product development and redefine the future of work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Use of Funds */}
            <Card className="glass-card border-white/10 p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-orbitron text-white mb-2">Use of Funds</CardTitle>
                <CardDescription className="text-white/70 font-roboto text-lg">How we'll invest your $5M</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-4 gap-4 text-white/60 font-roboto text-sm uppercase tracking-wide border-b border-white/10 pb-2">
                  <div>Category</div>
                  <div className="text-center">% of Raise</div>
                  <div className="text-center">Amount</div>
                  <div>Purpose</div>
                </div>
                {[
                  { category: "Product Dev", percentage: "40%", amount: "$2,000,000", purpose: "3D platform, AI copilots, token logic" },
                  { category: "Hiring", percentage: "30%", amount: "$1,500,000", purpose: "Game developers, engineers, growth leads" },
                  { category: "Marketing", percentage: "20%", amount: "$1,000,000", purpose: "Launch campaigns, creator onboarding" },
                  { category: "Ops/Admin", percentage: "10%", amount: "$500,000", purpose: "Legal, compliance, security" }
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 py-3 border-b border-white/5 last:border-0">
                    <div className="text-white font-orbitron font-medium">{item.category}</div>
                    <div className="text-center text-green-400 font-bold">{item.percentage}</div>
                    <div className="text-center text-white font-bold">{item.amount}</div>
                    <div className="text-white/70 text-sm">{item.purpose}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Key Milestones */}
            <Card className="glass-card border-white/10 p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-orbitron text-white mb-2">Key Milestones</CardTitle>
                <CardDescription className="text-white/70 font-roboto text-lg">18-24 month roadmap</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { phase: "MVP Launch", milestone: "Quest system, token wallet, multiplayer", date: "Month 3-4" },
                  { phase: "Beta Release", milestone: "Creator onboarding, early adopters", date: "Month 6" },
                  { phase: "Monetization", milestone: "Token-to-cash redemption live", date: "Month 8" },
                  { phase: "Partnerships", milestone: "Meta, TikTok API integrations", date: "Month 10-12" },
                  { phase: "Traction", milestone: "10K+ freelancers, $250K GMV", date: "Month 18" },
                  { phase: "Series A", milestone: "Market traction + ecosystem data", date: "Month 20-24" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <div className="flex-1">
                      <div className="text-white font-orbitron font-medium">{item.phase}</div>
                      <div className="text-white/70 text-sm">{item.milestone}</div>
                    </div>
                    <div className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-roboto">
                      {item.date}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-8 py-4 text-lg font-orbitron shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                onClick={handleWaitlistClick}
              >
                Join Waitlist
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-orbitron">
                <FileText className="w-5 h-5 mr-2" />
                <a href="/investment">View Full Details</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-6 bg-gradient-to-br from-black to-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold font-orbitron bg-gradient-to-r from-pink-400 to-neutral-300 bg-clip-text text-transparent">
                  Ad Angels<span className="text-sm align-super">™</span>
                </span>
              </div>
              <p className="text-white/70 mb-8 max-w-md font-roboto text-lg leading-relaxed">
                Transforming B2B digital marketing into gamified, immersive collaboration. Where play is production.
              </p>
              <div className="flex items-center space-x-3 text-white/60 font-roboto text-lg">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500/20 to-neutral-600/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@adangels.com</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 font-orbitron text-xl text-white">Product</h3>
              <ul className="space-y-4 text-white/70 font-roboto text-lg">
                <li><span className="text-white/50 cursor-not-allowed">Features</span></li>
                <li><span className="text-white/50 cursor-not-allowed">Demo</span></li>
                <li><span className="text-white/50 cursor-not-allowed">Pricing</span></li>
                <li><span className="text-white/50 cursor-not-allowed">Roadmap</span></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-6 font-orbitron text-xl text-white">Company</h3>
              <ul className="space-y-4 text-white/70 font-roboto text-lg">
                <li><a href="/investment" className="hover:text-pink-400 transition-colors hover:translate-x-1 transform duration-200 inline-block">Investment</a></li>
                <li><span className="text-white/50 cursor-not-allowed">About Us</span></li>
                <li><span className="text-white/50 cursor-not-allowed">Careers</span></li>
                <li><span className="text-white/50 cursor-not-allowed">Press</span></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center text-white/60 font-roboto">
              <p className="text-lg">&copy; 2024 Ad Angels<span className="text-xs align-super">™</span>. All rights reserved.</p>
              <div className="flex space-x-8 mt-6 md:mt-0">
                <span className="text-white/50 cursor-not-allowed text-lg">Privacy Policy</span>
                <span className="text-white/50 cursor-not-allowed text-lg">Terms of Service</span>
                <span className="text-white/50 cursor-not-allowed text-lg">Contact</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
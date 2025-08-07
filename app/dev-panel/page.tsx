"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { 
  ArrowLeft, 
  FolderOpen, 
  AlertTriangle,
  ExternalLink
} from "lucide-react"

export default function DevPanel() {
  const router = useRouter()
  const [isLocalhost, setIsLocalhost] = useState(false)

  useEffect(() => {
    // Check if running on localhost
    if (typeof window !== 'undefined') {
      const isLocal = window.location.hostname === 'localhost' || 
                     window.location.hostname === '127.0.0.1' ||
                     window.location.hostname === '[::1]'
      setIsLocalhost(isLocal)
      
      // Redirect if not localhost
      if (!isLocal) {
        router.push('/')
      }
    }
  }, [router])

  const disabledPages = [
    {
      name: "Investment",
      path: "/investment",
      description: "Investment and funding page",
      status: "Disabled",
      icon: "💰"
    },
    // Add more disabled pages here as they are created
  ]

  if (!isLocalhost) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={() => router.push('/')}
            className="mb-4 bg-gray-700 hover:bg-gray-600 text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-3xl font-bold font-mono mb-2">Development Panel</h1>
          <div className="flex items-center gap-2 text-yellow-400">
            <AlertTriangle className="w-5 h-5" />
            <p className="text-sm">This panel is only accessible on localhost</p>
          </div>
        </div>

        {/* Disabled Pages Section */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FolderOpen className="w-5 h-5" />
            Disabled Pages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {disabledPages.map((page) => (
              <div
                key={page.path}
                className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-2xl">{page.icon}</span>
                  <span className="text-xs px-2 py-1 bg-red-600 rounded-full">
                    {page.status}
                  </span>
                </div>
                <h3 className="font-semibold mb-1">{page.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{page.description}</p>
                <Button
                  onClick={() => {
                    window.location.href = page.path
                  }}
                  className="w-full bg-gray-600 hover:bg-gray-500 text-white text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Page
                </Button>
              </div>
            ))}
          </div>

          {disabledPages.length === 0 && (
            <p className="text-gray-400 text-center py-8">
              No disabled pages found
            </p>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-6 bg-blue-900/30 border border-blue-700 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Developer Notes:</h3>
          <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
            <li>Pages with .disabled suffix are hidden in production</li>
            <li>Use this panel to access and test disabled features</li>
            <li>This panel is automatically hidden when deployed</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Code2, ArrowLeft, Key, Github, ArrowRight, Eye, EyeOff, CheckCircle, AlertCircle } from "lucide-react"

export default function GettingStartedPage() {
  const [pat, setPat] = useState("")
  const [showPat, setShowPat] = useState(false)
  const [isValidating, setIsValidating] = useState(false)
  const [validationStatus, setValidationStatus] = useState<"idle" | "success" | "error">("idle")
  const router = useRouter()

  const validatePAT = async () => {
    if (!pat.trim()) return

    setIsValidating(true)
    setValidationStatus("idle")

    // Simulate PAT validation
    setTimeout(() => {
      if ((pat.startsWith("ghp_") || pat.startsWith("github_pat_")) && pat.length >= 40) {
        setValidationStatus("success")
        // Store PAT in localStorage (in real app, use secure storage)
        localStorage.setItem("github_pat", pat)
        setTimeout(() => {
          router.push("/dashboard")
        }, 1500)
      } else {
        setValidationStatus("error")
      }
      setIsValidating(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-white overflow-hidden relative">
      {/* Animated gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/15 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 border-b border-gray-800/50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-light tracking-wide">Backspace</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="max-w-md w-full">
          <div className="glass-panel p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Key className="w-8 h-8 text-purple-400" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Getting Started</h1>
              <p className="text-gray-400 text-sm">
                Connect your GitHub account to start using Backspace AI coding assistant
              </p>
            </div>

            {validationStatus === "success" ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-xl font-semibold text-green-400">Successfully Connected!</h2>
                <p className="text-gray-400 text-sm">Redirecting to dashboard...</p>
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-400"></div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label htmlFor="pat" className="block text-sm font-medium mb-2">
                    GitHub Personal Access Token
                  </label>
                  <div className="relative">
                    <input
                      type={showPat ? "text" : "password"}
                      id="pat"
                      value={pat}
                      onChange={(e) => setPat(e.target.value)}
                      placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                      className="w-full bg-transparent border border-gray-700/50 rounded-lg px-3 py-3 pr-10 text-sm focus:outline-none focus:border-purple-400/50 transition-colors font-mono"
                      disabled={isValidating}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPat(!showPat)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPat ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {validationStatus === "error" && (
                    <div className="flex items-center space-x-2 mt-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>Invalid token format. Please check your PAT and try again.</span>
                    </div>
                  )}
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 text-sm">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Github className="w-4 h-4 mr-2 text-gray-400" />
                    How to create a GitHub PAT:
                  </h3>
                  <ol className="list-decimal list-inside space-y-1 text-gray-400 text-xs">
                    <li>Go to GitHub Settings → Developer settings</li>
                    <li>Click "Personal access tokens" → "Tokens (classic)"</li>
                    <li>Generate new token with "repo" permissions</li>
                    <li>Copy and paste the token above</li>
                  </ol>
                </div>

                <button
                  onClick={validatePAT}
                  disabled={!pat.trim() || isValidating}
                  className="w-full ghost-button-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isValidating ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>VALIDATING...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>CONNECT GITHUB</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

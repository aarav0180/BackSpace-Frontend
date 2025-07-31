"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Code2, ArrowLeft, Key, GitBranch, Eye, EyeOff, Save, CheckCircle, AlertCircle, Settings } from "lucide-react"

export default function SettingsPage() {
  const [pat, setPat] = useState("")
  const [repoUrl, setRepoUrl] = useState("")
  const [showPat, setShowPat] = useState(false)
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | "error">("idle")

  useEffect(() => {
    // Load PAT and Repo URL from localStorage on component mount
    const storedPat = localStorage.getItem("github_pat")
    const storedRepoUrl = localStorage.getItem("current_repo_url")
    if (storedPat) {
      setPat(storedPat)
    }
    if (storedRepoUrl) {
      setRepoUrl(storedRepoUrl)
    }
  }, [])

  const handleSave = () => {
    setSaveStatus("saving")
    // Simulate saving process
    setTimeout(() => {
      localStorage.setItem("github_pat", pat)
      localStorage.setItem("current_repo_url", repoUrl)
      setSaveStatus("success")
      setTimeout(() => setSaveStatus("idle"), 2000) // Reset status after a short delay
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-white overflow-hidden relative">
      {/* Animated gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 border-b border-gray-800/50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-light tracking-wide">Backspace</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Dashboard</span>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="max-w-md w-full">
          <div className="glass-panel p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-blue-400" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Settings</h1>
              <p className="text-gray-400 text-sm">Manage your GitHub connection and repository settings.</p>
            </div>

            <div className="space-y-6">
              {/* GitHub PAT Input */}
              <div>
                <label htmlFor="pat" className="block text-sm font-medium mb-2 flex items-center">
                  <Key className="w-4 h-4 mr-2 text-gray-400" />
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
                    disabled={saveStatus === "saving"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPat(!showPat)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPat ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Repository URL Input */}
              <div>
                <label htmlFor="repoUrl" className="block text-sm font-medium mb-2 flex items-center">
                  <GitBranch className="w-4 h-4 mr-2 text-gray-400" />
                  Current Repository URL
                </label>
                <input
                  type="text"
                  id="repoUrl"
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  placeholder="https://github.com/username/repository"
                  className="w-full bg-transparent border border-gray-700/50 rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-purple-400/50 transition-colors"
                  disabled={saveStatus === "saving"}
                />
              </div>

              {/* Save Button */}
              <button
                onClick={handleSave}
                disabled={saveStatus === "saving"}
                className="w-full ghost-button-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saveStatus === "saving" ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>SAVING...</span>
                  </div>
                ) : saveStatus === "success" ? (
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>SAVED!</span>
                  </div>
                ) : saveStatus === "error" ? (
                  <div className="flex items-center space-x-2 text-red-400">
                    <AlertCircle className="w-4 h-4" />
                    <span>ERROR SAVING</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Save className="w-4 h-4" />
                    <span>SAVE CHANGES</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

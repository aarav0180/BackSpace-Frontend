"use client"

import type React from "react"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Code2,
  Send,
  Settings,
  History,
  Home,
  User,
  GitBranch,
  CheckCircle,
  Clock,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Github,
  Play,
  PlusCircle,
} from "lucide-react"
import type { Message, ChatSession } from "@/types/chat" // Import shared types

interface ActivityStep {
  id: number
  title: string
  status: "completed" | "active" | "pending"
  icon: React.ReactNode
}

type DashboardState = "welcome" | "repo-input" | "cloning" | "ready"

export default function Dashboard() {
  const [dashboardState, setDashboardState] = useState<DashboardState>("welcome")
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [repoUrl, setRepoUrl] = useState("") // This will be the source of truth for the current repo
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const [activitySteps, setActivitySteps] = useState<ActivityStep[]>([
    {
      id: 1,
      title: "Repository Connected",
      status: "pending",
      icon: <GitBranch className="w-4 h-4" />,
    },
    {
      id: 2,
      title: "Cloning Repository",
      status: "pending",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      id: 3,
      title: "Analyzing Code",
      status: "pending",
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      id: 4,
      title: "Ready for Commands",
      status: "pending",
      icon: <CheckCircle className="w-4 h-4" />,
    },
  ])

  // Function to save the current chat session
  const saveCurrentChatSession = useCallback((currentRepo: string, currentMessages: Message[]) => {
    if (!currentRepo || currentMessages.length === 0) return

    try {
      const storedHistoryString = localStorage.getItem("backspace_chat_history")
      const allHistory: { [key: string]: ChatSession[] } = storedHistoryString ? JSON.parse(storedHistoryString) : {}

      let repoHistory = allHistory[currentRepo] || []

      // Create a new session object
      const newSession: ChatSession = {
        id: new Date().toISOString(), // Unique ID for this session
        repoUrl: currentRepo,
        timestamp: new Date().toLocaleString(),
        messages: currentMessages,
      }

      repoHistory.push(newSession)

      // Keep only the last 5 sessions for this repository
      if (repoHistory.length > 5) {
        repoHistory = repoHistory.slice(-5)
      }

      allHistory[currentRepo] = repoHistory
      localStorage.setItem("backspace_chat_history", JSON.stringify(allHistory))
    } catch (error) {
      console.error("Failed to save chat history to local storage:", error)
    }
  }, [])

  // Function to handle repository submission and start the process
  const handleRepoSubmit = useCallback(
    (url: string) => {
      const currentRepo = url.trim()
      if (!currentRepo) return

      // Only save previous chat if the repo is actually changing and there are messages
      if (repoUrl && messages.length > 0 && repoUrl !== currentRepo) {
        saveCurrentChatSession(repoUrl, messages)
      }

      localStorage.setItem("current_repo_url", currentRepo)
      setRepoUrl(currentRepo) // Ensure repoUrl state is updated here if it wasn't already

      const userMessage: Message = {
        id: Date.now(),
        type: "user",
        content: currentRepo,
        timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
      }

      setMessages((prev) => [...prev, userMessage])
      setDashboardState("cloning")

      setActivitySteps((prev) => prev.map((step) => (step.id === 1 ? { ...step, status: "completed" } : step)))

      // Simulate cloning process
      setTimeout(() => {
        setActivitySteps((prev) => prev.map((step) => (step.id === 2 ? { ...step, status: "active" } : step)))

        const cloningMessage: Message = {
          id: Date.now() + 1,
          type: "system",
          content: "🔄 Cloning repository...",
          timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
        }
        setMessages((prev) => [...prev, cloningMessage])
      }, 1000)

      setTimeout(() => {
        setActivitySteps((prev) =>
          prev.map((step) =>
            step.id === 2 ? { ...step, status: "completed" } : step.id === 3 ? { ...step, status: "active" } : step,
          ),
        )

        const analysisMessage: Message = {
          id: Date.now() + 2,
          type: "system",
          content: "🧠 Analyzing codebase structure and dependencies...",
          timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
        }
        setMessages((prev) => [...prev, analysisMessage])
      }, 3000)

      setTimeout(() => {
        setActivitySteps((prev) =>
          prev.map((step) =>
            step.id === 3 ? { ...step, status: "completed" } : step.id === 4 ? { ...step, status: "completed" } : step,
          ),
        )

        const readyMessage: Message = {
          id: Date.now() + 3,
          type: "ai",
          content:
            "✅ Repository successfully cloned and analyzed! I found 23 JavaScript files and 12 React components. I'm ready to help you with code modifications, bug fixes, or feature implementations. What would you like me to work on?",
          timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
        }
        setMessages((prev) => [...prev, readyMessage])
        setDashboardState("ready")
      }, 5000)
    },
    [repoUrl, messages, saveCurrentChatSession, setMessages, setDashboardState, setActivitySteps, setRepoUrl],
  )

  // Effect for initial load and PAT check
  useEffect(() => {
    const pat = localStorage.getItem("github_pat")
    if (!pat) {
      router.push("/getting-started")
      return
    }

    const storedRepoUrl = localStorage.getItem("current_repo_url")
    if (storedRepoUrl) {
      setRepoUrl(storedRepoUrl) // Pre-fill the input field
      // Do NOT automatically call handleRepoSubmit here. User will initiate.
    }
  }, [router]) // Only depends on router

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Effect for saving chat on component unmount
  useEffect(() => {
    return () => {
      if (repoUrl && messages.length > 0) {
        saveCurrentChatSession(repoUrl, messages)
      }
    }
  }, [repoUrl, messages, saveCurrentChatSession])

  const startChatting = () => {
    setDashboardState("repo-input")
    const welcomeMessage: Message = {
      id: Date.now(),
      type: "ai",
      content:
        "Welcome to Backspace! I'm your AI coding assistant. To get started, please provide the GitHub repository URL you'd like me to work with.",
      timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
    }
    setMessages([welcomeMessage])
  }

  const handleNewChat = useCallback(() => {
    if (repoUrl && messages.length > 0) {
      saveCurrentChatSession(repoUrl, messages)
    }
    setMessages([])
    setInputValue("")
    setRepoUrl("")
    setDashboardState("repo-input") // Always go to repo-input for a new chat
    setActivitySteps([
      {
        id: 1,
        title: "Repository Connected",
        status: "pending",
        icon: <GitBranch className="w-4 h-4" />,
      },
      {
        id: 2,
        title: "Cloning Repository",
        status: "pending",
        icon: <Clock className="w-4 h-4" />,
      },
      {
        id: 3,
        title: "Analyzing Code",
        status: "pending",
        icon: <Code2 className="w-4 h-4" />,
      },
      {
        id: 4,
        title: "Ready for Commands",
        status: "pending",
        icon: <CheckCircle className="w-4 h-4" />,
      },
    ])
    const welcomeMessage: Message = {
      id: Date.now(),
      type: "ai",
      content: "Starting a new chat! Please provide the GitHub repository URL you'd like me to work with.",
      timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
    }
    setMessages([welcomeMessage])
  }, [
    repoUrl,
    messages,
    saveCurrentChatSession,
    setMessages,
    setInputValue,
    setRepoUrl,
    setDashboardState,
    setActivitySteps,
  ])

  const handleSendMessage = () => {
    if (!inputValue.trim() || dashboardState !== "ready") return

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        type: "ai",
        content:
          "I understand your request. Let me analyze the code and implement the changes you've requested. I'll make sure to follow best practices and maintain code consistency.",
        timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (dashboardState === "repo-input") {
        handleRepoSubmit(repoUrl) // Pass repoUrl directly
      } else {
        handleSendMessage()
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-white overflow-hidden relative">
      {/* Animated gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-gray-800/50">
        <div className="glass-panel-header px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/" className="flex items-center space-x-2">
                <Code2 className="w-6 h-6 text-purple-400" />
                <span className="text-xl font-light tracking-wide">Backspace</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-4">
                <Link href="/dashboard" className="flex items-center space-x-2 text-white text-sm">
                  <Home className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  href="/dashboard/history"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  <History className="w-4 h-4" />
                  <span>History</span>
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-3">
              {dashboardState === "ready" && repoUrl && (
                <>
                  <div className="text-sm text-gray-400">{repoUrl.split("/").slice(-2).join("/")}</div>
                  <GitBranch className="w-4 h-4 text-gray-400" />
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Activity Progress Bar */}
      {dashboardState !== "welcome" && (
        <div className="relative z-10 border-b border-gray-800/50">
          <div className="glass-panel-header px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                {activitySteps.map((step, index) => (
                  <div key={step.id} className="flex items-center space-x-2">
                    <div
                      className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs ${
                        step.status === "completed"
                          ? "bg-green-500/20 text-green-400"
                          : step.status === "active"
                            ? "bg-blue-500/20 text-blue-400 animate-pulse"
                            : "bg-gray-500/20 text-gray-500"
                      }`}
                    >
                      {step.icon}
                      <span>{step.title}</span>
                    </div>
                    {index < activitySteps.length - 1 && <ArrowRight className="w-3 h-3 text-gray-600" />}
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-400">{dashboardState === "ready" ? "Ready" : "Setting up..."}</div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex h-[calc(100vh-140px)]">
        {/* Welcome State */}
        {dashboardState === "welcome" && (
          <div className="w-full flex items-center justify-center">
            <div className="text-center max-w-md">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <MessageCircle className="w-12 h-12 text-purple-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500/30 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-500/30 rounded-full animate-bounce"></div>
              </div>
              <h2 className="text-3xl font-bold mb-4">Ready to start coding?</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Let's begin by connecting to your GitHub repository. I'll help you analyze, modify, and improve your
                code with AI assistance.
              </p>
              <button onClick={startChatting} className="ghost-button-primary group">
                <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                START CHATTING
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        )}

        {/* Chat Interface */}
        {dashboardState !== "welcome" && (
          <>
            {/* Left Panel - Chat Interface */}
            <div className="w-1/2 border-r border-gray-800/50 flex flex-col">
              <div className="glass-panel-header px-4 py-3 border-b border-gray-800/50 flex justify-between items-center">
                <h2 className="text-lg font-light flex items-center">
                  <User className="w-5 h-5 mr-2 text-purple-400" />
                  AI Assistant
                </h2>
                <button
                  onClick={handleNewChat}
                  className="ghost-button-small flex items-center space-x-1"
                  title="Start a new chat"
                >
                  <PlusCircle className="w-3 h-3" />
                  <span>New Chat</span>
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.type === "user"
                          ? "bg-purple-500/20 text-white ml-4"
                          : message.type === "system"
                            ? "bg-blue-500/10 border border-blue-500/20 text-blue-300 mr-4"
                            : "bg-transparent border border-gray-700/50 text-gray-300 mr-4"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-transparent border border-gray-700/50 text-gray-300 mr-4 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-400"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-gray-800/50 p-4">
                <div className="flex space-x-2">
                  {dashboardState === "repo-input" || dashboardState === "welcome" ? (
                    <>
                      <div className="flex-1 relative">
                        <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          value={repoUrl}
                          onChange={(e) => setRepoUrl(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="https://github.com/username/repository"
                          className="w-full bg-transparent border border-gray-700/50 rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none focus:border-purple-400/50 transition-colors"
                        />
                      </div>
                      <button
                        onClick={() => handleRepoSubmit(repoUrl)}
                        disabled={!repoUrl.trim()}
                        className="ghost-button-small flex items-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Play className="w-3 h-3" />
                      </button>
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={
                          dashboardState === "ready"
                            ? "Ask me to modify your code, fix bugs, or create features..."
                            : "Please wait while I set up your repository..."
                        }
                        className="flex-1 bg-transparent border border-gray-700/50 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-400/50 transition-colors"
                        disabled={dashboardState !== "ready"}
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || dashboardState !== "ready"}
                        className="ghost-button-small flex items-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="w-3 h-3" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Panel - Live Preview */}
            <div className="w-1/2 flex flex-col">
              <div className="glass-panel-header px-4 py-3 border-b border-gray-800/50">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-light flex items-center">
                    <Code2 className="w-5 h-5 mr-2 text-blue-400" />
                    Live Preview
                  </h2>
                  {dashboardState === "ready" && <div className="text-sm text-gray-400">localhost:3000</div>}
                </div>
              </div>

              <div className="flex-1 bg-gray-900/30 flex items-center justify-center">
                {dashboardState === "ready" ? (
                  <iframe
                    src="/placeholder.svg?height=600&width=800&text=Live+Preview+Environment"
                    className="w-full h-full border-0"
                    title="Live Preview"
                    sandbox="allow-scripts allow-same-origin"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code2 className="w-8 h-8 text-gray-500" />
                    </div>
                    <p className="text-gray-500 mb-2">Preview will appear here</p>
                    <p className="text-sm text-gray-600">
                      {dashboardState === "repo-input"
                        ? "Connect a repository to see live changes"
                        : "Setting up your development environment..."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

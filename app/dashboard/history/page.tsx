"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Code2, ArrowLeft, History, GitBranch, Trash2, MessageCircle } from "lucide-react"
import type { ChatSession } from "@/types/chat" // Import shared types

export default function HistoryPage() {
  const [chatHistory, setChatHistory] = useState<{ [key: string]: ChatSession[] }>({})

  const loadChatHistory = useCallback(() => {
    try {
      const storedHistoryString = localStorage.getItem("backspace_chat_history")
      if (storedHistoryString) {
        setChatHistory(JSON.parse(storedHistoryString))
      }
    } catch (error) {
      console.error("Failed to load chat history from local storage:", error)
      setChatHistory({})
    }
  }, [])

  useEffect(() => {
    loadChatHistory()
  }, [loadChatHistory])

  const handleDeleteChat = useCallback((repoUrl: string, sessionId: string) => {
    setChatHistory((prevHistory) => {
      const newHistory = { ...prevHistory }
      if (newHistory[repoUrl]) {
        newHistory[repoUrl] = newHistory[repoUrl].filter((session) => session.id !== sessionId)
        if (newHistory[repoUrl].length === 0) {
          delete newHistory[repoUrl] // Remove repo entry if no sessions left
        }
      }
      localStorage.setItem("backspace_chat_history", JSON.stringify(newHistory))
      return newHistory
    })
  }, [])

  const allRepoUrls = Object.keys(chatHistory).sort()

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
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="glass-panel p-8 md:p-12">
          <div className="flex items-center space-x-3 mb-8">
            <History className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl font-bold">Chat History</h1>
          </div>

          {allRepoUrls.length === 0 ? (
            <div className="text-center text-gray-400 py-10">
              <MessageCircle className="w-16 h-16 mx-auto mb-4 text-gray-600" />
              <p className="text-lg">No chat history found.</p>
              <p className="text-sm">Start a conversation on the dashboard to see it here!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {allRepoUrls.map((repoUrl) => (
                <div key={repoUrl} className="border border-gray-700/50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <GitBranch className="w-5 h-5 text-purple-400" />
                    <h2 className="text-xl font-semibold text-purple-300">{repoUrl.split("/").slice(-2).join("/")}</h2>
                    <span className="text-sm text-gray-500">({chatHistory[repoUrl].length} sessions)</span>
                  </div>
                  <div className="space-y-4">
                    {chatHistory[repoUrl].map((session) => (
                      <div key={session.id} className="flex items-center justify-between bg-gray-800/30 rounded-md p-3">
                        <div>
                          <p className="text-sm font-medium text-gray-300">Session: {session.timestamp}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            Last message: {session.messages[session.messages.length - 1]?.content.substring(0, 60)}...
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteChat(repoUrl, session.id)}
                          className="ghost-button-small text-red-400 hover:text-red-300 hover:border-red-400/50"
                          aria-label={`Delete chat session from ${session.timestamp}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

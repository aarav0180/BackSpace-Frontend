export interface Message {
  id: number
  type: "user" | "ai" | "system"
  content: string
  timestamp: string
}

export interface ChatSession {
  id: string // Unique ID for the session (e.g., timestamp)
  repoUrl: string
  timestamp: string // Timestamp of when the session was saved
  messages: Message[]
}

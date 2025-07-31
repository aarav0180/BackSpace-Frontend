import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Dancing_Script } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dancing-script",
})

export const metadata: Metadata = {
  title: "Backspace - AI-Powered Coding Agent",
  description:
    "Your AI coding assistant that clones GitHub repos, makes code changes, and automatically creates pull requests.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${dancingScript.variable} ${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

import Link from "next/link"
import { Code2, ArrowLeft, Shield, Eye, Lock, Database, Users, Globe } from "lucide-react"

export default function PrivacyPage() {
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
          <Link href="/" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="glass-panel p-8 md:p-12">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>

          <p className="text-gray-400 mb-8 text-lg">Last updated: January 15, 2024</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Eye className="w-6 h-6 text-blue-400 mr-2" />
                Information We Collect
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  At Backspace, we collect information to provide you with the best AI-powered coding experience. This
                  includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>GitHub repository access and metadata</li>
                  <li>Code analysis and modification history</li>
                  <li>Usage patterns and feature interactions</li>
                  <li>Account information and authentication data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Lock className="w-6 h-6 text-green-400 mr-2" />
                How We Protect Your Data
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Your code and data security is our top priority. We implement industry-standard security measures:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>End-to-end encryption for all code transmissions</li>
                  <li>Secure, isolated processing environments</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>SOC 2 Type II compliance</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Database className="w-6 h-6 text-cyan-400 mr-2" />
                Data Usage and Storage
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>We use your data solely to improve our AI coding assistant and provide you with better service:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Code analysis is performed in secure, temporary environments</li>
                  <li>No permanent storage of your source code</li>
                  <li>Anonymized usage data helps improve our AI models</li>
                  <li>Data retention policies ensure minimal storage duration</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Users className="w-6 h-6 text-yellow-400 mr-2" />
                Third-Party Services
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>Backspace integrates with trusted third-party services to provide our functionality:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>GitHub API for repository access and management</li>
                  <li>Cloud infrastructure providers for secure processing</li>
                  <li>Analytics services for usage insights (anonymized)</li>
                  <li>Authentication providers for secure login</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Globe className="w-6 h-6 text-purple-400 mr-2" />
                Your Rights and Choices
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>You have full control over your data and privacy settings:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and download your data at any time</li>
                  <li>Request deletion of your account and associated data</li>
                  <li>Opt-out of data collection for service improvement</li>
                  <li>Modify privacy settings and permissions</li>
                </ul>
              </div>
            </section>

            <section className="border-t border-gray-700/50 pt-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p>Email: privacy@backspace.dev</p>
                  <p>Address: 123 AI Street, Tech Valley, CA 94000</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

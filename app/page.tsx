import Link from "next/link"
import { ArrowRight, GitBranch, Code2, Zap, Bot, Github, Twitter, Mail, Sparkles, Brain, Rocket } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white overflow-hidden relative">
      {/* Animated gradient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-magenta-500/15 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-4">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-light tracking-wide">Backspace</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
              Features
            </Link>
            <Link href="#workflow" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
              How it Works
            </Link>
            <Link href="/getting-started" className="ghost-button">
              GET STARTED
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Your AI{" "}
            <span className="font-cursive text-purple-400 font-normal relative">
              coding
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-black">
              assistant
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Backspace intelligently clones GitHub repositories, makes sophisticated code changes, and automatically
            creates comprehensive pull requests. Let AI handle your development workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/getting-started" className="ghost-button-primary group">
              GET STARTED
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href="/dashboard" className="ghost-button">
              TRY LIVE DEMO
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the future of automated development with our cutting-edge AI capabilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Feature highlights */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Intelligent Code Analysis</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Advanced AI algorithms analyze your codebase structure, dependencies, and patterns to understand
                    context before making any changes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Code Generation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Generate high-quality code that follows best practices, maintains consistency with your existing
                    codebase, and includes proper documentation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Automated Deployment</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Seamlessly create pull requests with detailed descriptions, proper commit messages, and automated
                    testing integration.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Visual representation */}
            <div className="relative">
              <div className="glass-panel p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-gray-400 ml-2">AI Code Assistant</span>
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="text-green-400">$ backspace analyze --repo user/project</div>
                    <div className="text-gray-400">✓ Repository cloned successfully</div>
                    <div className="text-gray-400">✓ Analyzing 47 files...</div>
                    <div className="text-blue-400">→ Found optimization opportunities</div>
                    <div className="text-purple-400">→ Generating improvements...</div>
                    <div className="text-green-400">✓ Pull request created: #123</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Workflow Section */}
      <section id="workflow" className="relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg">
              From repository connection to pull request creation in four simple steps
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"></div>

            {/* Timeline steps */}
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="glass-panel p-6">
                    <h3 className="text-xl font-semibold mb-2">Connect Repository</h3>
                    <p className="text-gray-400 text-sm">
                      Link your GitHub repository and grant Backspace access to analyze your codebase structure and
                      dependencies.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center border-4 border-purple-500">
                  <GitBranch className="w-5 h-5 text-purple-400" />
                </div>
                <div className="w-1/2 pl-8">
                  <div className="text-sm text-gray-500">Step 1</div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-sm text-gray-500">Step 2</div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border-4 border-blue-500">
                  <Code2 className="w-5 h-5 text-blue-400" />
                </div>
                <div className="w-1/2 pl-8">
                  <div className="glass-panel p-6">
                    <h3 className="text-xl font-semibold mb-2">AI Analysis & Cloning</h3>
                    <p className="text-gray-400 text-sm">
                      Our AI clones your repository and performs deep analysis to understand code patterns,
                      architecture, and potential improvements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="glass-panel p-6">
                    <h3 className="text-xl font-semibold mb-2">Intelligent Code Changes</h3>
                    <p className="text-gray-400 text-sm">
                      Based on your requirements and best practices, AI makes precise code modifications, optimizations,
                      and feature implementations.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center border-4 border-cyan-500">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="w-1/2 pl-8">
                  <div className="text-sm text-gray-500">Step 3</div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="text-sm text-gray-500">Step 4</div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border-4 border-green-500">
                  <Zap className="w-5 h-5 text-green-400" />
                </div>
                <div className="w-1/2 pl-8">
                  <div className="glass-panel p-6">
                    <h3 className="text-xl font-semibold mb-2">Automated Pull Request</h3>
                    <p className="text-gray-400 text-sm">
                      Generate comprehensive pull requests with detailed descriptions, proper commit messages, and
                      automated testing integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-panel p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to automate your workflow?</h2>
            <p className="text-lg text-gray-400 mb-6">
              Join thousands of developers who trust Backspace to handle their routine coding tasks.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/getting-started" className="ghost-button-primary">
                START FREE TRIAL
              </Link>
              <Link href="/docs" className="ghost-button">
                EXPLORE DOCS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Code2 className="w-5 h-5 text-purple-400" />
                <span className="text-lg font-light">Backspace</span>
              </div>
              <div className="flex items-center space-x-6">
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  Terms
                </Link>
                <div className="flex items-center space-x-3">
                  <Github className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
                  <Twitter className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
                  <Mail className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors duration-300" />
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700/50 mt-6 pt-6 text-center">
              <p className="text-gray-400 text-sm">© 2024 Backspace. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

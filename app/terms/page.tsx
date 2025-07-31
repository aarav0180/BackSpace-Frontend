import Link from "next/link"
import { Code2, ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, XCircle, Users } from "lucide-react"

export default function TermsPage() {
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
            <FileText className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>

          <p className="text-gray-400 mb-8 text-lg">Last updated: January 15, 2024</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Scale className="w-6 h-6 text-purple-400 mr-2" />
                Acceptance of Terms
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  By accessing and using Backspace ("the Service"), you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
                <p>
                  These Terms of Service govern your use of Backspace, an AI-powered coding assistant that helps
                  automate GitHub repository management, code modifications, and pull request creation.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                Permitted Use
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>You may use Backspace for legitimate software development purposes, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Automating code reviews and improvements</li>
                  <li>Generating pull requests for bug fixes and features</li>
                  <li>Analyzing and optimizing existing codebases</li>
                  <li>Collaborating with team members on development projects</li>
                  <li>Learning and improving coding practices</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <XCircle className="w-6 h-6 text-red-400 mr-2" />
                Prohibited Activities
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>You agree not to use Backspace for any of the following prohibited activities:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Generating malicious code, viruses, or security exploits</li>
                  <li>Violating intellectual property rights or licenses</li>
                  <li>Attempting to reverse engineer or compromise the service</li>
                  <li>Using the service for illegal or unauthorized purposes</li>
                  <li>Sharing access credentials with unauthorized parties</li>
                  <li>Overloading or attempting to disrupt the service</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Users className="w-6 h-6 text-cyan-400 mr-2" />
                User Responsibilities
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>As a user of Backspace, you are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintaining the security of your account credentials</li>
                  <li>Ensuring you have proper permissions for repositories you connect</li>
                  <li>Reviewing all AI-generated code before merging or deploying</li>
                  <li>Complying with your organization's policies and procedures</li>
                  <li>Respecting rate limits and usage guidelines</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-2" />
                Service Availability and Limitations
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>While we strive to provide reliable service, please note:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service availability is not guaranteed 100% of the time</li>
                  <li>AI-generated code should always be reviewed before use</li>
                  <li>We may impose usage limits to ensure fair access for all users</li>
                  <li>Features and functionality may change with updates</li>
                  <li>We reserve the right to suspend accounts that violate these terms</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  The Backspace service, including its AI models, interface, and documentation, is protected by
                  intellectual property laws. You retain ownership of your code and data, while we retain ownership of
                  our service and technology.
                </p>
                <p>
                  By using our service, you grant us a limited license to process your code for the purpose of providing
                  our AI assistance features.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Backspace is provided "as is" without warranties of any kind. We shall not be liable for any damages
                  arising from the use of our service, including but not limited to direct, indirect, incidental, or
                  consequential damages.
                </p>
                <p>Users are responsible for reviewing and testing all AI-generated code before implementation.</p>
              </div>
            </section>

            <section className="border-t border-gray-700/50 pt-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="text-gray-300">
                <p className="mb-4">For questions about these Terms of Service, please contact us:</p>
                <div className="space-y-2">
                  <p>Email: legal@backspace.dev</p>
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

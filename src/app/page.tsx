export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Building the Future of Business Operations
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Custom AI infrastructures that become the heart of your business. Automate repetitive work, optimize decisions, and scale with precision.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Get Started
              </button>
              <button className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The 4Runr System Advantage
            </h2>
            <p className="text-xl text-gray-600">
              Replacing bloated tools with precise, adaptable systems designed around your exact needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom AI-Powered Applications</h3>
              <p className="text-gray-600">Tailored solutions that address your specific business needs and scale with you.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automation Infrastructure</h3>
              <p className="text-gray-600">Seamless workflows using cutting-edge tools that eliminate repetitive tasks.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Assistants</h3>
              <p className="text-gray-600">AI-powered support for customer service, sales, and internal operations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
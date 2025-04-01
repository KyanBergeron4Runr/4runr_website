import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Transform Your Business with Custom AI & Automation Solutions That Deliver Results
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stop struggling with fragmented AI tools and complex implementations. Get a unified, custom AI system that grows with your business, backed by experts who ensure your success.
            </p>
            <a
              href="/contact"
              className="inline-block bg-purple-gradient hover:bg-purple-gradient-hover text-white px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105"
            >
              Book a Discovery Meeting
            </a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-12">
            Here are some of the tools we're proficient with. We can easily work with your preferred solutions as well.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="flex items-center justify-center">
                <div className="w-24 h-12 bg-gray-200 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is 4Runr Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">What is 4Runr?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">AI & Automation Solutions</h3>
              <p className="text-gray-600">
                We implement AI and automation solutions that transform your operations. From predictive analytics to intelligent automation, we build systems that deliver measurable business results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Automate Workflows</h3>
              <p className="text-gray-600">
                We identify and automate time-consuming processes, reducing costs and freeing your team to focus on strategic work. Our automation solutions eliminate manual tasks and human error.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Centralized Systems</h3>
              <p className="text-gray-600">
                We integrate all your tools into one unified platform, creating a seamless system that connects your entire business. No more fragmented solutions or data silos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Limitless Systems</h3>
              <p className="text-gray-600">
                We build scalable solutions that grow with your business. Our flexible systems adapt to your changing needs and can be expanded to any business area.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Grow with You</h3>
              <p className="text-gray-600">
                We're your long-term technology partner, providing continuous support, updates, and improvements to keep your systems optimized and up-to-date.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm flex items-center justify-center">
              <a
                href="/solutions"
                className="inline-block bg-purple-gradient hover:bg-purple-gradient-hover text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
              >
                See Our Solutions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
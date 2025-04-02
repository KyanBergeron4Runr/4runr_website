import Image from 'next/image'
import CTASection from './components/CTASection'
import SloganSection from './components/SloganSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <CTASection />
      
      {/* Partners Section */}
      <SloganSection />

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
import type { Metadata } from 'next'
import { poppinsRegular, poppinsBold } from './fonts'
import Image from 'next/image'
import './globals.css'

export const metadata: Metadata = {
  title: '4Runr - Custom AI Infrastructure Solutions',
  description: 'Building custom AI infrastructures that become the heart of your business operations. Automate work, optimize decisions, and scale with precision.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppinsRegular.variable} ${poppinsBold.variable}`}>
      <body className="font-sans">
        <header className="fixed w-full bg-black text-white z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Image
                  src="/images/4runr (12).png"
                  alt="4Runr Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </div>
              <div className="hidden md:flex items-center justify-center flex-1">
                <div className="flex space-x-8">
                  <a href="/" className="text-white hover:text-accent-200 px-3 py-2 text-sm font-medium">
                    Home
                  </a>
                  <a href="/services" className="text-white hover:text-accent-200 px-3 py-2 text-sm font-medium">
                    Services
                  </a>
                  <a href="/about" className="text-white hover:text-accent-200 px-3 py-2 text-sm font-medium">
                    About Us
                  </a>
                </div>
              </div>
              <div>
                <a
                  href="/contact"
                  className="bg-purple-gradient hover:bg-purple-gradient-hover text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-16">{children}</main>
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Image
                  src="/images/4runr (12).png"
                  alt="4Runr Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto mb-4"
                  priority
                />
                <p className="text-gray-400 text-sm">
                  Building the future of business operations through custom AI infrastructure.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Solutions</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">AI Applications</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Automation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Intelligent Assistants</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Process</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">GitHub</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-center text-gray-400">© 2024 4Runr. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 
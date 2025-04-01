import type { Metadata } from 'next'
import { poppinsRegular, poppinsBold } from './fonts'
import Image from 'next/image'
import './globals.css'

export const metadata: Metadata = {
  title: '4Runr - Your Running Partner',
  description: 'Learn more about 4Runr and how we can help you achieve your running goals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppinsRegular.variable} ${poppinsBold.variable}`}>
      <body className="font-sans">
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    src="/images/4runr-logo.png"
                    alt="4Runr Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500">© 2024 4Runr. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
} 
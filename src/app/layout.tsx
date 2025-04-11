import './globals.css'
import './styles/header.css'
import './styles/cta-section.css'
import './styles/slogan-section.css'
import './styles/what-is-4runr.css'
import './styles/ai-solutions-cta.css'
import './styles/button-styles.css'
import './styles/section-spacing-updates.css'
// Import our comprehensive responsive frameworks last to override any conflicting styles
import './styles/global-responsive.css'
import './styles/responsive-implementation.css'
import { Metadata } from 'next'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { poppinsRegular, poppinsBold } from './fonts'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '4Runr Tech',
  description: 'Transform your business with custom AI & automation solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppinsRegular.variable} ${poppinsBold.variable} ${inter.className}`}>
      <body className={poppinsRegular.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 
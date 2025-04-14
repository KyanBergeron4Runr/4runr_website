import './styles/globals.css'
import './styles/header.css'
import './styles/cta-section.css'
import './styles/cta-button-override.css'
import './styles/cta-button-text-update.css'
import './styles/slogan-section.css'
import './styles/what-is-4runr.css'
import './styles/what-is-4runr-update.css'
import './styles/what-is-4runr-button-override.css'
import './styles/ai-solutions-cta.css'
import './styles/button-styles.css'
import './styles/section-spacing-updates.css'
import './styles/chat-section-updates.css'
import './styles/benefits-section.css'
import './styles/process-section.css'
import './styles/services-section.css'
import './styles/chatbot.css'
import './styles/chatbot-button-override.css'
import './styles/contact-page-update.css'
import './styles/contact-sidebar-update.css'
import './styles/pdf-form.css'
import './styles/pdf-form-update.css'
import './styles/pdf-form-override.css'
import './styles/footer.css'
import './styles/footer-override.css'
import './styles/cta-button-final-override.css'
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
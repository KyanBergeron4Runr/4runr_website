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
import { Poppins } from 'next/font/google'
// import { Inter } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '4Runr - Enterprise AI Solutions',
  description: 'Empowering businesses with cutting-edge AI solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable}`} style={{ background: '#000000' }}>
      <body style={{ background: '#000000' }}>
        <div className="layout-root" style={{ background: '#000000' }}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 
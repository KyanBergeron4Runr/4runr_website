import './globals.css'
import './styles/header.css'
import './styles/cta-section.css'
import './styles/slogan-section.css'
import './styles/what-is-4runr.css'
import './styles/ai-solutions-cta.css'
import { Metadata } from 'next'
import Header from './components/Header'
import { poppinsRegular, poppinsBold } from './fonts'

export const metadata: Metadata = {
  title: '4Runr - Custom AI Infrastructure Solutions',
  description: 'Transform your business with custom AI and automation solutions that deliver measurable results.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppinsRegular.variable} ${poppinsBold.variable}`}>
      <body className={poppinsRegular.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 
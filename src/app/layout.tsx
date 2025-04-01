import './globals.css'
import './styles/header.css'
import { Metadata } from 'next'
import Header from './components/Header'

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
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 
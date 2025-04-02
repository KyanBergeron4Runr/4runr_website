import Image from 'next/image'
import dynamic from 'next/dynamic'
import CTASection from './components/CTASection'
import SloganSection from './components/SloganSection'
import WhatIs4Runr from './components/WhatIs4Runr'
import AISolutionsCTA from './components/AISolutionsCTA'
import BenefitsSection from './components/BenefitsSection'
import ProcessSection from './components/ProcessSection'

const InteractiveServices = dynamic(
  () => import('./components/InteractiveServices'),
  {
    loading: () => (
      <div className="min-h-[400px] bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    ),
    ssr: false
  }
)

const ChatBot = dynamic(
  () => import('./components/ChatBot'),
  {
    loading: () => (
      <div className="min-h-[400px] bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    ),
    ssr: false
  }
)

const PDFForm = dynamic(
  () => import('./components/PDFForm'),
  {
    loading: () => (
      <div className="min-h-[400px] bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    ),
    ssr: false
  }
)

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <CTASection />
      
      {/* Partners Section */}
      <SloganSection />

      {/* What is 4Runr Section */}
      <WhatIs4Runr />

      {/* AI Solutions CTA Section */}
      <AISolutionsCTA />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Interactive Services Section */}
      <InteractiveServices />

      {/* Chat Bot Section */}
      <ChatBot />

      {/* PDF Form Section */}
      <PDFForm />
    </div>
  )
} 
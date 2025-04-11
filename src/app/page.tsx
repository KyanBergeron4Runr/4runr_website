import './styles/home.css'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import CTASection from './components/CTASection'
import SloganSection from './components/SloganSection'
import WhatIs4Runr from './components/WhatIs4Runr'
import AISolutionsCTA from './components/AISolutionsCTA'
import BenefitsSection from './components/BenefitsSection'
import ProcessSection from './components/ProcessSection'
import PDFForm from './components/PDFForm'
import ChatBot from './components/ChatBot'

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

export default function Home() {
  return (
    <div className="home-page min-h-screen bg-black">
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
      <section className="page-section full-height">
        <ChatBot />
      </section>

      {/* PDF Form Section */}
      <PDFForm />
    </div>
  )
} 
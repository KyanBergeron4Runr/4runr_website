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
import CallToAction from './components/CallToAction'

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
      <ChatBot />

      {/* PDF Form Section */}
      <PDFForm />

      <main className="main">
        <section className="page-section">
          <h1>Transform Your Business Challenges</h1>
          <ChatBot />
        </section>
        
        <div className="section-divider" />
        
        <section className="page-section">
          <h2>Who is 4Runr</h2>
          <p>We've watched long enough. While others talk about AI and automation, we're here to actually make it happen. We're not just another tech company selling promises – we're the partners who roll up our sleeves and transform businesses when others say it can't be done. We're driven by a burning frustration with the status quo, where AI is treated as a fancy add-on rather than the beating heart of modern business. This isn't just a business venture for us – it's the foundation of a new world we're building, where innovation separates the leaders from the followers. We forge businesses into powerhouses of automation, freeing you to focus on what you do best – innovating and leading. The future isn't coming – it's already here, and we're tired of watching businesses get left behind. If you're ready to stop talking about AI and start harnessing its true power, we're your partners in revolutionizing how your business operates. No fluff, no gimmicks – just relentless dedication to transformative results that will set the standard for what's possible in your industry. This is about more than business – it's about creating a future where the bold thrive and the complacent fade away.</p>
          <p className="ceo-attribution">- Kyan Bergeron, CEO</p>
        </section>
        
        <div className="section-divider" />
        
        <section className="page-section">
          <h2>Ready to Transform Your Business?</h2>
          <p className="fine-print">Schedule a consultation with our team to discover how we can revolutionize your operations with AI.</p>
          <CallToAction />
        </section>
      </main>
    </div>
  )
} 
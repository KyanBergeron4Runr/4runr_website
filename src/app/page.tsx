import Image from 'next/image'
import CTASection from './components/CTASection'
import SloganSection from './components/SloganSection'
import WhatIs4Runr from './components/WhatIs4Runr'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <CTASection />
      
      {/* Partners Section */}
      <SloganSection />

      {/* What is 4Runr Section */}
      <WhatIs4Runr />
    </div>
  )
} 
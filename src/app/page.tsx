import Image from 'next/image'
import CTASection from './components/CTASection'
import SloganSection from './components/SloganSection'
import WhatIs4Runr from './components/WhatIs4Runr'
import AISolutionsCTA from './components/AISolutionsCTA'
import BenefitsSection from './components/BenefitsSection'
import ProductPackages from './components/ProductPackages'

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

      {/* Product Packages Section */}
      <ProductPackages />

      {/* Benefits Section */}
      <BenefitsSection />
    </div>
  )
} 
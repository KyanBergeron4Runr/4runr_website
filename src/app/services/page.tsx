'use client';

import React from 'react';
import ServicesSection from '@/app/components/ServicesSection';
import ServicesCTA from '@/app/components/ServicesCTA';
import '@/app/styles/services.css';
import '@/app/styles/services-page.css';

export default function ServicesPage() {
  return (
    <main className="services-page">
      <div className="services-page-content">
        <ServicesSection />
        <ServicesCTA />
      </div>
    </main>
  );
} 
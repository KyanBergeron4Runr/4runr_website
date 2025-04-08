'use client';

import React from 'react';
import ServicesSection from '@/app/components/ServicesSection';
import ServicesCTA from '@/app/components/ServicesCTA';
import '@/app/styles/services.css';

export default function ServicesPage() {
  return (
    <div className="services-page">
      <ServicesSection />
      <ServicesCTA />
    </div>
  );
} 
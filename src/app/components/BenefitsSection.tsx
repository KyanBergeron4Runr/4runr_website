'use client'

import { useEffect, useState } from 'react'
import '../styles/benefits-section.css'

interface BenefitsSectionProps {
  heading1?: string;
  subheading1?: string;
  heading2?: string;
  subheading2?: string;
  heading3?: string;
  subheading3?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function BenefitsSection({
  heading1 = "Apply AI",
  subheading1 = "Implement AI into your existing systems to enhance performance, automate tasks, and optimize operations.",
  heading2 = "Build AI",
  subheading2 = "Create new AI-powered tools and systems designed to solve unique business challenges and drive innovation.",
  heading3 = "Leverage AI",
  subheading3 = "Integrate AI into data analysis systems to uncover insights, predict trends, and support smarter decision-making.",
  buttonText = "Book a Call",
  buttonLink = "/"
}: BenefitsSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="benefits-section">
      <div className="container">
        <div className="section-title">
          <h2>How We Transform Your Business with AI</h2>
        </div>
        
        {!isMobile ? (
          // Desktop version
          <div className="benefit-items desktop-version">
            <div className="benefit-item-wrapper">
              <div className="benefit-item">
                <div className="benefit-bg">
                  <h3>{heading1}</h3>
                  <p>{subheading1}</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-bg">
                  <h3>{heading2}</h3>
                  <p>{subheading2}</p>
                </div>
              </div>
            </div>
            <div className="bottom-item-wrapper">
              <div className="benefit-item">
                <div className="benefit-bg">
                  <h3>{heading3}</h3>
                  <p>{subheading3}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Mobile version
          <div className="benefit-items mobile-version">
            <div className="benefit-item">
              <div className="benefit-bg">
                <h3>{heading1}</h3>
                <p>{subheading1}</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-bg">
                <h3>{heading2}</h3>
                <p>{subheading2}</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-bg">
                <h3>{heading3}</h3>
                <p>{subheading3}</p>
              </div>
            </div>
          </div>
        )}

        <div className="button-group">
          <a href={buttonLink} className="btn btn-primary">{buttonText}</a>
          <a href="/services-learn-more" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
} 
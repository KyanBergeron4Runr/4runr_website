'use client'

import '../styles/cta-section.css'

interface CTASectionProps {
  heading?: string;
  subtext?: string;
  buttonText?: string;
  buttonUrl?: string;
  backgroundImage?: string;
}

export default function CTASection({
  heading = "Transform Your Business with Custom AI & Automation Solutions That Deliver Results",
  subtext = "Stop struggling with fragmented AI tools and complex implementations. Get a unified, custom AI system that grows with your business, backed by experts who ensure your success.",
  buttonText = "Book a Discovery Meeting",
  buttonUrl = "/contact",
  backgroundImage = ""
}: CTASectionProps) {
  return (
    <>
      {/* Desktop Version */}
      <div className="cta-section">
        <div className="cta-container">
          <h2 className="cta-heading-main">
            {heading}
          </h2>
          <p className="cta-subtext">
            {subtext}
          </p>
          <div className="cta-buttons">
            <a href={buttonUrl} className="lets-talk-button">
              {buttonText}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="cta-section-mobile">
        <div className="cta-container-mobile">
          <h1 className="cta-heading-mobile">
            {heading}
          </h1>
          <p className="cta-body-mobile">
            {subtext}
          </p>
          <div className="cta-buttons-mobile">
            <a href={buttonUrl} className="lets-talk-button-mobile">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 
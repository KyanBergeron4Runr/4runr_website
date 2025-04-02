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
      <div
        className="cta-section"
        style={{
          background: '#000000',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '4.16vw 0',
          margin: 0,
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
          border: 'none',
        }}
      >
        <div
          className="cta-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            color: 'white',
            maxWidth: '83.33vw',
            margin: '0 auto',
            textAlign: 'center',
            padding: 0,
          }}
        >
          <h1
            className="cta-heading-main"
            style={{
              fontSize: 'var(--text-title)',
              lineHeight: '1.2',
              color: 'white',
              fontWeight: 900,
              maxWidth: '83.33vw',
              textAlign: 'center',
              marginBottom: '0.52vw',
              fontFamily: 'var(--font-heading)',
            }}
          >
            {heading}
          </h1>
          <p
            className="cta-subtext"
            style={{
              fontSize: 'var(--text-body)',
              lineHeight: '1.5',
              margin: '1.04vw 0 1.56vw 0',
              maxWidth: '57.29vw',
              color: 'white',
              fontWeight: 500,
              opacity: 0.9,
              fontFamily: 'var(--font-sans)',
            }}
          >
            {subtext}
          </p>
          <div className="cta-buttons" style={{ marginTop: '1.04vw' }}>
            <a
              href={buttonUrl}
              className="lets-talk-button"
              style={{
                display: 'inline-block',
                padding: '0.78vw 1.56vw',
                border: '1.5px solid transparent',
                borderRadius: '0.52vw',
                color: 'white',
                background: 'linear-gradient(45deg, #4B0082, #483D8B)',
                textDecoration: 'none',
                fontSize: 'var(--text-button)',
                fontWeight: 700,
                transition: 'transform 0.3s',
                fontFamily: 'var(--font-heading)',
              }}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div
        className="cta-section-mobile"
        style={{
          background: '#000000',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '3.5rem 1.25rem',
          margin: 0,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="cta-container-mobile"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white',
            maxWidth: '100%',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h1
            className="cta-heading-mobile"
            style={{
              fontSize: 'var(--mobile-text-title)',
              margin: '0 0 1.2rem 0',
              color: 'white',
              lineHeight: '1.2',
              fontWeight: 900,
              textAlign: 'center',
              fontFamily: 'var(--font-heading)',
            }}
          >
            {heading}
          </h1>
          <p
            className="cta-body-mobile"
            style={{
              fontSize: 'var(--mobile-text-body)',
              margin: '0 0 2rem 0',
              lineHeight: '1.6',
              fontWeight: 400,
              maxWidth: '90%',
              textAlign: 'center',
              color: 'white',
              opacity: 0.9,
              fontFamily: 'var(--font-sans)',
            }}
          >
            {subtext}
          </p>
          <div
            className="cta-buttons-mobile"
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              maxWidth: '180px',
            }}
          >
            <a
              href={buttonUrl}
              className="lets-talk-button-mobile"
              style={{
                display: 'block',
                padding: '10px 16px',
                border: '1.5px solid transparent',
                borderRadius: '6px',
                color: 'white',
                background: 'linear-gradient(45deg, #4B0082, #483D8B)',
                textDecoration: 'none',
                fontSize: 'var(--mobile-text-button)',
                textAlign: 'center',
                fontWeight: 700,
                transition: 'transform 0.3s ease',
                fontFamily: 'var(--font-heading)',
              }}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 
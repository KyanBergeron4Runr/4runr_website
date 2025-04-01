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
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
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
          <h2
            className="cta-heading-main"
            style={{
              fontSize: '2.08vw',
              lineHeight: '1.3em',
              color: 'white',
              fontWeight: 900,
              maxWidth: '83.33vw',
              textAlign: 'center',
              marginBottom: '0.52vw',
            }}
          >
            {heading}
          </h2>
          <p
            className="cta-subtext"
            style={{
              fontSize: '1.04vw',
              lineHeight: '1.5em',
              margin: '1.04vw 0 1.56vw 0',
              maxWidth: '57.29vw',
              color: 'white',
              fontWeight: 500,
              opacity: 0.9,
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
                fontSize: '1.04vw',
                fontWeight: 'bold',
                transition: 'transform 0.3s',
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
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '3.5rem 1.25rem',
          margin: 0,
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000',
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
          <h2
            className="cta-heading-mobile"
            style={{
              fontSize: '24px',
              margin: '0 0 1.2rem 0',
              color: 'white',
              lineHeight: '1.3',
              fontWeight: 900,
              textAlign: 'center',
            }}
          >
            {heading}
          </h2>
          <p
            className="cta-body-mobile"
            style={{
              fontSize: '16px',
              margin: '0 0 2rem 0',
              lineHeight: '1.6',
              fontWeight: 400,
              maxWidth: '90%',
              textAlign: 'center',
              color: 'white',
              opacity: 0.9,
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
                fontSize: '14px',
                textAlign: 'center',
                fontWeight: 'bold',
                transition: 'transform 0.3s ease',
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
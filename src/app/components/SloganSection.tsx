'use client'

import '../styles/slogan-section.css'
import '../styles/slogan-section-update.css'

interface SloganSectionProps {
  subtitle_line1?: string;
  subtitle_line2?: string;
  backgroundColor?: string;
}

const LOGO_URLS = [
  "/images/Make ai logo.png",
  "/images/Open ai logo.png",
  "/images/Airtable logo.png",
  "/images/Vapi logo.png",
  "/images/claude logo.png",
  "/images/zapier logo.png"
];

export default function SloganSection({
  subtitle_line1 = "Here are some of the tools we're proficient with.",
  subtitle_line2 = "We can easily work with your preferred solutions as well.",
  backgroundColor = "#000000"
}: SloganSectionProps) {
  // Function to render a logo group
  const renderLogoGroup = () => (
    <div className="logo-group">
      {LOGO_URLS.map((url, index) => (
        <div key={`logo-${index}`} className="logo-container">
          <img
            className="logo"
            src={url}
            alt={`Partner Logo ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="slogan-section" style={{ backgroundColor }}>
      {/* Hidden preload div for images */}
      <div style={{ display: 'none' }}>
        {LOGO_URLS.map((url, index) => (
          <img
            key={`preload-${index}`}
            src={url}
            width="1"
            height="1"
            alt=""
          />
        ))}
      </div>

      <div className="marquee">
        <div className="marquee-inner">
          {/* Render three sets of logos for smooth infinite scrolling */}
          {renderLogoGroup()}
          {renderLogoGroup()}
          {renderLogoGroup()}
        </div>
      </div>

      <div className="fine-print">
        <span className="fine-print-line">{subtitle_line1}</span>
        <span className="fine-print-line">{subtitle_line2}</span>
      </div>
    </div>
  );
} 
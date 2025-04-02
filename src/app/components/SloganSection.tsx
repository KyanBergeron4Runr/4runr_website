'use client'

import '../styles/slogan-section.css'

interface SloganSectionProps {
  subtitle_line1?: string;
  subtitle_line2?: string;
  backgroundColor?: string;
}

const LOGO_URLS = [
  "https://cdn.shopify.com/s/files/1/0891/9610/1908/files/Untitled_design_72.png?v=1738278801",
  "https://cdn.shopify.com/s/files/1/0891/9610/1908/files/Untitled_design_70.png?v=1738257207",
  "https://cdn.shopify.com/s/files/1/0891/9610/1908/files/Untitled_design_69.png?v=1738257155",
  "https://cdn.shopify.com/s/files/1/0891/9610/1908/files/Untitled_design_68.png?v=1738257088",
  "https://cdn.shopify.com/s/files/1/0891/9610/1908/files/Untitled_design_73.png?v=1738279844",
  "https://cdn.shopify.com/s/files/1/0891/9610/1908/files/Untitled_design_74.png?v=1738279986"
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
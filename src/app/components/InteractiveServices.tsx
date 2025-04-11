'use client'

import { useEffect, useState } from 'react'
import '../styles/interactive-services.css'
import '../styles/services-section-updates.css'

interface InteractiveServicesProps {
  heading?: string;
  subheading1?: string;
  content1?: string;
  subheading2?: string;
  content2?: string;
  subheading3?: string;
  content3?: string;
}

export default function InteractiveServices({
  heading = "Let's Build Something Game-Changing",
  subheading1 = "Gain the Competitive Edge",
  content1 = "Transform your business capabilities with systems that put you ahead. Our AI and automation solutions help you operate faster, smarter, and more efficiently than your competitors. From intelligent decision-making to streamlined operations, we build systems that give you the advantage in today's market.",
  subheading2 = "Built for Tomorrow's Success",
  content2 = "Future-proof your business with scalable systems that evolve with you. Our solutions combine the latest AI advancements with powerful automation, creating flexible systems that adapt to changing markets. Stay ahead of industry trends with technology that grows alongside your business.",
  subheading3 = "Lead the Digital Revolution",
  content3 = "Don't watch from the sidelines as AI transforms your industry. Our systems give you the tools to be a leader in the digital age. By combining cutting-edge AI with practical automation, we help you pioneer new ways of working and set the standard in your industry"
}: InteractiveServicesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let autoRotateInterval: NodeJS.Timeout | null = null;
    const rotationDelay = 5000;

    const startAutoRotate = () => {
      if (!autoRotateInterval) {
        autoRotateInterval = setInterval(() => {
          setActiveIndex((prev) => (prev + 1) % 3);
        }, rotationDelay);
      }
    };

    const stopAutoRotate = () => {
      if (autoRotateInterval) {
        clearInterval(autoRotateInterval);
        autoRotateInterval = null;
      }
    };

    if (!isUserInteracting) {
      startAutoRotate();
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoRotate();
      } else if (!isUserInteracting) {
        startAutoRotate();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopAutoRotate();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isUserInteracting]);

  const handleInteraction = (index: number) => {
    setActiveIndex(index);
    setIsUserInteracting(true);
    setTimeout(() => setIsUserInteracting(false), 5000);
  };

  const subheadings = [
    { title: subheading1, content: content1 },
    { title: subheading2, content: content2 },
    { title: subheading3, content: content3 },
  ];

  return (
    <div className="services-section">
      <div className="section-container">
        <div className="main-title">
          <h2>{heading}</h2>
        </div>
        <div className="subheadings-container">
          {subheadings.map((item, index) => (
            <div
              key={index}
              className={`subheading ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleInteraction(index)}
              onMouseEnter={() => !isMobile && handleInteraction(index)}
              onMouseLeave={() => !isMobile && setIsUserInteracting(false)}
            >
              <h2>{item.title}</h2>
              <span className="indicator" />
            </div>
          ))}
        </div>
        <div className="content-area">
          <div className="content-container">
            {subheadings.map((item, index) => (
              <div
                key={index}
                className={`content ${activeIndex === index ? 'active' : ''}`}
              >
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-content">
          <p className="fine-print">
            Ready to transform your business with AI? Let's create solutions that deliver results, fit your needs, and grow with you.
          </p>
          <a href="/services" className="cta-button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
} 
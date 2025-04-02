'use client'

import { useEffect, useState } from 'react'
import '../styles/ai-solutions-cta.css'

interface AISolutionsCTAProps {
  button1Text?: string;
  button2Text?: string;
  button1Url?: string;
  button2Url?: string;
}

const wordsToType = [
  'Operations',
  'Marketing',
  'Customer Service',
  'Sales',
  'Data Analysis',
  'Workflows',
  'Content Creation',
  'Email Campaigns',
  'Task Management',
  'Lead Generation',
  'Social Media',
  'Client Outreach',
  'Document Processing',
  'Report Generation'
];

export default function AISolutionsCTA({
  button1Text = "Let's Talk Today",
  button2Text = "See Services",
  button1Url = "/contact",
  button2Url = "/services"
}: AISolutionsCTAProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    let typingTimer: NodeJS.Timeout;

    const typeText = () => {
      const currentWord = wordsToType[currentWordIndex];
      const element = isMobile ? document.querySelector('.typed-text-mobile') : document.querySelector('.typed-text');

      if (!element) return;

      if (!isDeleting) {
        const textContent = currentWord.slice(0, charIndex + 1);
        element.innerHTML = textContent + '<span class="typing-cursor">_</span>';
        setCharIndex(prev => prev + 1);

        if (charIndex === currentWord.length) {
          setIsDeleting(true);
          typingTimer = setTimeout(typeText, 2000);
          return;
        }

        typingTimer = setTimeout(typeText, 150);
      } else {
        const textContent = currentWord.slice(0, charIndex - 1);
        element.innerHTML = textContent + '<span class="typing-cursor">_</span>';
        setCharIndex(prev => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex(prev => (prev + 1) % wordsToType.length);
          typingTimer = setTimeout(typeText, 1000);
          return;
        }

        typingTimer = setTimeout(typeText, 100);
      }
    };

    typeText();

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(typingTimer);
    };
  }, [currentWordIndex, charIndex, isDeleting, isMobile]);

  return (
    <>
      {/* Desktop Version */}
      <div className="cta-section">
        <div className="cta-container">
          <h2 className="cta-heading-main">
            You're the Innovator, We're Your AI Partner.<br />
            <div className="typed-wrapper">
              Automate
              <span className="typed-text"></span>
              with AI.
            </div>
          </h2>
          <p className="cta-subtext">
            You're not just running a business—you're shaping the future. Break free from outdated processes and the confusion
            of navigating AI alone, with solutions that streamline operations and keep you ahead.
          </p>
          <div className="cta-buttons">
            <a href={button1Url} className="lets-talk-button">
              {button1Text}
            </a>
            <a href={button2Url} className="our-services-button">
              {button2Text}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="cta-section-mobile">
        <div className="cta-container-mobile">
          <h2 className="cta-heading-mobile">
            You're the Innovator,<br />
            We're Your AI Partner.
          </h2>
          <div className="typed-wrapper-mobile">
            <p>
              Automate
              <span className="typed-text-mobile"></span>
              with AI.
            </p>
          </div>
          <p className="cta-body-mobile">
            You're not just running a business—you're shaping the future. Break free from outdated processes and the confusion
            of navigating AI alone.
          </p>
          <div className="cta-buttons-mobile">
            <a href={button1Url} className="lets-talk-button-mobile">
              {button1Text}
            </a>
            <a href={button2Url} className="our-services-button-mobile">
              {button2Text}
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 
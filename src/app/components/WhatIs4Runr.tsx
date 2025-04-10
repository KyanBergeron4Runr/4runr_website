'use client'

import { useEffect, useState } from 'react'
import '../styles/what-is-4runr.css'
import '../styles/what-is-4runr-update.css'

interface Topic {
  title: string;
  description: string;
}

const topics: Topic[] = [
  {
    title: "AI & Automation Solutions",
    description: "We implement AI and automation solutions that transform your operations. From predictive analytics to intelligent automation, we build systems that deliver measurable business results."
  },
  {
    title: "Automate Workflows",
    description: "We identify and automate time-consuming processes, reducing costs and freeing your team to focus on strategic work. Our automation solutions eliminate manual tasks and human error."
  },
  {
    title: "Centralized Systems",
    description: "We integrate all your tools into one unified platform, creating a seamless system that connects your entire business. No more fragmented solutions or data silos."
  },
  {
    title: "Limitless Systems",
    description: "We build scalable solutions that grow with your business. Our flexible systems adapt to your changing needs and can be expanded to any business area."
  },
  {
    title: "Grow with You",
    description: "We're your long-term technology partner, providing continuous support, updates, and improvements to keep your systems optimized and up-to-date."
  }
];

export default function WhatIs4Runr() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    let autoRotationInterval: NodeJS.Timeout;
    if (isMobile) {
      autoRotationInterval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % topics.length);
      }, 5000);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (autoRotationInterval) clearInterval(autoRotationInterval);
    };
  }, [isMobile]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % topics.length);
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + topics.length) % topics.length);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + topics.length) % topics.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % topics.length);
  };

  return (
    <div className="what-we-do">
      <div className="container">
        <div className="titles">
          <h2>What is 4Runr?</h2>
        </div>

        <div className="content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="headings">
            {topics.map((topic, index) => (
              <div
                key={index}
                className={`heading ${index === currentIndex ? 'active' : ''}`}
                onMouseEnter={() => setCurrentIndex(index)}
              >
                <h3>{topic.title}</h3>
              </div>
            ))}
          </div>

          <div className="mobile-nav">
            <button className="nav-arrow prev-btn" onClick={handlePrev} aria-label="Previous topic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className="current-title">
              <h3>{topics[currentIndex].title}</h3>
            </div>
            <button className="nav-arrow next-btn" onClick={handleNext} aria-label="Next topic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div className="rectangles">
            {topics.map((topic, index) => (
              <div
                key={index}
                className={`rectangle ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="rectangle-content">
                  <p>{topic.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bottom-content">
            <div className="bottom-flex">
              <p className="fine-print">
                We transform businesses through custom AI and automation solutions, delivering measurable efficiency gains
                and sustainable growth.
              </p>
              <div className="button-wrapper">
                <a href="/services" className="cta-button">See Our Solutions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
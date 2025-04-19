'use client';

import React, { useState, useEffect, useRef } from 'react';
import '../styles/product-packages.css';
import TimelineProgress from './TimelineProgress';

const packages = [
  {
    title: "Free Consultation & Strategic Blueprint",
    price: "$0",
    description: "45-minute consultation to understand your business needs and create a strategic automation blueprint.",
    features: ["Business Process Analysis", "Automation Opportunity Assessment", "ROI Calculation", "Strategic Recommendations"]
  },
  {
    title: "Simple Automation Build & Optimization",
    price: "Starting at $2,500",
    description: "Fast automation of 1-2 simple workflows with basic integrations and error handling.",
    features: ["Process Documentation", "Basic Integration Setup", "Error Handling", "User Training"]
  },
  {
    title: "Custom AI-Powered Applications",
    price: "Starting at $5,000",
    description: "Customized application development with AI capabilities and advanced integrations.",
    features: ["Custom Development", "AI Integration", "Advanced Error Handling", "Comprehensive Documentation"]
  },
  {
    title: "AI Brain Integration (LLM Interface Add-On)",
    price: "Starting at $7,500",
    description: "Integration of an internal AI brain to enhance decision-making and process automation.",
    features: ["LLM Integration", "Custom Training", "Knowledge Base Setup", "Performance Monitoring"]
  },
  {
    title: "Full Custom AI Brain Ecosystem",
    price: "Starting at $15,000",
    description: "Complete network of specialized AI brains working together to automate complex processes.",
    features: ["Multiple AI Agents", "Complex Workflow Automation", "Advanced Integration", "Continuous Optimization"]
  },
  {
    title: "Full Business Automation (A–Z Operational Transformation)",
    price: "Starting at $25,000",
    description: "Complete automation of business workflows with advanced AI integration and optimization.",
    features: ["End-to-End Automation", "AI-Powered Workflows", "Custom Development", "24/7 Support"]
  },
  {
    title: "Full Business Automation + Integrated AI Brain Ecosystem",
    price: "Starting at $35,000",
    description: "Comprehensive automation solution with a network of specialized AI brains and complete workflow optimization.",
    features: ["Complete AI Integration", "Custom Solutions", "Advanced Analytics", "Dedicated Support Team"]
  }
];

const ProductPackages = () => {
  const [currentNode, setCurrentNode] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoAdvance) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [currentNode, autoAdvance]);

  useEffect(() => {
    updateProgressBar();
  }, [currentNode]);

  const updateProgressBar = () => {
    if (progressBarRef.current) {
      const progress = ((currentNode + 1) / packages.length) * 100;
      progressBarRef.current.style.height = `${progress}%`;
    }
  };

  const handleNext = () => {
    setCurrentNode((prev) => (prev + 1) % packages.length);
  };

  const handlePrevious = () => {
    setCurrentNode((prev) => (prev - 1 + packages.length) % packages.length);
  };

  const handleNodeClick = (index: number) => {
    setCurrentNode(index);
    setAutoAdvance(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentNode(index);
    setAutoAdvance(false);
  };

  return (
    <div className="product-packages">
      <div className="package-container">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <div className="package-header">
              <h3 className="package-title">{pkg.title}</h3>
              <p className="package-price">{pkg.price}</p>
            </div>
            <div className="package-details">
              <div className="detail description">{pkg.description}</div>
              {pkg.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="detail">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="timeline-section">
        <div className="timeline-container" ref={timelineContainerRef}>
          <div className="timeline-progress">
            <div className="timeline-line"></div>
            <div className="timeline-progress-bar" ref={progressBarRef}></div>
          </div>
          
          <div className="timeline-nodes">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`timeline-node ${index === currentNode ? 'current' : ''}`}
                onClick={() => handleNodeClick(index)}
              >
                <div className="timeline-content">
                  <h4 className="timeline-title">{pkg.title}</h4>
                  <p className="timeline-duration">{pkg.price}</p>
                  <p className="timeline-description">{pkg.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="timeline-controls">
            <button className="timeline-button" onClick={handlePrevious}>
              Previous
            </button>
            <div className="timeline-dots">
              {packages.map((_, index) => (
                <div
                  key={index}
                  className={`timeline-dot ${index === currentNode ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
            <button className="timeline-button" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPackages; 
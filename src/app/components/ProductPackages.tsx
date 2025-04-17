'use client';

import React, { useState, useEffect } from 'react';
import '../styles/product-packages.css';

const packages = [
  {
    title: "Free Consultation & Strategic Blueprint",
    price: "Free",
    timeline: "45 minutes",
    deployment: "Immediate booking available",
    features: [
      "45-Minute Strategic Consultation",
      "Custom AI/Automation Roadmap",
      "\"Next Steps After Consultation\" PDF",
      "Strategic Best Practices Advice",
      "Private Community Access",
      "Follow-up Strategic Summary Report"
    ]
  },
  {
    title: "Simple Automation Build & Optimization",
    price: "$500 – $5,000 initial + Retainer ($500+/month)",
    timeline: "1–3 weeks",
    deployment: "Full support with or without client IT team",
    features: [
      "Prebuilt Automations",
      "Real-Time Workflow Automation",
      "3-Month Strategic Optimization Review",
      "Automation Monday Reports",
      "Full Documentation + Visual Workflow Maps",
      "Private Community Access",
      "Newsletter Access (AI Insider Updates)",
      "Basic Workflow Health Dashboard"
    ]
  },
  {
    title: "Custom AI-Powered Applications",
    price: "$10,000 – $75,000 initial + Custom Retainer",
    timeline: "4–10 weeks",
    deployment: "Full support with or without client IT team",
    features: [
      "Full Custom Web or Backend Application",
      "Centralized Smart Data Infrastructure",
      "API-Ready System Design",
      "User Roles + Permissions Systems",
      "Mobile Responsive Design",
      "Hosting Flexibility (Self/Cloud)",
      "Private AI Consultant Access",
      "Usage-Based Pricing Option",
      "Quarterly Innovation Opportunity Briefs",
      "Access to 4Runr AI Tools Marketplace (Early Access)",
      "Small Welcome Kit"
    ]
  },
  {
    title: "AI Brain Integration (LLM Interface Add-On)",
    price: "$5,000 – $30,000 initial + Custom Retainer",
    timeline: "2–5 weeks",
    deployment: "Full support with or without client IT team",
    features: [
      "AI Interface Embedded Into Custom Apps",
      "Centralized Data-Connected Intelligence",
      "Personalized Prompt Library (50+ Examples)",
      "Employee AI Interaction Training Guide",
      "Full Technical Support + Regular Prompt Updates",
      "5-Month Strategic AI Brain Review",
      "Self/Cloud Hosting Flexibility",
      "Private AI Consultant Access"
    ]
  },
  {
    title: "Full Custom AI Brain Ecosystem",
    price: "$45,000 – $100,000 initial + Custom Retainer",
    timeline: "8–16 weeks",
    deployment: "Full support with or without client IT team",
    features: [
      "Central AI Brain + Department-Specific Sub-Brains",
      "Departmental Intelligence Reports (Quarterly)",
      "Automation ROI Reports (Quarterly)",
      "Departmental Adoption Reports",
      "Dynamic Automation Heatmaps",
      "Backup Automation Scripts for Critical Tasks",
      "Quarterly Strategic Innovation Calls",
      "Annual Automation Strategy Workshops",
      "Employee AI Champions Program",
      "Access to 4Runr AI Tools Marketplace (Early Access)",
      "Certification: AI-Enhanced Company (Digital Badge)"
    ]
  },
  {
    title: "Full Business Automation (A–Z Operational Transformation)",
    price: "$50,000 – $300,000 initial + Custom Retainer",
    timeline: "12–24 weeks",
    deployment: "Full support with or without client IT team",
    features: [
      "End-to-End Process Automation Across Departments",
      "Change Management Planning + Support",
      "SLA-Backed Full Technical Support",
      "Quarterly Bottleneck Analysis",
      "AI Drift Monitoring Reports",
      "Self-Diagnostic Dashboards for Operations",
      "Cross-Process Automation Expansion Maps",
      "Future Threat Radar Reports",
      "Department-Level Strategy Memos",
      "Scalability Readiness Reports",
      "Annual Efficiency Delta Reports (time/cost saved)"
    ]
  },
  {
    title: "Full Business Automation + Integrated AI Brain Ecosystem",
    price: "$100,000 – $500,000 initial + Custom Retainer",
    timeline: "16–32 weeks",
    deployment: "Full support with or without client IT team",
    features: [
      "Full A–Z Automation + Company-Wide AI Brains",
      "Executive Intelligence Dashboards",
      "Revenue Automation Analysis Reports",
      "AI-Driven Market Expansion Forecast Modeling",
      "Partner Technology Integrations",
      "Annual Future-Proofing Report (Strategic Roadmap)",
      "Innovation Partnership Program Access",
      "Access to Private 4Runr Events + Strategy Summits"
    ]
  }
];

export default function ProductPackages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % packages.length);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + packages.length) % packages.length);
    }
  };

  const handleDotClick = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Match this with your CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className="product-packages">
      <div className="container">
        <div className="section-header">
          <h2>⚡ The 4Runr Partnership Value Journey</h2>
          <p>At 4Runr, we build custom AI infrastructures—not off-the-shelf solutions. Each package below represents a template framework to help guide our discovery and planning process. Every system we build is tailored to your needs and can be expanded over time as your business grows.</p>
        </div>

        <div className="slideshow-container">
          <button className="nav-button prev" onClick={handlePrev} aria-label="Previous package">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="package-card">
            <div className={`card-content ${isTransitioning ? 'transitioning' : ''}`}>
              <h3>{packages[currentIndex].title}</h3>
              <div className="package-details">
                <div className="detail">
                  <span className="label">Price:</span>
                  <span className="value">{packages[currentIndex].price}</span>
                </div>
                <div className="detail">
                  <span className="label">Timeline:</span>
                  <span className="value">{packages[currentIndex].timeline}</span>
                </div>
                <div className="detail">
                  <span className="label">Deployment:</span>
                  <span className="value">{packages[currentIndex].deployment}</span>
                </div>
              </div>
              <div className="features">
                <h4>Includes:</h4>
                <ul>
                  {packages[currentIndex].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <button className="nav-button next" onClick={handleNext} aria-label="Next package">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="navigation-dots">
          {packages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to package ${index + 1}`}
            />
          ))}
        </div>

        <div className="post-deployment">
          <h3>📈 Post-Deployment Flexibility</h3>
          <p>All 4Runr systems are modular and scalable. After initial deployment, clients can:</p>
          <ul>
            <li>Add new workflows, departments, or AI brains</li>
            <li>Expand system capacity for scaling teams</li>
            <li>Upgrade AI models and data intelligence layers</li>
            <li>Integrate additional platforms and APIs</li>
            <li>Scope new projects based on future goals</li>
          </ul>
          <p>Every addition is properly scoped, quoted, and aligned with your evolving needs. We ensure you continue scaling intelligently without technical debt. These packages are just the starting point. Your 4Runr System is always built for evolution.</p>
        </div>
      </div>
    </section>
  );
} 
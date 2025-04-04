'use client';

import React, { useEffect } from 'react';
import '@/app/styles/benefits.css';

export default function BenefitsPage() {
  useEffect(() => {
    // Add scroll reveal animation for features
    const featureItems = document.querySelectorAll<HTMLElement>('.feature-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    featureItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(item);
    });

    // Add hover effect for service icons
    const iconWrappers = document.querySelectorAll<HTMLElement>('.icon-wrapper');
    iconWrappers.forEach(wrapper => {
      wrapper.addEventListener('mouseenter', () => {
        wrapper.style.transform = 'scale(1.1)';
        wrapper.style.borderColor = 'rgba(72, 61, 139, 0.6)';
      });
      wrapper.addEventListener('mouseleave', () => {
        wrapper.style.transform = 'scale(1)';
        wrapper.style.borderColor = 'rgba(72, 61, 139, 0.3)';
      });
    });
  }, []);

  return (
    <div className="ai-services-detail">
      <div className="hero-section">
        <div className="container">
          <h1>Transform Your Business with AI</h1>
          <p className="subtitle">
            Discover how our comprehensive AI solutions drive innovation and create lasting competitive advantages.
          </p>
        </div>
      </div>

      <div className="service-sections">
        {/* Apply AI Section */}
        <section className="service-section" id="apply-ai">
          <div className="container">
            <div className="service-header">
              <div className="icon-wrapper">
                <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 18L22 12L16 6"></path>
                  <path d="M8 6L2 12L8 18"></path>
                </svg>
              </div>
              <h2>Apply AI</h2>
            </div>

            <div className="service-content">
              <p className="lead-text">
                We integrate AI capabilities into your existing systems to boost performance, improve decision-making, and
                create smarter workflows.
              </p>

              <div className="feature-grid">
                <div className="feature-item">
                  <h3>Process Automation</h3>
                  <p>
                    Streamline your operations with intelligent automation that learns and adapts. Our AI solutions can:
                  </p>
                  <ul>
                    <li>Automate repetitive tasks with high accuracy</li>
                    <li>Process documents and extract data intelligently</li>
                    <li>Handle complex workflows with adaptive learning</li>
                    <li>Reduce manual intervention while improving quality</li>
                  </ul>
                </div>

                <div className="feature-item">
                  <h3>System Integration</h3>
                  <p>Enhance your existing software with powerful AI capabilities:</p>
                  <ul>
                    <li>Seamless integration with current systems</li>
                    <li>Real-time processing and decision making</li>
                    <li>Scalable solutions that grow with your needs</li>
                    <li>Custom APIs and connectivity options</li>
                  </ul>
                </div>

                <div className="feature-item">
                  <h3>Performance Optimization</h3>
                  <p>Maximize efficiency and reduce costs through AI-driven optimization:</p>
                  <ul>
                    <li>Resource allocation optimization</li>
                    <li>Predictive maintenance and monitoring</li>
                    <li>Efficiency analysis and recommendations</li>
                    <li>Continuous improvement through machine learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Build AI Section */}
        <section className="service-section" id="build-ai">
          <div className="container">
            <div className="service-header">
              <div className="icon-wrapper">
                <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h2>Build AI</h2>
            </div>

            <div className="service-content">
              <p className="lead-text">
                We develop custom AI solutions tailored to your unique business challenges, from intelligent analytics to
                advanced automation systems.
              </p>

              <div className="feature-grid">
                <div className="feature-item">
                  <h3>Custom AI Development</h3>
                  <p>Create powerful, purpose-built AI solutions:</p>
                  <ul>
                    <li>Natural Language Processing</li>
                    <li>Computer Vision Systems</li>
                    <li>Predictive Analytics Models</li>
                    <li>Machine Learning Algorithms</li>
                  </ul>
                </div>

                <div className="feature-item">
                  <h3>AI Infrastructure</h3>
                  <p>Build robust foundations for AI implementation:</p>
                  <ul>
                    <li>Scalable AI Architecture</li>
                    <li>Cloud Integration</li>
                    <li>Data Pipeline Development</li>
                    <li>Security Implementation</li>
                  </ul>
                </div>

                <div className="feature-item">
                  <h3>Industry Solutions</h3>
                  <p>Specialized AI solutions for various sectors:</p>
                  <ul>
                    <li>Healthcare Analytics</li>
                    <li>Financial Forecasting</li>
                    <li>Retail Optimization</li>
                    <li>Manufacturing Intelligence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leverage AI Section */}
        <section className="service-section" id="leverage-ai">
          <div className="container">
            <div className="service-header">
              <div className="icon-wrapper">
                <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18"></path>
                  <path d="M3 12h6l3-9 4 18 3-9h2"></path>
                </svg>
              </div>
              <h2>Leverage AI</h2>
            </div>

            <div className="service-content">
              <p className="lead-text">
                Transform your data into actionable insights with our AI-powered analytics and prediction systems.
              </p>

              <div className="feature-grid">
                <div className="feature-item">
                  <h3>Data Analytics</h3>
                  <p>Extract valuable insights from your data:</p>
                  <ul>
                    <li>Advanced Data Mining</li>
                    <li>Pattern Recognition</li>
                    <li>Trend Analysis</li>
                    <li>Behavioral Analytics</li>
                  </ul>
                </div>

                <div className="feature-item">
                  <h3>Predictive Intelligence</h3>
                  <p>Anticipate future trends and behaviors:</p>
                  <ul>
                    <li>Market Trend Prediction</li>
                    <li>Risk Assessment</li>
                    <li>Demand Forecasting</li>
                    <li>Performance Prediction</li>
                  </ul>
                </div>

                <div className="feature-item">
                  <h3>Business Intelligence</h3>
                  <p>Make data-driven decisions with confidence:</p>
                  <ul>
                    <li>Real-time Analytics</li>
                    <li>Custom Dashboards</li>
                    <li>Automated Reporting</li>
                    <li>KPI Tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how our AI solutions can drive your success.</p>
          <div className="button-group">
            <a href="/contact" className="btn btn-primary">Book a Call</a>
          </div>
        </div>
      </div>
    </div>
  );
} 
'use client';

import React from 'react';
import Link from 'next/link';
import '@/app/styles/services-learn-more.css';

export default function ServicesLearnMorePage() {
  return (
    <div className="learn-more-section">
      {/* Hero Section */}
      <div className="hero-container">
        <h1 className="hero-heading">Transform Your Business with AI</h1>
        <p className="hero-description">
          Discover how our cutting-edge AI solutions can revolutionize your operations, boost efficiency, and give you the
          competitive edge in today's digital landscape.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {/* Service 1: AI Integration */}
        <div className="service-card">
          <div className="service-header">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
            </svg>
            <h3 className="service-title">AI Integration</h3>
          </div>
          <p className="service-description">
            Transform your business with seamless AI integration that enhances every aspect of your operations.
          </p>
          <ul className="feature-list">
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Custom AI Model Development</div>
                <p className="feature-description">
                  Tailored AI solutions designed for your specific business needs, using advanced algorithms that adapt and
                  improve over time.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Natural Language Processing</div>
                <p className="feature-description">
                  Automated text and speech analysis for customer service, sentiment analysis, and document processing.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Predictive Analytics</div>
                <p className="feature-description">
                  Data-driven forecasting to anticipate trends and optimize your business strategy.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Machine Learning Pipelines</div>
                <p className="feature-description">
                  End-to-end ML infrastructure for automated data processing and model deployment.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Service 2: Process Automation */}
        <div className="service-card">
          <div className="service-header">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <h3 className="service-title">Process Automation</h3>
          </div>
          <p className="service-description">
            Streamline operations with intelligent automation that adapts to your business needs.
          </p>
          <ul className="feature-list">
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Workflow Optimization</div>
                <p className="feature-description">
                  AI-driven process analysis to identify bottlenecks and improve operational efficiency.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Intelligent Task Automation</div>
                <p className="feature-description">
                  Smart automation systems that handle complex business scenarios and adapt to changes.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Smart Document Processing</div>
                <p className="feature-description">
                  Automated document handling using AI to extract and process information efficiently.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Business Process Management</div>
                <p className="feature-description">Comprehensive solutions to optimize end-to-end business operations.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Service 3: Scalable Solutions */}
        <div className="service-card">
          <div className="service-header">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
            <h3 className="service-title">Scalable Solutions</h3>
          </div>
          <p className="service-description">Future-proof your business with flexible, scalable systems that grow with you.</p>
          <ul className="feature-list">
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Cloud-native Architecture</div>
                <p className="feature-description">
                  Modern infrastructure ensuring high availability and cost-effective scaling.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Microservices Implementation</div>
                <p className="feature-description">Modular architecture for independent scaling and improved reliability.</p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Auto-scaling Infrastructure</div>
                <p className="feature-description">Smart systems that adjust automatically to your business demands.</p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Continuous Integration/Deployment</div>
                <p className="feature-description">Automated pipelines for reliable updates while maintaining stability.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Process Section */}
      <div className="process-section">
        <h2 className="process-title">Our Implementation Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">01</div>
            <div className="step-title">Discovery & Analysis</div>
            <p className="step-description">We analyze your current systems to identify opportunities for AI integration.</p>
          </div>
          <div className="process-step">
            <div className="step-number">02</div>
            <div className="step-title">Solution Design</div>
            <p className="step-description">Our experts design a customized solution aligned with your goals.</p>
          </div>
          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-title">Implementation</div>
            <p className="step-description">We deploy your solution using industry best practices.</p>
          </div>
          <div className="process-step">
            <div className="step-number">04</div>
            <div className="step-title">Optimization & Support</div>
            <p className="step-description">Continuous monitoring ensures your solution evolves with your needs.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2 className="cta-heading">Ready to Transform Your Business?</h2>
        <p className="cta-description">
          Schedule a consultation with our experts to get started on your digital transformation journey.
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="primary-button">Schedule a Meeting</Link>
        </div>
      </div>
    </div>
  );
} 
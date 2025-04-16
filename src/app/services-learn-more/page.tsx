'use client';

import React from 'react';
import Link from 'next/link';
import '@/app/styles/services-learn-more.css';

export default function ServicesLearnMorePage() {
  return (
    <div className="learn-more-section">
      {/* Hero Section */}
      <div className="hero-container">
        <h1 className="hero-heading">Custom AI Infrastructure for Modern Business</h1>
        <p className="hero-description">
          We build custom AI infrastructures—called 4Runr Systems—that act as the heart of your business operations. 
          These intelligent, modular systems automate repetitive work, optimize decisions, and scale with you.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {/* Service 1: Custom AI Solutions */}
        <div className="service-card">
          <div className="service-header">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
            </svg>
            <h3 className="service-title">Custom AI Solutions</h3>
          </div>
          <p className="service-description">
            Tailored AI infrastructures that become the heart of your business operations.
          </p>
          <ul className="feature-list">
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">AI-Powered Web Applications</div>
                <p className="feature-description">
                  Custom solutions designed around your exact business needs and workflows.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">AI Voice & Chat Assistants</div>
                <p className="feature-description">
                  Intelligent support systems for customer service, sales, and internal operations.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Data-Driven Decision Tools</div>
                <p className="feature-description">
                  Transform your business data into actionable insights and strategic advantages.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Modular Architecture</div>
                <p className="feature-description">
                  100% modular systems that scale like Lego blocks as your business grows.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Service 2: Automation Infrastructure */}
        <div className="service-card">
          <div className="service-header">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <h3 className="service-title">Automation Infrastructure</h3>
          </div>
          <p className="service-description">
            Seamless workflows that eliminate repetitive tasks and optimize your operations.
          </p>
          <ul className="feature-list">
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Workflow Optimization</div>
                <p className="feature-description">
                  Reimagine how work gets done with intelligent process automation.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Adaptive Technology Stack</div>
                <p className="feature-description">
                  We continuously evolve our tools based on the latest AI breakthroughs.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Cost-Efficient Innovation</div>
                <p className="feature-description">
                  Access cutting-edge performance without overspending on redundant tools.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Future-Proof Design</div>
                <p className="feature-description">
                  Systems built to adapt and scale as your business grows.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Service 3: Strategic Partnership */}
        <div className="service-card">
          <div className="service-header">
            <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
            <h3 className="service-title">Strategic Partnership</h3>
          </div>
          <p className="service-description">Long-term partnership to evolve your business with technological advances.</p>
          <ul className="feature-list">
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Ongoing Support</div>
                <p className="feature-description">
                  Flexible retainer options for maintenance, upgrades, and new capabilities.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Resource Optimization</div>
                <p className="feature-description">
                  Pay only for the tools and capabilities you actually use.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Collective Intelligence</div>
                <p className="feature-description">
                  Leverage our full team's expertise to build smarter solutions.
                </p>
              </div>
            </li>
            <li className="feature-item">
              <div className="feature-content">
                <div className="feature-title">Full System Control</div>
                <p className="feature-description">
                  Stay in complete control of your systems and data.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Process Section */}
      <div className="process-section">
        <h2 className="process-title">Our Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">01</div>
            <div className="step-content">
              <div className="step-title">Discovery & Alignment</div>
              <p className="step-description">Deep understanding of your business objectives and vision.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">02</div>
            <div className="step-content">
              <div className="step-title">System Blueprint</div>
              <p className="step-description">Comprehensive mapping of your AI infrastructure.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <div className="step-title">Development & Deployment</div>
              <p className="step-description">Iterative building of your custom 4Runr System.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">04</div>
            <div className="step-content">
              <div className="step-title">Training & Partnership</div>
              <p className="step-description">Full team preparation and ongoing support for growth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2 className="cta-heading">Ready to Transform Your Business?</h2>
        <p className="cta-description">
          4Runr is the bridge between your current operations and what's truly possible. Our AI Assistant can help you 
          understand how a custom 4Runr System could revolutionize your business operations and prepare you for the 
          AI-driven future.
        </p>
        <p className="cta-description">
          Whether you're looking to scale without stacking redundant SaaS tools, automate repetitive tasks, or 
          create a truly intelligent infrastructure for your business, we're here to guide you into the new era 
          of AI-powered operations.
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="primary-button">Chat with 4Runr AI Assistant</Link>
        </div>
      </div>
    </div>
  );
} 
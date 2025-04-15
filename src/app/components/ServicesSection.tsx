'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ServiceCategory = ({ title, id, children }: { title: string; id: string; children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`category ${isActive ? 'active' : ''}`}>
      <div className="category-header" onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        <button className="expand-btn" aria-label="Toggle category">
          <span className="plus-icon"></span>
        </button>
      </div>
      <div className="category-content" id={id}>
        {children}
      </div>
    </div>
  );
};

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Enterprise AI Infrastructure & Automation</h2>
        </div>

        <div className="service-categories">
          <ServiceCategory title="AI Infrastructure Development" id="infrastructure">
            <div className="service-list">
              <div className="service">
                <h3>Custom AI Model Development</h3>
                <div className="service-details">
                  <p>
                    Build powerful, custom AI models tailored to your specific business needs. Our infrastructure enables 
                    rapid development and deployment of AI solutions that deliver 99%+ accuracy rates and 40-80% efficiency gains. 
                    From computer vision to natural language processing, we create models that drive real business results.
                  </p>
                </div>
              </div>
              <div className="service">
                <h4>Scalable AI Architecture</h4>
                <div className="service-details">
                  <p>
                    Deploy enterprise-grade AI infrastructure that grows with your business. Our modular architecture ensures 
                    seamless scaling, high availability, and optimal performance. Perfect for organizations looking to build 
                    lasting competitive advantages through AI capabilities.
                  </p>
                </div>
              </div>
              <div className="service">
                <h4>AI Integration & Optimization</h4>
                <div className="service-details">
                  <p>
                    Seamlessly integrate AI systems with your existing infrastructure. Our team ensures smooth implementation, 
                    optimal performance, and continuous optimization of your AI solutions. Achieve 30-50% cost savings through 
                    efficient resource utilization and automated processes.
                  </p>
                </div>
              </div>
            </div>
          </ServiceCategory>

          <ServiceCategory title="Intelligent Process Automation" id="automation">
            <div className="service-list">
              <div className="service">
                <h4>End-to-End Process Automation</h4>
                <div className="service-details">
                  <p>
                    Transform your operations with intelligent automation that combines AI and robotic process automation (RPA). 
                    Our solutions automate complex workflows, reduce manual intervention by up to 80%, and ensure consistent 
                    quality across all processes.
                  </p>
                </div>
              </div>
              <div className="service">
                <h4>Smart Document Processing</h4>
                <div className="service-details">
                  <p>
                    Leverage advanced OCR and NLP technologies to automate document processing with 99%+ accuracy. From invoice 
                    processing to contract analysis, our systems handle complex document workflows while reducing processing 
                    time by 40-80%.
                  </p>
                </div>
              </div>
              <div className="service">
                <h4>Workflow Intelligence</h4>
                <div className="service-details">
                  <p>
                    Implement AI-powered workflow systems that adapt and improve over time. Our solutions optimize task routing, 
                    resource allocation, and process execution, leading to significant efficiency gains and cost reductions 
                    across your organization.
                  </p>
                </div>
              </div>
            </div>
          </ServiceCategory>

          <ServiceCategory title="Advanced Analytics & Optimization" id="analytics">
            <div className="service-list">
              <div className="service">
                <h4>Real-time Analytics Engine</h4>
                <div className="service-details">
                  <p>
                    Deploy powerful analytics systems that provide real-time insights and predictive capabilities. Our solutions 
                    help you make data-driven decisions faster, identify opportunities earlier, and respond to market changes 
                    more effectively.
                  </p>
                </div>
              </div>
              <div className="service">
                <h4>Performance Optimization</h4>
                <div className="service-details">
                  <p>
                    Maximize operational efficiency with AI-driven optimization systems. Our solutions continuously monitor 
                    performance, identify bottlenecks, and automatically implement improvements, leading to 30-50% cost 
                    savings and significant productivity gains.
                  </p>
                </div>
              </div>
              <div className="service">
                <h4>Predictive Intelligence</h4>
                <div className="service-details">
                  <p>
                    Anticipate market trends and operational challenges with our predictive AI systems. From demand forecasting 
                    to risk assessment, our solutions help you stay ahead of changes and make proactive decisions that drive 
                    business growth.
                  </p>
                </div>
              </div>
            </div>
          </ServiceCategory>

          <div className="results-section">
            <h3>Proven Results & Impact</h3>
            <div className="results-grid">
              <div className="result-item">
                <span className="metric">40-80%</span>
                <span className="description">Increase in Operational Efficiency</span>
              </div>
              <div className="result-item">
                <span className="metric">99%+</span>
                <span className="description">AI Model Accuracy</span>
              </div>
              <div className="result-item">
                <span className="metric">30-50%</span>
                <span className="description">Cost Reduction</span>
              </div>
            </div>
            <div className="additional-results">
              <ul className="feature-list">
                <li>Enterprise-grade AI infrastructure that scales with your business</li>
                <li>End-to-end process automation with intelligent workflow optimization</li>
                <li>Real-time analytics and predictive insights for faster decision-making</li>
              </ul>
            </div>
            <p className="closing-note">
              Our solutions are designed for enterprise-scale impact, combining cutting-edge AI capabilities with practical 
              automation to deliver measurable results. We work closely with your team to implement systems that drive 
              lasting competitive advantages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 
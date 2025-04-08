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
          <h2>Our AI Services in Action</h2>
        </div>

        <div className="service-categories">
          <ServiceCategory title="Process Automation & Workflow Enhancement" id="automation">
            <div className="service-list">
              <div className="service">
                <h3>Intelligent Document Processing</h3>
                <div className="service-details">
                  <p>
                    Transform how you handle documents with AI that automatically extracts, categorizes, and processes
                    information from invoices, contracts, forms, and reports. Reduce manual data entry by up to 80% while
                    improving accuracy.
                  </p>
                </div>
              </div>
              <div className="service">
                <h4>Smart Workflow Orchestration</h4>
                <div className="service-details">
                  <p>
                    Automate complex business processes across departments. Our AI systems can route tasks, trigger
                    actions based on events, and maintain audit trails automatically. Perfect for approval processes,
                    customer onboarding, and compliance workflows.
                  </p>
                </div>
              </div>
              <div className="service">
                <h4>Quality Control & Monitoring</h4>
                <div className="service-details">
                  <p>
                    Implement AI-powered quality checks that spot errors and anomalies in real-time. From manufacturing
                    defect detection to data validation, our systems ensure consistency and reduce costly mistakes.
                  </p>
                </div>
              </div>
            </div>
          </ServiceCategory>

          <ServiceCategory title="Advanced Analytics & Intelligence" id="analytics">
            <div className="service-list">
              <div className="service">
                <h4>Predictive Analytics Engine</h4>
                <div className="service-details">
                  <p>
                    Forecast trends, demand, and potential issues before they impact your business. Our custom predictive
                    models analyze your historical data to provide actionable insights for inventory management, resource
                    allocation, and risk assessment.
                  </p>
                </div>
              </div>
              <div className="service">
                <h4>Customer Behavior Analysis</h4>
                <div className="service-details">
                  <p>
                    Understand your customers better with AI that analyzes interaction patterns, preferences, and
                    feedback. Get detailed insights into customer segments, churn risk, and opportunities for
                    personalization.
                  </p>
                </div>
              </div>
              <div className="service">
                <h4>Performance Optimization</h4>
                <div className="service-details">
                  <p>
                    Monitor and optimize business operations in real-time. Our AI systems track KPIs, identify
                    bottlenecks, and suggest improvements based on actual performance data.
                  </p>
                </div>
              </div>
            </div>
          </ServiceCategory>

          <ServiceCategory title="Custom AI Solutions" id="custom">
            <div className="service-list">
              <div className="service">
                <h4>Computer Vision Systems</h4>
                <div className="service-details">
                  <p>
                    Automate visual inspection tasks, enhance security monitoring, or extract information from images and
                    video. Our computer vision solutions can be customized for quality control, safety compliance, or
                    customer experience enhancement.
                  </p>
                </div>
              </div>
              <div className="service">
                <h4>Natural Language Processing</h4>
                <div className="service-details">
                  <p>
                    Handle text-based communications more efficiently with AI that understands context and intent. From
                    automated customer service to content categorization, our NLP solutions transform how you process
                    textual information.
                  </p>
                </div>
              </div>
              <div className="service">
                <h4>Recommendation Engines</h4>
                <div className="service-details">
                  <p>
                    Implement sophisticated recommendation systems that increase sales and engagement. Whether it's
                    product suggestions, content recommendations, or process optimization, our AI helps make smarter
                    choices.
                  </p>
                </div>
              </div>
            </div>
          </ServiceCategory>

          <ServiceCategory title="Implementation & Support" id="implementation">
            <div className="service-list">
              <div className="service">
                <h4>Integration Services</h4>
                <div className="service-details">
                  <ul className="feature-list">
                    <li>System compatibility assessment</li>
                    <li>Custom API development</li>
                    <li>Legacy system integration</li>
                    <li>Performance optimization</li>
                    <li>Security implementation</li>
                    <li>Data migration support</li>
                  </ul>
                </div>
              </div>
              <div className="service">
                <h4>Ongoing Partnership</h4>
                <div className="service-details">
                  <ul className="feature-list">
                    <li>24/7 monitoring and support</li>
                    <li>Regular performance reviews</li>
                    <li>System updates and maintenance</li>
                    <li>Team training and free resources</li>
                    <li>Quarterly strategy sessions</li>
                    <li>Scaling and optimization planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </ServiceCategory>

          <div className="results-section">
            <h3>Results You Can Expect</h3>
            <div className="results-grid">
              <div className="result-item">
                <span className="metric">40-80%</span>
                <span className="description">Reduction in manual processing time</span>
              </div>
              <div className="result-item">
                <span className="metric">99%+</span>
                <span className="description">Improvement in accuracy rates</span>
              </div>
              <div className="result-item">
                <span className="metric">30-50%</span>
                <span className="description">Cost savings on operational tasks</span>
              </div>
            </div>
            <div className="additional-results">
              <ul className="feature-list">
                <li>Faster decision-making with real-time insights</li>
                <li>Increased customer satisfaction through faster response times</li>
                <li>Scalable solutions that grow with your business</li>
              </ul>
            </div>
            <p className="closing-note">
              Each service can be customized to your specific industry and business needs. We work closely with your team to
              understand your unique challenges and develop solutions that deliver measurable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 
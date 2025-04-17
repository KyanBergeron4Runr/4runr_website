'use client'

import { useEffect, useState } from 'react'
import '../styles/product-packages.css'

export default function ProductPackages() {
  return (
    <section className="product-packages">
      <div className="packages-container">
        <div className="package-card">
          <div className="card-content">
            <h3>Free Consultation & Strategic Blueprint</h3>
            <div className="package-details">
              <div className="detail">
                <span className="label">Price:</span>
                <span className="value">Free</span>
              </div>
              <div className="detail">
                <span className="label">Timeline:</span>
                <span className="value">3–5 Business Days</span>
              </div>
              <div className="detail">
                <span className="label">Deployment:</span>
                <span className="value">Immediate</span>
              </div>
            </div>
            <div className="features">
              <h4>Includes:</h4>
              <ul>
                <li>45-Minute Strategic Consultation</li>
                <li>AI/Automation Roadmap PDF</li>
                <li>Implementation Timeline</li>
                <li>ROI Projections</li>
                <li>Optional Follow-Up Q&A</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
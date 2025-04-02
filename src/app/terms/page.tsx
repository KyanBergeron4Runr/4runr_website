'use client';

import React from 'react';
import '@/app/styles/terms.css';

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <section className="terms-section">
      <div className="terms-container">
        <div className="terms-title">
          <h1>Terms of Service</h1>
        </div>
        <div className="last-updated">Last Updated: {currentDate}</div>

        <div className="terms-content">
          <p>
            Welcome to 4Runr, an AI and automation integration agency. By accessing or using our website and services, you
            agree to be bound by the following Terms of Service. Please read them carefully.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By using our website and services, you acknowledge that you have read, understood, and agree to these Terms of
            Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2>2. Services</h2>
          <p>
            4Runr provides AI and automation solutions to help businesses improve efficiency and scalability. Our services
            are tailored to each client's needs and include consulting, system integration, and ongoing support.
          </p>

          <h2>3. Use of Website</h2>
          <ul>
            <li>You may use our website for lawful purposes only.</li>
            <li>
              You agree not to misuse the website, including attempting to gain unauthorized access or disrupt its
              functionality.
            </li>
            <li>Any information you provide must be accurate and up-to-date.</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, including text, graphics, logos, and software, is the property of 4Runr or its licensors and is
            protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without
            prior written consent.
          </p>

          <h2>5. Confidentiality</h2>
          <p>
            Any confidential information shared during consultations or service engagements will be handled with care and
            not disclosed to third parties without your consent.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            4Runr is not liable for any indirect, incidental, or consequential damages arising from the use of our website
            or services. Our maximum liability is limited to the fees paid for the services provided.
          </p>

          <h2>7. Payment and Fees</h2>
          <ul>
            <li>Fees for our services are outlined in individual service agreements.</li>
            <li>Payments must be made according to the terms specified in the agreement.</li>
          </ul>

          <h2>8. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our website or services if you violate these Terms of
            Service.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Any changes will be posted on this page, and your
            continued use of our website and services constitutes acceptance of the updated terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms of Service are governed by the laws of Montreal, Quebec, Canada. Any disputes will be resolved in
            the courts of Montreal, Quebec, Canada.
          </p>

          <div className="contact-info">
            <h2>11. Contact Information</h2>
            <p>
              For any questions about these Terms of Service, please contact us at
              <a href="mailto:Support@4runrtech.com">Support@4runrtech.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 
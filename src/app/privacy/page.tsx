'use client';

import React from 'react';
import '@/app/styles/privacy.css';

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <section className="privacy-section">
      <div className="privacy-container">
        <div className="privacy-title">
          <h1>Privacy Policy</h1>
        </div>
        <div className="last-updated">Last Updated: {currentDate}</div>

        <div className="privacy-content">
          <p>
            At 4Runr, we value your privacy and are committed to protecting your personal information. This Privacy Policy
            explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li>
              <span className="bold-text">Personal Information:</span> We may collect personal information such as your name,
              email address, phone number, and company details when you contact us or use our services.
            </li>
            <li>
              <span className="bold-text">Usage Information:</span> We collect data about your interactions with our website,
              including IP addresses, browser types, and pages visited.
            </li>
            <li>
              <span className="bold-text">Cookies:</span> We use cookies to enhance your browsing experience. You can manage
              cookie preferences through your browser settings.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services.</li>
            <li>Communicate with you regarding inquiries, services, and updates.</li>
            <li>Ensure the security and functionality of our website.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h2>3. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share your information with trusted service providers who
            assist us in delivering our services, subject to confidentiality agreements.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement security measures to protect your information from unauthorized access, disclosure, or alteration.
            However, no method of transmission over the Internet is completely secure.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. To exercise these rights, please
            contact us at <a href="mailto:Support@4runrtech.com">Support@4runrtech.com</a>.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for their privacy practices and
            encourage you to review their privacy policies.
          </p>

          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated date.
          </p>

          <div className="contact-info">
            <h2>8. Contact Information</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at
              <a href="mailto:Support@4runrtech.com">Support@4runrtech.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 
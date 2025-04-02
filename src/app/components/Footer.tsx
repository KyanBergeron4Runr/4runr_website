'use client'

import '../styles/footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="custom-footer-section">
      <div className="custom-footer-container">
        <div className="custom-footer-grid">
          {/* Logo */}
          <img
            src="https://cdn.shopify.com/s/files/1/0891/9610/1908/files/Untitled_design_67.png?v=1738103105"
            alt="4Runr"
            className="custom-footer-logo"
          />

          {/* Contact Info */}
          <div className="footer-contact-info">
            <div className="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Montreal, Quebec</span>
            </div>

            <div className="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-6.32 3.783a.5.5 0 0 1-.36 0L1 5.383V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.383z"/>
              </svg>
              <span>Support@4runrtech.com</span>
            </div>

            <div className="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              <span>(555) 123-4567</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} 4Runr. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="https://4runrtech.com/pages/privacy-policy">Privacy Policy</a>
            <a href="https://4runrtech.com/pages/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
} 
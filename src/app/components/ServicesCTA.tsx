import Link from 'next/link'
import '../styles/services-cta.css'

export default function ServicesCTA() {
  return (
    <section className="services-cta">
      <div className="services-cta-content">
        <h2 className="services-cta-title">Ready to Transform Your Business with AI?</h2>
        <div className="services-cta-text">
          <p>Get instant insights about AI integration for your business by chatting with our 4Runr AI Assistant.</p>
          <p>Whether you're looking to automate processes, enhance analytics, or build custom AI solutions, our AI Assistant is available 24/7 to help you understand the possibilities and get started on your AI journey.</p>
        </div>
        <div className="services-cta-buttons">
          <Link href="/contact" className="schedule-button">
            Schedule a Call
          </Link>
          <button className="chat-button">
            Talk to AI Assistant
          </button>
        </div>
      </div>
    </section>
  )
} 
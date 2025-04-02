'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <div className="header-wrapper">
        <header className="header-desktop">
          <div className="header__logo-wrapper">
            <Link href="/">
              <Image
                src="https://cdn.shopify.com/s/files/1/0891/9610/1908/files/Untitled_design_67.png?v=1738103105"
                alt="4Runr"
                width={200}
                height={80}
                className="header__logo"
                priority
              />
            </Link>
          </div>
        </header>

        <nav className="top-nav">
          <div className="nav-items">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact" className="contact-button">Contact Us</Link>
          </div>
        </nav>
      </div>

      <header className="header-mobile">
        <div className="mobile-logo-wrapper">
          <Link href="/">
            <Image
              src="https://cdn.shopify.com/s/files/1/0891/9610/1908/files/Untitled_design_67.png?v=1738103105"
              alt="4Runr"
              width={150}
              height={60}
              className="mobile-logo"
              priority
            />
          </Link>
        </div>
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleMobileMenu}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="menu-content">
          <Link href="/" className="nav-button" onClick={toggleMobileMenu}>Home</Link>
          <Link href="/services" className="nav-button" onClick={toggleMobileMenu}>Services</Link>
          <Link href="/about" className="nav-button" onClick={toggleMobileMenu}>About Us</Link>
          <Link href="/contact" className="nav-button mobile-contact-button" onClick={toggleMobileMenu}>Contact Us</Link>
        </div>

        <div className="menu-footer">
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/4runr.tech/" aria-label="Instagram">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" fill="currentColor" stroke="black" strokeWidth="2"/>
                <circle cx="17" cy="7" r="1.5" fill="black"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/4runr-technology/" aria-label="LinkedIn">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <p>© 2024 4RUNR Tech. All rights reserved.</p>
        </div>
      </div>
    </>
  )
} 
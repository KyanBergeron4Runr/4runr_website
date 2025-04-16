'use client'

import { useState } from 'react'
import '../styles/pdf-form.css'

// PDF URLs for different languages
const PDF_URLS = {
  en: 'https://cdn.shopify.com/s/files/1/0891/9610/1908/files/En_The_4Runr_Survival_Guide_for_the_AI_Revolution.pdf?v=1739379715',
  fr: 'https://cdn.shopify.com/s/files/1/0891/9610/1908/files/Fr_The_4Runr_Survival_Guide_for_the_AI_Revolution_1.pdf?v=1739379715'
} as const;

// PDF filenames for different languages
const PDF_NAMES = {
  en: '4Runr_AI_Success_Guide.pdf',
  fr: '4Runr_Guide_IA_Succes.pdf'
} as const;

type Language = keyof typeof PDF_URLS;

export default function PDFForm() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const handleDownload = async () => {
    // Hide any existing messages
    setShowSuccess(false);
    setShowError(false);

    try {
      const response = await fetch(PDF_URLS[currentLanguage]);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', PDF_NAMES[currentLanguage]);

      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      setShowError(true);
    }
  };

  return (
    <div className="pdf-form">
      <h2 className="pdf-form__heading">
        The Ultimate Guide to Business Success in the Age of AI
      </h2>
      <p className="pdf-form__description">
        Discover proven strategies, real-world case studies, and practical tools to help your business thrive with AI. This comprehensive guide, brought to you by the AI experts at 4runr, is your essential resource for navigating the AI landscape and unlocking transformative results.
      </p>
      <div className="pdf-form__main-action">
        <div className="pdf-language-selector">
          <button className="language-option active">EN</button>
          <button className="language-option">FR</button>
        </div>
        <button className="pdf-form__button">
          <span className="button-text">Download Free Guide</span>
          <span className="button-icon">↓</span>
        </button>
      </div>
      <p className="pdf-form__fine-print">
        Get your complimentary copy of our comprehensive guide now. Don't miss out on this valuable resource—claim your free PDF today!
      </p>
    </div>
  );
} 
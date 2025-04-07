'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import '@/app/styles/contact.css';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  options?: string[];
  timestamp: Date;
}

interface MeetingInfo {
  purpose?: string;
  date?: string;
  time?: string;
  name?: string;
  email?: string;
  company?: string;
}

const commonQuestions = [
  {
    category: "AI Solutions",
    questions: [
      "How can AI improve my business efficiency?",
      "What AI integration services do you offer?",
      "How much does AI implementation cost?",
      "How long does AI integration take?"
    ]
  },
  {
    category: "Technical Services",
    questions: [
      "Do you offer custom software development?",
      "Can you help with cloud migration?",
      "What tech stack do you use?",
      "Do you provide ongoing support?"
    ]
  },
  {
    category: "Business Process",
    questions: [
      "How do you handle data security?",
      "What's your project methodology?",
      "Can you work with our existing systems?",
      "What industries do you serve?"
    ]
  }
];

const securityBadges = [
  {
    name: "SOC 2 Type II Compliant",
    icon: "🔐",
    description: "Certified secure data handling"
  },
  {
    name: "GDPR Compliant",
    icon: "🛡️",
    description: "EU data protection standards"
  },
  {
    name: "256-bit Encryption",
    icon: "🔒",
    description: "Enterprise-grade security"
  },
  {
    name: "24/7 Support",
    icon: "⏰",
    description: "Round-the-clock assistance"
  }
];

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [meetingInfo, setMeetingInfo] = useState<MeetingInfo>({});
  const [currentStep, setCurrentStep] = useState('welcome');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Initial welcome message
    if (messages.length === 0) {
      addBotMessage({
        content: "👋 Hi! I'm the 4Runr AI Assistant. I'm here to help you schedule a meeting with our team.",
        options: [
          "Schedule a Meeting",
          "Learn About Services",
          "Get a Quote",
          "Technical Consultation"
        ]
      });
    }
    scrollToBottom();
  }, [messages]);

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage = {
      ...message,
      id: Math.random().toString(36).substring(7),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addBotMessage = (message: { content: string; options?: string[] }) => {
    setIsTyping(true);
    setTimeout(() => {
      addMessage({
        type: 'bot',
        content: message.content,
        options: message.options
      });
      setIsTyping(false);
    }, 1000);
  };

  const handleOptionSelect = async (option: string) => {
    addMessage({ type: 'user', content: option });

    switch (currentStep) {
      case 'welcome':
        if (option === 'Schedule a Meeting') {
          setCurrentStep('purpose');
          addBotMessage({
            content: "Great! What's the main purpose of your meeting?",
            options: [
              "AI Integration Discussion",
              "Business Process Automation",
              "Technical Consultation",
              "General Inquiry"
            ]
          });
        } else {
          addBotMessage({
            content: "I'll connect you with the right team member. Could you please provide your email address?",
          });
          setCurrentStep('email');
        }
        break;

      case 'purpose':
        setMeetingInfo(prev => ({ ...prev, purpose: option }));
        setCurrentStep('name');
        addBotMessage({
          content: "Perfect! Could you please tell me your name?"
        });
        break;

      case 'name':
        setMeetingInfo(prev => ({ ...prev, name: option }));
        setCurrentStep('email');
        addBotMessage({
          content: "Thanks! What's your email address?"
        });
        break;

      case 'email':
        setMeetingInfo(prev => ({ ...prev, email: option }));
        setCurrentStep('company');
        addBotMessage({
          content: "Almost there! What company are you from?"
        });
        break;

      case 'company':
        setMeetingInfo(prev => ({ ...prev, company: option }));
        setCurrentStep('confirmation');
        addBotMessage({
          content: `Great! I'll have our team reach out to schedule a meeting. Here's what I have:
          \n- Name: ${meetingInfo.name}
          \n- Email: ${meetingInfo.email}
          \n- Company: ${option}
          \n- Purpose: ${meetingInfo.purpose}
          \nIs this correct?`,
          options: ["Yes, that's correct", "No, I need to make changes"]
        });
        break;

      case 'confirmation':
        if (option === "Yes, that's correct") {
          addBotMessage({
            content: "Perfect! Our team will reach out to you within 24 hours to schedule the meeting. Is there anything else I can help you with?",
            options: ["Schedule Another Meeting", "Learn About Services", "No, thanks!"]
          });
          setCurrentStep('welcome');
          setMeetingInfo({});
        } else {
          setCurrentStep('welcome');
          setMeetingInfo({});
          addBotMessage({
            content: "No problem! Let's start over. What would you like to do?",
            options: [
              "Schedule a Meeting",
              "Learn About Services",
              "Get a Quote",
              "Technical Consultation"
            ]
          });
        }
        break;

      default:
        addBotMessage({
          content: "I'm not sure how to help with that. Would you like to try something else?",
          options: [
            "Schedule a Meeting",
            "Learn About Services",
            "Get a Quote",
            "Technical Consultation"
          ]
        });
        setCurrentStep('welcome');
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    addMessage({ type: 'user', content: inputValue });
    handleOptionSelect(inputValue);
    setInputValue('');
  };

  return (
    <div className="contact-page">
      <div className="contact-layout">
        <div className="sidebar">
          <div className="sidebar-section">
            <h2>Common Questions</h2>
            <div className="question-categories">
              {commonQuestions.map((category, idx) => (
                <div key={idx} className="question-category">
                  <h3>{category.category}</h3>
                  <ul>
                    {category.questions.map((question, qIdx) => (
                      <li 
                        key={qIdx}
                        onClick={() => handleOptionSelect(question)}
                        className="quick-question"
                      >
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="sidebar-section trust-indicators">
            <h2>Security & Trust</h2>
            <div className="security-badges">
              {securityBadges.map((badge, idx) => (
                <div key={idx} className="security-badge">
                  <span className="badge-icon">{badge.icon}</span>
                  <div className="badge-content">
                    <h4>{badge.name}</h4>
                    <p>{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-section contact-info">
            <h2>Direct Contact</h2>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="method-icon">📧</span>
                <p>support@4runrtech.com</p>
              </div>
              <div className="contact-method">
                <span className="method-icon">📞</span>
                <p>Available 24/7</p>
              </div>
              <div className="contact-method">
                <span className="method-icon">🌎</span>
                <p>Global Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="chat-container">
          <div className="chat-header">
            <div className="chat-header-content">
              <div className="header-main">
                <h1>4Runr AI Assistant</h1>
                <div className="status-badge">
                  <span className="status-dot"></span>
                  Available Now
                </div>
              </div>
              <p>Secure Business Communication Platform</p>
            </div>
          </div>

          <div className="messages-container">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.type === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {message.type === 'bot' && (
                  <div className="bot-avatar">
                    <span>🤖</span>
                  </div>
                )}
                <div className="message-content">
                  {message.content.split('\n').map((line, i) => (
                    <p key={i}>{line.trim()}</p>
                  ))}
                  {message.options && (
                    <div className="message-options">
                      {message.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleOptionSelect(option)}
                          className="option-button"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="message-timestamp">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot-message typing">
                <div className="bot-avatar">
                  <span>🤖</span>
                </div>
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-footer">
            <div className="security-notice">
              <span className="security-icon">🔒</span>
              <p>End-to-end encrypted conversation</p>
            </div>
            <form onSubmit={handleSendMessage} className="chat-input-container">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message or click a suggested question..."
                className="chat-input"
              />
              <button type="submit" className="send-button" disabled={!inputValue.trim()}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9" strokeLinejoin="round" strokeLinecap="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 
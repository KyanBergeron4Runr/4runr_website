'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiHome, FiBox, FiAward, FiMessageSquare, FiSend, FiDownload, FiRefreshCw } from 'react-icons/fi';
import { RiShieldCheckLine, RiCustomerService2Line, RiQuestionLine } from 'react-icons/ri';
import '@/app/styles/contact.css';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  options?: string[];
}

const commonQuestions = [
  {
    category: 'Services',
    icon: <FiBox />,
    questions: [
      'What services do you offer?',
      'How much do your services cost?',
      'Do you offer custom solutions?',
      'What industries do you serve?'
    ]
  },
  {
    category: 'Scheduling',
    icon: <FiMessageSquare />,
    questions: [
      'Can we schedule a consultation?',
      'What is your availability?',
      'How long are meetings typically?',
      'Do you offer virtual meetings?'
    ]
  },
  {
    category: 'Technical',
    icon: <RiCustomerService2Line />,
    questions: [
      'What technologies do you use?',
      'Can you handle large-scale projects?',
      'Do you provide ongoing support?',
      'What is your development process?'
    ]
  }
];

const securityBadges = [
  {
    icon: <RiShieldCheckLine />,
    title: 'End-to-End Encryption',
    description: 'Your conversations are secure and private'
  },
  {
    icon: <FiAward />,
    title: 'Certified Experts',
    description: 'Our team is certified in modern web technologies'
  }
];

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hi there! 👋 I\'m your AI assistant. How can I help you today?',
      timestamp: new Date(),
      options: [
        'Schedule a Meeting',
        'Learn About Services',
        'Get a Quote',
        'Technical Consultation'
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'Thanks for your message! I\'ll help you with that. Would you like to:',
        timestamp: new Date(),
        options: ['Schedule a call', 'Learn more', 'Talk to a human']
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleOptionSelect = (option: string) => {
    handleSendMessage(option);
  };

  return (
    <div className="app-container">
      <nav className="app-nav">
        <Link href="/" className="nav-logo">
          <span className="logo-text">4Runr</span>
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">
            <FiHome /> Home
          </Link>
          <Link href="/services" className="nav-link">
            <FiBox /> Services
          </Link>
          <Link href="/about" className="nav-link">
            <RiQuestionLine /> About
          </Link>
        </div>
      </nav>

      <div className="app-content">
        <aside className="app-sidebar">
          <div className="app-sidebar-header">
            <h2>Welcome to 4Runr Support</h2>
            <p>Get quick answers or schedule a meeting with our team</p>
          </div>

          <div className="sidebar-section">
            <div className="section-header">
              <span className="section-icon"><FiMessageSquare /></span>
              <h3>Common Questions</h3>
            </div>
            {commonQuestions.map((category, index) => (
              <div key={index} className="question-category">
                <h4>
                  <span className="category-icon">{category.icon}</span>
                  {category.category}
                </h4>
                <div className="message-options">
                  {category.questions.map((question, qIndex) => (
                    <button
                      key={qIndex}
                      className="option-button"
                      onClick={() => handleOptionSelect(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="sidebar-section">
            <div className="section-header">
              <span className="section-icon"><RiShieldCheckLine /></span>
              <h3>Security & Trust</h3>
            </div>
            {securityBadges.map((badge, index) => (
              <div key={index} className="security-badge">
                <span className="badge-icon">{badge.icon}</span>
                <div className="badge-content">
                  <h4>{badge.title}</h4>
                  <p>{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="app-main">
          <div className="chat-container">
            <div className="chat-header">
              <div className="header-main">
                <div className="header-left">
                  <div className="bot-avatar">
                    <RiCustomerService2Line />
                  </div>
                  <div className="header-info">
                    <h1>4Runr Assistant</h1>
                    <p className="header-subtitle">Typically replies in a few minutes</p>
                  </div>
                </div>
                <div className="header-actions">
                  <button className="action-button" title="New Chat">
                    <FiRefreshCw />
                  </button>
                  <button className="action-button" title="Download Chat">
                    <FiDownload />
                  </button>
                </div>
              </div>
            </div>

            <div className="messages-container">
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.type}-message`}>
                  {message.type === 'bot' && (
                    <div className="bot-avatar">
                      <RiCustomerService2Line />
                    </div>
                  )}
                  <div className="message-bubble">
                    <div className="message-content">{message.content}</div>
                    {message.options && (
                      <div className="message-options">
                        {message.options.map((option, index) => (
                          <button
                            key={index}
                            className="option-button"
                            onClick={() => handleOptionSelect(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message bot-message">
                  <div className="bot-avatar">
                    <RiCustomerService2Line />
                  </div>
                  <div className="message-bubble">
                    <div className="message-content">Typing...</div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="chat-footer">
              <div className="security-notice">
                <RiShieldCheckLine />
                <span>End-to-end encrypted conversation</span>
              </div>
              <div className="chat-input-container">
                <input
                  type="text"
                  className="chat-input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Type your message here..."
                />
                <button
                  className="send-button"
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                >
                  <FiSend />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 
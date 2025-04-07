'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@/app/styles/chat-interface.css';

interface Message {
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  options?: string[];
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [meetingInfo, setMeetingInfo] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    preferredTime: ''
  });

  useEffect(() => {
    // Add initial welcome message
    setMessages([{
      type: 'bot',
      content: "Hello! I'm your 4Runr AI Assistant. I'll help you schedule a meeting with our team. Would you like to:",
      options: [
        "Schedule a Discovery Call",
        "Learn More About Our Services",
        "Get a Custom Quote",
        "Technical Consultation"
      ],
      timestamp: new Date()
    }]);
  }, []);

  const handleOptionSelect = async (option: string) => {
    // Add user's selection as a message
    const userMessage: Message = {
      type: 'user',
      content: option,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot response based on selection
    setTimeout(() => {
      let botResponse: Message;
      switch (option) {
        case "Schedule a Discovery Call":
          botResponse = {
            type: 'bot',
            content: "Great! Let's schedule a discovery call. First, could you tell me your name?",
            timestamp: new Date()
          };
          break;
        case "Learn More About Our Services":
          botResponse = {
            type: 'bot',
            content: "I'd be happy to tell you about our services. We specialize in:\n\n" +
              "• Custom AI Solutions\n" +
              "• Process Automation\n" +
              "• Data Analytics\n" +
              "• Machine Learning Infrastructure\n\n" +
              "Which area interests you the most?",
            options: [
              "Custom AI Solutions",
              "Process Automation",
              "Data Analytics",
              "Machine Learning Infrastructure"
            ],
            timestamp: new Date()
          };
          break;
        case "Get a Custom Quote":
          botResponse = {
            type: 'bot',
            content: "I'll help you get a custom quote. Could you tell me about your project or business needs?",
            timestamp: new Date()
          };
          break;
        case "Technical Consultation":
          botResponse = {
            type: 'bot',
            content: "For technical consultations, we'll need some information about your current infrastructure. Could you share your name and company first?",
            timestamp: new Date()
          };
          break;
        default:
          botResponse = {
            type: 'bot',
            content: "Could you tell me more about what you're looking for?",
            timestamp: new Date()
          };
      }
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: "Thank you for sharing that. Would you like to schedule a meeting with our team to discuss this further?",
        options: ["Yes, schedule a meeting", "No, just exploring"],
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const quickLinks = [
    { icon: '📅', text: 'Schedule Meeting', action: () => handleOptionSelect("Schedule a Discovery Call") },
    { icon: '💡', text: 'Our Services', action: () => handleOptionSelect("Learn More About Our Services") },
    { icon: '💰', text: 'Get Quote', action: () => handleOptionSelect("Get a Custom Quote") },
    { icon: '🔧', text: 'Tech Consult', action: () => handleOptionSelect("Technical Consultation") },
  ];

  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="logo-container">
          <Image
            src="https://cdn.shopify.com/s/files/1/0891/9610/1908/files/4runr_4.png?v=1741367535"
            alt="4Runr Logo"
            width={200}
            height={60}
            className="logo-image"
          />
        </div>
        <div className="sidebar-section">
          <h3>Quick Actions</h3>
          <ul>
            {quickLinks.map((item, index) => (
              <li key={index} className="quick-link" onClick={item.action}>
                <div className="sidebar-icon">{item.icon}</div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-section">
          <h3>Why Choose 4Runr?</h3>
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <div className="feature-text">
                <h4>Tailored Solutions</h4>
                <p>Custom AI solutions for your unique needs</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div className="feature-text">
                <h4>Rapid Implementation</h4>
                <p>Quick deployment with immediate impact</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <div className="feature-text">
                <h4>Enterprise Security</h4>
                <p>Bank-grade security for your data</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="chat-interface">
        <div className="chatbot-header">
          <div className="header-content">
            <h1>Schedule a Meeting</h1>
            <p>Let's discuss how we can help transform your business</p>
          </div>
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span>Online</span>
          </div>
        </div>

        <div className="chat-container">
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}-message animate__animated animate__fadeInUp`}>
                <div className="message-header">
                  <div className="bot-avatar" style={{
                    background: message.type === 'user'
                      ? 'linear-gradient(135deg, #483D8B, #4B0082)'
                      : 'linear-gradient(135deg, #7366ff, #a179ff)'
                  }}>
                    {message.type === 'user' ? 'You' : 'AI'}
                  </div>
                  <div className="message-info">
                    <span className="message-sender">{message.type === 'user' ? 'You' : '4Runr AI'}</span>
                    <span className="message-time">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
                <div className="message-content">{message.content}</div>
                {message.options && (
                  <div className="message-options">
                    {message.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        className="option-button"
                        onClick={() => handleOptionSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="typing-indicator animate__animated animate__fadeIn">
                <div className="message-header">
                  <div className="bot-avatar">AI</div>
                  <div className="message-info">
                    <span className="message-sender">4Runr AI</span>
                    <span className="message-time">Typing</span>
                  </div>
                </div>
                <div className="typing-dots">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            )}
          </div>

          <div className="chatbot-input">
            <div className="input-container">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Type your message here..."
                rows={1}
              />
              <button onClick={handleSendMessage} className="send-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
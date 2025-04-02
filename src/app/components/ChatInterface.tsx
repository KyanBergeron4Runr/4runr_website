'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@/app/styles/chat-interface.css';

export default function ChatInterface() {
  const [messages, setMessages] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Add initial welcome message
    setMessages([{
      type: 'bot',
      content: 'Hello! I\'m your dedicated 4Runr AI Assistant. I can help you learn about our AI infrastructure and automation services, schedule consultations, explore our solutions, and answer any questions you have about how 4Runr can transform your business operations. How can I assist you today?',
      timestamp: new Date()
    }]);
  }, []);

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

    try {
      const response = await fetch('https://ky4runr.app.n8n.cloud/webhook/e1eb39f3-30e5-4f4f-9342-ff5e0b8b03d4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          userId: getUserId(),
          timestamp: new Date().toISOString(),
          pageUrl: window.location.href,
          pageName: document.title
        })
      });

      const data = await response.text();
      let responseText;
      try {
        const jsonData = JSON.parse(data);
        responseText = jsonData.response || jsonData.message || jsonData.text || jsonData.content || JSON.stringify(jsonData);
      } catch {
        responseText = data;
      }

      setIsTyping(false);
      setMessages(prev => [...prev, {
        type: 'bot',
        content: responseText,
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error('Error:', error);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "I'm sorry, I'm having trouble connecting to my systems right now. Please try again in a moment or contact us directly at contact@4runr.ai for immediate assistance.",
        timestamp: new Date()
      }]);
    }
  };

  const getUserId = () => {
    if (typeof window === 'undefined') return 'default_user';
    
    let userId = localStorage.getItem('chatbot_user_id');
    if (!userId) {
      userId = 'user_' + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('chatbot_user_id', userId);
    }
    return userId;
  };

  const quickQuestions = [
    { icon: '📅', text: 'Schedule a Meeting', question: "I'd like to schedule a meeting with a 4Runr consultant" },
    { icon: '🚀', text: '4Runr Services', question: "What services does 4Runr offer?" },
    { icon: '🤖', text: 'AI Project Help', question: "I need help with my AI project" },
    { icon: '💰', text: 'Pricing Information', question: "Tell me about your pricing" },
    { icon: '📈', text: 'Process Automation', question: "How can 4Runr automate my business processes?" },
    { icon: '📝', text: 'Examples', question: "I'd like to see some examples of your work" },
    { icon: '⚙️', text: 'Automation Solutions', question: "Tell me about your automation solutions" },
    { icon: '🏗️', text: 'AI Infrastructure', question: "How does 4Runr build AI infrastructure?" }
  ];

  return (
    <div className="main-container" id="4runr-chatbot">
      <div className="sidebar">
        <div className="logo-container">
          <Image
            src="https://cdn.shopify.com/s/files/1/0891/9610/1908/files/4runr_4.png?v=1741367535"
            alt="4Runr Logo"
            className="logo-image"
            width={200}
            height={60}
          />
        </div>
        <div className="sidebar-section">
          <h3>Capabilities</h3>
          <ul>
            {quickQuestions.map((item, index) => (
              <li
                key={index}
                className="quick-question"
                onClick={() => {
                  setInputValue(item.question);
                  handleSendMessage();
                }}
              >
                <div className="sidebar-icon">{item.icon}</div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-section">
          <h3>Security</h3>
          <div className="security-badge">
            <div className="security-icon">🔒</div>
            <span>Secure & Confidential</span>
          </div>
          <p className="fine-print">
            All conversations are encrypted and your information is kept strictly confidential. We adhere to
            industry-leading security standards to protect your business data.
          </p>

          <div className="about-section">
            <h3>About 4Runr</h3>
            <p>
              We specialize in building AI and automation infrastructure that powers modern businesses. Our team
              delivers custom solutions to streamline operations, enhance productivity, and transform data into
              actionable insights.
            </p>
          </div>
        </div>
      </div>

      <div className="chat-interface">
        <div className="chatbot-header">
          <div className="header-content">
            <h1>4Runr AI Assistant</h1>
            <p>Your guide to AI infrastructure and automation solutions</p>
          </div>
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span>Online</span>
          </div>
        </div>

        <div className="chat-container">
          <div className="chatbot-messages">
            <div className="welcome-container">
              <div className="welcome-icon animate__animated animate__fadeIn">
                {/* SVG icon */}
              </div>
              <h2 className="animate__animated animate__fadeIn animate__delay-1s">Welcome to 4Runr.</h2>
              <p className="animate__animated animate__fadeIn animate__delay-2s">
                Your partner in AI infrastructure and automation solutions.
              </p>
            </div>

            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.type}-message animate__animated animate__fadeInUp`}
              >
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
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
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
              <div className="input-buttons">
                <button onClick={handleSendMessage} className="btn-send">
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
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
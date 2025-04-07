'use client';

import { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiSend, FiBox, FiAward } from 'react-icons/fi';
import { RiShieldCheckLine, RiCustomerService2Line } from 'react-icons/ri';
import '@/app/styles/contact.css';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  options?: string[];
}

// Webhook URLs
const CONTACT_WEBHOOK_URL = 'https://n8n-mcp-u37169.vm.elestio.app/webhook/e1eb39f3-30e5-4f4f-9342-ff5e0b8b03d4';

const commonQuestions = [
  {
    category: 'Services',
    icon: <FiBox />,
    questions: [
      'What services do you offer?',
      'How much do your services cost?',
      'Do you offer custom solutions?',
      'What is your turnaround time?'
    ]
  },
  {
    category: 'Support',
    icon: <RiCustomerService2Line />,
    questions: [
      'How can I get technical support?',
      'What are your support hours?',
      'Do you offer emergency support?',
      'How do I report an issue?'
    ]
  },
  {
    category: 'Security',
    icon: <RiShieldCheckLine />,
    questions: [
      'How do you protect my data?',
      'Are your services GDPR compliant?',
      'What security certifications do you have?',
      'How often do you backup data?'
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

  const sendToWebhook = async (message: Message, isContactPage: boolean = true) => {
    try {
      const webhookUrl = isContactPage ? CONTACT_WEBHOOK_URL : 'https://hook.us1.make.com/ox6fokjihajrnfoli3d9hbattwxnts2p';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messageId: message.id,
          type: message.type,
          content: message.content,
          timestamp: message.timestamp,
          page: isContactPage ? 'contact' : 'main',
          userAgent: navigator.userAgent,
          timestamp_iso: message.timestamp.toISOString()
        }),
      });

      if (!response.ok) {
        console.error('Failed to send message to webhook:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message to webhook:', error);
    }
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    // Add message to UI
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Send user message to webhook
    await sendToWebhook(newMessage);

    // Simulate bot response with customized options based on user's message
    setTimeout(async () => {
      let responseOptions: string[] = [];
      let responseContent = '';

      if (content === 'Schedule a call') {
        responseContent = 'I can help you schedule a call with our team. When would you prefer?';
        responseOptions = [
          'Morning (9 AM - 12 PM)',
          'Afternoon (1 PM - 5 PM)',
          'Next Business Day'
        ];
      } else if (content === 'Learn About Services') {
        responseContent = 'I\'d be happy to tell you about our services. What would you like to know?';
        responseOptions = [
          'View Service Catalog',
          'Get Pricing Information',
          'Talk to a Specialist'
        ];
      } else if (content === 'Get a Quote') {
        responseContent = 'I can help you get a quote for our services. What type of project are you interested in?';
        responseOptions = [
          'Website Development',
          'Custom Software',
          'Consulting Services',
          'Talk to Sales'
        ];
      } else {
        responseContent = 'Thanks for your message! How would you like to proceed?';
        responseOptions = ['Schedule a call', 'Learn more', 'Talk to a human'];
      }

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: responseContent,
        timestamp: new Date(),
        options: responseOptions
      };

      // Add bot response to UI
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);

      // Send bot response to webhook
      await sendToWebhook(botResponse);
    }, 1000);
  };

  const handleOptionSelect = (option: string) => {
    handleSendMessage(option);
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <aside className="app-sidebar">
          <div className="app-sidebar-header">
            <h2>Welcome to 4Runr Support</h2>
            <p>Get quick answers or schedule a meeting with our team</p>
          </div>

          <div className="sidebar-section">
            <h3 className="section-title">Common Questions</h3>
            <div className="question-categories">
              {commonQuestions.map((category, index) => (
                <details key={index} className="category-dropdown">
                  <summary className="category-header">
                    <span className="category-icon">{category.icon}</span>
                    {category.category}
                  </summary>
                  <div className="category-questions">
                    {category.questions.map((question, qIndex) => (
                      <button
                        key={qIndex}
                        className="quick-question"
                        onClick={() => handleOptionSelect(question)}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </details>
              ))}
            </div>
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
'use client';

import { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiSend, FiBox, FiAward, FiHelpCircle } from 'react-icons/fi';
import { RiShieldCheckLine, RiCustomerService2Line, RiLockLine } from 'react-icons/ri';
import '@/app/styles/contact.css';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  userId?: string;
  sessionId: string;
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
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userId] = useState(() => `user_${Math.random().toString(36).substr(2, 9)}`);
  const [sessionId] = useState(() => `session_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize chat with welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: 'Welcome! How can I help you today?',
      timestamp: new Date(),
      sessionId,
      options: ['Schedule a call', 'Learn About Services', 'Get a Quote']
    };
    setMessages([welcomeMessage]);
    sendToWebhook(welcomeMessage);
  }, []);

  const sendToWebhook = async (message: Message) => {
    try {
      const webhookUrl = CONTACT_WEBHOOK_URL;

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
          userId: userId,
          sessionId: sessionId,
          page: 'contact',
          userAgent: navigator.userAgent,
          timestamp_iso: message.timestamp.toISOString(),
          options: message.options
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
      timestamp: new Date(),
      userId,
      sessionId
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
        responseContent = 'When would you prefer to schedule your call?';
        responseOptions = [
          'Morning (9 AM - 12 PM)',
          'Afternoon (1 PM - 5 PM)',
          'Next Business Day'
        ];
      } else if (content.includes('Morning') || content.includes('Afternoon') || content.includes('Next Business Day')) {
        responseContent = 'Great! Please provide your email address to confirm the scheduling.';
        responseOptions = ['Enter email manually'];
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
      } else if (content.includes('@')) {
        // Email provided
        responseContent = 'Thank you! I\'ve scheduled your call and sent a confirmation email. Is there anything else you need help with?';
        responseOptions = ['Ask another question', 'End chat'];
      } else {
        responseContent = 'Thanks for your message! How would you like to proceed?';
        responseOptions = ['Schedule a call', 'Learn more', 'Get a Quote'];
      }

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: responseContent,
        timestamp: new Date(),
        sessionId,
        options: responseOptions
      };

      // Add bot response to UI
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);

      // Send bot response to webhook
      await sendToWebhook(botResponse);
    }, 1000);
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <>
      <div className="app-container">
        <div className="app-content">
          <aside className="app-sidebar">
            <div className="app-sidebar-header">
              <h2>Welcome to 4Runr Support</h2>
              <p>Get quick answers or schedule a meeting with our team</p>
            </div>

            <div className="sidebar-section">
              <h3 className="section-title">
                <span className="section-icon"><FiHelpCircle /></span>
                Common Questions
              </h3>
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
                          onClick={() => handleQuestionClick(question)}
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

              <div className="messages-container" ref={messagesEndRef}>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${message.type === 'user' ? 'user-message' : 'bot-message'}`}
                  >
                    {message.type === 'bot' && (
                      <div className="bot-avatar">
                        <RiCustomerService2Line />
                      </div>
                    )}
                    <div className="message-bubble">
                      <div className="message-content">{message.content}</div>
                      {message.options && message.options.length > 0 && (
                        <div className="message-options">
                          {message.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              className="option-button"
                              onClick={() => handleQuestionClick(option)}
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
              </div>

              <div className="chat-footer">
                <div className="security-notice">
                  <RiLockLine />
                  End-to-end encrypted conversation
                </div>
                <form className="chat-input-container" onSubmit={(e) => {
                  e.preventDefault();
                  if (inputValue.trim()) {
                    handleSendMessage(inputValue);
                  }
                }}>
                  <input
                    type="text"
                    className="chat-input"
                    placeholder="Type your message here..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                  <button
                    type="submit"
                    className="send-button"
                    disabled={!inputValue.trim()}
                  >
                    <FiSend />
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
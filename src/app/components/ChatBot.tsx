'use client'

import { useEffect, useState, useRef } from 'react'
import '../styles/chatbot.css'
import '../styles/chat-section-updates.css'

interface Message {
  text: string;
  isUser: boolean;
  isError?: boolean;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(`session_${Date.now()}`);
  const hasInitializedRef = useRef(false);

  const scrollToBottom = () => {
    if (messagesContainerRef.current && isUserInteracting) {
      const container = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    // First welcome message
    setTimeout(() => {
      setMessages([
        { text: "Hi there! I'm your 4Runr AI consultant. 👋", isUser: false }
      ]);
    }, 1000);

    // Second welcome message
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I help businesses identify opportunities for AI and automation. What's your biggest operational challenge right now?",
        isUser: false
      }]);
    }, 2500);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isUserInteracting]);

  const handleSend = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setIsLoading(true);
    setIsUserInteracting(true);

    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);

    try {
      const payload = {
        account: {
          id: sessionId.current,
          text: userMessage
        }
      };

      const response = await fetch('https://hook.us1.make.com/ox6fokjihajrnfoli3d9hbattwxnts2p', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        const assistantMessage = data.response || data.message || data.content || data.text;
        
        if (assistantMessage) {
          setMessages(prev => [...prev, { text: assistantMessage, isUser: false }]);
        } else {
          console.log('Full response data:', data);
          setMessages(prev => [...prev, { text: "Message received.", isUser: false }]);
        }
      } else {
        throw new Error('Invalid response');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        text: 'Unable to process response. Please try again.',
        isUser: false,
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-section">
      <header className="header">
        <h2 className="title">Transform Your Business Challenges into Opportunities</h2>
        <div className="subtitle">
          Chat with our AI assistant to discover how we can automate and optimize your business operations.
        </div>
      </header>

      <div 
        className="chat-container"
        onMouseEnter={() => setIsUserInteracting(true)}
        onMouseLeave={() => setIsUserInteracting(false)}
        onClick={() => setIsUserInteracting(true)}
        onFocus={() => setIsUserInteracting(true)}
      >
        <div className="messages" id="messages" ref={messagesContainerRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isUser ? 'user-message' : 'bot-message'} ${message.isError ? 'error-message' : ''}`}
            >
              <div className="message-bubble">
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message bot-message typing">
              <div className="message-bubble">
                <div className="typing-dots">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="input-area">
          <input
            type="text"
            className="message-input"
            placeholder="Type your message here..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onFocus={() => setIsUserInteracting(true)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            disabled={isLoading}
          />
          <button
            className="send-button"
            onClick={handleSend}
            disabled={isLoading}
          >
            ➜
          </button>
        </div>
      </div>

      <div className="bottom-cta">
        <div className="bottom-text">
          Let's collaborate to create real solutions for your business. We're ready to listen and build with you.
        </div>
        <a href="https://4runrtech.com/pages/contact" className="cta-button" target="_blank">
          Start Building Together
        </a>
      </div>
    </div>
  );
} 
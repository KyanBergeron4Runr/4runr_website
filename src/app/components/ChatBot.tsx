'use client'

import { useEffect, useRef, useState } from 'react'
import '../styles/chatbot.css'
import '../styles/chat-section-updates.css'
import { useInView } from 'react-intersection-observer'

interface Message {
  text: string;
  isUser: boolean;
  isError?: boolean;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(`session_${Date.now()}`);
  const hasInitializedRef = useRef(false);

  // Animation states
  const [isFirstMessageVisible, setFirstMessageVisible] = useState(false);
  const [isSecondMessageVisible, setSecondMessageVisible] = useState(false);
  const [isTypingFirst, setTypingFirst] = useState(false);
  const [isTypingSecond, setTypingSecond] = useState(false);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Combine refs
  const setRefs = (node: HTMLDivElement | null) => {
    messagesContainerRef.current = node;
    inViewRef(node);
  };

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (inView && !hasInitializedRef.current) {
      hasInitializedRef.current = true;
      
      // Start with first typing dots
      setTypingFirst(true);
      
      // Show first message after typing dots animation
      setTimeout(() => {
        setTypingFirst(false);
        setTimeout(() => {
          setFirstMessageVisible(true);
          
          // Start second typing dots after a delay
          setTimeout(() => {
            setTypingSecond(true);
            
            // Show second message after typing dots animation
            setTimeout(() => {
              setTypingSecond(false);
              setTimeout(() => {
                setSecondMessageVisible(true);
              }, 300); // Small delay before showing message
            }, 2000); // Show typing dots for 2 seconds
          }, 800); // Wait before starting second typing
        }, 300); // Small delay before showing message
      }, 2000); // Show typing dots for 2 seconds
    }
  }, [inView]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isFirstMessageVisible, isSecondMessageVisible]);

  const handleSend = async () => {
    if (!inputMessage.trim() || isLoading) return;

    setIsUserInteracting(true);
    const userMessage = inputMessage.trim();
    setInputMessage('');
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setIsLoading(true);

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
      
      <div className="chat-container">
        <div className="messages" id="messages" ref={setRefs}>
          {/* Initial messages */}
          {!isUserInteracting && (
            <>
              {isTypingFirst && (
                <div className="message bot-message">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              
              <div className={`message bot-message ${isFirstMessageVisible ? 'visible' : ''}`}>
                <div className={`message-bubble ${isFirstMessageVisible ? 'visible' : ''}`}>
                  Hi there! I'm your 4Runr AI consultant. 👋
                </div>
              </div>

              {isTypingSecond && (
                <div className="message bot-message">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              
              <div className={`message bot-message ${isSecondMessageVisible ? 'visible' : ''}`}>
                <div className={`message-bubble ${isSecondMessageVisible ? 'visible' : ''}`}>
                  I help businesses identify opportunities for AI and automation. What's your biggest operational challenge right now?
                </div>
              </div>
            </>
          )}

          {/* User interaction messages */}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isUser ? 'user-message' : 'bot-message'} ${message.isError ? 'error-message' : ''} visible`}
            >
              <div className="message-bubble visible">
                {message.text}
              </div>
            </div>
          ))}

          {/* Loading indicator for user interactions */}
          {isLoading && (
            <div className="message bot-message">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
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
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="send-button" onClick={handleSend}>➜</button>
        </div>
      </div>

      <div className="bottom-cta">
        <div className="bottom-text">
          Let's collaborate to create real solutions for your business. We're ready to listen and build with you.
        </div>
        <a
          href="https://4runrtech.com/pages/contact"
          className="cta-button"
          target="_blank"
        >
          Start Building Together
        </a>
      </div>
    </div>
  );
};

export default ChatBot; 
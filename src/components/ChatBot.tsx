
import React, { useState, useEffect, useRef } from 'react';
import ChatMessage, { TypingIndicator } from './ChatMessage';
import ChatInput from './ChatInput';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { findMatchingSymptom } from '@/utils/symptomMapping';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const initialGreeting = "Hello! I'm MediBot, your AI medical assistant. How can I help you today? You can tell me about your symptoms or ask health-related questions.";

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: initialGreeting, isUser: false, timestamp: new Date() }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to generate bot response based on user input
  const generateResponse = (userInput: string): string => {
    // Try to find a matching symptom in our mapping
    const matchedSymptom = findMatchingSymptom(userInput);
    
    if (matchedSymptom) {
      if (matchedSymptom.condition && matchedSymptom.advice) {
        return `${matchedSymptom.condition} ${matchedSymptom.advice}`;
      } else if (matchedSymptom.advice) {
        return matchedSymptom.advice;
      } else {
        return matchedSymptom.response;
      }
    }
    
    // Default responses if no match is found
    const defaultResponses = [
      "I'm not sure I understand. Could you describe your symptoms in more detail?",
      "Can you tell me more about what you're experiencing?",
      "To better assist you, please provide more specific details about your symptoms.",
      "I don't have enough information yet. Could you elaborate on your symptoms?",
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  // Handle sending a new message
  const handleSendMessage = (message: string) => {
    // Add user message
    const userMessage: Message = {
      text: message,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    // Simulate AI response with a delay
    setTimeout(() => {
      const botResponse: Message = {
        text: generateResponse(message),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500); // Simulated typing delay
  };

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Check if scroll button should be visible
  useEffect(() => {
    const handleScroll = () => {
      if (!chatContainerRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      const isScrolledUp = scrollHeight - scrollTop - clientHeight > 100;
      setShowScrollButton(isScrolledUp);
    };
    
    const container = chatContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Scroll to bottom function
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col h-full">
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-4"
        ref={chatContainerRef}
      >
        {messages.map((message, index) => (
          <ChatMessage 
            key={index}
            message={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        <TypingIndicator visible={isTyping} />
        <div ref={messagesEndRef}></div>
        
        {/* Scroll to bottom button */}
        {showScrollButton && (
          <Button
            variant="outline" 
            size="icon"
            className="fixed bottom-28 right-8 rounded-full shadow-md"
            onClick={scrollToBottom}
          >
            <ArrowDown className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      <div className="p-4 border-t">
        <ChatInput 
          onSendMessage={handleSendMessage} 
          isTyping={isTyping}
        />
      </div>
    </div>
  );
};

export default ChatBot;

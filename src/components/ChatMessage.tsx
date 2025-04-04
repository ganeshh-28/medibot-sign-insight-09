
import React from 'react';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp }) => {
  // Format timestamp to show only hours and minutes
  const formattedTime = timestamp.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  return (
    <div className={`chat-message-container ${isUser ? 'items-end' : 'items-start'}`}>
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
        {!isUser && <Bot className="h-4 w-4" />}
        {isUser ? 'You' : 'MediBot'}
        <span className="text-gray-400">{formattedTime}</span>
      </div>
      <div className={isUser ? 'user-message' : 'bot-message'}>
        {message}
      </div>
    </div>
  );
};

export interface TypingIndicatorProps {
  visible: boolean;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ visible }) => {
  if (!visible) return null;
  
  return (
    <div className="chat-message-container items-start">
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
        <Bot className="h-4 w-4" />
        MediBot
      </div>
      <div className="bot-message">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;


import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Mic, Video, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ChatbotPreview: React.FC = () => {
  const [message, setMessage] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  // Simulate typing effect for welcome message
  useEffect(() => {
    const welcomeMessage = "Hi there! How can I assist you today?";
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= welcomeMessage.length) {
        setMessage(welcomeMessage.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);
  
  return (
    <Card className="shadow-lg border-2 border-medical-light">
      <CardContent className="p-0">
        <div className="bg-medical-primary text-white p-3 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            <span className="font-medium">MediBot Assistant</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 bg-green-400 rounded-full"></span>
            <span className="text-xs">Online</span>
          </div>
        </div>
        
        <div className="p-4 h-40 bg-white overflow-y-auto flex flex-col">
          <div className="bg-medical-light text-medical-text p-3 rounded-lg self-start max-w-[80%] mb-3">
            {message}{showCursor && <span className="inline-block w-2 h-4 bg-medical-primary ml-0.5"></span>}
          </div>
          
          <div className="mt-auto flex flex-col gap-2">
            <div className="text-xs text-center text-gray-500 mb-2">
              All your conversations are confidential and secure with our platform.
            </div>
            <div className="flex gap-2 justify-center">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <MessageSquare className="h-3 w-3" />
                <span className="text-xs">Text</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Mic className="h-3 w-3" />
                <span className="text-xs">Voice</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Video className="h-3 w-3" />
                <span className="text-xs">Sign</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-b-lg flex justify-center">
          <Button asChild size="lg" className="w-full max-w-xs">
            <Link to="/chat" className="flex items-center justify-center">
              Start Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatbotPreview;

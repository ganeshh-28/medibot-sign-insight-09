import React, { useState, useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useConsultation } from '@/context/ConsultationContext';
import { Send, Upload, Video, VideoOff, HandMetal } from 'lucide-react';

interface ConsultationInputProps {
  userRole: 'doctor' | 'patient';
}

const ConsultationInput: React.FC<ConsultationInputProps> = ({ userRole }) => {
  const { state, sendMessage, uploadFile, toggleCamera } = useConsultation();
  const [messageText, setMessageText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDetectingSign, setIsDetectingSign] = useState(false);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      sendMessage(messageText, userRole);
      setMessageText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      uploadFile(file, userRole);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSignDetection = () => {
    setIsDetectingSign(true);
    
    setTimeout(() => {
      sendMessage("I am experiencing fever", userRole, false, true);
      setIsDetectingSign(false);
    }, 2000);
  };

  return (
    <div className="border rounded-lg p-3 bg-card">
      <div className="flex mb-3">
        {userRole === 'doctor' && (
          <Button 
            variant={isListening ? "default" : "outline"}
            size="sm"
            className="mr-2"
            onClick={toggleListening}
            disabled={!isSupported}
          >
            <Mic size={16} className="mr-1" />
            {isListening ? "Speaking..." : "Speak"}
          </Button>
        )}
        
        <Button 
          variant={state.isCameraActive ? "default" : "outline"}
          size="sm"
          className="mr-2"
          onClick={toggleCamera}
        >
          {state.isCameraActive ? <VideoOff size={16} className="mr-1" /> : <Video size={16} className="mr-1" />}
          {state.isCameraActive ? "Hide Video" : "Show Video"}
        </Button>
        
        {userRole === 'patient' && (
          <Button 
            variant={isDetectingSign ? "default" : "outline"}
            size="sm"
            onClick={handleSignDetection}
            disabled={isDetectingSign}
          >
            <HandMetal size={16} className="mr-1" />
            {isDetectingSign ? "Detecting..." : "Detect Sign"}
          </Button>
        )}
      </div>
      
      <div className="flex gap-2">
        <Textarea
          placeholder={`Type your message as ${userRole}...`}
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="min-h-[80px] resize-none"
        />
        
        <div className="flex flex-col gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={triggerFileInput}
            className="flex-shrink-0"
          >
            <Upload size={18} />
          </Button>
          
          <Button 
            variant="default" 
            size="icon" 
            onClick={handleSendMessage}
            disabled={!messageText.trim()}
            className="flex-shrink-0"
          >
            <Send size={18} />
          </Button>
        </div>
      </div>
      
      <input 
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        className="hidden"
      />
      
      {userRole === 'doctor' && isListening && (
        <div className="mt-2 text-xs text-muted-foreground">
          <span className="text-green-500">●</span> Speech recognition is active
        </div>
      )}
      
      {userRole === 'patient' && isDetectingSign && (
        <div className="mt-2 text-xs text-muted-foreground">
          <span className="text-yellow-500">●</span> Sign language detection active...
        </div>
      )}
    </div>
  );
};

export default ConsultationInput;

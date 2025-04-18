import React, { useState, useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useConsultation } from '@/context/ConsultationContext';
import { Send, Upload, Mic, MicOff, Video, VideoOff, HandMetal } from 'lucide-react';

interface ConsultationInputProps {
  userRole: 'doctor' | 'patient';
}

const ConsultationInput: React.FC<ConsultationInputProps> = ({ userRole }) => {
  const { state, sendMessage, uploadFile, toggleMic, toggleCamera } = useConsultation();
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
    
    // Simulate sign language detection with predefined health-related messages
    const healthSigns = [
      "I am experiencing fever",
      "I am having stomach pain",
      "I am having headache"
    ];
    
    setTimeout(() => {
      const detectedSign = healthSigns[Math.floor(Math.random() * healthSigns.length)];
      sendMessage(detectedSign, userRole, false, true);
      setIsDetectingSign(false);
    }, 2000);
  };

  return (
    <div className="border rounded-lg p-3 bg-card">
      <div className="flex mb-3">
        <Button 
          variant={state.isMicActive ? "default" : "outline"}
          size="sm"
          className="mr-2"
          onClick={toggleMic}
        >
          {state.isMicActive ? <MicOff size={16} className="mr-1" /> : <Mic size={16} className="mr-1" />}
          {state.isMicActive ? "Mute" : "Unmute"}
        </Button>
        
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
      
      {userRole === 'doctor' && state.isMicActive && (
        <div className="mt-2 text-xs text-muted-foreground">
          <span className="text-green-500">●</span> Voice transcription is active
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

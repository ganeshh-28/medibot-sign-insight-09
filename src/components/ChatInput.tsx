
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mic, MicOff, Send, Video, VideoOff } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isTyping: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isTyping }) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isVideoMode, setIsVideoMode] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isTyping) {
      onSendMessage(message);
      setMessage('');
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [message]);

  // Toggle voice recording (simulated)
  const toggleVoiceRecording = () => {
    if (isVideoMode) {
      // Cannot be in both modes at once
      return;
    }

    setIsRecording(!isRecording);
    
    if (!isRecording) {
      // This would actually start voice recognition in a real implementation
      // For this demo, we'll just show a message after a delay
      setTimeout(() => {
        setMessage(prev => prev + (prev ? ' ' : '') + "I have a headache");
        setIsRecording(false);
      }, 2000);
    }
  };

  // Toggle video/sign language mode (simulated)
  const toggleVideoMode = () => {
    if (isRecording) {
      // Cannot be in both modes at once
      return;
    }

    setIsVideoMode(!isVideoMode);
    
    if (!isVideoMode) {
      // This would actually start video/sign language recognition
      // For this demo, we'll just show a message after a delay
      setTimeout(() => {
        setMessage(prev => prev + (prev ? ' ' : '') + "I need rest");
        setIsVideoMode(false);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      {isVideoMode && (
        <div className="bg-black/10 rounded-lg p-4 text-center mb-2">
          <p className="text-sm">Sign language detection active...</p>
          <p className="text-xs text-gray-500 mt-1">(This would show a camera feed in a real implementation)</p>
        </div>
      )}
      
      <div className="relative">
        <Textarea
          ref={textAreaRef}
          placeholder="Type your symptoms or questions here..."
          className="pr-24 min-h-[60px] resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          disabled={isTyping || isRecording || isVideoMode}
        />
        <div className="absolute bottom-2 right-2 flex gap-1">
          <Button
            type="button"
            size="icon"
            variant={isRecording ? "default" : "outline"}
            onClick={toggleVoiceRecording}
            className="h-8 w-8"
            title={isRecording ? "Stop recording" : "Start voice input"}
          >
            {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button
            type="button"
            size="icon"
            variant={isVideoMode ? "default" : "outline"}
            onClick={toggleVideoMode}
            className="h-8 w-8"
            title={isVideoMode ? "Stop video" : "Start sign language detection"}
          >
            {isVideoMode ? <VideoOff className="h-4 w-4" /> : <Video className="h-4 w-4" />}
          </Button>
          <Button
            type="submit"
            size="icon"
            className="h-8 w-8"
            disabled={!message.trim() || isTyping || isRecording || isVideoMode}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="text-xs text-gray-500 text-center">
        {isRecording && "Voice recording active... (speak clearly)"}
        {isVideoMode && "Sign language detection active..."}
        {!isRecording && !isVideoMode && "Type your message or use voice/sign language input"}
      </div>
    </form>
  );
};

export default ChatInput;

import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message, ConsultationState, FileAttachment } from '@/types/consultation';

interface ConsultationContextType {
  state: ConsultationState;
  sendMessage: (text: string, sender: 'doctor' | 'patient' | 'system', isTranscript?: boolean, isSignLanguage?: boolean) => void;
  uploadFile: (file: File, sender: 'doctor' | 'patient') => void;
  toggleMic: () => void;
  toggleCamera: () => void;
  connect: () => void;
  disconnect: () => void;
}

const initialState: ConsultationState = {
  messages: [],
  isConnected: false,
  isMicActive: false,
  isCameraActive: true,
};

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error('useConsultation must be used within a ConsultationProvider');
  }
  return context;
};

export const ConsultationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ConsultationState>(initialState);

  const sendMessage = (
    text: string, 
    sender: 'doctor' | 'patient' | 'system',
    isTranscript = false,
    isSignLanguage = false
  ) => {
    const newMessage: Message = {
      id: uuidv4(),
      text,
      sender,
      timestamp: new Date(),
      isTranscript,
      isSignLanguage,
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));
  };

  const uploadFile = (file: File, sender: 'doctor' | 'patient') => {
    const fakeUrl = URL.createObjectURL(file);
    
    const fileAttachment: FileAttachment = {
      name: file.name,
      size: file.size,
      url: fakeUrl,
      type: file.type,
    };

    const newMessage: Message = {
      id: uuidv4(),
      text: `Shared a file: ${file.name}`,
      sender,
      timestamp: new Date(),
      fileAttachment,
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));
  };

  const toggleCamera = () => {
    setState(prev => ({
      ...prev,
      isCameraActive: !prev.isCameraActive,
    }));
  };

  const connect = () => {
    setState(prev => ({
      ...prev,
      isConnected: true,
    }));
    
    sendMessage("Consultation has started", "system");
  };

  const disconnect = () => {
    setState(prev => ({
      ...prev,
      isConnected: false,
    }));
    
    sendMessage("Consultation has ended", "system");
  };

  const toggleMic = () => {
    setState(prev => ({
      ...prev,
      isMicActive: !prev.isMicActive,
    }));
  };

  return (
    <ConsultationContext.Provider 
      value={{ 
        state, 
        sendMessage, 
        uploadFile, 
        toggleMic, 
        toggleCamera, 
        connect, 
        disconnect 
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
};


export interface Message {
  id: string;
  text: string;
  sender: 'doctor' | 'patient' | 'system';
  timestamp: Date;
  isTranscript?: boolean;
  isSignLanguage?: boolean;
  fileAttachment?: FileAttachment | null;
}

export interface FileAttachment {
  name: string;
  size: number;
  url: string;
  type: string;
}

export interface ConsultationState {
  messages: Message[];
  isConnected: boolean;
  isMicActive: boolean;
  isCameraActive: boolean;
}
